let ar = document.getElementById('ar')
      
    
let books
books=JSON.parse(localStorage.getItem("Book"))
let requst = []
for(let i = 0;i!=localStorage.length;i++){
    if(localStorage.key(i).includes(false)){
        requst[i] = JSON.parse(localStorage.getItem(localStorage.key(i)))
    }
}

let find = books.findIndex(function(book){
    requst.forEach(function(index){
        if(book.id==index.id){
        let div = document.createElement('div')
        let name = document.createElement('h3')
        let nbook = document.createElement('h3')
        let img = document.createElement('img')
        let btn = document.createElement('button')
        let howback = 0;
        div.setAttribute('id' , 'r')
        name.innerHTML=index.name
        nbook.innerHTML=book.name
        setInterval(function(){
            
        },1)
     btn.innerHTML ="قبول"
     img.setAttribute('src',book.img)
     div.append(img,name,nbook,btn)
     ar.append(div)
btn.addEventListener('click' , ()=>{
let books = JSON.parse(localStorage.getItem("Book"))
let find = books.findIndex(function(f){
if(f.id == book.id){
return f
}
})
let edit ={name:books[find].name,Author:books[find].Author,id:books[find].id,img:books[find].img,dastebandi:books[find].dastebandi,mojod:false , mohbobiat:Number(books[find].mohbobiat+1)}

let final = books[find]
books.splice(find,1)
books.push(edit)
localStorage.removeItem("Book")
localStorage.setItem("Book" , JSON.stringify(books))
index.how = true
let user = {name:index.name,id:book.id,how:true}
for(let i =0;i!=localStorage.length;i++){
    if(localStorage.key(i).includes(book.id+index.name+false)){
        localStorage.removeItem(book.id+index.name+false)
        localStorage.setItem(book.id+index.name+true,JSON.stringify(user))
        location.href = location.href
    }
}

console.log();
})
}
})
})  