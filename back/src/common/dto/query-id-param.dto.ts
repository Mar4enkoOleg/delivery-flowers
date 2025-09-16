import { IsUUID } from 'class-validator';

export class QueryIdParam {
  @IsUUID()
  id: string;
}
