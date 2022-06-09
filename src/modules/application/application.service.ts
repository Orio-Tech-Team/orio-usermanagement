import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataNotFound } from 'src/Helper/Exception/data-not-found.exception';
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

    /*
        1 - Use For own controller POST API
    */
    async create(application : CreateApplicationDto){
        return await this.applicationRepository.save(
            this.applicationRepository.create(application)
        )
    }

    /*
        1 - Use for module controller Module POST API applcaition validation 
    */
    async findById(id : number) : Promise<Application>{
        return await this.applicationRepository.findOneOrFail({
            where : {
                id : id
            }
        }).catch(error=> {
            throw DataNotFound.exception("Application Not Found")
        });
    }
    
    async findByTag(applicationTag : string) : Promise<Application>{
        return await this.applicationRepository.findOneOrFail({
            where : {
                tag : applicationTag
            }
        }).catch(error=> {
            throw DataNotFound.exception("Application Not Found")
        });
    }

    async findByRole(roleId , applicationTag) {
        return this.applicationRepository.createQueryBuilder('application').
        innerJoin('application.modules','module').
        innerJoin('module.menus','menu'). 
        innerJoin('menu.permissions','permissions').
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
