import { Injectable } from '@nestjs/common'
import { CreateLoginDto } from './dto/create-login.dto'
import { UpdateLoginDto } from './dto/update-login.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Login } from './entities/login.entity'
import { Repository } from 'typeorm'

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login) private loginRepository: Repository<Login>,
  ) {}
  // { account='', password='' }: CreateLoginDto
  create(infos) {
    // let a = account + password
    console.log(infos)

    return 'This action adds a new login'
  }

  findAll() {
    return `This action returns all login`
  }

  findOne(id: number) {
    return `This action returns a #${id} login`
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`
  }

  remove(id: number) {
    return `This action removes a #${id} login`
  }
}