import {Authenticated, Controller, Get, MergeParams, PathParams, QueryParams, UseBefore} from "@tsed/common";
import {Operation} from "@tsed/swagger";
import {Hidden} from "../../../../../packages/swagger/src";
import {Test2Middleware} from "../../middlewares/middleware";

@Controller("/:eventId/tasks")
@MergeParams()
@UseBefore(Test2Middleware)
@Authenticated({options: "options"})
export class TaskCtrl {
  @Get("/")
  @Operation({tags: ["api", "task"]})
  async get(@PathParams("test") value: string, @PathParams("eventId") id: string) {
    return {value, id};
  }

  @Get("/hidden")
  @Hidden()
  async getHidden() {
    return {};
  }

  @Get("/hiddenparam")
  async getHiddenParams(
    @Hidden()
    @QueryParams("token")
      t: string,
    @QueryParams("q") q: string
  ) {
    return {};
  }
}
