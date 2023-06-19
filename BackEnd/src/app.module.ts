import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModuleModule } from './shared-module/shared-module.module';

@Module({
  imports: [SharedModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
