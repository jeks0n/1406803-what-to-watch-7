const MINUTES_IN_HOUR = 60;

const getHouresFromDuration = (duration) => Math.floor(duration/MINUTES_IN_HOUR);
const getRestMinutesFromDuration = (duration) => duration % MINUTES_IN_HOUR;

export const getHumanDuration = (duration) => {
  const hours = getHouresFromDuration(duration);
  const minutes = getRestMinutesFromDuration(duration);

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const getMachineDate = (date) => `${date.getFullYear()}-${date.toLocaleString('en-US', { month: '2-digit' })}-${date.toLocaleString('en-Us', { day: '2-digit' })}`;
export const getHumanDate = (date) => `${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
