import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { LoginService } from './login.service'
import { CreateLoginDto } from './dto/create-login.dto'
import { UpdateLoginDto } from './dto/update-login.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('login')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  // @Body() Param: CreateLoginDto
  @Post()
  create(@Param('account') body: CreateLoginDto) {
    return this.loginService.create(body)
  }

  @Get()
  findAll() {
    return this.loginService.findAll()
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