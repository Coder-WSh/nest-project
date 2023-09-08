import { IsNotEmpty } from 'class-validator'

export class CreateLoginDto {
  @IsNotEmpty()
  // @IsNumber()
  account: any

  @IsNotEmpty()
  // @IsString()
  password: any
}
