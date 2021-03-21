'use strict';

// výpočet obsahu elipsy:*******************************

const ellipseArea = (width, height) => {
  const obsah = (width / 2) * (height / 2) * Math.PI;
  return obsah;
};

console.log(ellipseArea(2, 2));

// maximum ze dvou čísel:**********************************

const max2 = (cislo1, cislo2) => {
  if (cislo1 > cislo2) {
    return cislo1;
  } else {
    return cislo2;
  }
};

console.log(max2(30, 20));

// kontrola dič:********************************************

const isDIC = (inputStr) => {
  if (inputStr.length < 11 || inputStr.length > 12) {
    return false;
  }
  const prefix = inputStr.slice(0, 2);
  if (prefix !== 'CZ') {
    return false;
  }
  const digits = inputStr.slice(2);
  if (validator.isInt(digits) === false) {
    return false;
  }
  return true;
};

console.log(isDIC('CZ123456789'));

// Parsování data:********************************************
const parseDate = (datum) => {
  const rozlozeneDatum = {
    day: datum.slice(0, 2),
    month: datum.slice(3, 5),
    year: datum.slice(-4),
  };
  return rozlozeneDatum.valueOf();
};

console.log(parseDate('12.06.2023')); // co nuly??

//Formátování data: *******************************************
const formatDate = (objektDatumu) => {
  let { day, month, year } = objektDatumu;
  day = objektDatumu.day;
  month = objektDatumu.month;
  year = objektDatumu.year;
  //jak pořešit nuly,aby to fungovalo?
  if (day.length < 2) {
    day = day.padStart(2, '0');
    console.log(day.length);
  }
  if (month.length < 2) {
    month = month.padStart(2, '0');
  }

  return `${day}.${month}.${year}`;
};

console.log(formatDate({ day: 6, month: 4, year: 2021 }));

//Python zaokrouhlování: *******************************************

const zaokrouhli = (desetinneCislo) => {
  desetinneCislo = String(desetinneCislo);
  const indexDesetinneCarky = desetinneCislo.indexOf('.');
  const desetinnaCast = desetinneCislo.slice(indexDesetinneCarky + 1);
  const cisloPredDesetinnouCarkou = Math.trunc(desetinneCislo);

  let vysledek;
  if (desetinnaCast[0] < 5) {
    vysledek = cisloPredDesetinnouCarkou;
  } else if (desetinnaCast[0] > 5) {
    vysledek = cisloPredDesetinnouCarkou + 1;
  } else if (desetinnaCast[0] === 5) {
    // proč mi tahle část nefunguje??
    if (cisloPredDesetinnouCarkou % 2 === 0) {
      vysledek = cisloPredDesetinnouCarkou;
    } else {
      vysledek = cisloPredDesetinnouCarkou + 1;
    }
  }
  return vysledek;
};

console.log(zaokrouhli(12.75));

//maximum ze tří čísel: *******************************************
const max3 = (num1, num2, num3) => {
  let cisla = [num1, num2, num3];
  cisla.sort(function (a, b) {
    return b - a;
  });

  return cisla[0];
};

console.log(max3(8, 15, 11));

//maximum ze tří čísel (druhá varianta):
const max33 = (num1, num2, num3) => {
  let result;
  if (num1 > num2) {
    if (num1 > num3) {
      result = num1;
    } else {
      result = num3;
    }
  } else if (num2 > num3) {
    result = num2;
  } else {
    result = num3;
  }
  return result;
};

console.log(max33(15, 11, 8));
