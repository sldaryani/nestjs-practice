import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'The unique identifier of the product' })
  id: number;

  @Column()
  @ApiProperty({ example: 'iPhone 15', description: 'The name of the product' })
  name: string;

  @Column('decimal')
  @ApiProperty({ example: 999.99, description: 'The price of the product' })
  price: number;

  @Column()
  @ApiProperty({ example: 'A high-end smartphone from Apple', description: 'The description of the product' })
  description: string;
}
