import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createUsers1597373428616 implements MigrationInterface {

    private table = new Table({
        name:'users',
        columns:[
            {
                name:'id',
                type:'integer',
                isPrimary:true,
                isGenerated:true,
                generationStrategy:'increment'
            },
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
