let num = 5;

// HollowNumericHalfPyramid(num);
// HollowInvertedNumericHalfPyramid(num);
// NumericPalindromicEquilateralPyramid(num)
// SolidHalfDiamond(num);
// FancyPattern(num);
// FancyPattern2(num);
// FancyPattern3(num)
// FloydTriangle(num)
// PascalTriangle(num)
ButterflyPattern(num);

function ButterflyPattern(num) {
  for(let i = 0; i < 2 * num; i++){
    let condition = i < num ? i :  num + (num - i - 1);
    let spaces = i < num ? 2 * (num - i - 1) : i - condition - 1;
    for(let j = 0; j < 2 * num; j++){
      if(j <= condition){
        process.stdout.write(`* `);
      }else if(spaces > 0){
        process.stdout.write("  ");
        spaces--;
      }else {
        process.stdout.write("* ");
      }
    }
    console.log();
  }
}

function PascalTriangle(num) {
  for(let i = 1; i <= num; i++){
    let c = 1;
    for(let j = 0; j < num-i; j++){
      process.stdout.write(" ");
    }
    for(let j = 1; j <= i; j++){
      process.stdout.write(` ${c}`)
      c = c * (i - j) / j;
    }
    console.log();
  }
}

function FloydTriangle(num) {
  let count = 1;
  for(let i  = 0; i < num; i++){
    for(let j = 0; j <= i; j++){
      process.stdout.write(`${count} `);
      count++;
    }
    console.log();
  }
}

function FancyPattern3(num) {
  for(let i = 0; i < num; i++){
    let condition = i < num/2 ? 2 * i : 2 * (num - i - 1);
    for(let j = 0; j <= condition; j++){
      if(j <=condition/2){
        process.stdout.write(`${j+1}`);
      }
      else{
        process.stdout.write(`${condition-j+1}`);
      }
    }
    console.log();
  }
}

function FancyPattern2(num){
  let count = 1;
  for(let i  =0; i < num; i++){
    for(let j = 0; j <=i; j++ ){
      process.stdout.write(`${count} `);
      if(j < i) process.stdout.write(`* `)
      count++;
    }
    console.log();
  }
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num - i; j++){
      process.stdout.write(`${count - num + j} `);
      if(j < num -  i - 1) process.stdout.write(`* `)
    }
    console.log();
  }
}

function FancyPattern(num){
  if(num > 9) {
    return console.log("Input Less then 9 or equal to 9");
  }
  else{
    for(let i = 0; i < num; i++){
      let startIndex = 8 - i;
      let digit = i + 1;
      let count = digit;
      for(let j =0; j < 17; j++){
        if(startIndex == j && count >0){
          process.stdout.write(`${digit} `);
          startIndex += 2;
          count--;
        }else {
          process.stdout.write("* ");
        }
      }
      console.log();
    }
  }
}

function SolidHalfDiamond(num) {
  for (let i = 0; i < num * 2 - 1; i++) {
    if (i < num) {
      for (let j = 0; j <=i; j++) {
        process.stdout.write(" *");
      }
    }else{
        for(let j = 0; j < num-(i%num)-1; j++){
            process.stdout.write(" *");
        }
    }
    console.log();
  }
}

function NumericPalindromicEquilateralPyramid(num) {
  for (let i = 0; i < num; i++) {
    // Spaces
    for (let s = 0; s < num - i; s++) {
      process.stdout.write("  ");
    }
    // Numbers
    for (let n = 0; n <= i; n++) {
      process.stdout.write(`${n + 1} `);
    }
    // Reverse Number
    for (let r = 0; r < i; r++) {
      process.stdout.write(`${i + r} `);
    }
    console.log();
  }
}

function HollowInvertedNumericHalfPyramid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      if (i == 0 || j == 0) {
        process.stdout.write(`${i + j + 1} `);
      } else if (j == num - i - 1) {
        process.stdout.write("5");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}

function HollowNumericHalfPyramid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i || i == num - 1) {
        process.stdout.write(`${j + 1} `);
      } else process.stdout.write("  ");
    }
    console.log();
  }
}
