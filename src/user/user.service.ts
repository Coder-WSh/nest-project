import { Injectable, HttpStatus, HttpException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { In, Repository } from 'typeorm'
import { ApiException } from '../basicUtils/ApiException '
import { ErrorCodes } from 'src/configs/errorCodes'
import { Role } from 'src/role/entities/role.entity'

@Injectable()
export class UserService {
  constructor(
    // 注入实体,然后要看typeorm的接口方法怎么操作
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { username, password, roleIds } = createUserDto
    const existUser = await this.userRepository.findOne({
      where: { username },
    })

    if (existUser) throw new ApiException('用户已存在', ErrorCodes.USER_EXIST)

    try {
      const roles = await this.roleRepository.find({
        where: {
          id: In(roleIds),
        },
      })

      const newUser = await this.userRepository.create({
        username,
        password,
        roles,
      })

      // const newUser = await this.userRepository.create(createUserDto)
      await this.userRepository.save(newUser)
      return '注册成功'
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  /**
   * check username is exsit in datebase
   */
  async findUser(username: string) {
    const user = await this.userRepository.findOne({ where: { username } })
    if (!user)
      throw new HttpException('该用户不存在请重新注册', HttpStatus.BAD_REQUEST)
    return user
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
