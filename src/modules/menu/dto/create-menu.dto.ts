import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from 'class-validator';

export class PermissionDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    tag : string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string
}
export class CreateMenuDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string
    
    @IsNotEmpty()
    @IsInt()
    @ApiProperty()
    applicationId : number
    
    @ApiProperty({type:[PermissionDto]})
    @ValidateNested({each:true})
    @Type(() => PermissionDto)
    permissions : PermissionDto[]
    
}