const ticket = 500;
const hotel = 250;
const museum =135;

const availableMoney = Number(prompt ("O'zingizdagi bor pulni kiriting"));
// console.log(availableMoney);
const exchange =(Math.floor(availableMoney / 10896.61));
// console.log(exchange);
const cost = (ticket+hotel+museum)
// console.log(cost);

if (cost>=exchange) {
  console.log("Oq yo'l Alisher");
} else {
console.log("Alisher ozgina sabr qil");
}