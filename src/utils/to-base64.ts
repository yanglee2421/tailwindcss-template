export function toBase64(blob: Blob) {
  return new Promise<string>((res, rej) => {
    // ** FileReader
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = (evt) => {
      const result = evt.target?.result;

      // No Data
      if (!result) {
        const error = new Error("Invalid Data!");
        return rej(error);
      }

      // Has Data
      return res(String(result));
    };

    reader.onerror = (evt) => {
      rej(evt.target?.error);
    };
  });
}
