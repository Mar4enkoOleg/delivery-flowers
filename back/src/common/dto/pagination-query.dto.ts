import { IsInt, IsOptional, Max, Min } from 'class-validator';
import { DEFAULT_PAGE_SIZE } from '../consts';
import { Transform } from 'class-transformer';

export class PaginationQueryDto {
  @IsInt()
  @Max(50)
  @Min(0)
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  limit = DEFAULT_PAGE_SIZE;

  @IsInt()
  @Min(0)
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  offset = 0;
}
