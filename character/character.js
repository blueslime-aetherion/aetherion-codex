/* ======================================
   AETHERION CHARACTER CODEX V2
   CHARACTER DATABASE
====================================== */


const characters = [



// ===============================
// MAIN CHARACTER
// ===============================


{
id:"CHR-001",

name:"Velze Voul",

image:"image/VELZE.png",

race:"Human",

role:"Main Character",

class:"Analysis",

element:"Unknown",

age:15,

rank:"F",

kingdom:"Elarion Empire",

file:"detail/velze.html"

},



// ===============================
// FAMILY
// ===============================


{
id:"CHR-002",

name:"Zeke Voul",

image:"image/zeke.png",

race:"Human",

role:"Father",

class:"Blacksmith",

element:"Fire",

age:50,

rank:"C",

kingdom:"Elarion Empire",

file:"detail/zeke.html"

},




{
id:"CHR-003",

name:"Catelyn Voul",

image:"image/catelyn.png",

race:"Human",

role:"Mother",

class:"Support",

element:"Water",

age:42,

rank:"C",

kingdom:"Elarion Empire",

file:"detail/catelyn.html"

},




{
id:"CHR-004",

name:"Rhaenyra Voul",

image:"image/rhaenyra.png",

race:"Human",

role:"Academy Student",

class:"Mage",

element:"Magic",

age:10,

rank:"D",

kingdom:"Elarion Empire",

file:"detail/rhaenyra.html"

},





// ===============================
// FRIEND
// ===============================


{
id:"CHR-005",

name:"Rhaegar Morris",

image:"image/rhaegar.png",

race:"Human",

role:"Childhood Friend",

class:"Sword Fighter",

element:"Wind",

age:15,

rank:"F",

kingdom:"Elarion Empire",

file:"detail/rhaegar.html"

},





// ===============================
// MENTOR
// ===============================


{
id:"CHR-006",

name:"Tyrion",

image:"image/tyrion.png",

race:"Human",

role:"Mentor",

class:"Master Warrior",

element:"Unknown",

age:55,

rank:"A",

kingdom:"Elarion Empire",

file:"detail/tyrion.html"

},





// ===============================
// RIVAL
// ===============================


{
id:"CHR-007",

name:"Tywin Ashcroft",

image:"image/tywin.png",

race:"Human",

role:"Noble",

class:"Sword & Fire Mage",

element:"Fire",

age:15,

rank:"D",

kingdom:"Ashcroft Family",

file:"detail/tywin.html"

},







// ===============================
// ACADEMY STUDENTS
// ===============================


{
id:"CHR-008",

name:"Lyra Valeris",

image:"image/lyra.png",

race:"Human",

role:"Academy Student",

class:"Water Mage",

element:"Water",

age:10,

rank:"D",

kingdom:"Elarion Empire",

file:"detail/lyra.html"

},






{
id:"CHR-009",

name:"Kael Morrison",

image:"image/kael.png",

race:"Human",

role:"Academy Student",

class:"Shield Fighter",

element:"Earth",

age:10,

rank:"D",

kingdom:"Elarion Empire",

file:"detail/kael.html"

},






{
id:"CHR-010",

name:"Selene Arvania",

image:"image/selene.png",

race:"Elf",

role:"Academy Student",

class:"Nature Mage",

element:"Nature",

age:35,

rank:"D",

kingdom:"Sylvan Covenant",

file:"detail/selene.html"

},






{
id:"CHR-011",

name:"Doran Stonefist",

image:"image/doran.png",

race:"Dwarf",

role:"Academy Student",

class:"Hammer Fighter",

element:"Earth",

age:18,

rank:"D",

kingdom:"Ironforge Dominion",

file:"detail/doran.html"

},






{
id:"CHR-012",

name:"Aria Felwind",

image:"image/aria.png",

race:"Beastkin",

role:"Academy Student",

class:"Speed Fighter",

element:"Wind",

age:10,

rank:"D",

kingdom:"Beastkin Territory",

file:"detail/aria.html"

},






{
id:"CHR-013",

name:"Noah Elysian",

image:"image/noah.png",

race:"Human",

role:"Academy Student",

class:"Support Mage",

element:"Analysis",

age:10,

rank:"D",

kingdom:"Elarion Empire",

file:"detail/noah.html"

},






{
id:"CHR-014",

name:"Miriel Ashcroft",

image:"image/miriel.png",

race:"Human",

role:"Noble",

class:"Light Mage",

element:"Light",

age:10,

rank:"D",

kingdom:"Ashcroft Family",

file:"detail/miriel.html"

},






{
id:"CHR-015",

name:"Kaiser Von Raven",

image:"image/kaiser.png",

race:"Human",

role:"Noble",

class:"Advanced Fire Mage",

element:"Fire",

age:15,

rank:"C",

kingdom:"Raven Kingdom",

file:"detail/kaiser.html"

}



];









// =================================
// DISPLAY SYSTEM
// =================================



const container = document.getElementById(
"character-list"
);





function displayCharacters(data){


container.innerHTML="";



data.forEach(char=>{


let card = document.createElement("a");


card.className="card";


card.href=char.file;



card.innerHTML=`


<div>


<img src="${char.image}"

onerror="this.style.display='none'">



<div class="card-content">


<h2>
${char.name}
</h2>



<span class="badge race">

${char.race}

</span>



<br>


<span class="badge role">

${char.role}

</span>



<br>


<span class="badge">

${char.class}

</span>


</div>


</div>


`;



container.appendChild(card);



});



}





// =================================
// SEARCH
// =================================



function searchCharacter(){


let keyword =
document.getElementById("search")
.value
.toLowerCase();



let result = characters.filter(char=>


char.name
.toLowerCase()
.includes(keyword)


);



displayCharacters(result);



}





// =================================
// FILTER
// =================================


function filterCharacter(){



let race =
document.getElementById("raceFilter")
.value;



let role =
document.getElementById("roleFilter")
.value;



let result = characters.filter(char=>{


return (

(race=="all" || char.race==race)

&&

(role=="all" || char.role==role)


);


});



displayCharacters(result);



}







// LOAD


displayCharacters(characters);
