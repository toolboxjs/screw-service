import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('i18n_field')
export class I18nFieldEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  key: string;

  @Column({ default: '' })
  alias: string;

  @Column({ default: '' })
  zh_cn: string;

  @Column({ default: '' })
  en_us: string;

  @CreateDateColumn()
  created_time: Date;

  @UpdateDateColumn()
  updated_time: Date;
}
