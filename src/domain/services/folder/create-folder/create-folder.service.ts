import { Injectable } from '@nestjs/common';
import { CreateFolderRepository } from 'src/domain/repositories/folder/create-folder.repository/create-folder.repository';
import { CreateFolderUsecase } from 'src/domain/use-cases/folder/create-folder.usecase/create-folder.usecase';

@Injectable()
export class CreateFolderService {

    constructor(private readonly repository: CreateFolderRepository, private readonly usecase: CreateFolderUsecase) { }

    async create(payload) {

        const format = await this.usecase.formatRequisition(payload)

        const create = await this.repository.create(format)

        return {
            error: false,
            message: 'Pasta criada com sucesso!',
            data: create
        }

    }
}
