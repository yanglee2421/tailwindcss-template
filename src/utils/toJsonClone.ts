export function toJsonClone<TData>(data: TData) {
  return JSON.parse(JSON.stringify(data)) as TData;
}
