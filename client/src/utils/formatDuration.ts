export default function formatDuration(duration: number): string {
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export function formatTimeCode(duration: number): string {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
