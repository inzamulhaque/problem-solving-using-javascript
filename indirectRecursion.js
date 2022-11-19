let applePrice = 7;
let totalApple = 0;

function buyApple(money) {
  if (money >= applePrice) {
    buyMore(money);
  } else {
    console.log("I don't have more money", totalApple);
  }
}

function buyMore(money) {
  totalApple++;
  // money -= applePrice;
  buyApple(money - applePrice);
}

buyApple(100);
