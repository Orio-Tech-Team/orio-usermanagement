import {MigrationInterface, QueryRunner} from "typeorm";

export class accountNumberChangeRefrenceNumber1652874565922 implements MigrationInterface {
    name = 'accountNumberChangeRefrenceNumber1652874565922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`account_number\` \`refrence_number\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`refrence_number\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`refrence_number\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`refrence_number\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`refrence_number\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`refrence_number\` \`account_number\` varchar(255) NULL`);
    }

}
