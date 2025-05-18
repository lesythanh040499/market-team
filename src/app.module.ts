import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { DbModule } from './common/db/db.module';
import { UsersModule } from './users/users.module';
import { ContributionModule } from './contribution/contribution.module';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseItemModule } from './expense-item/expense-item.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    CloudinaryModule,
    UsersModule,
    ContributionModule,
    ExpenseModule,
    ExpenseItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
