import { Entity, Column, PrimaryColumn } from "typeorm";


@Entity()
export class CarsDetails {
     @Column({
          unique: true,
          primary: true,
          generated: 'uuid',
          nullable:false,

     })
     identity: string;

     @Column({
          unique: true
     })
     chassisNumber: string;

     @Column()
     modelYear: number;

     @Column()
     typeApprovalNo: number;

     @Column()
     privatelyImported: number;

     @Column()
     firstRegistration: number;

     @Column()
     color: number;

     @Column()
     deregisteredDate: string;

     @Column()
     nextInspection: number;

     @Column()
     lastInspection: number;

     @Column()
     monthlyRegistration: number;

     @Column()
     lastRegistration: number;
}


