/*Assume that it is INVALID TICKET NUMBER if all digits are "0"-s
and there should be at least one non zero digit in the VALID TICKET NUMBER*/

let luckyTicketsCount = 0;

function getLuckyTickets(n) {
  if (n % 2 !== 0) {
    console.error(`Invalid argument!!! "n" should be even, ${n} is odd!`);
    return false;
  } else if (n <= 0 || n > 100) {
    console.error(`Invalid argument!!! "n" should be between 2 and 100!`);
    return false;
  } else {
    console.log("n:", n);

    const ticketNumStr = generateTicketNumber(n);

    const initialNumber = +ticketNumStr;

    const lastNumber = generateLastNumber(n);

    for (let i = initialNumber; i <= lastNumber; i++) {
      const numAsStr = "" + i;
      let ticketNumToCheck = "";

      if (ticketNumStr.length > numAsStr.length) {
        for (let k = 0; k < ticketNumStr.length - numAsStr.length; k++) {
          ticketNumToCheck += 0;
        }
      }

      for (let j = 0; j < numAsStr.length; j++) {
        ticketNumToCheck += numAsStr[j];
      }

      const firstPartStr = ticketNumToCheck.slice(0, n / 2);
      const secondPartStr = ticketNumToCheck.slice(n / 2);

      const firstPartSum = firstPartStr.split('')
        .reduce((acc, next) => acc + Number(next), 0);
      const secondPartSum = secondPartStr.split('')
        .reduce((acc, next) => acc + Number(next), 0);

      if (firstPartSum === secondPartSum) {
        luckyTicketsCount += 1;
      }
    }

    return luckyTicketsCount;
  }
}

const generateTicketNumber = n => {
  let ticketNum = "";

  for (let i = 0; i < n; i++) {
    if (i === (n / 2 - 1) || i === (n - 1))
      ticketNum += 1;
    else
      ticketNum += 0;
  }
  return ticketNum;
};

const generateLastNumber = n => {
  let lastNum = "";

  for (let i = 0; i < n; i++) {
    lastNum += 9;
  }

  return Number(lastNum);
};

console.time("Time used");

console.log(getLuckyTickets(6));

console.timeEnd("Time used");
