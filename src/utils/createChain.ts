export function createChain(n: number) {
  const shift = Math.floor(Math.random() * (n - 1)) + 1;
  const arr = new Array<number>(n);

  for (let i = 0; i < n; i++){
    const index = (i + shift) % n;
    arr[index] = i;
  }

  return arr;
}

export const encodeToUrl = (obj: unknown) =>
  btoa(encodeURIComponent(JSON.stringify(obj)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

export const decodeFromUrl = <T>(str: string): T =>
  JSON.parse(
    decodeURIComponent(
      atob(str.replace(/-/g, '+').replace(/_/g, '/'))
    )
  );
