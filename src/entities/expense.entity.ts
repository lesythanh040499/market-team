import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('expense')
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'buyer_id', type: 'int' })
  buyerId: number;

  @Column({ name: 'total_amount', type: 'numeric' })
  totalAmount: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
