var wrapper= document.body.querySelector(".wrapper");
var list = [
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Jerry",
    damage:1,
    health:12,
    warrior:true
  },
  {
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  },
  {
    name:"Shorty",
    damage:10,
    health:3,
    warrior:false
  },
  {
    name:"Porty",
    damage:1,
    health:14,
    warrior:true
  },{
    name:"Perry",
    damage:2,
    health:9,
    warrior:true
  },
  {
    name:"Larry",
    damage:2,
    health:17,
    warrior:false
  }
]

for(var i=0; i<list.length; i++){
  if(list[i].health>=10 && list[i].damage>=2 && list[i].warrior==true){
  var nameEle = document.createElement("h1");
  var damageEle = document.createElement("h2");
  var healthEle = document.createElement("h3");
    if(list[i].name.includes("a")){
    nameEle.style.color="red"}
  nameEle.innerHTML="Name: " +list[i].name;
  damageEle.innerHTML="Damage: " +list[i].damage;
  healthEle.innerHTML="Health: " +list[i].health;
  wrapper.appendChild(nameEle);
  wrapper.appendChild(damageEle);
  wrapper.appendChild(healthEle);}
  }