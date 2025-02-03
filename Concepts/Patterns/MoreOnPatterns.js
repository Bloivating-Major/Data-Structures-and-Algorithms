let num = 5;
// Pyramid(num);
// InvertedPyramid(num);
// Diamond(num);
// HollowDiamond(num);
// FlippedSolidDiamond(num);
// NumberStarPattern(num);
// AlphPalindromePyramid(num);

function AlphPalindromePyramid(num){
    for(let i = 0; i < num; i++){
        let j;
        for( j = 0; j < i + 1; j++){
            process.stdout.write(`${String.fromCharCode(j+65)} `)
        }
        j = j - 1;
        for (; j >= 1; j--){
            process.stdout.write(`${String.fromCharCode(j+64)} `)
        }
        console.log();
    }
}


function NumberStarPattern(num){
    for(let i = 0; i <num; i++){
        for(let j = 0; j <= i; j++){
            process.stdout.write(`${i+1}`)
            if(j != i) process.stdout.write(` * `)
        }
        console.log();
    }
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num-i; j++){
            process.stdout.write(`${num-i}`)
            if(j != num-i-1) process.stdout.write( ' * ' );
        }
        console.log();
    }
}

function FlippedSolidDiamond(num) {
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num-i; j++){
            process.stdout.write('*')
        }
        for(let j = 0; j < 2 * i + 1; j++){
            process.stdout.write(' ');
        }
        for(let j = 0; j < num-i; j++){
            process.stdout.write('*')
        }
        console.log();
    }
    for(let i = 0; i < num; i++){
        for(let j = 0; j <= i; j++){
            process.stdout.write('*')
        }
        for(let j = 0; j < 2 * num - 2 * i - 1; j++){
            process.stdout.write(' ');
        }
        for(let j = 0; j <=i; j++){
            process.stdout.write('*')
        }
        console.log();
    }
}


function HollowDiamond(num){
    for(let row = 0; row < num; row++){
        // Blank
        for(let col = 0; col < num - row - 1; col++){
            process.stdout.write(" ");
        }
        // Star
        for(let col = 0; col < 2 * row + 1; col++){
            if(col == 0 || col == 2 * row) process.stdout.write("*");
            else process.stdout.write(" ");
        }
        console.log();
    }
    for(let row = 0; row < num; row++){
        // Blank
        for(let col = 0; col < row; col++ ){
            process.stdout.write(" ");
        }
        // Star 
        for(let col = 0; col < 2 * num - 2 * row - 1; col++){
            if(col == 0 || col == 2 * num - 2 * row - 2) process.stdout.write("*")
            else process.stdout.write(" ");
        }
        console.log();
    }
}


function Diamond(num){
    for(let row = 0; row < num; row++){
        for(let space = 0; space < num - row -1; space++){
            process.stdout.write(" ");
        }
        for(let star = 0; star < row + 1; star++){
            process.stdout.write("* ");
        }
        console.log();
    }
    for(let k = 0; k < num; k++){
        for(let j = 0; j <k; j++){
            process.stdout.write(" ");
        }
        for(let i = 0; i < num-k; i++){
            process.stdout.write("* ");
        }
        console.log();
    }
}


function InvertedPyramid(num){
    for(let k = 0; k < num; k++){
        for(let j = 0; j <k; j++){
            process.stdout.write(" ");
        }
        for(let i = 0; i < num-k; i++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

function Pyramid(num){
    for(let row = 0; row < num; row++){
        for(let space = 0; space < num - row -1; space++){
            process.stdout.write(" ");
        }
        for(let star = 0; star < row + 1; star++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

