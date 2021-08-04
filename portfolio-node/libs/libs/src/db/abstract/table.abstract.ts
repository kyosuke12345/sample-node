import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CommonColumn {
  @CreateDateColumn({
    name: 'create_dt',
    type: 'timestamp with time zone',
    select: false,
  })
  createDT?: Date;

  @UpdateDateColumn({
    name: 'update_dt',
    type: 'timestamp with time zone',
    select: false,
  })
  updateDT?: Date;

  @DeleteDateColumn({ name: 'del_dt', select: false })
  delDT?: Date;
}

export const COMMON_COLUMN_KEY_LIST: (keyof CommonColumn)[] = Object.keys(
  CommonColumn,
).map((key) => key as keyof CommonColumn);
