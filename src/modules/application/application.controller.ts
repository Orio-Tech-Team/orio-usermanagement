import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entities/application.entity';

@Controller('applications')
export class ApplicationController {
    constructor(private readonly applicationService: ApplicationService) {}

    @Post()
    create(@Body() application : CreateApplicationDto){
        return this.applicationService.create(application)
    }

}
