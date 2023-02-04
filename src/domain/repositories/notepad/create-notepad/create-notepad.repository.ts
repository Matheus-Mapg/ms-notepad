import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notepad } from 'src/data/database/typeorm/entities/Notepad';
import { Repository } from 'typeorm';

@Injectable()
export class CreateNotepadRepository {
    constructor(@InjectRepository(Notepad) private readonly repository: Repository<Notepad>) { }

    async create(notepad) {
        return await this.repository.save(notepad)
    }

    async verifyName(name) {
        const result = await this.repository.find({ where: { name } })

        return JSON.parse(JSON.stringify(result))
    }
}
