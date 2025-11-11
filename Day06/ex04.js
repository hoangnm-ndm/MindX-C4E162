//* if () {}
//* if() {...} else {...}
//* if() {...} elseif () { } else {...}

let myNumber = +window.prompt("Moi ban nhap vao mot so!");

if (myNumber > 0) {
  console.log(`So ${myNumber} la 1 so duong`);
} else if (myNumber < 0) {
  console.log(`So ${myNumber} la 1 so am`);
} else {
  console.log(`So myNumber chac la = 0`);
}

// * Phan biet so nguyen to, so chan, so le...
