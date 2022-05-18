import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsBoolean, IsEmail, IsEmpty, IsInt, isNotEmpty, IsNotEmpty, IsPhoneNumber, IsString, Validate } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    first_name : string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    last_name : string

    @IsPhoneNumber('PK')
    @IsNotEmpty()
    @ApiProperty()
    phone : string

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    user_name : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string

    @IsBoolean()
    @ApiProperty()
    @IsNotEmpty()
    is_employee ?: boolean = false

    @ApiProperty()
    @IsString()
    refrence_number: string

    @IsInt()
    @ApiProperty()
    @IsNotEmpty()
    roleId : number

}   