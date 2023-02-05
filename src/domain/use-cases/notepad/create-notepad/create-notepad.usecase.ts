import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class CreateNotepadUsecase {

    generatedUUID() {
        return randomUUID()
    }

    async create(message) {
        const format: any = {
            id: this.generatedUUID(),
            name: message.name,
            note: message.note
        }

        if (message.folder) {
            format.folder = {
                id: message.folder.id || this.generatedUUID(),
                name: message.folder.name || message.folder
            }

            format.relation = {
                idNote: format.id,
                idFolder: format.folder.id
            }
        }

        return format
    }
}
