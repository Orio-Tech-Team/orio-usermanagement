import { Permission } from "src/modules/menu/entities/permission.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Role } from "./role.entity";
import { GenericEntity } from 'src/generic/generic.entity';

@Entity('role_permissions')
class RolePermission extends GenericEntity {

    @ManyToOne(() => Role, role => role.rolePermissions)
    @JoinColumn()
    role!: Role;

    @ManyToOne(() => Permission, permission => permission.rolePermissions)
    @JoinColumn()
    permission!: Permission;
    
}

export default RolePermission;