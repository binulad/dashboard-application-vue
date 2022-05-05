import { Http } from "@/services/http-client";
import { TaskAdapter, TaskEditAdapter, TaskUpdateAdapter } from "@/tasks/adapter/tasks.adapter";
import { TaskConstants } from "@/tasks/constants";

class TaskBoard {
  getTasks(): Promise<any> {
    return Http.get(`${TaskConstants.API_URL.TASKS}`).then((taskResponse) => {
      return TaskAdapter.toResponse(taskResponse.data);
    });
  }

  getTaskById(taskId: any): Promise<any> {
    return Http.get(`${TaskConstants.API_URL.TASKS}/${taskId}`).then((taskResponse) => {
      return TaskEditAdapter.toResponse(taskResponse.data);
    })
  }

  // Update Task by Drag and Drop
  updateTaskPosition(taskId: any, taskDetail: any): Promise<any> {
    const data = TaskUpdateAdapter.toRequest(taskDetail);
    return Http.put(`${TaskConstants.API_URL.TASKS}/${taskId}`, data);
  }
}

export const TaskServices = new TaskBoard();
