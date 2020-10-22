import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602622785355 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "home_society_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "ImageHomeSociety",
            columnNames: ["home_society_id"],
            referencedTableName: "home_societies",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }
}
