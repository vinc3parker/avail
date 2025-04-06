import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fullName: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ default: "local" })
    provider: "local" | "google" | "apple";
}