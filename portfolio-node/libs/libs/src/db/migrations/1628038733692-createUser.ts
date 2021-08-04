import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUser1628038733692 implements MigrationInterface {
  name = 'createUser1628038733692';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_info" ("create_dt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_dt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "del_dt" TIMESTAMP, "id" SERIAL NOT NULL, "email" character varying(80) NOT NULL, "password" character varying(60) NOT NULL, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_75798a41b0aaf7b5575094217d" ON "user_info" ("email") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_75798a41b0aaf7b5575094217d"`);
    await queryRunner.query(`DROP TABLE "user_info"`);
  }
}
