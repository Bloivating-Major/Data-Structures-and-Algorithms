let num = 5;
// Square(num);
// HollowSquare(num);
// Inverted(num);
// HollowInverted(num);
// Pyramid(num);
// HollowPyramid(num);

function HollowPyramid(num){
    for(let i = 0; i < num; i++){
        let k = 0;
        for(let j = 0; j < 2*num-1; j++){
            if(j < num-i-1) process.stdout.write("   "); // Here in this condition we are printing space from length - i - 1 times.
            // k < 2*i+1 is used to print number of stars
            else if(k < 2*i+1){
                // To print hollow pyramid 
                // step 1 is to find k = 0 and k is last
                // last k can be founded by 2*i 
                if(k == 0 || i == num - 1 || k == 2 * i) process.stdout.write(` * `);
                else process.stdout.write(`   `);
                k++;
            }else process.stdout.write("   ");
        }
        console.log();
    }
}

function Pyramid(num){
    for(let i = 0; i < num; i++){
        let k = 0;
        for(let j = 0; j < 2*num-1; j++){
            if(j < num-i-1) process.stdout.write("   ");
            else if(k < 2*i+1){
                process.stdout.write(` * `);
                k++;
            }else process.stdout.write("   ");
        }
        console.log();
    }
}

function HollowInverted(num){
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            if(i == 0 || j == 0 || j == num-i-1)  process.stdout.write(" * ");
            else process.stdout.write("   ");
        }
        console.log();
    }
}

function Inverted(num){
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num - i; j++){
            process.stdout.write(" * ");
        }
        console.log();
    }
}


function HollowSquare(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if(i == 0 || i == num-1 || j == 0 || j == num-1) process.stdout.write(" * ");
        else process.stdout.write("   ");
      }
      console.log();
  }
}

function Square(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      process.stdout.write(" * ");
    }
    console.log();
  }
}
