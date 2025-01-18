import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'goods' })
export class GoodsEntity extends BaseEntity {

  @Column({ comment: '商品名称', nullable: false, default: '', length: 32 })
  name: string;

  @Column({ comment: '商品介绍', nullable: true, default: '', length: 255 })
  intro: string;

  @Column({ comment: '商品分类', nullable: true, default: 0 })
  category: number;

  @Column({ comment: '商品图', nullable: true, default: '' })
  coverImg: string;

  @Column({ comment: '商品详情', nullable: true, default: '', length: 512 })
  detail: string;

  @Column({ comment: '商品价格', type: 'decimal', scale: 2, precision: 10, nullable: false, default: 1 })
  originalPrice: number;

  @Column({ comment: '商品实际售价', type: 'decimal', scale: 2, precision: 10, nullable: false, default: 1 })
  sellingPrice: number;

  @Column({ comment: '商品库存', nullable: false, default: 1 })
  stockNum: number;

  @Column({ comment: '商品上架状态 【0 下架 1上架】', nullable: false, default: 0 })
  sellStatus: number;

  @Column({ comment: '创建者', nullable: false, default: 0 })
  createUser: number;

  @Column({ comment: '更新者', nullable: false, default: 0 })
  updateUser: number;
}
