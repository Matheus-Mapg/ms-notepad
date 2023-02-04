import { Test, TestingModule } from '@nestjs/testing';
import { CreateFolderUsecase } from './create-folder.usecase';

describe('CreateFolderUsecase', () => {
  let provider: CreateFolderUsecase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFolderUsecase],
    }).compile();

    provider = module.get<CreateFolderUsecase>(CreateFolderUsecase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
