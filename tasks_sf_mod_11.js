/* Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию.
*/


const someArray = [0, 0, 5, 7, 9, 4, 6, 8, null]

const oddEven = (someArray) => {
    let even = 0
    let odd = 0
    let zero = 0
    someArray.forEach(el => {
      if (typeof el === 'number') {
        if (el === 0) {
            zero += 1
        } else if (el % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    } 
    })
    console.log(`Кол-во четных: ${even}`)
    console.log(`Кол-во нечетных: ${odd}`)
    console.log(`Кол-во нолей: ${zero}`)
}
oddEven(someArray)


/* Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
 является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
*/

function primeNumber(num) {
    let isPrime, result
    isPrime = true
    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false
            }
        }
        result = isPrime ? `${num} простое число` : `${num} составное число`
    } else {
        result = 'Введите число от 2 до 1000'
    }
    return result
}
primeNumber(700)

// Выведете все простые числа

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}
function getPrimeNum(num) {
    const primeNum = []
    for (let i = 2; i < num; i++) {
        if (isPrime(i)) {
            primeNum.push(i)
        }
    }
    return primeNum
}
getPrimeNum(120)

// Оптимизированный вариант:

function getPrimes(num) {
    const unnec = []
    const primes = []
    for (let i = 2; i < num; i++) {
        if (!unnec[i]) {
            primes.push(i)
            for (let j = i * i; j <= num; j += i) {
                unnec[j] = true
            }
        }
    }


    return primes
}
getPrimes(120)


/* Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function getSumFnc(a) {
    return function sumFnc(b) {
        return a + b
    }
}
const sumFunction = getSumFnc(10)
const sum = sumFunction(5)
console.log(sum)


/* Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/

function printNumber(from, to) {
    let start = from
    let timerId = setInterval(() => {
        console.log(start)
        start++
    if (start === to) {
        clearInterval(timerId)
    }    
    }, 1000)
}
printNumber(10, 15)


/*Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
*/


const toTheDegree = (x, n) => {
    console.log(Math.pow(x, n))
}

toTheDegree(5, 5)