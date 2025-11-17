import {Body, Controller, Get, Param, Post} from '@nestjs/common'
import {LeadersService} from './leaders.service'
import {CreateLeaderDto} from './dto/create-leader.dto'

@Controller('leaders')
export class LeadersController {
    constructor(private readonly leadersService: LeadersService) {
    }


    @Get()
    findAll() {
        return this.leadersService.findAll()
    }


    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.leadersService.findOne(id)
    }


    @Post()
    create(@Body() dto: CreateLeaderDto) {
        return this.leadersService.create(dto)
    }
}
