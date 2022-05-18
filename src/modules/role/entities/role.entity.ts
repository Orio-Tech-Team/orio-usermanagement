import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { GenericEntity } from "src/generic/generic.entity";
import { User } from "src/modules/user/entities/user.entity";
import RolePermission from './role-permission.entity';

@Entity('roles')
export class Role extends GenericEntity{

    @ApiProperty()
    @Column({nullable: false})
    name: string

    @OneToMany(()=>User , (user)=>user.role)
    @JoinColumn()
    user : User

    @OneToMany(() => RolePermission, rolePermission => rolePermission.role, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
    @JoinColumn()
    rolePermissions : RolePermission[];
}