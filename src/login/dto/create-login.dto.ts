import { IsNotEmpty } from 'class-validator'

export class CreateLoginDto {
  @IsNotEmpty()
  // @IsNumber()
  username: any

  @IsNotEmpty()
  // @IsString()
  password: any
}
