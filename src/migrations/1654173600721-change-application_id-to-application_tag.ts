import {MigrationInterface, QueryRunner} from "typeorm";

export class changeApplicationIdToApplicationTag1654173600721 implements MigrationInterface {
    name = 'changeApplicationIdToApplicationTag1654173600721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sliders\` ADD CONSTRAINT \`FK_ab87811ba146525c69d6d06a771\` FOREIGN KEY (\`application_tag\`) REFERENCES \`applications\`(\`tag\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sliders\` DROP FOREIGN KEY \`FK_ab87811ba146525c69d6d06a771\``);
    }

}
