import { IsEmail, IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto/pagination-query.dto';

export class GetOrdersQueryDto extends PaginationQueryDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  phone?: string;
}
