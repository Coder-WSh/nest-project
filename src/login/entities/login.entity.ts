import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('roletable')
export class Login {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column()
  role: string

  @UpdateDateColumn()
  updateTime: Date

  @CreateDateColumn()
  createTime: Date
}
