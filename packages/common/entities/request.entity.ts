import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { RequestMethod } from '../enums/request-method.enum';

@Entity('request')
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name_en: string;

  @Column({ default: '' })
  name_zh: string;

  @Column({ type: 'enum', enum: RequestMethod, default: RequestMethod.GET })
  method: RequestMethod;

  @Column({ default: '' })
  path: string;

  @Column({ type: 'json' })
  headers: Record<string, string>;

  @Column({ type: 'json' })
  body: Record<string, any>;

  @Column({ type: 'json' })
  response: Record<string, any>;

  @CreateDateColumn()
  created_time: Date;

  @UpdateDateColumn()
  updated_time: Date;
}
