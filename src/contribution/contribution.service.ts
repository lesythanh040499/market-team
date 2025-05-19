import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contribution } from 'src/entities/contribution.entity';
import { Repository } from 'typeorm';
import { CreateContributionDto } from './dto/create-contribution.dto';

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

  async findAll() {
    const results = await this.contributionsRepository
      .createQueryBuilder('contribution')
      .select([
        `TO_CHAR(date_trunc('week', contribution.date), 'IYYY-"W"IW') AS week`,
        `json_agg(
            json_build_object(
              'userId', contribution.user_id,
              'amount', contribution.amount,
              'date', contribution.date,
              'evidence', contribution.image_transaction
            ) ORDER BY contribution.date
          ) AS details`,
      ])
      .groupBy(`TO_CHAR(date_trunc('week', contribution.date), 'IYYY-"W"IW')`)
      .orderBy('week', 'DESC')
      .getRawMany();

    return results;
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

  async getRemainFund() {
    const [balance] = await this.contributionsRepository.query(`
      SELECT 
      (SELECT COALESCE(SUM(fund_added), 0) FROM contribution) 
      - 
      (SELECT COALESCE(SUM(amount), 0) FROM expense_item WHERE is_shared = true) 
      AS balance;
  `);

    return balance;
  }
}
