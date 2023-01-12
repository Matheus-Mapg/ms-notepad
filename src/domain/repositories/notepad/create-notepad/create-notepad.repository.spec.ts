import { Test, TestingModule } from '@nestjs/testing';
import { CreateNotepadRepository } from './create-notepad.repository';

describe('CreateNotepadRepository', () => {
  let provider: CreateNotepadRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateNotepadRepository],
    }).compile();

    provider = module.get<CreateNotepadRepository>(CreateNotepadRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
