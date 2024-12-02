import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]) //  avisa que está usando uma entidade de nome 'Users'
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
