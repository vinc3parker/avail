import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ default: "local" })
    provider: string;
}