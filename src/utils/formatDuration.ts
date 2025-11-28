export const formatDuration = (totalSeconds: number) => {
  if (!totalSeconds || totalSeconds < 0) return "0:00";

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds % 60).toFixed();

  return `${minutes}:${seconds}`;
};
