import { Module } from "@nestjs/common";
import { SummaryService } from "./services/summary.service";
import { MockDataController } from "./controllers/mock-data.controller";
import { NestjsFormDataModule } from "nestjs-form-data";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Summary } from "./entities/summary.entity";
import { LastEvent } from "./entities/last-event.entity";
import { Sucursal } from "./entities/sucursal.entity";
import { Type } from "../types/entities/type.entity";
import { LastEventService } from "./services/last-event.service";
import { SucursalService } from "./services/sucursal.service";
import { TypesService } from "../types/services/types.service";
import { SummaryController } from "./controllers/summary.controller";

@Module({
  imports: [
    NestjsFormDataModule,
    TypeOrmModule.forFeature([LastEvent, Sucursal, Summary, Type]),
  ],
  controllers: [MockDataController, SummaryController],
  providers: [LastEventService, SucursalService, SummaryService, TypesService],
})
export class SummaryModule {}
