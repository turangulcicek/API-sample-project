// html'in yüklenme anı

document.addEventListener("DomContentLoaded", fetchCategories);
document.addEventListener("DOMContentLoaded", fetchProducts);
document.addEventListener("DOMContentLoaded", fetchUsers);
const baseUrl= 'https://api.escuelajs.co/api/v1';

/*
 * kategori bilgilerini alma
 * 1- Api'ye istek at
 * 2- gelen veriyi işle
 * 3- gelen verileri kart şeklinde ekrana basıcak fonksiyonu çalıştır
 * 4- cevap hatalı olursa kullanıcıyı bilgilendir
 */

function fetchCategories(){
    fetch(`${baseUrl}/categories`)
    // cevap olumlu olursa çalışır
    .then((response)=> response.json())
    // veriyi json formatına dönünce çalışır
    .then((data)=> renderCategories(data.slice(1,5)))
    // cevapta hata varsa çalışır
    .catch((error)=> console.log(error));
}
fetchCategories();

const categoryList=document.querySelector(".categories")

function renderCategories(categories){
    // kategoriler dizisindeki her bir obje için ekrana kart basma
    categories.forEach((category)=>{
        // console.log(category)
        // 1- div oluşturma
        const categoryDiv=document.createElement("div")
        // 2-dive class ekleme
        categoryDiv.classList.add("category-card")
        // 3-divin içeriğini belirleme ``
        categoryDiv.innerHTML=`
           <img src=${category.image}/>
           <p>${category.name}</p>
        `
        // 4-elemanın htmlde categories divini ekleme (appenChild)
         categoryList.appendChild(categoryDiv)
    }
    );

}


// ////////////////////////////////////////////////////////////////////
/*  * product bilgilerini alma
 * 1- Api'ye istek at
 * 2- gelen veriyi işle
 * 3- gelen verileri kart şeklinde ekrana basıcak fonksiyonu çalıştır
 * 4- cevap hatalı olursa kullanıcıyı bilgilendir
 */ 


function fetchProducts(){
    fetch(`${baseUrl}/products`)
    // cevap olumlu olursa çalışır
    .then((response)=> response.json())
    // veriyi json formatına dönünce çalışır
    .then((data)=> renderProducts(data.slice(1,10)))
    // cevapta hata varsa çalışır
    .catch((error)=> console.log(error));
}
// fetchProducts();

const productList=document.querySelector(".products")

function renderProducts(products){
    // kategoriler dizisindeki her bir obje için ekrana kart basma
    products.forEach((product)=>{
        // console.log(product)
        // 1- div oluşturma
        const productDiv=document.createElement("div")
        // 2-dive class ekleme
        productDiv.classList.add("product")
        // 3-divin içeriğini belirleme ``
        productDiv.innerHTML=`
        <img src=${product.images}>
           <p>${product.title}</p>
           <p>${product.category.name}</p>
            <div class="product-bottom">
                <span>${product.price} ₺</span>
                <button>Sepete Ekle</button>
            </div>
        `
        // 4-elemanın htmlde categories divini ekleme (appenChild)
        productList.appendChild(productDiv)
    }
    );

}
////////////////////////////////////////////////////////////////////////////
// users area

function fetchUsers(){
    fetch(`${baseUrl}/users`)
     // cevap olumlu olursa çalışır
     .then((response)=> response.json())
     .then((data)=> renderUsers(data.slice(1,5)))
     .catch((error)=>console.log(error));
}


const userList=document.querySelector(".users")

function renderUsers(users){
    // kategoriler dizisindeki her bir obje için ekrana kart basma
    users.forEach((user)=>{
        // console.log(user)
        // 1- div oluşturma
        const userDiv=document.createElement("div")
        // 2-dive class ekleme
        userDiv.classList.add("user")
        // 3-divin içeriğini belirleme ``
        userDiv.innerHTML=`
                <img src=${user.avatar}>
                <p>${user.email}</p>
        
        `
        // 4-elemanın htmlde categories divini ekleme (appenChild)
        userList.appendChild(userDiv)


    });
}
