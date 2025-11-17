import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    fullName: string

    @Column()
    email: string

    @Column()
    username: string // unique

    @Column()
    password: string // should be hashed password

    @Column()
    role: string // separate role Enum, having ADMIN_EDITOR
}
