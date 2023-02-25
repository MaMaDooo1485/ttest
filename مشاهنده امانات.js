let o = document.getElementById('o')
let s = location.search
let url = new URLSearchParams(s)
let e = url.get('username')
let books
books=JSON.parse(localStorage.getItem("Book")) 
 let allausers = document.getElementById('allausers')
let users = []
let userss = []
let asliuserss = []
for(let i = 0; i < localStorage.length;i++){
users[i] = localStorage.key(i)
}
let filter = users.filter(function(index){
if(index!=null){

if(index.includes('1')||index.includes(2)||index.includes(3)||index.includes(4)||index.includes(5)||index.includes(6)||index.includes(7)||index.includes(8)||index.includes(9)){
}
else{

return index
}
}

})
for(let i = 0; i != localStorage.length ; i++){
     if(localStorage.getItem(filter[i])!=null){
             userss[i] =JSON.parse(localStorage.getItem(filter[i]))
             
            }
        };

        let filters = users.filter(function(index){
if(index!=null){

if(index.includes('1')||index.includes(2)||index.includes(3)||index.includes(4)||index.includes(5)||index.includes(6)||index.includes(7)||index.includes(8)||index.includes(9)){
   return index
}
else{

}
}

})

let finbook= filters.filter(function(booku){
if(booku.includes(e)){
    return booku
}
})
let findindexbook = []
let book1 = []
for(let i = 0 ; i!= localStorage.length;i++){
book1[i] = JSON.parse(localStorage.getItem(finbook[i]))
}
book1.forEach(function(i){
if(i !=null){
    books.findIndex(function(b){
        if(b.id == i.id&&i.how!=false && i.how !='false'){
            findindexbook.push(b)
            
        }
        
    })
}


})
let a = 0;
findindexbook.forEach(function(book){
o.insertAdjacentHTML('afterbegin','<div id="books">'+
        '<img src="'+book.img+'" alt="">'+
        '<p>'+book.name+'</p>'+
        '<p>'+book.Author+'</p>'+
        '<buton onclick="del('+book.id+')" > حذف کردن</button>'+
        
        
        '</div>')
    })
function del(id){
localStorage.removeItem(id+e)
localStorage.removeItem(id+e+true)
let books = JSON.parse(localStorage.getItem("Book"))
let find = books.findIndex(function(f){
if(f.id == id){
return f
}
})
let edit ={name:books[find].name,Author:books[find].Author,id:books[find].id,img:books[find].img,dastebandi:books[find].dastebandi,mojod:true,mohbobiat:books[find].mohbobiat}

books.splice(find,1)
books.push(edit)
localStorage.removeItem("Book")
localStorage.setItem("Book" , JSON.stringify(books))
location.href = location.href   
}

