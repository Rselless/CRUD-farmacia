import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';

@Controller('/categorias')
export class CategoriaController {
  constructor(private readonly CategoriaService: CategoriaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.CategoriaService.findAll();
  }

  @Get(`/:id`)
  @HttpCode(HttpStatus.OK)
  findById(@Param(`id`, ParseIntPipe) id: number): Promise<Categoria> {
    return this.CategoriaService.findById(id);
  }

  @Get(`/setor/:setor`)
  @HttpCode(HttpStatus.OK)
  findAllbyDesc(@Param(`setor`) setor: string): Promise<Categoria[]> {
    return this.CategoriaService.findAllBySetor(setor);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.CategoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.CategoriaService.update(categoria);
  }

  @Delete(`/:id`)
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param(`id`, ParseIntPipe) id: number) {
    return this.CategoriaService.delete(id);
  }
}
