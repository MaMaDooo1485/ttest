let passwordS=document.getElementById('passwordS')
let nameS=document.getElementById('nameS')
let emailS=document.getElementById('emailS')
let sexS=document.getElementById('sexS')
let cityS=document.getElementById('cityS')
let phoneS=document.getElementById('phoneS')
let codemeliS=document.getElementById('codemeliS')
let lastnameS=document.getElementById('lastnameS')
let btn =document.getElementById('sabt')


btn.addEventListener('click' ,()=>{

let id= Math.floor(Math.random() * 10000)
//let md5 = MD5.generate(passwordS.value)
let time = new Date()
let years = time.getFullYear();
let month = time.getMonth()
let day = time.getMonth()
let hours = time.getHours()
let minets = time.getMinutes()
let secend = time.getSeconds()
let alltime = years+"/"+month+"/"+ day+"/"+hours+"/"+minets+"/"+secend

function user(name, lastname, password,codemeli,sex,phone,city,email,alltimeS,id) {
this.name = name;
this.lastname = lastname;
this.password = password;
this.codemeli=codemeli,
this.sex = sex
this.phone=phone
this.datesighnup=alltimeS
this.city = city
this.email=email
this.id=id
}

const user1 = new user(nameS.value,lastnameS.value,passwordS.value,codemeliS.value,sexS.value,phoneS.value,cityS.value,emailS.value,alltime,id);
localStorage.setItem(nameS.value , JSON.stringify(user1))



// let useradd = {name:nameS.value ,password:passwordS.value,email:emailS.value , sex:sexS.value,city:cityS.value,phone:phoneS.value,codemeli:codemeliS.value,lastname:lastnameS.value,datesighnup:alltime}
// localStorage.setItem(nameS.value,JSON.stringify(useradd))
location.href='login.html'

})