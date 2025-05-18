import { Injectable } from '@nestjs/common';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { Contribution } from 'src/entities/contribution.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContributionService {
  constructor(
    @InjectRepository(Contribution)
    private contributionsRepository: Repository<Contribution>,
  ) {}
  create(createContributionDto: CreateContributionDto) {
    const contribution = this.contributionsRepository.create(
      createContributionDto,
    );

    return this.contributionsRepository.save(contribution);
  }

  findAll() {
    return this.contributionsRepository.find();
  }

  findOne(id: number) {
    return this.contributionsRepository.findOne({
      where: { id },
    });
  }

  // update(id: number, updateContributionDto: UpdateContributionDto) {
  //   return `This action updates a #${id} contribution`;
  // }

  remove(id: number) {
    return `This action removes a #${id} contribution`;
  }
}
