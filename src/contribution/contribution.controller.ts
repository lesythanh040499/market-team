import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ContributionService } from './contribution.service';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('contribution')
export class ContributionController {
  constructor(private readonly contributionService: ContributionService) {}

  @Get()
  @ApiCreatedResponse({ description: 'Get user successfully' })
  findAll() {
    return this.contributionService.findAll();
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
