import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    password: string

    @Column()
    username: string

    @AfterInsert()
    logInsert(){
        console.log('Inserted User With Id', this.id)
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User With Id', this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed User With Id', this.id)
    }

}