import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class contact{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    sns: string;

    @Column()
    phone: number;

    @Column()
    address: string;
}