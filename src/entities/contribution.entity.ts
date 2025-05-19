import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('contribution')
export class Contribution extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', type: 'text' })
  userId: number;

  @Column({ name: 'amount', type: 'numeric' })
  amount: number;

  @Column({ name: 'debt_paid', type: 'numeric' })
  debtPaid: number;

  @Column({ name: 'fund_added', type: 'numeric' })
  fundAdded: number;

  @Column({ name: 'date', type: 'date' })
  date: Date;

  @Column({ name: 'image_transaction', type: 'text' })
  imageTransaction: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Exclude()
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  updated_at: Date;
}
