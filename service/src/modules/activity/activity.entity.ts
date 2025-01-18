import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { ActivityConfigEntity } from '../activityConfig/activityConfig.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'activity' })
export class ActivityEntity extends BaseEntity {
  @OneToOne(() => ActivityConfigEntity)
  @JoinColumn()
  activity: ActivityConfigEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @Column({ comment: '参与时间', type: 'datetime', length: 0, nullable: false })
  joinTime: Date;

  @Column({ comment: '参与内容(参赛作品链接)', nullable: false, default: '', length: 512 })
  entry: string;

  @Column({ comment: '删除标识', type: 'boolean', nullable: false, default: false })
  isDeleted: boolean;
}
