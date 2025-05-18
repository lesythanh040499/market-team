// dto/create-contribution.dto.ts
import { IsInt, IsPositive, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContributionDto {
  @ApiProperty({ example: 1, description: 'ID của người dùng đóng góp' })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: 1000000, description: 'Tổng số tiền đóng góp' })
  @IsInt()
  @IsPositive()
  amount: number;

  @ApiProperty({ example: 500000, description: 'Số tiền đã trả nợ' })
  @IsInt()
  debt_paid: number;

  @ApiProperty({ example: 500000, description: 'Số tiền thêm vào quỹ' })
  @IsInt()
  fund_added: number;

  @ApiProperty({
    example: '2025-05-18',
    description: 'Ngày giao dịch (định dạng YYYY-MM-DD)',
  })
  @IsDateString()
  date: string;

  @ApiProperty({
    example: 'https://example.com/images/transaction.jpg',
    description: 'Link hình ảnh giao dịch',
  })
  @IsString()
  image_transaction: string;
}
