import { IsString, IsInt, Min } from 'class-validator';
export class AddItemDto {
@IsString() product_id: string;
@IsInt() @Min(1) quantity: number;
}