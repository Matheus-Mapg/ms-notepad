import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('create-folder')
export class CreateFolderController {

    @MessagePattern({ cmd: 'create-folder' })
    async create(@Payload() payload) {

    }
}
