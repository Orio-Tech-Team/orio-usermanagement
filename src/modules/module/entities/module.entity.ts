import { application } from 'express';
import { GenericEntity } from 'src/generic/generic.entity';
import { Application } from 'src/modules/application/entities/application.entity';
import {Menu } from 'src/modules/menu/entities/menu.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('modules')
export class Module extends GenericEntity{
    
    @Column({nullable :false})
    name : string

    @Column({nullable :false})
    application_id : number

    @ManyToOne(()=>Application , (application) => application.modules , {nullable:false})
    @JoinColumn({name : "application_id"})
    application : Application

    @OneToMany(()=>Menu , (menus)=>menus.module , {cascade:true})
    menus : Menu[]

}