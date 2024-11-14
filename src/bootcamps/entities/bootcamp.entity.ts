import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('bootcamps')

export class Bootcamp {

    @PrimaryGeneratedColumn()
    id:number;

    @Column(
        {
                type:'varchar',
                length:30      
        }
    ) 
    name: string;
    
    @Column({
        type:'integer'
     })
    phone: string;


    @Column({
        type:'text',
        nullable:true
    })
    adress: string;

    @Column({type:'text'})
    topics: string;
    @Column({
        type:'double',
        name:'average_rating'
    })
    averageRating:number;
    @Column({
        type:'timestamp', 
        default:()=>'CURRENT_TIMESTAMP'
    })
    createdAt:Date;

@OneToMany((Course)=>Course, 
            (course:Course) =>course.bootcamp )  
        courses:Course[]
}
