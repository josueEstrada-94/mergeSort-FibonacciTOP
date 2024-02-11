//Merge Sort function

const unsortedArray = [-3, 64, 34, 25, 12, 22, 11, 90];

const sortedArray = mergeSort(unsortedArray);
console.log("Ordered Array: ", sortedArray);

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle)

    const leftSorted = mergeSort(leftArray);
    const rightSorted = mergeSort(rightArray);

    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// Fibonacci Function

function fibonacciRec(n) {
    let result = []

    function calculateFibonacci(i) {
        if (i <= n) {
            result.push(fibonacci(i));
            calculateFibonacci(i+ 1);
        }
    }
        calculateFibonacci(0);
        return result;

}

function fibonacci(m) {
    if (m <= 1) {
        return m;
    } else {
        return fibonacci(m-1) + fibonacci(m - 2)
    }
}

console.log('Fibonacci sequence: ', fibonacciRec(8));
