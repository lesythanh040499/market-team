import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateExpenseItemDto {
  @ApiProperty({
    description: 'Tên mục chi tiêu',
    example: 'Mua nước uống',
  })
  @IsString()
  @IsNotEmpty()
  itemName: string;

  @ApiProperty({
    description: 'Số tiền cho mục này',
    example: 45000,
  })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description: 'Có phải chi tiêu chung không?',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isShared: boolean;

  @ApiPropertyOptional({
    description: 'ID người hưởng mục chi (nếu không phải chia đều)',
    example: 3,
  })
  @IsInt()
  @IsOptional()
  userId?: number;
}
