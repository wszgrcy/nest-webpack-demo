import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as moment from "moment";
console.log(moment);
import val from "./config/t1.debug";
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('版本',val)
  }
}
