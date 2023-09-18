import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from '../app.service'
import { UserModule } from './user/user.module'

import { TypeOrmModule } from '@nestjs/typeorm'
import { dbConfig } from './dbConfig'

import { LoginModule } from './login/login.module'

import { ConfigModule } from '@nestjs/config'
import { RoleModule } from './role/role.module'
import { PermissionModule } from './permission/permission.module'

@Module({
  imports: [
    // 在这注册的，每个实例会自动加载
    //数据库
    TypeOrmModule.forRoot(dbConfig()),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    LoginModule,

    RoleModule,
    PermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
