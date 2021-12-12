export const formatTime = (time) => {
  if (time == 0 || typeof time !== 'number' || time < 0) {
    return null;
  }
  
  let hour = Math.floor(time / 3600).toString().padStart(2, '0');
  let minutes = Math.floor((time / 60) % 60).toString().padStart(2, '0');
  let seconds = Math.floor(time % 60).toString().padStart(2, '0');

  return `${hour}:${minutes}:${seconds}`;
};