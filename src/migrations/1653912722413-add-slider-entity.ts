import {MigrationInterface, QueryRunner} from "typeorm";

export class addSliderEntity1653912722413 implements MigrationInterface {
    name = 'addSliderEntity1653912722413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`sliders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` tinyint NOT NULL DEFAULT 1, \`is_deleted\` tinyint NOT NULL DEFAULT 0, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`tile\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`application_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sliders\` ADD CONSTRAINT \`FK_c819e41c738f4ffdd946b65741f\` FOREIGN KEY (\`application_id\`) REFERENCES \`applications\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sliders\` DROP FOREIGN KEY \`FK_c819e41c738f4ffdd946b65741f\``);
        await queryRunner.query(`DROP TABLE \`sliders\``);
    }

}
