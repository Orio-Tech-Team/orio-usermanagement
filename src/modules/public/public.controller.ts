import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller('public')
export class PublicController {
    
    @Get('slider/:banner')
    async serveAvatar(@Param('banner') fileId : string , @Res() res): Promise<any> {
        res.sendFile(fileId, { root: 'public/sliders'});
    }

}
