// dbConfig.ts
// 数据库配置

export function dbConfig() {
  return {
    type: 'mysql', // 数据库类型
    host: 'localhost', // 数据库地址
    port: 3306, // 端口
    username: 'root', // 用户名
    password: 'Wang118533.', // 密码
    database: 'coder-ccc', // 数据库名
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体类
    synchronize: true, // 是否将实体同步到数据库
    autoLoadEntities: true, // 自动加载实体类
  }
}
