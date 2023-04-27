import type { QueryObserverResult } from "@tanstack/vue-query";

export interface GlobalState {
  pendingTask: PendingTask[];
  settledTasks: SettledTask[];
}

export interface SettledTask {
  client_task_id: string;
  role_no: number;
  task_id: string;
  task_label: string;
  task_progress: number;
  task_status:
    | "PASUSED"
    | "PENDING"
    | "STARTED"
    | "RETRY"
    | "FAILURE"
    | "SUCCESS";
  start_time: string;
  end_time: null | string;
  exception: null;
}

export interface PendingTask extends SettledTask {
  form: {};
}

type PendingRow = QueryObserverResult<PendingTask, Error>;
export type TableRow =
  | {
      isSettled: false;
      task: PendingRow;
    }
  | {
      isSettled: true;
      task: SettledTask;
    };
