import { Module } from '@nestjs/common';
import { TypeormModule } from './data/database/typeorm/typeorm.module';
import { NotepadModule } from './presentation/notepad/notepad.module';

@Module({
  imports: [TypeormModule, NotepadModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
