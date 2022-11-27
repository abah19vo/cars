import { Entity, Column, PrimaryColumn } from "typeorm";


@Entity()
export class CarsDetails {
     @Column({
          unique: true,
          primary: true,
          generated: 'uuid',
          nullable: false,
          length: 200,

     })
     identity: string;

     @Column({
          unique: true,
          length: 200,
     })
     chassisNumber: string;

     @Column({type: 'bigint'})
     modelYear: number;

     @Column({type: 'bigint'})
     typeApprovalNo: number;

     @Column({type: 'bigint'})
     privatelyImported: number;

     @Column({type: 'bigint'})
     firstRegistration: number;

     @Column({ length: 200 })
     color: string;

     @Column({type: 'bigint'})
     deregisteredDate: number;

     @Column({type: 'bigint'})
     nextInspection: number;

     @Column({type: 'bigint'})
     lastInspection: number;

     @Column({type: 'bigint'})
     monthlyRegistration: number;

     @Column({type: 'bigint'})
     lastRegistration: number;
}


