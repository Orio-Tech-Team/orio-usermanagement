import { HttpException, HttpStatus, Injectable, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, getConnection, Column } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { Permission } from '../menu/entities/permission.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
        @InjectRepository(Permission)
        private readonly permissionRepository: Repository<Permission>,
    ){}

    async create(role : CreateRoleDto){
        const {name , permissions} = role
        const newRole = await this.roleRepository.save(
            this.roleRepository.create({name : name})
        )
        let permissionsData = []
        await permissions.map(permission => {
            let singlePermission = {
                permission : permission.permission_id,
                role: newRole.id
            }
            permissionsData.push(singlePermission)
        })
        console.log(permissionsData)
        await getConnection().
        createQueryBuilder().
        insert().
        into('role_permissions').
        values(permissionsData).
        execute()

        return {...role,id : newRole.id , permissions : permissionsData}
    }

    async findById(roleId : number) : Promise<Role>{
        return await this.roleRepository.findOneOrFail({id:roleId}).catch(error => {
            throw new HttpException({
                message : "Role Not Found"
            },HttpStatus.BAD_REQUEST)
        })
    }
}
