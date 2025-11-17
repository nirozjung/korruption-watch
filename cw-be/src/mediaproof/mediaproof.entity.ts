import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Leader} from '../leaders/leader.entity'

@Entity()
export class MediaProof {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    corruptionCaseId: number

    @Column({nullable: true})
    meida_type: string

    @Column()
    url: string

    @Column()
    caption: string

}
