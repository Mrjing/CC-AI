import { Column, Entity, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { DictTypeEntity } from '../dictType/dictType.entity';

@Entity({ name: 'dict_data' })
export class DictDataEntity extends BaseEntity {
  @Column({ comment: '字典标签', nullable: false, length: 64 })
  label: string;

  @Column({ comment: '字典键值', nullable: false, length: 64 })
  value: string;

  @ManyToOne(() => DictTypeEntity)
  @JoinColumn({ name: 'dictType', referencedColumnName: 'type' })
  dictType: DictTypeEntity;

  @Column({ comment: '状态（0正常 1停用）', default: 0, nullable: false })
  status: number;

  @Column({ comment: '备注', nullable: true, length: 255 })
  remark: string;

  @Column({ comment: '创建者', nullable: false, default: 0 })
  createUser: number;

  @Column({ comment: '更新者', nullable: true, default: 0 })
  updateUser: number;
}
