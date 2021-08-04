import { MigrationInterface, QueryRunner } from 'typeorm';

export class createStockData1628050812147 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const data: {
      day: string;
      owarine: number;
      hajimene: number;
      takane: number;
      yasune: number;
    }[] = [
      {
        day: '2021-7-1',
        owarine: 28707.04,
        hajimene: 28832.41,
        takane: 28833.17,
        yasune: 28624.8,
      },
      {
        day: '2021-7-2',
        owarine: 28783.28,
        hajimene: 28719.24,
        takane: 28849.32,
        yasune: 28688.63,
      },
      {
        day: '2021-7-5',
        owarine: 28598.19,
        hajimene: 28709.57,
        takane: 28731.07,
        yasune: 28581.08,
      },
      {
        day: '2021-7-6',
        owarine: 28643.21,
        hajimene: 28677.95,
        takane: 28748.23,
        yasune: 28587.61,
      },
      {
        day: '2021-7-7',
        owarine: 28366.95,
        hajimene: 28262.4,
        takane: 28434.99,
        yasune: 28161.75,
      },
      {
        day: '2021-7-8',
        owarine: 28118.03,
        hajimene: 28332.63,
        takane: 28366.76,
        yasune: 28118.03,
      },
      {
        day: '2021-7-9',
        owarine: 27940.42,
        hajimene: 27739.42,
        takane: 28000.02,
        yasune: 27419.4,
      },
      {
        day: '2021-7-12',
        owarine: 28569.02,
        hajimene: 28412.7,
        takane: 28595.12,
        yasune: 28405.6,
      },
      {
        day: '2021-7-13',
        owarine: 28718.24,
        hajimene: 28713.82,
        takane: 28852.31,
        yasune: 28699.04,
      },
      {
        day: '2021-7-14',
        owarine: 28608.49,
        hajimene: 28517.31,
        takane: 28696.8,
        yasune: 28482.82,
      },
      {
        day: '2021-7-15',
        owarine: 28279.09,
        hajimene: 28539.32,
        takane: 28571.72,
        yasune: 28240.21,
      },
      {
        day: '2021-7-16',
        owarine: 28003.08,
        hajimene: 28039.26,
        takane: 28201.3,
        yasune: 27847.35,
      },
      {
        day: '2021-7-19',
        owarine: 27652.74,
        hajimene: 27663.4,
        takane: 27792.52,
        yasune: 27493.63,
      },
      {
        day: '2021-7-20',
        owarine: 27388.16,
        hajimene: 27351.8,
        takane: 27564.52,
        yasune: 27330.15,
      },
      {
        day: '2021-7-21',
        owarine: 27548,
        hajimene: 27747.06,
        takane: 27882.43,
        yasune: 27438.07,
      },
      {
        day: '2021-7-26',
        owarine: 27833.29,
        hajimene: 27990.47,
        takane: 28036.47,
        yasune: 27786.44,
      },
      {
        day: '2021-7-27',
        owarine: 27970.22,
        hajimene: 27911.93,
        takane: 28036.23,
        yasune: 27862.69,
      },
      {
        day: '2021-7-28',
        owarine: 27581.66,
        hajimene: 27674.99,
        takane: 27809.86,
        yasune: 27466.99,
      },
      {
        day: '2021-7-29',
        owarine: 27782.42,
        hajimene: 27722.61,
        takane: 27798.05,
        yasune: 27663.41,
      },
      {
        day: '2021-7-30',
        owarine: 27283.59,
        hajimene: 27677.89,
        takane: 27699.35,
        yasune: 27272.49,
      },
      {
        day: '2021-8-2',
        owarine: 27781.02,
        hajimene: 27493.32,
        takane: 27834.6,
        yasune: 27493.32,
      },
      {
        day: '2021-8-3',
        owarine: 27641.83,
        hajimene: 27580.03,
        takane: 27724.45,
        yasune: 27492.4,
      },
    ];

    for (const row of data) {
      await queryRunner.query(
        `insert into stock (day, owarine, hajimene, takane, yasune) values ('${row.day}', ${row.owarine}, ${row.hajimene}, ${row.takane}, ${row.yasune})`,
        undefined,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "stock"`);
  }
}
