// ৩ টা নাম্বার input নিবে  এর মধ্যে যে ২ টা নাম্বার বড় সেই ২ টার যোগফল বের করতে হবে

const largeTwoNumberSum = (num1 = 0, num2 = 0, num3 = 0) => {
    const smailnumber = Math.min(num1, num2, num3);
    return num1 + num2 + num3 - smailnumber;
}

const result = largeTwoNumberSum(15, 7, 17);
console.log(result);