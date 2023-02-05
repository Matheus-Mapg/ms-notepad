import { Test, TestingModule } from '@nestjs/testing';
import { CreateNotepadFolderRepository } from './create-notepad-folder.repository';

describe('CreateNotepadFolderRepository', () => {
  let provider: CreateNotepadFolderRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateNotepadFolderRepository],
    }).compile();

    provider = module.get<CreateNotepadFolderRepository>(CreateNotepadFolderRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
