export function truncateText(text: string | undefined, maxLength: number) {
  if (text && text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
}
