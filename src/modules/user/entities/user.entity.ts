import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { GenericEntity } from "src/generic/generic.entity";
import { Role } from "src/modules/role/entities/role.entity";

@Entity('users')
export class User extends GenericEntity{
    @Column({nullable:false})
    first_name : string

    @Column({nullable:false})
    last_name : string

    @Column({nullable:false})
    phone : string

    @Column({nullable:false})
    email : string

    @Column({nullable: false , unique:true})
    user_name: string

    @Column({nullable: false , select : false})
    password: string

    @Column({default: false})
    is_employee: boolean

    @Column({nullable:false})
    refrence_number: string

    @ManyToOne(() => Role, (role) => role.user , {nullable:false , onDelete:"CASCADE" , onUpdate:"CASCADE"})
    @JoinColumn({name : "role_id"})
    role: Role;

    @BeforeInsert()
        async setPassword(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}