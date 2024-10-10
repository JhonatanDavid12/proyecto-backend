import { Module } from '@nestjs/common';
import { HelloController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesController } from './properties/properties.controller';
import { PropertiesService } from './properties/properties.service';
import { DatabaseModule } from './config/database/database.module';
import { PropertiesRepository } from './properties/properties.repository';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    HelloController,
    PropertiesController,
  ],
  providers: [
    AppService,
    PropertiesService,
    PropertiesRepository
  ],
})
export class AppModule {}
