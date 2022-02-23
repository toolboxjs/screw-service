import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('local_storage')
export class LocalStorageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  key: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_time: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated_time = new Date();
  }
}
