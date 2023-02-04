import { Injectable } from '@nestjs/common';
import { CreateNotepadRepository } from 'src/domain/repositories/notepad/create-notepad/create-notepad.repository';
import { CreateNotepadUsecase } from 'src/domain/use-cases/notepad/create-notepad.usecase/create-notepad.usecase';

@Injectable()
export class CreateNotepadService {

    constructor(private readonly usecase: CreateNotepadUsecase, private readonly repository: CreateNotepadRepository) { }

    async create(message) {
        const format = await this.usecase.create(message)

        const verify = await this.repository.verifyName(format.name)

        if (verify.length > 0) {
            return {
                error: true,
                message: `O ${format.name} já existe!`,
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
