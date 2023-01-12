import { Module } from '@nestjs/common';
import { CreateNotepadRepository } from 'src/domain/repositories/notepad/create-notepad/create-notepad.repository';
import { CreateNotepadService } from 'src/domain/services/notepad/create-notepad/create-notepad.service';
import { CreateNotepadUsecase } from 'src/domain/use-cases/notepad/create-notepad.usecase/create-notepad.usecase';
import { CreateNotepadController } from './create-notepad/create-notepad.controller';

@Module({
  providers: [CreateNotepadService, CreateNotepadRepository, CreateNotepadUsecase],
  controllers: [CreateNotepadController]
})
export class NotepadModule { }
