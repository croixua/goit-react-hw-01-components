const colors = [
  '#E97F7F',
  '#E98B7F',
  '#E99E7F',
  '#E9A67F',
  '#E9B17F',
  '#E9B77F',
  '#E9C07F',
  '#E9CD7F',
  '#E9D87F',
  '#E9E47F',
  '#E0E97F',
  '#DAE97F',
  '#D2E97F',
];

export default function setBg() {
  const idColor = Math.floor(Math.random() * colors.length);

  return colors[idColor];
}
