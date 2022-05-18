import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GenericEntity } from 'src/generic/generic.entity';
import { Role } from 'src/modules/role/entities/role.entity';
import { Menu } from './menu.entity';
import RolePermission from 'src/modules/role/entities/role-permission.entity';

@Entity('permissions')
export class Permission extends GenericEntity{
    @PrimaryGeneratedColumn()
    id : number

    @ApiProperty()
    @Column({
        nullable: false,
        unique: true
    })
    tag : string

    @ApiProperty()
    @Column({
        nullable : false
    })
    name : string

    @ApiProperty()
    @ManyToOne(()=>Menu , (menu) => menu.permissions , {nullable:false , onDelete :"CASCADE" , onUpdate : "CASCADE"})
    @JoinColumn()
    menu : Menu
    
    @OneToMany(() => RolePermission, rolePermission => rolePermission.permission, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    @JoinColumn({ referencedColumnName: 'permission_id' })
    rolePermissions!: RolePermission[];
}