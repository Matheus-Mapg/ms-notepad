import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from 'src/data/database/typeorm/entities/Folder';
import { CreateFolderRepository } from 'src/domain/repositories/folder/create-folder/create-folder.repository';
import { CreateFolderService } from 'src/domain/services/folder/create-folder/create-folder.service';
import { CreateFolderUsecase } from 'src/domain/use-cases/folder/create-folder.usecase/create-folder.usecase';
import { CreateFolderController } from './create-folder/create-folder.controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    Folder
  ])],
  controllers: [CreateFolderController],
  providers: [CreateFolderService, CreateFolderRepository, CreateFolderUsecase]
})
export class FolderModule { }
