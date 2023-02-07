import { Module } from '@nestjs/common';
import { TypeormModule } from './data/database/typeorm/typeorm.module';
import { FolderModule } from './presentation/folder/folder.module';
import { NotepadModule } from './presentation/notepad/notepad.module';
import { NotepadFolderModule } from './presentation/notepad-folder/notepad-folder.module';
import { ListAllNotepadFolderService } from './domain/services/notepad-folder/list-all-notepad-folder/list-all-notepad-folder.service';

@Module({
  imports: [TypeormModule, NotepadModule, FolderModule, NotepadFolderModule],
  controllers: [],
  providers: [ListAllNotepadFolderService],
})
export class AppModule { }
