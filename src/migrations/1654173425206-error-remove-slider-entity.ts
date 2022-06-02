import {MigrationInterface, QueryRunner} from "typeorm";

export class errorRemoveSliderEntity1654173425206 implements MigrationInterface {
    name = 'errorRemoveSliderEntity1654173425206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sliders\` DROP COLUMN \`application_tag\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sliders\` ADD \`application_tag\` varchar(255) NOT NULL`);
    }

}
