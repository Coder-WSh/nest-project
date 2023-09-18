// dbConfig.ts
// 数据库配置

import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export function dbConfig(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: 'localhost', // 数据库地址
    port: 3306, // 端口
    username: 'root', // 用户名
    password: 'Wang118533.', // 密码
    database: 'coder-ccc', // 数据库名

    synchronize: true, // 是否将实体同步到数据库
    autoLoadEntities: true, // 自动加载实体类
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体类
  }
}
