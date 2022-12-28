const sum=(a,b) => {
    return a+b
}

let oneEuroIs ={
    "JPY":127.9,
    "USD":1.2,
    "GBP":0.8,
}

function fromDollarToYen(dolar){
    let valor_yen= dolar*106.5;
    return valor_yen;
}

function fromEuroToDollar(euro){
    return euro*1.2;
}

function fromYenToPound(yen){
    let valor_pound= yen*0.006;
    return valor_pound;
}


module.exports={sum, fromEuroToDollar,fromDollarToYen, fromYenToPound};