import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateNotepadUsecase {

    generatedUUID() {
        return randomUUID()
    }

    async create(message) {
        const format = {
            id: this.generatedUUID(),
            name: message.name,
            note: message.note
        }

        return format
    }
}
