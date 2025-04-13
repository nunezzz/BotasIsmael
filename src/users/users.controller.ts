import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users') 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('first') 
  async getFirstUser(): Promise<User> {
    const user = await this.usersService.findOne();
    if (!user) {
      throw new Error('No user found');
    }
    return user;
  }
}