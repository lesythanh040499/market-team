import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseItem } from 'src/entities/expense-item.entity';
import { Expense } from 'src/entities/expense.entity';
import { ExpenseItemController } from './expense-item.controller';
import { ExpenseItemService } from './expense-item.service';

@Module({
  imports: [TypeOrmModule.forFeature([Expense, ExpenseItem])],
  controllers: [ExpenseItemController],
  providers: [ExpenseItemService],
})
export class ExpenseItemModule {}
