import { isNotEmpty, IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: `tb_categorias` })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

 @IsNotEmpty()
 @Column({length: 255, nullable:false})
 nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  setor: string;

//   @OneToMany(()=>Produto, (produto)=>produto.categoria)
//   produto: Produto[]
}
