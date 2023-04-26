export async function getDemo<TData>(data: TData) {
  console.log("request", data);
  await timeout();
  return data;
}

async function timeout(milliseconds = 1000) {
  await new Promise((res) => setTimeout(res, milliseconds));
}
