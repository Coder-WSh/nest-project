import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common'
import { LoginService } from './login.service'
import { CreateLoginDto } from './dto/create-login.dto'
import { UpdateLoginDto } from './dto/update-login.dto'
import { ApiTags } from '@nestjs/swagger'
import { LoginGuard } from './login.guard'

@ApiTags('login')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Body() body: CreateLoginDto) {
    return this.loginService.login(body)
  }
  // 该用于全局把
  @UseGuards(LoginGuard)
  @Get()
  findAll(@Query('name') query) {
    return this.loginService.findAll(query)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id)
  }
}
