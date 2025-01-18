import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'study_resource' })
export class StudyResourceEntity extends BaseEntity {
  @Column({ comment: '学习视频名称', nullable: false, default: '', length: 32 })
  name: string;

  @Column({ comment: '学习视频介绍', nullable: true, default: '', length: 512 })
  intro: string;

  @Column({ comment: '学习视频级别【基本 0 高阶 1】', default: 0, nullable: false })
  level: number;

  @Column({ comment: '学习视频分类', nullable: true, default: 0 })
  category: number;

  @Column({ comment: '视频地址', nullable: true, default: '' })
  src: string;

  @Column({ comment: '观看人数', nullable: false, default: 0 })
  viewerNum: number;

  @Column({ comment: '播放次数', nullable: false, default: 0 })
  playNum: number;

  @Column({ comment: '创建者', nullable: false, default: 0 })
  createUser: number;

  @Column({ comment: '更新者', nullable: false, default: 0 })
  updateUser: number;
}
