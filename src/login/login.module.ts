import { Module } from '@nestjs/common'
import { LoginService } from './login.service'
import { LoginController } from './login.controller'

import { UserModule } from 'src/user/user.module'
import { JwtModule } from '@nestjs/jwt'

import { ConfigService } from '@nestjs/config'

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [
    UserModule,
    JwtModule.registerAsync({
      // imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SCRENCE'),
          global: true,
          signOptions: {
            expiresIn: '2h',
          },
        }
      },
    }),
    // TypeOrmModule.forFeature([Login]),本处不需使用数据库
  ],
})
export class LoginModule {}
