const analyzeNumbers = (...numbers) => {
    let sum = 0;

    //  استخدام Loop للمرور على كل رقم وجمعه
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // اتخاذ قرار بناءً على المجموع (Logic)
    if (sum > 100) {
        return `Total is ${sum}: That's a large sum!`;
    } else {
        return `Total is ${sum}: Keep adding more numbers.`;
    }
};

// 4. تجربة الدالة وعرض النتائج في الكونسول
console.log(analyzeNumbers(10, 20, 30, 50)); //سيطبع Total is 110: That's a large sum!
console.log(analyzeNumbers(5, 10, 15));     //سيطبع Total is 30: Keep adding more numbers.
