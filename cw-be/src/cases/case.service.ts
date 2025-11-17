import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Case} from "../cases/case.entity";
import {Repository} from "typeorm";

@Injectable()
export class CaseService {
    constructor(@InjectRepository(Case) private repo: Repository<Case>) {
    }

    findAll() {
        return this.repo.find();
    }
}
