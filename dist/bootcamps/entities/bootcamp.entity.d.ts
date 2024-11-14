import { Course } from "src/courses/entities/course.entity";
export declare class Bootcamp {
    id: number;
    name: string;
    phone: string;
    adress: string;
    topics: string;
    averageRating: number;
    createdAt: Date;
    courses: Course[];
}
