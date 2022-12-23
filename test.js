
const {sum} = require('./app.js');

test('nombre de la funcion' , () => {
    let total = sum(14,9);
    expect(total).toBe(23);
    expect(total).not.toBe(22);
});