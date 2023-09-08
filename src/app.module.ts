import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'

import { TypeOrmModule } from '@nestjs/typeorm'
import { dbConfig } from './dbConfig'
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { LoginModule } from './login/login.module'
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    // 在这注册的，每个实例会自动加载
    TypeOrmModule.forRoot(dbConfig() as MysqlConnectionOptions),
    UserModule,
    LoginModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
