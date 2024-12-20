import { Check, Column, Entity, JoinColumn, OneToMany, OneToOne, TreeLevelColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'wujie' })
export class WujieEntity extends BaseEntity {
  @Column({ comment: '用户ID' })
  userId: number;

  @Column({ comment: '作画任务key', nullable: false })
  key: string;

  @Column({ nullable: true, enumName: 'status' })
  status: number;

  @Column({ comment: '无界生成的图片cdn地址', nullable: true })
  wujie_picture_url: string;

  @Column({ comment: '基于无界图片上传到腾讯云COS的图片地址', nullable: true })
  qcloud_cos_url: string;

  @Column({ comment: '开始生成的时间戳', nullable: true })
  start_gen_time: number;

  @Column({ comment: '实际完成时间戳', nullable: true })
  complete_time: number;

  @Column({ comment: '完成百分比', nullable: true })
  complete_percent: number;

  @Column({ comment: '当前任务前排队任务的数量', nullable: true })
  queue_before_num: number;

  @Column({ comment: '图片是否涉黄', nullable: true })
  involve_yellow: boolean;

  @Column({ comment: '作画审核详情 JSON', nullable: true })
  audit_info: string;

  @Column({ comment: '作画失败错误码', nullable: true })
  fail_code: number;

  @Column({ comment: '作画失败错误信息', nullable: true })
  fail_message: string;

  @Column({ comment: '输入模型提示词(中文)', nullable: true, length: 500 })
  input_model_prompt: string;

  @Column({ comment: '模型提示词(已翻译)', nullable: false, length: 500 })
  model_prompt: string;

  @Column({ comment: '作画的积分消耗', nullable: true })
  integral_cost: number;

  @Column({ comment: '作画的积分消耗提示词', nullable: true })
  integral_cost_message: string

  @Column({ comment: '是否删除 0: 未删除 1: 已删除', nullable: true, default: 0 })
  isDelete: number;
}
