import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseItem } from '../entities/expense-item.entity';
import { Expense } from '../entities/expense.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private expenseRepository: Repository<Expense>,

    @InjectRepository(ExpenseItem)
    private expenseItemRepo: Repository<ExpenseItem>,
  ) {}
  async create(createExpenseDto: CreateExpenseDto) {
    const { expenseItems, ...expenseData } = createExpenseDto;
    const expense = this.expenseRepository.create(expenseData);
    const savedExpense = await this.expenseRepository.save(expense);

    const itemsToSave = expenseItems.map((item) => {
      return this.expenseItemRepo.create({
        ...item,
        expenseId: savedExpense.id,
      });
    });

    await this.expenseItemRepo.save(itemsToSave);

    return {
      expense: savedExpense,
      expenseItems: itemsToSave,
    };
  }

  async findDebtsByUser(userId: number) {
    const debt = await this.expenseItemRepo
      .createQueryBuilder('expense_item')
      .select('SUM(expense_item.amount)', 'totalDebt')
      .addSelect('expense_item.user_id', 'userId')
      .where('expense_item.user_id = :userId', { userId })
      .andWhere('expense_item.is_paid = false')
      .andWhere('expense_item.is_shared = false')
      .groupBy('expense_item.user_id')
      .getRawOne();

    return {
      userId: debt.userId,
      totalDebt: debt.totalDebt,
      totalAmount: +debt.totalDebt + 500000,
    };
  }

  findAll() {
    return `This action returns all expense`;
  }

  async findOne(id: number) {
    const expense = await this.expenseRepository.findOneBy({ id });

    if (!expense) return null;

    const expenseItems = await this.expenseItemRepo.find({
      where: { expenseId: id },
    });

    return {
      ...expense,
      expenseItems,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
