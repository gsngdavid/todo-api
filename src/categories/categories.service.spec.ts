import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CategoriesRepository } from './categories.repository';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let repo: CategoriesRepository;
  const mockCategories = [{ id: '1', name: 'work' }];

  beforeEach(async () => {
    const fakeCategoriesRepository: Partial<CategoriesRepository> = {
      getCategories: jest.fn().mockResolvedValueOnce(mockCategories),
      createCategory: jest
        .fn()
        .mockImplementation(
          (category: { id: string; name: string } = mockCategories[0]) =>
            Promise.resolve({
              id: category.id,
              message: 'success',
            }),
        ),
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
    repo = module.get<CategoriesRepository>(CategoriesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCategories', () => {
    it('should get all categories', async () => {
      const categories = await service.getCategories();
      expect(repo.getCategories).toHaveBeenCalled();
      expect(categories).toEqual(mockCategories);
    });
  });

  describe('createCategory', () => {
    it('should throw an error if the category already exists', (done) => {
      service
        .createCategory('work')
        .then()
        .catch(() => done());
    });

    it('should return a success object when category is successfully created', async () => {
      const result = await service.createCategory('Personal');
      expect(repo.createCategory).toHaveBeenCalled();
      expect(result.id).toBeDefined();
      expect(result.message).toBeDefined();
    });
  });
});
