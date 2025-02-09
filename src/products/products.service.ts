import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: bigint): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: number, data: Partial<Product>): Promise<void> {
    await this.productRepository.update(id, data);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
