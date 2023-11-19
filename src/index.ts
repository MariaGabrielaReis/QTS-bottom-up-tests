import promptSync from "prompt-sync";

import { bankSlip } from "./bankSlip";
import { utils } from "./utils";

const prompt = promptSync();

console.log("-----------------------------------------");
const value = Number(prompt("Informe o valor do boleto: "));
const expirationDate = utils.stringToDate(
  prompt("Informe a data de vencimento: "),
);
const paymentDate = utils.stringToDate(prompt("Informe a data de pagamento: "));

// processing
const finalValue = bankSlip.calculateAmountToPay(
  value,
  expirationDate,
  paymentDate,
);

console.log("=========================================");
console.log("Valor final: ", finalValue);
console.log("=========================================\n");
