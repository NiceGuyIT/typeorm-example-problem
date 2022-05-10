import { Entity, Column, PrimaryColumn, JoinTable, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.js";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn({type: "integer"})
    id!: number | null;

    @PrimaryColumn({type: "varchar", length: 20})
    my_id: string;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column("integer")
    views: number;

    @Column()
    isPublished: boolean;

    @ManyToOne(type => User, (user) => user.photos,  {
        createForeignKeyConstraints: false,
    })
    @JoinColumn({name: "my_id", referencedColumnName: "my_id"})
    user!: User | null | undefined;

    constructor() {
        this.my_id = "";
        this.name = "";
        this.description = "";
        this.filename = "";
        this.views = 0;
        this.isPublished = false;
    }
}

