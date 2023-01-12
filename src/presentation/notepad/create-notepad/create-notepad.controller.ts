import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateNotepadService } from 'src/domain/services/notepad/create-notepad/create-notepad.service';

@Controller('create-notepad')
export class CreateNotepadController {

    constructor(private readonly service: CreateNotepadService) { }

    @MessagePattern({ cmd: 'teste' })
    async create(@Payload() message) {
        console.log(message)

        return await this.service.create(message)

    }
}
