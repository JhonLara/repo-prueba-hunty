import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { BASEURL } from 'src/common/api-resource';
import { WhatsappCloudAPIRequest } from './dto/whatsapp-cloud-api-request.dto';
import { WhatsappCloudAPIResponse } from './dto/whatsapp-cloud-api-response.dto';
import { MongoRepository } from 'typeorm';
import { Messages } from 'src/message';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TestService {
    
    constructor(private httpService: HttpService){}
    urlBase= BASEURL.baseUrlWhatsappCloudApi;

    async testMessage(request: WhatsappCloudAPIRequest): Promise<AxiosResponse<WhatsappCloudAPIResponse>>{
        const { data } = await firstValueFrom(this.httpService.post(this.urlBase, request));
        console.log(data);
        return data;
    }

    async testMessageText(request: WhatsappCloudAPIRequest): Promise<AxiosResponse<WhatsappCloudAPIResponse>>{
        const { data } = await firstValueFrom(this.httpService.post(this.urlBase, request));
        var message: Messages;
        console.log(data);
        return data;
    }
}
