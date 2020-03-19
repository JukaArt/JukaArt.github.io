export const createNum = () => {
  const ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  ar.sort(() => Math.random() - 0.5);
  return ar[0] === 0 ? ar.slice(1, 5) : ar.slice(0, 4);
}