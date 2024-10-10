// src/prisma/prisma.service.ts
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { baseConfig } from '../environment/base-config';


/**
 * Extension of the PrismaClient for use with NestJs.
 */
@Injectable()
export class MysqlDatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    /**
     * Get the database url from environmental variables and pass it in.
     */
    const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_SCHEMA } = baseConfig;
    super({
      datasources: {
        db: {
          url: `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_SCHEMA}?MinimumPoolSize=3`,
        },
      },
    });
  }

  /**
   * Connect to the database when the module is initialized.
   */
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  /**
   * Disconnect from the database when the application is shutting down.
   */
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  /**
   * A utility function used to clear all database rows for testing.
   */
  clearDatabase() {
    const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);

    return Promise.all(modelNames.map((modelName) => this[modelName[0].toLowerCase() + modelName.slice(1)].deleteMany()));
  }
}
