import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ContributionService } from './contribution.service';
import { CreateContributionDto } from './dto/create-contribution.dto';

@Controller('contribution')
export class ContributionController {
  constructor(private readonly contributionService: ContributionService) {}

  @Get()
  @ApiCreatedResponse({ description: 'Get user successfully' })
  findAll() {
    return this.contributionService.findAll();
  }

  @Get('remain-fund')
  getRemainFund() {
    return this.contributionService.getRemainFund();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contributionService.findOne(+id);
  }

  @Post()
  create(@Body() createContributionDto: CreateContributionDto) {
    return this.contributionService.create(createContributionDto);
  }
}
