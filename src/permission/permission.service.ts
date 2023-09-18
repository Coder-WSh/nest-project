import { HttpException, Injectable } from '@nestjs/common'
import { CreatePermissionDto } from './dto/create-permission.dto'
import { UpdatePermissionDto } from './dto/update-permission.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Permission } from './entities/permission.entity'
import { ErrorCodes } from 'src/configs/errorCodes'

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async create(createPermissionDto: CreatePermissionDto) {
    const name = createPermissionDto.name
    const existPermission = await this.permissionRepository.findOne({
      where: { name },
    })
    if (existPermission)
      new HttpException('该角色已具备该权限', ErrorCodes.USER_EXIST)
    return await this.permissionRepository.save(createPermissionDto)
  }

  findAll() {
    return `This action returns all permission`
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`
  }

  remove(id: number) {
    return `This action removes a #${id} permission`
  }
}
