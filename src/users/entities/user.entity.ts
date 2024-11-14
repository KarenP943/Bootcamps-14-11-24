import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column(
        {
                type:'varchar',
                length:30      
        }
    ) 

    name : String;

    @Column({
        type:'text'}
    )
     email : String;
     @Column({
        type:'text'}
    )
     role : String;
     @Column({
        type:'text'}
    )
     password : String;
}

