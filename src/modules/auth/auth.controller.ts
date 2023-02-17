import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { ApplicationService } from '../application/application.service';
import { Response } from 'src/Helper/common/response.common';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly applicationService: ApplicationService,
  ) {}

  @HttpCode(200)
  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    const user = await this.userService.findByUsername(loginDto.user_name);
    await this.applicationService.findByRole(
      user.role.id,
      loginDto.application_tag,
    );
    const loginService = await this.authService.login(user, loginDto);
    return {
      name: user.first_name,
      phone: user.phone,
      token: loginService.token,
      otp: loginService.otp,
    };
  }

  @HttpCode(200)
  @Post('/login/app')
  async loginApp(@Body() loginDto: LoginDto): Promise<any> {
    const user = await this.userService.findByUsername(loginDto.user_name);
    await this.applicationService.findByRole(
      user.role.id,
      loginDto.application_tag,
    );
    const loginService = await this.authService.login(user, loginDto);
    return Response.get(200, 'Success', {
      name: user.first_name,
      phone: user.phone,
      token: loginService.token,
      otp: loginService.otp,
    });
  }
}
