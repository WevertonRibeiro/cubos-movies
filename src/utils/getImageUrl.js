export default function getImageUrl(path, size = 500) {
  if (!path) return "/placeholder.png";
  return `https://image.tmdb.org/t/p/w${size}${path}`;
}
