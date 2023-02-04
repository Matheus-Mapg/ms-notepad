import { Test, TestingModule } from '@nestjs/testing';
import { CreateFolderService } from './create-folder.service';

describe('CreateFolderService', () => {
  let service: CreateFolderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFolderService],
    }).compile();

    service = module.get<CreateFolderService>(CreateFolderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
