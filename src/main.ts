import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { HttpExceptionFilter } from './basicUtils/errorCatch'
import { TransformInterceptor } from './basicUtils/intercptor'

async function bootstrap() {
  // //设置跨域支持 app.enableCors();

  const app = await NestFactory.create(AppModule, { cors: true })
  // 注册全局管道监控？
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter()) // 全局异常过滤器pipe
  app.useGlobalInterceptors(new TransformInterceptor()) //正确拦截
  // 构建swagger
  const options = new DocumentBuilder()
    .setTitle('nest demo api')
    .setDescription('This is nest demo api')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)
  //这个地址本地看得话就是 http://localhost:3000/api-docs 了
  // 设置前缀
  app.setGlobalPrefix('apis')
  await app.listen(3000)
}
bootstrap()
