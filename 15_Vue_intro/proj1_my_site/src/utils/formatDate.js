const withLeading = (value) => `${value}`.padStart(2, '0');

export default function formatDate(timestamp) {
  // target: yyyy-MM-dd HH:mm:ss
  const dt = new Date(timestamp);
  
  const yyyy = dt.getFullYear();
  const MM = dt.getMonth() + 1;
  const dd = dt.getDate();
  const HH = dt.getHours();
  const mm = dt.getMinutes();
  const ss = dt.getSeconds();
  
  const date = [yyyy, MM, dd].map(withLeading).join('-');
  const time = [HH, mm, ss].map(withLeading).join(':');

  return `${date} ${time}`
}