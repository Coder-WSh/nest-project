import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  // ManyToOne,
  ManyToMany,
  JoinTable,
  // JoinColumn,
  // OneToMany,
} from 'typeorm'
import * as crypto from 'crypto'
import encry from '../../basicUtils/crypto'
import { Role } from '../../role/entities/role.entity'
// 可以和class-validator搭配

@Entity('user')
export class User {
  // 使用sava前调用
  @BeforeInsert()
  beforeInset() {
    this.salt = crypto.randomBytes(4).toString('base64')
    this.password = encry(this.password, this.salt)
  }

  @PrimaryGeneratedColumn('uuid')
  id: number // 标记为主键，值自动生成

  @Column({ length: 30 })
  username: string //用户名

  @Column({ nullable: true })
  nickname: string //昵称

  @Column()
  password: string //密码

  @Column({ nullable: true })
  avatar: string //头像

  @Column({ nullable: true })
  email: string //邮箱

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_role_relation',
  })
  roles: Role[] //角色

  @Column({ nullable: true })
  salt: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date
}
