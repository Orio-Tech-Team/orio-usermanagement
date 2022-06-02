import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "src/generic/generic.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Permission } from "./permission.entity";
import { classToPlain, Exclude } from "class-transformer";
import { Application } from "src/modules/application/entities/application.entity";
import { Module } from "src/modules/module/entities/module.entity";

@Entity('menus')
export class Menu extends GenericEntity{
    
    @Column({nullable:false})
    name: string

    @Column({nullable:false , unique:true})
    tag: string

    @Column({ nullable: true })
    parent_id: number;

    @Column({ nullable: false })
    module_id: number;

    @ManyToOne(()=>Module , (module) => module.menus)
    @JoinColumn({name : "module_id"})
    module : Module

    @ManyToOne(()=>Menu , (menu)=>menu.childrens)
    @JoinColumn({name : "parent_id"})
    parent : Menu

    @OneToMany(type => Menu, category => category.parent)
    childrens: Menu[];

    @OneToMany(()=>Permission , (permissions) => permissions.menu,{cascade:true})
    permissions : Permission[]

    toJSON() {
        return classToPlain(this);
    }
}