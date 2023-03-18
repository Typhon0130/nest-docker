import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService, UsersService],
})
export class AppModule {}
