import { Module } from '@nestjs/common';
import { CreateFolderRepository } from 'src/domain/repositories/folder/create-folder.repository/create-folder.repository';
import { CreateFolderService } from 'src/domain/services/folder/create-folder/create-folder.service';
import { CreateFolderUsecase } from 'src/domain/use-cases/folder/create-folder.usecase/create-folder.usecase';
import { CreateFolderController } from './create-folder/create-folder.controller';

@Module({
  controllers: [CreateFolderController],
  providers: [CreateFolderService, CreateFolderRepository, CreateFolderUsecase]
})
export class FolderModule { }
