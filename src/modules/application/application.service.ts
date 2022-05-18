import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneException } from 'src/Helper/Exception/findone.exception';
import { UnAuthorizedException } from 'src/Helper/Exception/unauthorized.exception';
import { Repository } from 'typeorm';
import RolePermission from '../role/entities/role-permission.entity';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(Application)
        private readonly applicationRepository : Repository<Application>    
    ){}


    async create(application : CreateApplicationDto){
        return await this.applicationRepository.save(
            this.applicationRepository.create(application)
        )
    }

    async findAll() : Promise<Application[]> {
        return await this.applicationRepository.find({
            relations : ['menu']
        })
    }

    async findById(id : number) : Promise<Application>{
        return await this.applicationRepository.findOneOrFail({
            where : {
                id : id
            },
            relations : ['menu']
        }).catch(error=> {
            throw FindOneException.exception("Application Not Found")
        });
    }

    async findByRole(roleId , applicationTag) {
        return this.applicationRepository.createQueryBuilder('application').
        innerJoinAndSelect('application.menu','menu').
        innerJoinAndSelect('menu.permissions','permissions').
        where(rolepermission => {
            const subQuery = rolepermission.subQuery().
            select("role_permissions.permissionId")
            .from(RolePermission,"role_permissions")
            .where("role_permissions.roleId = :roleId")
            .getQuery();
            return "permissions.id IN " + subQuery
        }).
        andWhere("application.tag= :applicationTag",{applicationTag :applicationTag}).
        setParameter("roleId" , roleId).
        getOneOrFail().catch(error=> {
            throw UnAuthorizedException.exception("You are not authorized for this application")
        });
    }

}
