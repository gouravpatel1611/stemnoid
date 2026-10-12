export function getYouTubeId(input = '') {
  const value = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;
  try {
    const url = new URL(value);
    if (url.hostname.includes('youtu.be')) return url.pathname.slice(1).split('/')[0];
    if (url.hostname.includes('youtube.com')) {
      if (url.pathname.startsWith('/embed/')) return url.pathname.split('/')[2];
      if (url.pathname.startsWith('/shorts/')) return url.pathname.split('/')[2];
      return url.searchParams.get('v') || '';
    }
  } catch { return ''; }
  return '';
}
export function getYouTubeEmbedUrl(input) {
  const id = getYouTubeId(input);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : '';
}
export function getYouTubeThumbnail(input) {
  const id = getYouTubeId(input);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
}