import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import {LoginDto} from './dto/login.dto'
import { User } from '../user/entities/user.entity';
import { ApplicationService } from '../application/application.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService : AuthService , 
        private readonly userService: UserService,
        private readonly applicationService : ApplicationService
    ){}
    
    @HttpCode(200)
    @Post('/login')
    async login(@Body() loginDto : LoginDto) : Promise<any>{
        const user = await this.userService.findByUsername(loginDto.user_name)
        const loginService = await this.authService.login(user, loginDto)
        await this.applicationService.findByRole(user.role.id,loginDto.application_tag)
        return {
            token : loginService.token,
            otp : loginService.otp
        }
    }
}
