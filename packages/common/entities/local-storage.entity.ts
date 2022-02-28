import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('local_storage')
export class LocalStorageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  key: string;

  @CreateDateColumn()
  created_time: Date;

  @UpdateDateColumn()
  updated_time: Date;
}
