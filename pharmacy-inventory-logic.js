const items = [
    {drugName:"Panadol", price:11, needsPrescriptio:false},
    {drugName:"Vitamin D", price:40, needsPrescriptio:true},
    {drugName:"Multivitamins", price:100, needsPrescriptio:false},
    {drugName:"strong painkiller", price:50, needsPrescriptio:true}
];

const meds = items.filter(med => med.needsPrescriptio == false)
.map(med => ` " سعر الدواء"${med.price} ريال  "${med.drugName}" اسم الدواء`)
console.log(meds);
