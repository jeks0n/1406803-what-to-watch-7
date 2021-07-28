const Periods = {
  MINUTES_IN_HOUR: 60,
  SECONDS_IN_MINUTES: 60,
};
const TWO_DIGIT_LENGTH = 2;

const getHouresFromDuration = (duration) => Math.floor(duration/Periods.MINUTES_IN_HOUR);
const getRestMinutesFromDuration = (duration) => duration % Periods.MINUTES_IN_HOUR;

export const getHumanDuration = (duration) => {
  const hours = getHouresFromDuration(duration);
  const minutes = getRestMinutesFromDuration(duration);

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const getMachineDate = (date) => `${date.getFullYear()}-${date.toLocaleString('en-US', { month: '2-digit' })}-${date.toLocaleString('en-Us', { day: '2-digit' })}`;
export const getHumanDate = (date) => `${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
export const getHumanDurationFromSeconds = (duration) => {
  const hours = Math.floor(duration / Periods.MINUTES_IN_HOUR / Periods.SECONDS_IN_MINUTES);
  const minutes = Math.floor(duration / Periods.SECONDS_IN_MINUTES) - (hours * Periods.MINUTES_IN_HOUR);
  const seconds = Math.floor(duration % Periods.SECONDS_IN_MINUTES);
  return hours > 0 ?
    `${hours.toString().padStart(TWO_DIGIT_LENGTH, '0')}:${minutes.toString().padStart(TWO_DIGIT_LENGTH, '0')}:${seconds.toString().padStart(TWO_DIGIT_LENGTH, '0')}`
    : `${minutes.toString().padStart(TWO_DIGIT_LENGTH, '0')}:${seconds.toString().padStart(TWO_DIGIT_LENGTH, '0')}`;
};
