import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Module } from './entities/module.entity';
import { getManager, Repository, In } from 'typeorm';
import { CreateModuleDto } from './dto/create-module.dto';
import { DataNotFound } from 'src/Helper/Exception/data-not-found.exception';
import { Menu } from '../menu/entities/menu.entity';

@Injectable()
export class ModuleService {
    constructor(
        @InjectRepository(Module)
        private readonly moduleRepository : Repository<Module>        
    ){}

    /*
        1 - Use For own controller POST API
    */
    async create(moduleData : CreateModuleDto) : Promise<Module>{
        return this.moduleRepository.save(
            this.moduleRepository.create(moduleData)  
        ) 
    }

    /*
        1 - Use For menu controller Menu POST API module validation
    */
    async findById(moduleId) : Promise<Module>{
        return this.moduleRepository.findOneOrFail(
            {
                where :{
                    id : moduleId
                }
            }
        ).catch(error => {
            throw DataNotFound.exception("Module Not Found")
        }) 
    }

    /*
        1- Use For get modules api for role wise
    */
    async findByRole(roleId : number){
        return await this.moduleRepository.createQueryBuilder().
        innerJoinAndSelect("menus" , "menus").
        getMany()
        // const moduleWhere = []
        // await modules.map(module => {
        //     moduleWhere.push(module.id)
        // })
        // const manager = getManager()
        // const menus =await manager.getRepository(Menu).find({
        //     relations : ["permissions" , "permissions.rolePermissions"],
        //     where : (qb) => {
        //         qb.where('module_id IN (:...modules) AND Menu__permissions__rolePermissions.roleId = :roleId', {
        //             roleId : roleId,
        //             modules : moduleWhere
        //         });
        //     }
        // })
        // let menuHasMap  = {}
        // await menus.map(menu => {
        //     const key = menu.module_id
        //     if(menuHasMap[key]){
        //         menuHasMap[key] = [...menuHasMap[key],menu]
        //     }
        //     else{
        //         menuHasMap[key] = [menu]
        //     }
        // })
        // let response = []
        // await modules.map(module => {
        //     const obj = {
        //         ...module,
        //         menus : menuHasMap[module.id]
        //     }
        //     response.push(obj)
        // })

        // console.log(response)
        // return response
    }
}
