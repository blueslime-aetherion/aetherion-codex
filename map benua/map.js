/* ======================================
 AETHERION WORLD MAP V3
 Interactive System
====================================== */



let zoom = 1;


const worldMap = document.getElementById("world-map");





// ================================
// ZOOM SYSTEM
// ================================


function zoomIn(){

    zoom += 0.15;

    worldMap.style.transform =
    `scale(${zoom})`;

}




function zoomOut(){

    zoom -= 0.15;


    if(zoom < 0.5){

        zoom = 0.5;

    }


    worldMap.style.transform =
    `scale(${zoom})`;

}




function resetMap(){

    zoom = 1;


    worldMap.style.transform =
    "scale(1)";

}







// ================================
// INFORMATION PANEL
// ================================



function updatePanel(title,text){


document.getElementById("title")
.innerHTML = title;



document.getElementById("description")
.innerHTML = text;


}









// ================================
// CONTINENT DATABASE
// ================================



const regions = {



centralis:{


title:"🏰 CENTRALIS CONTINENT",

text:`

<b>Jantung Peradaban Aetherion</b><br><br>


Kerajaan:
<br>
👑 Elarion Empire

<br><br>


Lokasi penting:

<br>
🏰 Capital City Elyndor

<br>
⚔ Adventurer Guild

<br>
📚 Akademi Aether


<br><br>

Ras dominan:
<br>
Human, Elf, Dwarf

<br><br>

Status:
<br>
Wilayah paling stabil di dunia.


`


},





eldoria:{


title:"🌲 ELDORIA CONTINENT",

text:`

<b>Tanah Hutan Abadi</b>


<br><br>


Wilayah suci bangsa Elf.


<br><br>


Lokasi:

<br>
🌳 World Tree

<br>
💧 Spirit Lake

<br>
🏛 Sacred Elf Temple


<br><br>


Bahaya:

<br>
Magic Beast tingkat tinggi.

`

},






ignaris:{


title:"🌋 IGNARIS CONTINENT",


text:`

<b>Tanah Api dan Baja</b>


<br><br>


Wilayah:

<br>
⛏ Dwarf Kingdom

<br>
🐉 Dragonborn Fortress


<br><br>


Lokasi:

<br>
🌋 Volcano Mountain

<br>
⛏ Ancient Mine

<br>
🏰 Iron Fortress


<br><br>


Sumber:

<br>
Aether Crystal terbesar.


`

},






frostheim:{


title:"❄ FROSTHEIM CONTINENT",

text:`

<b>Tanah Es Utara</b>


<br><br>


Wilayah:

<br>
Northern Tribe


<br><br>


Lokasi:

<br>
❄ Eternal Glacier

<br>
🌊 Frozen Ocean

<br>
🏔 Ice Mountain


<br><br>


Monster:

<br>
Frost Giant

<br>
Ice Dragon


`

},






sylvara:{


title:"🌿 SYLVARA CONTINENT",

text:`

<b>Tanah Kehidupan</b>


<br><br>


Wilayah Beastkin.


<br><br>


Lokasi:

<br>
🌳 Giant Tree Forest

<br>
🐺 Beastkin Village

<br>
🦌 Magic Beast Habitat


<br><br>


Wilayah dengan biodiversitas terbesar.


`

},







abyssal:{


title:"☠ ABYSSAL BORDER",

text:`

<b>Batas Dunia</b>


<br><br>


Wilayah Daemori.


<br><br>


Lokasi:

<br>
🌀 Abyss Gate

<br>
⚔ Ancient Battlefield

<br>
🏰 Dark Fortress


<br><br>


Threat Level:

<br>
★★★★★


`

},






southern:{


title:"🌀 SOUTHERN VOID",

text:`

<b>Wilayah Hilang</b>


<br><br>


Daerah yang tidak dipahami dunia.


<br><br>


Ciri:

<br>
🌫 Black Mist

<br>
🏝 Floating Island

<br>
🌊 Strange Ocean


<br><br>


Status:

<br>
Forbidden Exploration Area.


`

},






forbidden:{


title:"☠ FORBIDDEN LAND",

text:`

<b>Wilayah Terlarang</b>


<br><br>


Tidak berada dalam kendali kerajaan manapun.


<br><br>


Dikatakan tempat:

<br>
- Reruntuhan Era Pertama

<br>
- Monster Purba

<br>
- Rahasia Creation Fragment


<br><br>


Danger:

<br>
UNKNOWN


`

}



};







