import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Party} from '../parties/party.entity'
import {CorruptionCase} from '../cases/case.entity'


@Entity()
export class Leader {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    fullName: string

    @Column({nullable: true})
    photoUrl: string

    @ManyToOne(() => Party, p => p.leaders, {nullable: true})
    party: Party

    @OneToMany(() => CorruptionCase, c => c.leader)
    cases: CorruptionCase[]

    @Column({type: 'int', default: 0})
    corruptionScore: number
}
