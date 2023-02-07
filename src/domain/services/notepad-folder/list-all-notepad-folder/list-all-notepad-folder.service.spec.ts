import { Test, TestingModule } from '@nestjs/testing';
import { ListAllNotepadFolderService } from './list-all-notepad-folder.service';

describe('ListAllNotepadFolderService', () => {
  let service: ListAllNotepadFolderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListAllNotepadFolderService],
    }).compile();

    service = module.get<ListAllNotepadFolderService>(ListAllNotepadFolderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
