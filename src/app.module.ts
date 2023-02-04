import { Module } from '@nestjs/common';
import { TypeormModule } from './data/database/typeorm/typeorm.module';
import { FolderModule } from './presentation/folder/folder.module';
import { NotepadModule } from './presentation/notepad/notepad.module';

@Module({
  imports: [TypeormModule, NotepadModule, FolderModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
