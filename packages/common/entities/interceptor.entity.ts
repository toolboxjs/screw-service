import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('interceptor')
export class InterceptorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  request: string;

  @Column({ default: '' })
  response_on_fullfilled: string;

  @Column({ default: '' })
  response_on_rejected: string;

  @CreateDateColumn()
  created_time: Date;

  @UpdateDateColumn()
  updated_time: Date;
}
