import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
    JoinColumn,
    PrimaryGeneratedColumn,
    Unique,
} from "typeorm";
import { Photo } from "./photo.js";

@Entity()
@Unique(["id", "my_id"])
export class User {

    @PrimaryGeneratedColumn({type: "integer"})
    id!: number | null;

    @PrimaryColumn({type: "varchar", length: 20, unique: true})
    my_id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Photo, (photos) => photos.user)
    @JoinColumn({name: "my_id", referencedColumnName: "my_id"})
    photos!: Photo[] | null | undefined;

    constructor() {
        this.my_id = "";
        this.firstName = "";
        this.lastName = "";
        this.age = 0;
    }
}

