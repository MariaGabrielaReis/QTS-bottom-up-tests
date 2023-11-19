import { utils } from "./utils";

describe("Utils tests", function () {
  // Calcular o período em meses
  test("periodInMonths: 1 month", () => {
    const initialDate = new Date("2023-09-15");
    const finalDate = new Date("2023-10-15");
    const resultado = utils.periodInMonths(initialDate, finalDate);
    expect(resultado).toEqual(1);
  });

  test("periodInMonths: 1.5 month", () => {
    const initialDate = new Date("2023-09-15");
    const finalDate = new Date("2023-10-30");
    const resultado = utils.periodInMonths(initialDate, finalDate);
    expect(resultado).toEqual(1.5);
  });
});
