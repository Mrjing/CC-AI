import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'activity_config' })
export class ActivityConfigEntity extends BaseEntity {
  @Column({ comment: '活动名称', nullable: false, default: '', length: 255 })
  name: string;

  @Column({ comment: '活动介绍', nullable: true, default: '', length: 255 })
  intro: string;

  @Column({ comment: '参与方式', nullable: true, default: 0 })
  category: number;

  @Column({ comment: '活动图', nullable: true, default: '' })
  coverImg: string;

  @Column({ comment: '活动奖励', nullable: true, default: '', length: 512 })
  activityRewards: string;

  @Column({ comment: '活动开始时间', type: 'datetime', length: 0, nullable: false })
  startTime: Date;

  @Column({ comment: '活动结束时间', type: 'datetime', length: 0, nullable: false })
  endTime: Date;

  @Column({ comment: '活动状态 【0 上线 1 下线】', nullable: false, default: 0 })
  status: number;

  @Column({ comment: '创建者', nullable: false, default: 0 })
  createUser: number;

  @Column({ comment: '更新者', nullable: false, default: 0 })
  updateUser: number;
}
