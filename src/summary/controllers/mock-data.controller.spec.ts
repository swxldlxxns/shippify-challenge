import { Test, TestingModule } from "@nestjs/testing";
import { MockDataController } from "./mock-data.controller";
import { SummaryService } from "../services/summary.service";
import { NestjsFormDataModule } from "nestjs-form-data";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Summary } from "../entities/summary.entity";
import { TypeService } from "../services/type.service";
import { SucursalService } from "../services/sucursal.service";
import { LastEventService } from "../services/last-event.service";
import { LastEvent } from "../entities/last-event.entity";
import { Sucursal } from "../entities/sucursal.entity";
import { Type } from "../entities/type.entity";

describe("MockDataController", () => {
  let controller: MockDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [NestjsFormDataModule],
      controllers: [MockDataController],
      providers: [
        LastEventService,
        SucursalService,
        SummaryService,
        TypeService,
        {
          provide: getRepositoryToken(LastEvent),
          useValue: LastEvent,
        },
        {
          provide: getRepositoryToken(Sucursal),
          useValue: Sucursal,
        },
        {
          provide: getRepositoryToken(Summary),
          useValue: Summary,
        },
        {
          provide: getRepositoryToken(Type),
          useValue: Type,
        },
      ],
    }).compile();

    controller = module.get<MockDataController>(MockDataController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
