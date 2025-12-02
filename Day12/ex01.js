console.log(document);
console.log(typeof document);
console.log({ document });

// * Cach 1: Theo ID
const h1Element = document.getElementById("title");

console.log(h1Element);
console.log(typeof h1Element);

//* Thao tác getter

// * Cach 2: theo Class
const h2Elements = document.getElementsByClassName("title-2");
// HTMLCollection

console.log(h2Elements);
console.log(Array.isArray(h2Elements));
console.log(h2Elements[0]);

// * Cách 3: Tag name

const pElements = document.getElementsByTagName("p");
console.log(pElements[3]);

// * Cach 4: Query Selector

const pElement = document.querySelector("div.product > p");

console.log(pElement);

const productNameElement = document.querySelectorAll("div.product > p");

console.log(productNameElement);
// ! NodeList

/**
 * * Trong DOM Tree có 3 loại node chính:
 * * 1. Element Node.
 * * 2. Text Node (Nội dung text bên trong Element)
 * * 3. Attribute Node (Thuộc tính thuộc về Element Node)
 */
