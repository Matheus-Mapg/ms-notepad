import { Injectable } from '@nestjs/common';
import { CreateFolderRepository } from 'src/domain/repositories/folder/create-folder.repository/create-folder.repository';
import { CreateNotepadRepository } from 'src/domain/repositories/notepad/create-notepad/create-notepad.repository';
import { CreateNotepadUsecase } from 'src/domain/use-cases/notepad/create-notepad.usecase/create-notepad.usecase';

@Injectable()
export class CreateNotepadService {

    constructor(private readonly usecase: CreateNotepadUsecase, private readonly repository: CreateNotepadRepository, private readonly repositoryFolder: CreateFolderRepository) { }

    async create(message) {
        const format = await this.usecase.create(message)

        if (message.folder && !message.folder.id) {
            const verifyFolder = await this.repositoryFolder.verifyName(message.folder.name || message.folder)

            if (verifyFolder.length > 0) {
                return {
                    error: true,
                    message: `A pasta ${message.folder} já existe!`,
                    data: { status: 422 }
                }
            }

            const folder = await this.repositoryFolder.create(format.folder)
        }

        const verify = await this.repository.verifyName(format.name)

        if (verify.length > 0) {
            return {
                error: true,
                message: `A nota ${format.name} já existe!`,
                data: { status: 422 }
            }
        }

        const save = await this.repository.create(format)

        return {
            error: false,
            message: 'Nota criada com sucesso!',
            data: save
        }

    }
}