// ================================
// CLICK REGION
// ================================



function showRegion(region){


let data = regions[region];


if(data){


updatePanel(

data.title,

data.text

);


}



}










// ================================
// CITY DATABASE
// ================================



const cities = {



elyndor:{


title:"🏰 Capital City Elyndor",


text:`

<b>Ibu Kota Elarion Empire</b>


<br><br>


Pusat:

<br>
👑 Pemerintahan

<br>
📚 Akademi Aether

<br>
⚔ Adventurer Guild


<br><br>


Populasi:

<br>
500.000+

`

},




worldtree:{


title:"🌲 World Tree",

text:`

Pohon tertua Aetherion.


<br><br>


Tempat suci Elf.


<br><br>


Dipercaya memiliki hubungan dengan:

<br>
🌌 World Core

`

},




dragonfort:{


title:"🐉 Dragon Fortress",

text:`

Benteng kuno Dragonborn.


<br><br>


Dibangun menggunakan:

<br>
🔥 Dragon Steel


<br><br>


Penjaga:

<br>
Dragon Knight Order


`

},






abyssgate:{


title:"🌀 Abyss Gate",

text:`

Gerbang menuju Abyss.


<br><br>


Lokasi paling berbahaya di Aetherion.


<br><br>


Status:

<br>
Sealed


`

}



};








// ================================
// CLICK CITY
// ================================



function showCity(city){


let data = cities[city];


if(data){


updatePanel(

data.title,

data.text

);


}


}







// ================================
// DUNGEON
// ================================


document.querySelector(".dungeon")

.addEventListener(

"click",

function(){


updatePanel(

"🌀 Ancient Dungeon",

`

Dungeon dari era kuno.


<br><br>


Rank:

<br>
Unknown


<br><br>


Dipenuhi:

<br>
Ancient Monster

<br>
Lost Artifact

`

);


}

);

// =================================
// WORLD LOCATION SYSTEM
// =================================



const locations={



elyndor:{


title:"🏰 Elyndor Kingdom",

text:`

<b>Ibu Kota Elarion Empire</b>

<br><br>

Populasi:
500.000+

<br><br>

Fungsi:

<br>
👑 Pusat pemerintahan

<br>
📚 Akademi Aether

<br>
⚔ Adventurer Guild


`

},




worldtree:{


title:"🌲 World Tree",

text:`

Pohon tertua Aetherion.

<br><br>

Wilayah suci Elf.

<br>

Mengandung energi Spirit tertinggi.

`

},





dragon:{


title:"🐉 Dragon Fortress",

text:`

Benteng Dragonborn.

<br><br>

Dibangun dari Dragon Steel.

<br><br>

Penjaga:

<br>
Dragon Knight Order

`

},





ancientDungeon:{


title:"🌀 Ancient Dungeon",

text:`

Dungeon era pertama.

<br><br>

Rank:
UNKNOWN

<br><br>

Isi:

<br>
Ancient Monster

<br>
Lost Artifact

`

},





battlefield:{


title:"⚔ Ancient Battlefield",

text:`

Bekas perang besar Aetherion.

<br><br>

Dipenuhi:

<br>
- Senjata kuno

<br>
- Roh prajurit

<br>
- Monster mutasi

`

}



};






function showLocation(id){


let data = locations[id];



if(data){


updatePanel(

data.title,

data.text

);



}



// OPEN CODEX


if(id=="elyndor"){


openCodex(
"Kingdom Codex/codex-kingdom.html"
);


}



if(id=="worldtree"){


openCodex(
"codex/race.html"
);


}



if(id=="dragon"){


openCodex(
"codex/race.html"
);


}



if(id=="ancientDungeon"){


openCodex(
"codex/dungeon.html"
);


}



if(id=="battlefield"){


openCodex(
"codex/history.html"
);


}



}







function openCodex(page){


setTimeout(()=>{


window.open(

page,

"_blank"

);


},500);



}