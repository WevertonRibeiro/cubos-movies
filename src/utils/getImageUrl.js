export default function getImageUrl(path, size) {
  if (!path) return "/placeholder.png";
  return `https://image.tmdb.org/t/p/w${size}${path}`;
}
