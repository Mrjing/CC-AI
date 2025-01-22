import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'account_balance' })
export class AccountBalanceEntity extends BaseEntity {
  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @Column({ comment: '积分余额', type: 'int', default: 0, nullable: false })
  balance: number;

  @Column({ comment: '已用积分', type: 'int', default: 0, nullable: false })
  usedBalance: number;
}
