// 1. مصفوفة تحتوي على بيانات الموظفين (كل موظف عبارة عن كائن Object)
let employees = [
    { name: "Ahmed", salary: 5000, performance: "A" },
    { name: "Sara", salary: 6000, performance: "B" },
    { name: "Mohammed", salary: 4000, performance: "A" }
];

// 2. دالة السهم (Arrow Function) لحساب المكافأة بناءً على الأداء
const giveBonus = (obj) => {
    // إذا كان التقييم ممتاز (A) زد الراتب 1000
    if (obj.performance === "A") {
        obj.salary += 1000;
    } 
    // أما إذا كان التقييم جيد (B) زد الراتب 500 فقط
    else if (obj.performance === "B") {
        obj.salary += 500;
    }
    
    // طباعة النتيجة النهائية لكل موظف بعد التعديل
    console.log(`${obj.name} حصل على زيادة وراتبه الآن ${obj.salary}`);
};

// 3. تشغيل الدالة لكل موظف في المصفوفة عبر تحديد مكانه (Index)
giveBonus(employees[0]); // للموظف الأول (أحمد)
giveBonus(employees[1]); // للموظفة الثانية (سارة)
giveBonus(employees[2]); // للموظف الثالث (محمد)
