import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "src/generic/generic.entity";
import { Menu } from "src/modules/menu/entities/menu.entity";
import { Slider } from "src/modules/slider/entities/slider.entity";
import { Module } from '../../module/entities/module.entity';

@Entity('applications')
export class Application extends GenericEntity{
    
    @Column({
        nullable:false,
        unique: true
    })
    tag : string

    @Column({nullable:false})
    name : string

    @Column({default:true , select:false})
    password_required : boolean

    @OneToMany(() => Module, (modules) => modules.application)
    @JoinColumn()
    modules: Module[];

    @OneToMany(() => Slider, (slider) => slider.application)
    @JoinColumn()
    slider: Slider[];
}
