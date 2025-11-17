import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Leader} from '../leaders/leader.entity'

@Entity()
export class CorruptionCase {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column('text')
    description: string

    @Column({type: 'numeric', nullable: true})
    amountInvolved?: string

    @Column({type: 'int', nullable: true})
    year?: number

    @Column({default: 'ALLEGED'}) // need to make this Enum (ALLEGED, PROVEN, UNDER INVESTIGATION)
    status!: string

    @Column({type: 'json', nullable: true})
    sources?: any

    @ManyToOne(() => Leader, l => l.cases, {nullable: true})
    leader?: Leader
}
