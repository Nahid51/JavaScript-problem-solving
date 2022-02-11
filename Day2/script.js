// 1. নিচের sentence এ "and" শব্দটি কয়বার ব্যবহার হয়েছে? প্রথমবার "and" কত নাম্বার পজিশনে পাওয়া গেছে?
// const sentence = "Learn with nahid is all about teaching web development skills and techques in an effecient and practical manner. If you are just getting started in web development. Learn with nahid is all about teaching web development skills and techques in an effecient and practical manner. If you are just getting started in web development.";
// const matches = sentence.match(/and/gi);
// const totalFounded = matches ? matches.length : 0;
// console.log("Total founded: " + totalFounded);

// const position = sentence.search(/and/i);
// const firstPosition = position >= 0 ? position : "not found!";
// console.log("Position " + firstPosition);



// 2. input : linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')
// output: 2 or 'not found!'
// problem: linearSearch() function টি implement করে দেখান
// function linearSearch(array, value) {
//     const length = array.length;

//     for (let i = 0; i < length; i++) {
//         if (array[i] === value) {
//             return i;
//         }
//     }
//     return 'not found!'
// }
// console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));



// 3. কোনো array থেকে কিভাবে সব থেকে বড় স্ট্রিং খুঁজে বের করবেন এবং তার index নাম্বার দেখবেন?
// function longestString(names) {
//     let longestWord = '';
//     for (const name of names) {
//         if (name.length > longestWord.length) {
//             longestWord = name;
//         }
//     }

//     return [longestWord, names.indexOf(longestWord)];
// }
// console.log(longestString(['Nahid Hasan', 'Abu Bakkar', 'Mohammad Anwar']));


// 4. ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩, ৫ এবং ৩ ও ৫ উভই সংখ্যা দ্বারা বিভাজ্য তা বের করো।

// function fizzBuzz(number) {
//     for (let i = 0; i < number; i++) {
//         if (i % 15 === 0) {
//             console.log(`${i} is FizzBuzz`);
//         }
//         else if (i % 3 === 0) {
//             console.log(`${i} is Fizz`);
//         }
//         else if (i % 5 === 0) {
//             console.log(`${i} is Buzz`);
//         }
//         else {
//             console.log(i);
//         }

//     }
// }
// fizzBuzz(100);


// ***Truthy = 'name', number(5), true, {}, []
// ***Falsy = ' ', false, null, undefined, 0

// 5. Array থেকে falsy value কিভাবে খুঁজে বের করে বাদ দিতে পারি?

// const mixedArray = [
//     'lws',
//     undefined,
//     'learn with nahid',
//     false,
//     "",
//     "apple",
//     40,
//     "k",
//     true,
//     "Thanks all",
//     NaN
// ];

// const trueArray = mixedArray.filter(Boolean);
// console.log(trueArray);

// const trueValue = mixedArray.filter(function (elements) {
//     if (elements) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(trueValue);



// 6. Object থেকে falsy value কিভাবে খুঁজে বের করে বাদ দিতে পারি?

const object = {
    a: 'lws',
    b: undefined,
    c: 'learn with nahid',
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN
};

const truthyObject = function (object) {
    for (const key in object) {
        console.log(key);
        if (!object[key]) {
            delete object[key];
        }
    }
    return object;
}
console.log(truthyObject(object));