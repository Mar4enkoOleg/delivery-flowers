import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsString,
} from 'class-validator';
import { FlowerToOrder } from '../../../modules/order/types';

export class CreateOrderDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  address: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  flowers: FlowerToOrder[];
}
