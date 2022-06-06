import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller('public')
export class PublicController {
    
    @Get('sliders/:fileName')
    async sliders(@Param('fileName') fileId : string , @Res() res): Promise<any> {
        res.sendFile(fileId, { root: 'public/sliders'});
    }

    @Get('icons/:fileName')
    async icons(@Param('fileName') fileId : string , @Res() res): Promise<any> {
        res.sendFile(fileId, { root: 'public/icons'});
    }
}
