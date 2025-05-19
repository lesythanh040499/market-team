import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(user);
  }

  getOwner() {
    return this.usersRepository.findOne({
      where: { isManage: true },
    });
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  async update(id: number) {
    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({ isManage: false })
      .where('id != :id', { id })
      .execute();

    await this.usersRepository
      .createQueryBuilder()
      .update()
      .set({ isManage: true })
      .where('id = :id', { id })
      .execute();

    return this.usersRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
