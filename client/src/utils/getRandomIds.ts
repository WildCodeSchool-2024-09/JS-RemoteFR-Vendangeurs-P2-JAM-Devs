import shuffleArray from "./shuffleArray";

export default function getRandomId(ids: number[], count: number) {
  const shuffled = shuffleArray(ids);

  return shuffled.slice(0, count);
}
