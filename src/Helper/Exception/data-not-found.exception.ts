import { HttpException, HttpStatus } from '@nestjs/common';
export class DataNotFound{
    static exception(errorMessage){
        throw new HttpException({
            message : [errorMessage]
        },HttpStatus.BAD_REQUEST)
    }
}