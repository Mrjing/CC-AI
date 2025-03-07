import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'dict_type' })
export class DictTypeEntity extends BaseEntity {
  @Column({ comment: '字典名称', nullable: false, length: 64 })
  name: string;

  @Column({ unique: true, comment: '字典类型', nullable: false, length: 64 })
  type: string;

  @Column({ comment: '状态（0正常 1停用）', default: 0, nullable: false })
  status: number;

  @Column({ comment: '备注', nullable: true, length: 255 })
  remark: string;

  @Column({ comment: '创建者', nullable: false, default: 0 })
  createUser: number;

  @Column({ comment: '更新者', nullable: true, default: 0 })
  updateUser: number;
}
