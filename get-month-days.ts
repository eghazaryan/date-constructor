import { getFirstDayOfWeek, getWeekDays } from "./get-week-days";

// getDate() - returns day of month
// getDay() - returns day of week

function getMonthDays(value: Date) {
  const week: Date[] = [];
  const result: (typeof week)[] = [];

  const month = value.getUTCMonth();

  const firstDayOfMonth = new Date(value.getUTCFullYear(), month, 2);
  const firstDayOfWeek = getFirstDayOfWeek(firstDayOfMonth);

  const nextMonday = new Date(firstDayOfWeek);

  do {
    result.push(getWeekDays(nextMonday));
    nextMonday.setUTCDate(nextMonday.getUTCDate() + 7);
  } while (nextMonday.getMonth() === month);

  console.log(result, "result");
  return result;
}

getMonthDays(new Date());
