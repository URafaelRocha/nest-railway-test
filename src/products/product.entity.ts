import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: bigint;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  image: string;
}
