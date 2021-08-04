import { MigrationInterface, QueryRunner } from 'typeorm';

export class createStock1628050727887 implements MigrationInterface {
  name = 'createStock1628050727887';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "stock" ("day" date NOT NULL, "owarine" double precision NOT NULL, "hajimene" double precision NOT NULL, "takane" double precision NOT NULL, "yasune" double precision NOT NULL, CONSTRAINT "PK_55a27242090141c91b2f744c0df" PRIMARY KEY ("day")); COMMENT ON COLUMN "stock"."owarine" IS '終値'; COMMENT ON COLUMN "stock"."hajimene" IS '始値'; COMMENT ON COLUMN "stock"."takane" IS '高値'; COMMENT ON COLUMN "stock"."yasune" IS '安値'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "stock"`);
  }
}
