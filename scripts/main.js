var productsContainer ;
if (localStorage.getItem('ourProducts')!=null){
    productsContainer = JSON.parse(localStorage.getItem("ourProducts"));
    displayProducts()
}
else{
    
var productsContainer = [];
}
var prouductNameInput = document.getElementById('productName');
var prouductPriceInput = document.getElementById('productPrice');
var prouductCatogoryInput = document.getElementById('productCatogory');
var prouductDescInput = document.getElementById('productDesc');

function addProduct(){
    var product ={
        name:prouductNameInput.value,
        price:prouductPriceInput.value,
        catogory:prouductCatogoryInput.value,
        desc:prouductDescInput.value,
    }
    productsContainer.push(product)
    localStorage.setItem('ourProducts', JSON.stringify(productsContainer) );
    console.log(productsContainer);
    clearForm()
    displayProducts()
}
function clearForm(){

    prouductNameInput.value= "";
    prouductPriceInput.value= "";
    prouductCatogoryInput.value= "";
    prouductDescInput.value= "";
}
function displayProducts(){
    var cartoona = ``;
    for(var i=0; i < productsContainer.length; i++){
        
        cartoona+=`
        <tr>
                    <td>${i }</td>
                    <td>${productsContainer[i].name}</td>
                    <td>${productsContainer[i].price}</td>
                    <td>${productsContainer[i].catogory}</td>
                    <td>${productsContainer[i].desc}</td>
                    <td><button onclick=" deleteProduct(${i })" class="btn btn-outline-danger">Delete</button></td>

        </tr>`;
        
    }
    document.getElementById('tableBody').innerHTML =cartoona;
}
function deleteProduct (index){
    productsContainer.splice(index,1);
    localStorage.setItem('ourProducts', JSON.stringify(productsContainer) );
    displayProducts();
}
function searchProduct(term){

    var cartoona = ``;

    for(var i=0; i < productsContainer.length; i++){
    
        if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase())==true) {
        
        cartoona+=`
        <tr>
                    <td>${i }</td>
                    <td>${productsContainer[i].name}</td>
                    <td>${productsContainer[i].price}</td>
                    <td>${productsContainer[i].catogory}</td>
                    <td>${productsContainer[i].desc}</td>
                    <td><button onclick=" deleteProduct(${i })" class="btn btn-outline-danger">Delete</button></td>

        </tr>`;
        }
    }
    document.getElementById('tableBody').innerHTML =cartoona;

}