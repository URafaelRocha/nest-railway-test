import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQLHOST || 'localhost',
      port: Number(process.env.MYSQLPORT) || 3306,
      username: process.env.MYSQLUSER || 'root',
      password: process.env.MYSQLPASSWORD || 'password',
      database: process.env.MYSQLDATABASE || 'my_database',
      entities: [Product],
      synchronize: process.env.DBSYNC === 'true',
    }),
    ProductsModule,
  ],
})
export class AppModule {}
