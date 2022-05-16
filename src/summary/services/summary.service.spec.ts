import { Test, TestingModule } from "@nestjs/testing";
import { SummaryService } from "./summary.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Summary } from "../entities/summary.entity";

describe("SummaryService", () => {
  let service: SummaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SummaryService,
        {
          provide: getRepositoryToken(Summary),
          useValue: Summary,
        },
      ],
    }).compile();

    service = module.get<SummaryService>(SummaryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
