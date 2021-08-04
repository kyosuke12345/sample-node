import { TYPEORM_DATE_FORMAT } from '@app/libs/utils/common';
import { isString } from '@app/libs/utils/typeguard';
import { parse } from 'date-fns';
import { AfterLoad, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('stock')
export class Stock {
  @PrimaryColumn({ type: 'date' })
  day: Date;

  @Column({ type: 'double precision', comment: '終値' })
  owarine: number;

  @Column({ type: 'double precision', comment: '始値' })
  hajimene: number;

  @Column({ type: 'double precision', comment: '高値' })
  takane: number;

  @Column({ type: 'double precision', comment: '安値' })
  yasune: number;

  @AfterLoad()
  afterLoad() {
    if (isString(this.day)) {
      this.day = parse(this.day, TYPEORM_DATE_FORMAT, new Date());
    }
  }
}
