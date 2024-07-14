let productType = document.getElementById("type-select");
let productName = document.getElementById("product-name");
let productCount = document.getElementById("product-count");

let addProduct = document.querySelector(".add-product");
let clearProduct = document.querySelector(".clear-list");

addProduct.addEventListener("click", Product);
let productArray = [];
function Product() {
    let productTypeValue = productType.value;
    let productNameValue = productName.value;
    let productCountValue = productCoun.value;
    if(
        productTypeValue != "" &&
        productNameValue != "" &&
        productCountValue != ""
    ) {
        let obj = {
            productType: productTypeValue,
            productName: productNameValue,
            productCount: productCountValue,
        };
        productArray.push(obj);
    } else {
        alert("Вы не заполнили поле");
    }

    let productWithElem = "";
    productArray.forEach((value, i) => {
        productWithElem += `<div class="product.item" >
                          Тип:${</div>`
    })

    productType.value=""
    productName.value=""
    productCount.value=""
       
    
}