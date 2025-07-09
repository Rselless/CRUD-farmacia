import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: `tb_produtos` })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  principioAtivo: string;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  laboratorio: string;

  @ManyToOne(() => Categoria,(categoria) => categoria.produto,{
    onDelete:'CASCADE'
  })
  categoria: Categoria
}