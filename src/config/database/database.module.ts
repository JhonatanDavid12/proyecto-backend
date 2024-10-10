import { Module } from '@nestjs/common';
import { MysqlDatabaseService } from './mysql-database.service';

@Module({
  providers: [MysqlDatabaseService],
  exports: [MysqlDatabaseService],
})
export class DatabaseModule {}
