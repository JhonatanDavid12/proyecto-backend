import { Injectable } from '@nestjs/common';
import { PropertiesRepository } from './properties.repository';
import { CreateProperty } from './dto/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private readonly propertiesRepository: PropertiesRepository) {}

  async getProperties() {
    return await this.propertiesRepository.getProperties();
  }

  async createProperty(data: CreateProperty) {
    await this.propertiesRepository.createProperty(data);
  }
}
