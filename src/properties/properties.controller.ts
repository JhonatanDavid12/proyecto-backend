import { Body, Controller, Get, Post } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreateProperty } from './dto/create-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  getProperties() {
    return this.propertiesService.getProperties();
  }

  @Post()
  async crearPropiedad(@Body() propiedad: CreateProperty) {
    console.log(JSON.stringify(propiedad, null, 2));
    await this.propertiesService.createProperty(propiedad);
  }
}
