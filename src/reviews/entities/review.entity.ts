import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    idReview:number;

    @Column({
                type:'text'   
    }) 
    title: string;
    
    @Column({
        type:'text',
        nullable:true
    }) 
        comment: string;
    
        @Column({
        type:'integer',
    }) 
    rating: number;

}
