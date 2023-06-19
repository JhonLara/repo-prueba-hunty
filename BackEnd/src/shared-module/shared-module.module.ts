import { Module } from '@nestjs/common';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
import { HttpModule} from '@nestjs/axios'
import { HttpConfigService} from 'src/httpService.config'


@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService
    }),
    SharedModuleModule
  ],
  controllers: [TestController],
  providers: [TestService]
})
export class SharedModuleModule {}
