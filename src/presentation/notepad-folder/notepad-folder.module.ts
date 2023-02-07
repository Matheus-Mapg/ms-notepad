import { Module } from '@nestjs/common';
import { ListAllNotepadFolderController } from './list-all-notepad-folder/list-all-notepad-folder.controller';

@Module({
  controllers: [ListAllNotepadFolderController]
})
export class NotepadFolderModule { }
