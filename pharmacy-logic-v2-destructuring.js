const medicine = {
    id: 101,
    brandName: "Panadol",
    details: {
        type: "Painkiller",
        price: 15,
        stock: 50
    },
    ingredients: ["Paracetamol", "Starch", "Povidone"]
};

// --- [ التدريب الأول: تفكيك الكائنات ] ---

// بدلاً من كتابة medicine.brandName، نستخدم التفكيك:
const { brandName, id } = medicine;

// التفكيك المتداخل (Nested): استخراج السعر والكمية مباشرة
const { details: { price, stock } } = medicine;

// إعادة التسمية: استخراج النوع وتسميته category
const { details: { type: category } } = medicine;


// --- [ التدريب الثاني: تفكيك المصفوفات ] ---

// استخراج أول مادتين فعالتين وتجاهل البقية
const [mainIngredient, secondIngredient] = medicine.ingredients;


// --- [ التدريب الثالث: القيم الافتراضية ] ---

// محاولة استخراج تاريخ الانتهاء (غير موجود) ووضع قيمة بديلة
const { expiryDate = "Not Set" } = medicine;


// --- [ المخرجات - Console Logs ] ---

console.log(`--- Inventory Report for ${brandName} (ID: ${id}) ---`);
console.log(`Category: ${category}`);
console.log(`Price: ${price} SAR | Stock: ${stock} units`);
console.log(`Main Ingredient: ${mainIngredient}`);
console.log(`Expiry Info: ${expiryDate}`);
