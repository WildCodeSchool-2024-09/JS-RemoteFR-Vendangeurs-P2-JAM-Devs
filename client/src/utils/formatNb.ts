export default function formatNb(nb: number | undefined) {
  return nb ? nb.toLocaleString() : 0;
}
