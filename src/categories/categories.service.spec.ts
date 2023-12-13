import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repository';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const fakeCategoriesRepository: Partial<CategoriesRepository> = {
      getCategories: () => Promise.resolve([]),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: CategoriesRepository,
          useValue: fakeCategoriesRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array', async () => {
    const categories = await service.getCategories();
    expect(categories).toBeInstanceOf(Array);
  });
});
