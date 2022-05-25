import { Http } from "@/services/http-client";
import {
  TaskAdapter,
  TaskEditAdapter,
  TaskAddUpdateAdapter,
} from "@/tasks/adapter/tasks.adapter";
import { TaskConstants } from "@/tasks/constants";

class TaskBoard {
  getTasks(): Promise<any> {
    return Http.get(`${TaskConstants.API_URL.TASKS}`).then((taskResponse) => {
      return TaskAdapter.toResponse(taskResponse.data);
    });
  }

  getTaskById(taskId: any): Promise<any> {
    return Http.get(`${TaskConstants.API_URL.TASKS}/${taskId}`).then(
      (taskResponse) => {
        return TaskEditAdapter.toResponse(taskResponse.data);
      }
    );
  }

  // Update Task by Drag and Drop
  editTask(taskId: any, taskDetail: any): Promise<any> {
    const data = TaskAddUpdateAdapter.toRequest(taskDetail);
    return Http.put(`${TaskConstants.API_URL.TASKS}/${taskId}`, data);
  }

  // Save Task Data
  addUpdateTask(taskData: any): Promise<any> {
    const data = TaskAddUpdateAdapter.toRequest(taskData);
    return Http.post(`${TaskConstants.API_URL.TASKS}`, data);
  }

  // Delete Task Record
  deleteTask(taskId: any): Promise<any> {
    return Http.delete(`${TaskConstants.API_URL.TASKS}/${taskId}`);
  }
}

export const TaskServices = new TaskBoard();
