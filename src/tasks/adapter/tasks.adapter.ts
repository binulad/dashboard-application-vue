import { Adapter } from "@/adapter/adapter";
import { EditTask, Task, TaskUpdate } from "@/tasks/model/tasks.model";

class TaskAdapterObj implements Adapter<Task[]> {
  /**
   * This will convert the response into Task object
   * @param tasks
   */
  public toResponse(tasks: Task[]): Task[] {
    const taskArr: Task[] = [];
    tasks.forEach((data) => {
      const taskData: Task = new Task(
        data.id,
        data.taskName,
        data.taskDesc,
        data.assignee,
        data.status,
        data.category,
        data.createdDate,
        data.createdBy
      );
      taskArr.push(taskData);
    });
    return taskArr;
  }
}

export const TaskAdapter = new TaskAdapterObj();

class TaskUpdateAdapterObj implements Adapter<TaskUpdate> {
  /**
   * This will used to convert object into Task request object
   * @param task
   */
  public toRequest(task: TaskUpdate): TaskUpdate {
    const updatedTaskData: TaskUpdate = new TaskUpdate(
      task.taskName,
      task.taskDesc,
      task.assignee,
      task.status,
      task.category,
      task.createdDate,
      task.createdBy
    );
    return updatedTaskData;
  }
}

export const TaskUpdateAdapter = new TaskUpdateAdapterObj();

class TaskEditAdapterObj implements Adapter<EditTask> {
  /**
   * This will used to convert object into Task request object
   * @param task
   */
  public toResponse(task: EditTask): EditTask {
    const editTaskData: EditTask = new EditTask(
      task.id,
      task.taskName,
      task.taskDesc,
      task.assignee,
      task.status,
      task.category,
      task.createdDate,
      task.createdBy
    );

    return editTaskData;
  }
}

export const TaskEditAdapter = new TaskEditAdapterObj();