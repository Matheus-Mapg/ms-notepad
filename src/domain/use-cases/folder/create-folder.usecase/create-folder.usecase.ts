import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class CreateFolderUsecase {

    generateUUID() {
        return crypto.randomUUID()
    }

    async formatRequisition(payload) {

        const format = {
            id: this.generateUUID(),
            name: payload.name
        }

        return format
    }
}
