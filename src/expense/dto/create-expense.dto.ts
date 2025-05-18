import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateExpenseItemDto } from 'src/expense-item/dto/create-expense-item.dto';

export class CreateExpenseDto {
  @ApiProperty({
    description: 'ID của người mua',
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  buyerId: number;

  @ApiProperty({
    description: 'Tổng số tiền chi tiêu',
    example: 250000,
  })
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @ApiProperty({
    description: 'Ngày chi tiêu (ISO format)',
    example: '2025-05-18',
  })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiPropertyOptional({
    description: 'Mô tả chi tiêu (nếu có)',
    example: 'Mua nguyên vật liệu cho sự kiện',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Danh sách các mục chi tiêu',
    type: [CreateExpenseItemDto],
  })
  @ValidateNested({ each: true })
  @Type(() => CreateExpenseItemDto)
  expenseItems: CreateExpenseItemDto[];
}
