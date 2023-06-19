import { Controller, Post, HttpStatus, Param, Res, Body, Logger } from '@nestjs/common';
import { TestService } from './test.service';
import { WhatsappCloudAPIRequest } from './dto/whatsapp-cloud-api-request.dto';


@Controller('test')
export class TestController {
    private readonly logger = new Logger('Test');
    constructor(private testService: TestService) {}

    @Post()
    testMessage(@Body() request: WhatsappCloudAPIRequest, @Res() response){
        this.logger.warn('testMessage');
        this.testService.testMessage(request).then( res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch((err) => {
            console.log(err.response.data.error)
            response.status(HttpStatus.BAD_REQUEST).json(err.response.data.error);
        })
    }

    @Post('/text')
    testMessageText(@Body() request: WhatsappCloudAPIRequest, @Res() response){
        this.logger.warn('testMessage');
        this.testService.testMessage(request).then( res => {
            response.status(HttpStatus.CREATED).json(res);
        }).catch((err) => {
            console.log(err.response.data.error)
            response.status(HttpStatus.BAD_REQUEST).json(err.response.data.error);
        })
    }
}
