import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  proof_image_url: string;

  @ApiProperty({ example: true, required: false })
  is_manage?: boolean;
}
