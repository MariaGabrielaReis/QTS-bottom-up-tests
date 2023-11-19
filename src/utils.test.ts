import { bankSlip } from "./bankSlip";
import { utils } from "./utils";

describe("Utils tests", function () {
  // Calcular o período em meses (driver)
  test("periodInMonths: 1 month", () => {
    const initialDate = new Date("2023-09-15");
    const finalDate = new Date("2023-10-15");
    const result = utils.periodInMonths(initialDate, finalDate);
    expect(result).toEqual(1);
  });

  // Calcular o período em meses (driver)
  test("periodInMonths: 1.5 month", () => {
    const initialDate = new Date("2023-09-15");
    const finalDate = new Date("2023-10-30");
    const result = utils.periodInMonths(initialDate, finalDate);
    expect(result).toEqual(1.5);
  });
});

describe("BankSlipt tests", function () {
  // Calcular o valor a pagar (driver)
  test("calculateAmountToPay: without delay", () => {
    const expirationDate = new Date("2023-09-15");
    const paymentDate = new Date("2023-09-10");
    const result = bankSlip.calculateAmountToPay(
      500,
      expirationDate,
      paymentDate,
    );
    expect(result).toEqual(500);
  });

  // Calcular o valor a pagar (driver)
  test("calculateAmountToPay: with 1 month delay", () => {
    const expirationDate = new Date("2023-09-15");
    const paymentDate = new Date("2023-10-15");
    const result = bankSlip.calculateAmountToPay(
      500,
      expirationDate,
      paymentDate,
    );
    expect(result).toEqual(505);
  });
});
