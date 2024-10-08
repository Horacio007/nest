import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CommonModule } from 'src/common/common.module';
import { BussinesRulesService } from './validations/bussines-rules.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, BussinesRulesService],
  imports: [TypeOrmModule.forFeature([
      Product
    ]),
    CommonModule
  ]
})
export class ProductsModule {}
