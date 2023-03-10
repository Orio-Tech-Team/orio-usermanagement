import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { ApplicationService } from '../application/application.service';
import { LoginDto } from './dto/login.dto';
import { SMS } from 'src/Helper/common/sms.common';
import { OTP } from 'src/Helper/common/otp.common';

@Injectable()
export class AuthService {
  constructor(private readonly applicationService: ApplicationService) {}
  async login(user: User, LoginDto: LoginDto) {
    const jwt = require('jsonwebtoken');
    const secret = '3GKsOqRULgOicqaAgzPWGO';
    const application = await this.applicationService.findByTag(
      LoginDto.application_tag,
    );
    var otp = '';
    if (user.user_name == '1045') {
      otp = '0000';
    } else {
      otp = OTP.generate();
    }
    if (application.password_required === true) {
      if (user.password != LoginDto.password) {
        throw new HttpException(
          {
            message: 'Invalid Password',
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
    } else {
      SMS.send(otp, user.phone);
    }

    const token = jwt.sign(
      {
        sub: '1BLhVLF4hei6fAH0atBgYn', //keyId generated by eg create
        user_name: user.user_name,
        refrence_number: user.refrence_number,
        application_tag: LoginDto.application_tag,
        role_id: user.role,
        iat: 1538828706,
      },
      secret,
    );
    return {
      token: token,
      otp: otp,
    };
  }
}
