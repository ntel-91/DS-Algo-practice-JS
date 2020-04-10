function countPairs(numbers, k) {
    // Write your code here
    let count = 0
    let uniq = []

    let sortedNum = numbers.sort((a, b) => a-b);
    
    for (let i = 0; i < sortedNum.length; i++) {
        let a = sortedNum[i]

        if (!uniq.includes(a)) {   
            uniq.push(a)
            for (let j = i + 1; j < sortedNum.length; j++) {
                let b = sortedNum[j]
                if (a + k === b) {
                    count += 1
                }
            }
        }
    }
    console.log(count)

}

let array = [6,1,1,2,2,3,3,1]

console.log(Math.max(array))


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'countPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. INTEGER k
 */


function countPairs(numbers, k) {
    // Write your code here
    let count = 0
    let uniqA = {}
    let uniqAB = {}
    
    for (let i = 0; i < numbers.length; i++) {    
        let a = numbers[i]
        if (!uniqA[a]) 
            for (let j = i + 1; j < numbers.length; j++) {
                let b = numbers[j]
                
                if (a + k === b) {
                    
                    if (uniq[min]) {
                        if (!uniq[min][max]) {
                            uniq[min][max] = true
                            count += 1
                        }
                    } else {
                        uniq[min] = {}
                        uniq[min][max] = true
                        count += 1
                    }
                
                    
                    // if (!uniq[min][max]) {
                    //     if (uniq[min]) {
                    //         uniq[min][max] = true
                    //         count += 1
                    //     } else {
                    //         uniq[min] = {}
                    //         uniq[min][max] = true
                    //         count += 1
                    //     }
                    // }
                    
                }
            }
    }
    return count   
}

function main() {