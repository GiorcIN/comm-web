export function dateFormat(timestamp) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'medium',
    timeZone: 'GMT',
  }).format(new Date(timestamp * 1000));
  return formattedDate;
}
