import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { GenericEntity } from "src/generic/generic.entity";
import { Menu } from "src/modules/menu/entities/menu.entity";
import { Slider } from "src/modules/slider/entities/slider.entity";

@Entity('applications')
export class Application extends GenericEntity{
    
    @ApiProperty()
    @Column({
        nullable:false,
        unique: true
    })
    tag : string

    @ApiProperty()
    @Column({nullable:false})
    name : string

    @ApiProperty()
    @Column({default:true , select:false})
    password_required : boolean

    @ApiProperty()
    @OneToMany(() => Menu, (menu) => menu.application)
    @JoinColumn()
    menu: Menu[];

    @OneToMany(() => Slider, (slider) => slider.application)
    @JoinColumn()
    slider: Slider[];
}
