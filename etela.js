let s = location.search
let url = new URLSearchParams(s)
let e = url.get('username')
    let allausers = document.getElementById('allausers')
    let users = []
let userss = []
let asliuserss = []
for(let i = 0; i < localStorage.length;i++){
    if( localStorage.key(i) !="Book"){
        
        users[i] = localStorage.key(i)
    }
}
let filter = users.filter(function(index){
 if(index!=null){

   if( index.includes('1')||index.includes(2)||index.includes(3)||index.includes(4)||index.includes(5)||index.includes(6)||index.includes(7)||index.includes(8)||index.includes(9)){
    }
    else{

return index
    }
}

})
for(let i = 0; i != localStorage.length ; i++){
         if(localStorage.getItem(filter[i])!=null ){
                 userss[i] =JSON.parse(localStorage.getItem(filter[i]))
                 
                }
            };
            userss.forEach(function(user){
                let div =document.createElement('div')
                let name =document.createElement('h3')
                let lastname =document.createElement('h3')
                let delet =document.createElement('button')
               // let edit =document.createElement('button')
                let book =document.createElement('button')
                let seemore =document.createElement('button')
                book.innerHTML="مشاهده امانت ها"
                book.setAttribute('id' , 'edit')
                seemore.innerHTML="اطلاعات بیشتر"
                seemore.addEventListener('click' ,()=>{
                    location.href = 'profile.html?username='+user.name

                })
div.setAttribute('id' , 'user')
delet.setAttribute('id' ,'del')
//edit.setAttribute('id' , 'edit')
div.append(name,lastname,seemore,book,delet)
allausers.append(div)
delet.innerHTML="حذف کاربر"
//edit.innerHTML="ویرایش اطلاعات"
name.innerHTML=user.name
lastname.innerHTML=user.lastname
delet.addEventListener('click' , ()=>{
localStorage.removeItem(user.name)
location.href = location.href

})
// edit.addEventListener('click' ,()=>{
//     localStorage.removeItem(user.name)
//     let newname = prompt(("نام جدید را وارد کنید"))
//     let lastname = prompt("نام خانوائگی جدید را وارد کنید")
//     let phone = prompt("شماره تلفن")
//     let city = prompt('شهر')
//     let codemeli = prompt('کدملی')
//     let email = prompt('ایمیل')
//     let password = prompt('رمز عبور')
//     let useradd = {name:newname ,password:password,email:email,city:city,phone:phone,codemeli:codemeli,lastname:lastname}
//     location.href = "profile.html?username="+newname
//     localStorage.setItem(newname , JSON.stringify(useradd))
//     location.href = location.href

// })

book.addEventListener('click' , ()=>{
    location.href = 'مشاهنده امانات.html?username='+user.name
})

            })
         