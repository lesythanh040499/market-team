import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('expense_item')
export class ExpenseItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'expense_id', type: 'int' })
  expenseId: number;

  @Column({ name: 'item_name', type: 'text' })
  itemName: string;

  @Column({ type: 'numeric' })
  amount: number;

  @Column({ name: 'is_shared', type: 'boolean' })
  isShared: boolean;

  @Column({ name: 'is_paid', type: 'boolean' })
  isPaid: boolean;

  @Column({ name: 'user_id', type: 'int', nullable: true })
  userId?: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
