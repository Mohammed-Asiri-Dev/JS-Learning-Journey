// 1. تعريف المصفوفة الأساسية
let learningPath = ["HTML", "CSS", "JS", "React"];

// 2. البحث عن مكان (Index) العنصر المراد تعديله
let target = learningPath.indexOf("JS");

// 3. التحقق: إذا كان العنصر موجوداً (لا يساوي -1) قم بتعديله
if (target !== -1) {
    // احذف "JS" (عنصر واحد) وضع مكانها "Next.js"
    learningPath.splice(target, 1, "Next.js");
    console.log("✅ تم التحديث بنجاح!");
} else {
    // في حال لم يجد الكود الكلمة
    console.log(" االعنصر غير موجود في القائمة.");
}

// 4. طباعة النتيجة النهائية للمصفوفة
console.log(learningPath); 
// النتيجة المتوقعة: ["HTML", "CSS", "Next.js", "React"]
