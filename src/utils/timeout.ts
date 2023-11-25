export function timeout(delay = 0) {
  return new Promise<void>((res) => {
    setTimeout(res, delay);
  });
}
