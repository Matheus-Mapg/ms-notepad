import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from 'src/data/database/typeorm/entities/Folder';
import { Repository } from 'typeorm';

@Injectable()
export class CreateFolderRepository {
    constructor(@InjectRepository(Folder) private readonly repository: Repository<Folder>) { }

    async create(folder) {
        return await this.repository.save(folder)
    }
}
