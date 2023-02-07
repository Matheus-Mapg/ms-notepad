import { Test, TestingModule } from '@nestjs/testing';
import { ListAllNotepadFolderController } from './list-all-notepad-folder.controller';

describe('ListAllNotepadFolderController', () => {
  let controller: ListAllNotepadFolderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListAllNotepadFolderController],
    }).compile();

    controller = module.get<ListAllNotepadFolderController>(ListAllNotepadFolderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
