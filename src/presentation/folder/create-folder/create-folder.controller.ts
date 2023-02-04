import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateFolderService } from 'src/domain/services/folder/create-folder/create-folder.service';

@Controller('create-folder')
export class CreateFolderController {
    constructor(private readonly service: CreateFolderService) { }

    @MessagePattern({ cmd: 'create-folder' })
    async create(@Payload() payload) {
        const response = await this.service.create(payload)

        return response
    }
}
