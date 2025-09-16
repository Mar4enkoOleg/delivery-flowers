import { IsEnum } from 'class-validator';
import { PaginationQueryDto } from '../../../common/dto/pagination-query.dto';
import { SortingType } from '../../../modules/shop/enums';

export class GetShopFlowersDto extends PaginationQueryDto {
  @IsEnum(SortingType)
  sortBy: SortingType = SortingType.byPrice;
}
