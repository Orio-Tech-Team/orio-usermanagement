import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { application } from 'express';
export class CreateModuleDto{
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name : string   

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    tag : string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    application_id : number
}