import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class LoginDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_name : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    application_tag : string
}