import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "src/generic/generic.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Permission } from "./permission.entity";
import { classToPlain, Exclude } from "class-transformer";
import { Application } from "src/modules/application/entities/application.entity";

@Entity('menus')
export class Menu extends GenericEntity{
    
    @ApiProperty()
    @Column({nullable:false})
    name: string

    @ApiProperty()
    @Exclude({ toPlainOnly: true })
    @ManyToOne(() => Application, (application) => application.menu , {nullable:false , onDelete:"CASCADE" , onUpdate:"CASCADE"})
    @JoinColumn({name : "application_id"})
    application: Application;

    @ApiProperty()
    @OneToMany(()=>Permission , (permissions) => permissions.menu,{cascade:true})
    @JoinColumn()
    permissions : Permission[]

    toJSON() {
        return classToPlain(this);
    }
}