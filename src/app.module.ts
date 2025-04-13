import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'botita', 
      password: 'botasIsmael', 
      database: 'botas', 
      autoLoadEntities: true,
      synchronize: true, 
    }),
  TypeOrmModule.forFeature([User]), 
],
controllers: [AppController, UsersController], 
providers: [AppService, UsersService],       
})
export class AppModule {}

