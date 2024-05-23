// Sunday - 0
// Monday - 1

export const getFirstDayOfWeek = (value: Date) => {
  const date = new Date(value);

  const day = date.getUTCDay();
  const monday = date.getUTCDate() - (day - (day === 0 ? -6 : 1));

  date.setUTCDate(monday);
  return date;
};

export function getWeekDays(value: Date): Date[] {
  const result: Date[] = [];
  const firstDayOfWeek = getFirstDayOfWeek(value);

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(firstDayOfWeek);
    currentDate.setUTCDate(currentDate.getUTCDate() + i);
    result.push(currentDate);
  }

  return result;
}

getWeekDays(new Date());
getWeekDays(new Date("2024-05-27"));
