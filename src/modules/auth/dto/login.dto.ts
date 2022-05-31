import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class LoginDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_name : string

    @ApiProperty()
    @IsOptional()
    @IsString()
    password : string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    application_tag : string
}