test('nombre de la funcion' , () => {
    const {sum} = require('./app.js');
    let total = sum(14,9);
    expect(total).toBe(23);
});
 
test('Euro a dolares', function(){
    const {fromEuroToDollar}=require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test('5 dolares a yenes', function(){
    const {fromDollarToYen}=require('./app.js');
    let dolar=fromDollarToYen(5);
    expect(dolar).toBe(532.5);

})

test('13 yenes a pound', function(){
    const {fromYenToPound}=require('./app.js');
    let yen=fromYenToPound(13);
    expect(yen).toBe(0.078);

})