let products = [];
const list = document.getElementById("list")
const getProducts = async () => {
  const response = await fetch(
    "https://6519738a818c4e98ac606452.mockapi.io/products"
  );
  products = await response.json();
  displayproducts();
};
const displayproducts = ()=>{
    const producttem=document.getElementById("product-items")
    products.forEach(product => {
        const productitem = producttem.content.cloneNode(true);
        productitem.getElementById("item-name").textContent=product.name;
        list.appendChild(productitem)
    });
}
getProducts()