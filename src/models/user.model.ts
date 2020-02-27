import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import bcrypt from 'bcrypt';


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fistname: string;

    @Column()
    lastname: string;

    @Column()
    username: string;

    @Column()
    password: string; 

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
      }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
      }

};
