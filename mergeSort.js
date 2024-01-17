const fs = require('fs');

// Fonction de tri fusion (merge sort)
function mergeSort(arr) {
    // Si le tableau a une taille inférieure ou égale à 1, il est déjà trié
    if (arr.length <= 1) {
        return arr;
    }

    // Calcul du point médian et création des sous-tableaux gauche et droit
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Appel récursif à mergeSort sur les deux moitiés et fusion des résultats
    return merge(mergeSort(left), mergeSort(right));
}

// Fonction de fusion de deux sous-tableaux triés
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Boucle de fusion avec comparaison des éléments
    while (leftIndex < left.length && rightIndex < right.length) {
        // Comparaison et fusion des éléments
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concaténation des éléments restants s'il y en a
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Fonction de lecture du fichier et tri
function readAndSort(filename) {
    // Lecture du contenu du fichier
    const data = fs.readFileSync(filename, 'utf-8');
    
    // Transformation en tableau de nombres
    const numbers = data.split(' ').map(Number);

    // Tri du tableau à l'aide de mergeSort
    const sortedArray = mergeSort(numbers);

    // Affichage du résultat dans la console
    console.log(`Tri fusion: ${sortedArray.length} comparaisons - [${sortedArray}]`);
}

// Exécution avec le fichier d'entrée passé en argument
const fileName = process.argv[2];
readAndSort(fileName);


//Exo 1, les paires :
function hasPairWithSum(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                return true;
            }
        }
    }
    return false;
}

//Exo 2
function buildingsWithSunsetView(heights) {
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[j] > heights[i]) {
                break;
            }
            if (j === heights.length - 1) {
                count++;
            }
        }
    }
    return count;
}

//Exo 3
function hasPairWithSumOptimized(arr, k) {
    const seenNumbers = new Set();
    for (let num of arr) {
        const complement = k - num;
        if (seenNumbers.has(complement)) {
            return true;
        }
        seenNumbers.add(num);
    }
    return false;
}


//Exo 4
function buildingsWithSunsetViewOptimized(heights) {
    let count = 1;
    let maxHeight = heights[0];
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] > maxHeight) {
            count++;
            maxHeight = heights[i];
        }
    }
    return count;
}

//Exo 5
function hasPairWithSumSinglePass(arr, k) {
    const seenNumbers = new Set();
    for (let num of arr) {
        const complement = k - num;
        if (seenNumbers.has(complement)) {
            return true;
        }
        seenNumbers.add(num);
    }
    return false;
}

//Exo 6
function buildingsWithSunsetViewSinglePass(heights) {
    let count = 1;
    let max = heights[0];
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] > max) {
            count++;
            max = heights[i];
        }
    }
    return count;
}
