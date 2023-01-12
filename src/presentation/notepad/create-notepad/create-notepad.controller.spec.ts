import { Test, TestingModule } from '@nestjs/testing';
import { CreateNotepadController } from './create-notepad.controller';

describe('CreateNotepadController', () => {
  let controller: CreateNotepadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateNotepadController],
    }).compile();

    controller = module.get<CreateNotepadController>(CreateNotepadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
