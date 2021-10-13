import { Controller, Get, HttpContext, UseInterceptor } from "../deps.ts";
import { DateInterceptor } from "../interceptors/date.interceptor.ts";

@Controller("/cats")
export default class CatsController {
  @UseInterceptor(DateInterceptor)
  @Get("/")
  getOne(context: HttpContext) {
    console.log(context.state);
    return { name: "Michael Scott", cute: true, crazy: true };
  }
}
