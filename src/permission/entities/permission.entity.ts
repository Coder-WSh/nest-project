//permission.entity.ts
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('permission')
export class Permission {
  @PrimaryGeneratedColumn()
  id: string

  @Column({
    length: 50,
  })
  name: string

  @Column({
    length: 100,
    nullable: true,
  })
  desc: string

  @CreateDateColumn()
  createTime: Date

  @UpdateDateColumn()
  updateTime: Date
}
