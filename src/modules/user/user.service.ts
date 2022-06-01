import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnAuthorizedException } from 'src/Helper/Exception/unauthorized.exception';
import { Repository } from 'typeorm';
import { Role } from '../role/entities/role.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}
        
    async findAll() : Promise<User[]>{
        return await this.userRepository.find()
    }

    async findById(userId) : Promise<User>{
        return await this.userRepository.findOneOrFail({id:userId}).catch(error => {
            throw new HttpException({
                message : "User Not Found"
            },HttpStatus.BAD_REQUEST)
        })
    }

    async findByUsername(userName : string){
        return await this.userRepository.findOneOrFail({
            join :{
                alias : "users",
                innerJoinAndSelect : {
                    role : "users.role"
                }
            },
            select :["id","user_name","password","refrence_number","phone","first_name"],
            where : {
                user_name:userName
            }
        }).catch(error => {
            throw UnAuthorizedException.exception("Invalid Username")
        })
    }

    async create(user : CreateUserDto , role : Role){
        delete user.roleId
        return await this.userRepository.save({...user,role});
    }
}
