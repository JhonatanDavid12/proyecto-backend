import { Injectable } from '@nestjs/common';
import { MysqlDatabaseService } from 'src/config/database/mysql-database.service';
import { CreateProperty } from './dto/create-property.dto';
import { PrismaClient, propiedades } from '@prisma/client';

@Injectable()
export class PropertiesRepository {
  constructor(private prisma: MysqlDatabaseService) {}

  async getProperties() {
    return this.prisma.propiedades.findMany();
  }

  async createProperty(property: CreateProperty) {
    return await this.prisma.propiedades.create({
      data: {
        ...property,
      },
    });
  }
}
