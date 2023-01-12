import { Test, TestingModule } from '@nestjs/testing';
import { CreateNotepadService } from './create-notepad.service';

describe('CreateNotepadService', () => {
  let service: CreateNotepadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateNotepadService],
    }).compile();

    service = module.get<CreateNotepadService>(CreateNotepadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
