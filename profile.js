let times= document.getElementById('timeS')
let change  = document.getElementById('change')
let pass = document.getElementById('pass')
let name = document.getElementById('name')
let e = location.search
let u = new URLSearchParams(e)
let n = u.get('username')
let user = JSON.parse(localStorage.getItem(n))
name.innerHTML=user.name+" :نام"
lastname.innerHTML=user.lastname + "  : نام خانوادگی"
phone.innerHTML=user.phone + "  :شماره تلفن"
city.innerHTML=user.city + "  :شهر"
code.innerHTML=user.codemeli + ":کدملی "
times.innerHTML=user.datesighnup+":تاریخ ورود ثبتنام "
pass.innerHTML="*****"+":رمز عبور"
pass.addEventListener('click' , ()=>{
pass.innerHTML=user.password+":رمز عبور "
pass.addEventListener('click' , ()=>{
pass.innerHTML="*****"+":رمز عبور"
})
})
let old = JSON.parse(localStorage.getItem(n))
let time = old.datesighnup
let id = old.id
console.log(time);
change.addEventListener('click' ,()=>{
let name = prompt('نام قدیمی را وارد کنید')
localStorage.removeItem(name)
let newname = prompt(("نام جدید را وارد کنید"))
let lastname = prompt("نام خانوائگی جدید را وارد کنید")
let phone = prompt("شماره تلفن")
let city = prompt('شهر')
let codemeli = prompt('کدملی')
let email = prompt('ایمیل')
let password = prompt('رمز عبور')
let useradd = {name:newname ,password:password,email:email,city:city,phone:phone,codemeli:codemeli,lastname:lastname,datesighnup:time,id:id}
location.href = "profile.html?username="+newname
localStorage.setItem(newname , JSON.stringify(useradd))
 
})