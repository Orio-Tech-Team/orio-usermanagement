import { ApiProperty} from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateApplicationDto{

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    tag : string
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    password_requeired : boolean
}