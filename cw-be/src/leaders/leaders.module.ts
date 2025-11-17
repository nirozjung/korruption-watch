import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {LeadersController} from './leaders.controller'
import {LeadersService} from './leaders.service'
import {Leader} from './leader.entity'
import {Party} from '../parties/party.entity'
import {CorruptionCase} from '../cases/case.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Leader, Party, CorruptionCase])],
    controllers: [LeadersController],
    providers: [LeadersService],
})
export class LeadersModule {
}
