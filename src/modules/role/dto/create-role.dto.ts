import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, IsInt, ValidateNested } from 'class-validator';

export class RolePermissionDto{

    @IsNotEmpty()
    @IsInt()
    @ApiProperty()
    permission_id : number
    
}

export class CreateRoleDto {
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name : string

    @ApiProperty({type:[RolePermissionDto]})
    @ValidateNested({each:true})
    @Type(() => RolePermissionDto)
    permissions : RolePermissionDto[]

}
