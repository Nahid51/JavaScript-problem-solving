// 1. লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি?
// function getRandomNumber(min, max) {
//     console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// }
// getRandomNumber(1, 6);


// 2. কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম alphabetically সাজাতে পারি?
// const studentsName = ['nahid', 'sumit', 'saad', 'jiyan', 'akash'];
// console.log(studentsName.sort());


// ৩। কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল নাম্বার ক্রম অনুযায়ী সাজাতে পারি?
// const studentsRoll = [3, 5, 1, 8, 6, 5];
// console.log(studentsRoll.sort(function (a, b) {
//     return a - b;
// }));
// console.log(studentsRoll.sort(function (a, b) {
//     return b - a;
// }));


// ৪। leap year or not
// function isLeapYear(year) {
//     if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
//         console.log(`${year} is a leap year.`);
//     } else {
//         console.log(`${year} is not a leap year.`);
//     }
// }
// isLeapYear(2030);


// 5. find out how many vowel in a sentence 
// const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// function countVowels(sentence) {
//     let count = 0;
//     const letters = Array.from(sentence);
//     // console.log(letters);
//     letters.forEach(function (value) {
//         if (vowels.includes(value)) {
//             count++;
//         }
//     })
//     console.log(count);
// }
// countVowels('I Love Bangladesh');


// 6. how to find duplicate number from an array
// const numbers = [1, 3, 3, 5, 6, 1, 9, 6, 10, 5, 6];
// const findDuplicates = numbers.filter(function (value, index, array) {
//     return array.indexOf(value) !== index;
// })
// console.log(findDuplicates);

// 7. how to find unique number from an array
const numbers = [1, 3, 3, 5, 6, 1, 9, 6, 10, 5, 6];
const findDuplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) === index;
})
console.log(findDuplicates);
