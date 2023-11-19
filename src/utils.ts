class Utils {
  periodInMonths(initialDate: Date, finalDate: Date) {
    const initial = initialDate.getTime();
    const final = finalDate.getTime();
    const days = (final - initial) / 1000 / 60 / 60 / 24;
    const months = days / 30;
    return months;
  }

  stringToDate(date: string) {
    const year = Number(date.split("/")[2]);
    const month = Number(date.split("/")[1]);
    const day = Number(date.split("/")[0]);
    if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
    const timeZone = -3;
    return new Date(year, month - 1, day, timeZone);
  }
}

const utils = new Utils();

export { utils };
