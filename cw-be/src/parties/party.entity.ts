import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Leader} from '../leaders/leader.entity'

@Entity()
export class Party {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({nullable: true})
    abbreviation: string

    @OneToMany(() => Leader, l => l.party)
    leaders: Leader[]
}
