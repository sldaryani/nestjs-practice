import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({ summary: 'Isse sabhi prakat ho jayenge' })
  @ApiResponse({ status: 200, description: 'List of all products', type: [Product] })
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Isse ek prakar ka hi prakat hoga' })
  @ApiParam({ name: 'id', description: 'The unique identifier of the product' })
  @ApiResponse({ status: 200, description: 'The product with the specified ID', type: Product })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Isse uska nirmaadh hoga' })
  @ApiResponse({ status: 201, description: 'The product has been created', type: Product })
  create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Put(':id')
  @ApiOperation({ summary: 'isse chhedoge toh badal jayega' })
  @ApiParam({ name: 'id', description: 'koi bhi sasta maal ka vistaar' })
  @ApiResponse({ status: 200, description: 'The product has been updated', type: Product })
  update(@Param('id') id: string, @Body() product: Product): Promise<Product> {
    return this.productService.update(Number(id), product);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Isse voh ram ko pyaara ho jayega' })
  @ApiParam({ name: 'id', description: 'koi bhi sasta maal' })
  @ApiResponse({ status: 200, description: 'The product has been deleted' })
  remove(@Param('id') id: string): Promise<void> {
    return this.productService.delete(Number(id));
  }
}
