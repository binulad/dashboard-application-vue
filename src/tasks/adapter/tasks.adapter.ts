import { Adapter } from "@/adapter/adapter";
import { TaskList } from "@/tasks/model/tasks.model";

class TaskAdapterObj implements Adapter<TaskList[]> {
  /**
   * This will convert the response into Task object
   * @param tasks
   */
  public toResponse(tasks: TaskList[]): TaskList[] {
    const taskArr: TaskList[] = [];
    tasks.forEach((data) => {
      const taskData: TaskList = new TaskList(data.title, data.task);
      taskArr.push(taskData);
    });
    return taskArr;
  }
}

export const TaskAdapter = new TaskAdapterObj();
