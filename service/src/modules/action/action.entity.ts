/* action实体设计：sourceType: 源对象类型, sourceId: 源对象ID, targetType: 目标对象类型, targetId: 目标对象ID, actionType: 交互动作类型
  表作用：满足用户对于不同对象的不同操作，如用户对于其他用户的图片的点赞、收藏、评论等操作，用户对于其他作者的关注等操作
*/

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';


@Entity({ name: 'action' })
export class ActionEntity extends BaseEntity {
  @Column({ comment: '源对象类型', length: 50 })
  sourceType: string;

  @Column({ comment: '源对象ID' })
  sourceId: number;

  @Column({ comment: '目标对象类型', length: 50 })
  targetType: string;

  @Column({ comment: '目标对象ID' })
  targetId: number;

  // @Column({ comment: '目标附属对象类型', length: 50, nullable: true })
  // subTargetType: string;

  // @Column({ comment: '目标附属对象ID', nullable: true })
  // subTargetId: number;

  @Column({ comment: '交互动作类型: 关注 FOLLOW 喜欢 LIKE', length: 50 })
  actionType: string;

  @Column({ comment: '交互内容: 评论/回复', length: 500 })
  actionContent: string;
}