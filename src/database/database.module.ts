import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

import { Product } from './entities/products/product.entity';
import { Brand } from './entities/products/brand.entity';
import { Category } from './entities/products/category.entity';
import { Customer } from './entities/users/customer.entity';
import { OrderItem } from './entities/users/order-item.entity';
import { Order } from './entities/users/order.entity';
import { UserRepository } from './entities/users/user.repository';
import { UsersServiceA } from './providers/user.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
    TypeOrmModule.forFeature([
      Product,
      Brand,
      Category,
      Customer,
      OrderItem,
      Order,
      UserRepository,
    ]),
  ],
  providers: [UsersServiceA],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
