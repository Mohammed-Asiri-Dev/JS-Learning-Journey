const inventory = [
    { id: 101, details: { name: "Panadol", category: "Medicine", price: 20 }, stock: 50 },
    { id: 102, details: { name: "Masks", category: "Supplies", price: 5 }, stock: 200 },
    { id: 103, details: { name: "Insulin", category: "Medicine", price: 150 }, stock: 10 },
    { id: 104, details: { name: "Gloves", category: "Supplies", price: 15 }, stock: 0 }
];

// الهدف: استخراج الأدوية المتوفرة فقط وتنسيق طريقة عرضها
inventory
    // 1. التصفية (Filter): نبقي فقط على العناصر التي فئتها 'Medicine' ومخزونها أكبر من 0
    // لاحظ استخدام التفكيك المتداخل للوصول لـ category و stock مباشرة
    .filter(({ details: { category }, stock }) => category === "Medicine" && stock > 0)
    
    // 2. التشكيل (Map): نقوم بتحويل البيانات المصفاة إلى نصوص جاهزة للعرض
    .map(({ details: { name }, stock }) => {
        const message = `${name} متوفر الآن: يوجد ${stock} وحدة في المخزن.`;
        
        // طباعة النتيجة للتأكد
        console.log(message);
        
        // إرجاع النص ليكون جزءاً من المصفوفة الجديدة التي تنشئها دالة map
        return message; 
    });
