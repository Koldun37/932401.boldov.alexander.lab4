const userName = prompt("Как вас зовут?", "Искатель звёзд");

if (userName && userName.trim() !== "") {
    alert(`Привет, ${userName}! Добро пожаловать в обсерваторию Александра Болдова.`);
} else {
    alert("Привет, безымянный астроном! Добро пожаловать в обсерваторию.");
}

// Массив из 7 чисел: видимая звёздная величина (чем меньше число, тем ярче объект)
// Включены значения: <= -2 (планета Юпитер), яркие звёзды (Сириус, Арктур, Вега) и тусклые объекты (>= 5m)
const magnitudes = [-2.4, -1.46, -0.05, 0.03, 2.1, 5.2, 5.8];

console.log("Исходный массив звёздных величин:", magnitudes);

// Функция поиска минимума
function findMinMagnitude(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Функция поиска максимума
function findMaxMagnitude(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Функция фильтрации: объекты ярче 3m 
function filterBrightObjects(arr, limit = 3) {
    const brightObjects = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < limit) {
            brightObjects.push(arr[i]);
        }
    }
    return brightObjects;
}

// Функция подсчёта суммы элементов массива
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const brightestObject = findMinMagnitude(magnitudes);
const dimmestObject = findMaxMagnitude(magnitudes);

console.log(`Самый яркий объект (минимум): ${brightestObject}m`);
console.log(`Самый тусклый объект (максимум): ${dimmestObject}m`);

const brightList = filterBrightObjects(magnitudes, 3);
const brightCount = brightList.length;

console.log("Объекты ярче 3m (< 3):", brightList);

const totalSum = calculateSum(magnitudes);
const averageMagnitude = (totalSum / magnitudes.length).toFixed(2);

const dimObjects = [];
for (let i = 0; i < magnitudes.length; i++) {
    if (magnitudes[i] >= 5) {
        dimObjects.push(magnitudes[i]);
    }
}

const dimCount = dimObjects.length;
const dimAverage = dimCount > 0 ? (calculateSum(dimObjects) / dimCount).toFixed(2) : 0;

console.log(`Количество тусклых объектов (≥ 5m): ${dimCount}`);
console.log(`Средняя яркость тусклых объектов: ${dimAverage}m`);

if (brightestObject <= -2) {
    console.log("Среди объектов есть очень яркие – возможно, это планеты!");
}

alert(`В среднем яркость – ${averageMagnitude}m, ${brightCount} объектов – яркие`);