import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Folder } from 'src/data/database/typeorm/entities/Folder';
import { Notepad } from 'src/data/database/typeorm/entities/Notepad';
import { NotepadFolder } from 'src/data/database/typeorm/entities/NotepadFolder';
import { CreateFolderRepository } from 'src/domain/repositories/folder/create-folder/create-folder.repository';
import { CreateNotepadFolderRepository } from 'src/domain/repositories/notepad-folder/create-notepad-folder.repository/create-notepad-folder.repository';
import { CreateNotepadRepository } from 'src/domain/repositories/notepad/create-notepad/create-notepad.repository';
import { CreateNotepadService } from 'src/domain/services/notepad/create-notepad/create-notepad.service';
import { CreateNotepadUsecase } from 'src/domain/use-cases/notepad/create-notepad/create-notepad.usecase';
import { CreateNotepadController } from './create-notepad/create-notepad.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Folder, Notepad, NotepadFolder
    ])
  ],
  providers: [CreateNotepadService, CreateNotepadRepository, CreateNotepadUsecase, CreateFolderRepository, CreateNotepadFolderRepository],
  controllers: [CreateNotepadController]
})
export class NotepadModule { }
