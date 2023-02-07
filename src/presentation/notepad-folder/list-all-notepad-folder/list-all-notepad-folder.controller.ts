import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ListAllNotepadFolderService } from 'src/domain/services/notepad-folder/list-all-notepad-folder/list-all-notepad-folder.service';

@Controller('list-all-notepad-folder')
export class ListAllNotepadFolderController {
    constructor(private readonly service: ListAllNotepadFolderService) { }

    @MessagePattern({ cmd: 'list-all-notepad-folder' })
    async list(@Payload() message) {
        const response = await this.service.list(message)

        return response

    }
}
