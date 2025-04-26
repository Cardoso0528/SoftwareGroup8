// Duration should be in minutes
export default function convertDuration(duration: number): string{
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (hours > 0 && minutes > 0) {
    return hours + "h " + minutes + "m"; 
  } else if (hours > 0) {
    return hours + "h"; 
  } else {
    return minutes + "m"; 
  }
}