export const clamp = (value: number) => Math.max(0, value);

export const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

export const masonryColumns = {
  default: 2,
  500: 1,
};
