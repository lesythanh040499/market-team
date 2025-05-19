import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  proofImageUrl: string;

  @ApiProperty({ example: true, required: false })
  isManage?: boolean;
}
