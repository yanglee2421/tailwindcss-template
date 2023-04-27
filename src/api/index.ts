import { PendingTask } from "@/types/pageDemo";
import { toJsonClone } from "@/utils";

export async function getDemo(data: PendingTask) {
  await timeout();
  const res = toJsonClone(data);
  console.log("request", res);
  res.task_status = "FAILURE";
  return res;
}

async function timeout(milliseconds = 1000) {
  await new Promise((res) => setTimeout(res, milliseconds));
}
