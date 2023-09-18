import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateLoginDto } from './dto/create-login.dto'
import { UpdateLoginDto } from './dto/update-login.dto'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import ency from '../basicUtils/crypto'

@Injectable()
export class LoginService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(infos: CreateLoginDto) {
    const { username, password } = infos
    const user = await this.userService.findUser(username)
    if (user?.password !== ency(password, user.salt)) {
      throw new HttpException('密码错误', HttpStatus.UNAUTHORIZED)
    }

    const payload = { username: user.username, sub: user.id }

    return await this.jwtService.signAsync(payload)
  }

  findAll(name) {
    return name
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
