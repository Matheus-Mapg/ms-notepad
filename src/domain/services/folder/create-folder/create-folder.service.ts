import { Injectable } from '@nestjs/common';
import { CreateFolderRepository } from 'src/domain/repositories/folder/create-folder/create-folder.repository';
import { CreateFolderUsecase } from 'src/domain/use-cases/folder/create-folder.usecase/create-folder.usecase';

@Injectable()
export class CreateFolderService {

    constructor(private readonly repository: CreateFolderRepository, private readonly usecase: CreateFolderUsecase) { }

    async create(payload) {

        const format = await this.usecase.formatRequisition(payload)

        const verify = await this.repository.verifyName(format.name)

        if (verify.length > 0) {
            return {
                error: true,
                message: `A pasta ${format.name} já existe!`,
                data: {
                    status: 422
                }
            }
        }

        const create = await this.repository.create(format)

        return {
            error: false,
            message: 'Pasta criada com sucesso!',
            data: create
        }

    }
}
