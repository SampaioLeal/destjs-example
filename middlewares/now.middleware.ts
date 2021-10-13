import { DestMiddleware, HttpContext } from "../deps.ts";

export default class DateMiddleware implements DestMiddleware {
  use(context: HttpContext) {
    context.state.nowMiddleware = Date.now();
  }
}
