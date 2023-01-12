import { Injectable } from '@nestjs/common';
import { CreateNotepadUsecase } from 'src/domain/use-cases/notepad/create-notepad.usecase/create-notepad.usecase';

@Injectable()
export class CreateNotepadService {

    constructor(private readonly usecase: CreateNotepadUsecase) { }

    async create(message) {
        const format = await this.usecase.create(message)

    }
}
