let num = 5;
// Pyramid(num);
// InvertedPyramid(num);


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

