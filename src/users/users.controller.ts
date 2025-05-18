import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ description: 'User created successfully' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiCreatedResponse({ description: 'Get user successfully' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('owner')
  getOwner() {
    return this.usersService.getOwner();
  }

  @Patch(':id/update-manage')
  update(@Param('id') id: string) {
    return this.usersService.update(+id);
  }
}
