import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateNotepadService } from 'src/domain/services/notepad/create-notepad/create-notepad.service';

@Controller('create-notepad')
export class CreateNotepadController {

    constructor(private readonly service: CreateNotepadService) { }

    @MessagePattern({ cmd: 'create-notepad' })
    async create(@Payload() message) {
        return await this.service.create(message)

    }
}
