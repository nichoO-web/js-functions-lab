/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  
  
  
  
  const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
  }

  console.log('Exercise 2 Result:', isAdult(21));

  
  
  
  
  const isCharAVowel = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return 'true';
    } else {
        return 'false';
    }
  }

  console.log('Exercise 3 Result:', isCharAVowel('a'));

  
  
  
  
  const generateEmail = (names, domain) => {
    return `${names}@${domain}`;
  }

  console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'));





  const greetUser = (user, time) => {
    return `Good ${time}, ${user}!`;
  }

  console.log('Exercise 5 Result:', greetUser('Sam', 'morning'));





  const maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num2) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else if (num3 >= num1 && num3 >= num2) {
        return num3;
    }
  }

  console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));





  const calculateTip = (bill, tip) => {
    return bill*(tip/100);
  }

  console.log('Exercise 7 Result:', calculateTip(50, 20));





  const convertTemperature = (temp, scale) => {
    if (scale === 'C') {
        return ((temp*9)/5)+32 + ' (Fahrenheit).';
    } else if (scale === 'F') {
        return (((temp-32)*5)/9) + ' (Celsius).';
    }
  }

  console.log('Exercise 8 Result:', convertTemperature(32, 'C'));
  console.log('Exercise 8 Result:', convertTemperature(32, 'F'));





const basicCalculator = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        return num1 / num2;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'));





const calculateGrade = (number) => {
    if (number >= 90) {
        return 'A'
    } else if (number >= 80) {
        return 'B'
    } else if (number >= 70) {
        return 'C'
    } else if (number >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));





const createUsername = (first, last) => {
    const fir = first.slice(0, 3);
    const las = last.slice(0, 3);
    const fullName = first + last;
    return `${fir}${las}${fullName.length}`;
}

console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'));





const numArgs = (one, two, three) => {
    return numArgs.length;
}

console.log('Exercise 12 Result:', numArgs());