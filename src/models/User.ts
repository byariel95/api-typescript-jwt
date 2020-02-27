import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fistname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string; 


}
