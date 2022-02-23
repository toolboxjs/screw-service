import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_time: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated_time = new Date();
  }
}
