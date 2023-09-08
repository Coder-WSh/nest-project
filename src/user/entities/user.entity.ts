import { IsString } from 'class-validator'
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  // ManyToOne,
  // JoinColumn,
  // OneToMany,
} from 'typeorm'
// 可以和class-validator搭配
@Entity('user')
export class User {
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

  @Column({ nullable: true })
  role: string //角色

  @Column({ nullable: true })
  salt: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date
}
