import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllNotepadFolderService {

    async list(message) {
        console.log(message)
    }
}
