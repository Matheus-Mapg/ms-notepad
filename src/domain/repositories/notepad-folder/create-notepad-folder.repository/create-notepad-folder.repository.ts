import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotepadFolder } from 'src/data/database/typeorm/entities/NotepadFolder';
import { Repository } from 'typeorm';

@Injectable()
export class CreateNotepadFolderRepository {

    constructor(@InjectRepository(NotepadFolder) private readonly repository: Repository<NotepadFolder>) { }

    async create(notepadFolder) {
        return await this.repository.save(notepadFolder)
    }
}
