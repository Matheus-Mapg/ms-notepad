import { Test, TestingModule } from '@nestjs/testing';
import { CreateNotepadUsecase } from './create-notepad.usecase';

describe('CreateNotepadUsecase', () => {
  let provider: CreateNotepadUsecase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateNotepadUsecase],
    }).compile();

    provider = module.get<CreateNotepadUsecase>(CreateNotepadUsecase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
