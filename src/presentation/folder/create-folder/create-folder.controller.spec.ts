import { Test, TestingModule } from '@nestjs/testing';
import { CreateFolderController } from './create-folder.controller';

describe('CreateFolderController', () => {
  let controller: CreateFolderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateFolderController],
    }).compile();

    controller = module.get<CreateFolderController>(CreateFolderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
