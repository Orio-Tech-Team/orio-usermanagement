import {MigrationInterface, QueryRunner} from "typeorm";

export class addPasswordRequiredColumnApplicationEntity1653903500875 implements MigrationInterface {
    name = 'addPasswordRequiredColumnApplicationEntity1653903500875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applications\` ADD \`password_required\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applications\` DROP COLUMN \`password_required\``);
    }

}
