import { Test, TestingModule } from '@nestjs/testing';
import { CreateFolderRepository } from './create-folder.repository';

describe('CreateFolderRepository', () => {
  let provider: CreateFolderRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFolderRepository],
    }).compile();

    provider = module.get<CreateFolderRepository>(CreateFolderRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
