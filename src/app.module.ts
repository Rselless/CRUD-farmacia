import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { ProdutoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';

@Module({
  imports: [    
    TypeOrmModule.forRoot({
      type: `mysql`,
      host: `localhost`,
      port: 3306,
      username: `root`,
      password: `root`,
      database: `db_farmacia`,
      entities: [Categoria, Produto],
      synchronize: true,
    }),
  CategoriaModule,
  ProdutoModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
