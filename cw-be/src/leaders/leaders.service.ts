import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Leader} from './leader.entity'
import {CreateLeaderDto} from './dto/create-leader.dto'

@Injectable()
export class LeadersService {
    constructor(@InjectRepository(Leader) private repo: Repository<Leader>) {
    }

    findAll() {
        return this.repo.find({relations: ['party', 'cases']})
    }

    findOne(id: string) {
        return this.repo.findOne({where: {id}, relations: ['party', 'cases']})
    }

    create(dto: CreateLeaderDto) {
        const l = this.repo.create(dto as any)
        return this.repo.save(l)
    }
}

