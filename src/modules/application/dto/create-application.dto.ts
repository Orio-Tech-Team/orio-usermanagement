import { ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateApplicationDto{

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    tag : string
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string
}