class Utils {
  periodInMonths(initialDate: Date, finalDate: Date) {
    const initial = initialDate.getTime();
    const final = finalDate.getTime();
    const days = (final - initial) / 1000 / 60 / 60 / 24;
    const months = days / 30;
    return months;
  }

  stringToDate(date: string) {
    return new Date();
  }
}

const utils = new Utils();

export { utils };
