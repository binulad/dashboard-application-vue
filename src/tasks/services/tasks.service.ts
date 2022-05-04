import { Http } from "@/services/http-client";
import { TaskAdapter } from "@/tasks/adapter/tasks.adapter";
import { TaskConstants } from "@/tasks/constants";

class TaskBoard {
  getTasks(): Promise<any> {
    return Http.get(`${TaskConstants.API_URL.TASKS}`).then((taskResponse) => {
      return TaskAdapter.toResponse(taskResponse.data);
    });
  }
}

export const TaskServices = new TaskBoard();
