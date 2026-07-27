/* ======================================
   AETHERION DUNGEON CODEX
   DATABASE V1.0
====================================== */


const dungeons = {



/* ======================================
   ABYSSAL BORDER
====================================== */


abyssal:{


title:"🌑 Abyssal Border Continent",

subtitle:"Boundary of The World",


locations:[


{

id:"DNG-001",

name:"Abyssal Rift",

type:"Abyss Dungeon",

rank:"SS",


desc:`

Retakan besar yang menghubungkan
Aetherion dengan Abyss Realm.

Energi kegelapan terus keluar dari
wilayah ini dan menyebabkan mutasi
makhluk hidup di sekitarnya.

`,


info:[

"Lokasi : Abyssal Border",
"Threat : Extreme",
"Origin : Realm Barrier Collapse"

],


monsters:[

"Abyss Beast",
"Shadow Creature",
"Corrupted Demon"

]


},




{


id:"DNG-002",

name:"Daenali Rift",

type:"Ancient Rift",

rank:"S",


desc:`

Rift kuno yang terbentuk sejak perang
antara dunia Aetherion dan Abyss.

Wilayah ini menjadi salah satu
sumber energi Abyss terbesar.

`,


info:[

"Kategori : Rift",
"Status : Restricted Area"

],


monsters:[

"Void Monster",
"Abyss Spawn"

]


},





{


id:"DNG-003",

name:"The Wailing Mire",

type:"Cursed Swamp Dungeon",

rank:"A",


desc:`

Rawa terkutuk yang selalu terdengar
suara misterius pada malam hari.

Banyak ekspedisi hilang di wilayah ini.

`,


info:[

"Kategori : Cursed Area",
"Bahaya : Mental Corruption"

],


monsters:[

"Cursed Beast",
"Swamp Horror"

]


},





{


id:"DNG-004",

name:"Abyssal Air",

type:"Dead Zone",

rank:"A+",


desc:`

Wilayah dengan udara yang dipenuhi
energi Abyss.

Makhluk biasa tidak dapat bertahan
lama di area ini.

`,


info:[

"Efek : Mana Corruption",
"Status : Dangerous Zone"

],


monsters:[

"Abyss Creature"

]


}


]

},







/* ======================================
   CENTRALIS
====================================== */


centralis:{


title:"🏛 Centralis Continent",

subtitle:"Heart of Civilization",


locations:[


{

id:"DNG-005",

name:"Deat Uent",

type:"Ancient Ruins",

rank:"B+",


desc:`

Reruntuhan misterius di wilayah Centralis.

Dipercaya menyimpan peninggalan
peradaban lama sebelum kerajaan modern.

`,


info:[

"Lokasi : Centralis",
"Kategori : Ruins"

],


monsters:[

"Ancient Guardian",
"Lost Automaton"

]


}



]


},







/* ======================================
   ELDORIA
====================================== */


eldoria:{


title:"🌳 Eldoria Continent",

subtitle:"Land of Eternal Forest",


locations:[



{

id:"DNG-006",

name:"Great Tree Tunnels",

type:"Nature Dungeon",

rank:"A",


desc:`

Jaringan terowongan besar di dalam
akar pohon kuno Eldoria.

Dipenuhi energi alam dan roh penjaga.

`,


info:[

"Kategori : Ancient Nature Dungeon"

],


monsters:[

"Root Beast",
"Forest Guardian"

]


},





{

id:"DNG-007",

name:"Fae Ponds",

type:"Spirit Dungeon",

rank:"B",


desc:`

Danau spiritual tempat bangsa Fae
berkumpul.

Wilayah ini memiliki hubungan kuat
dengan Spirit Realm.

`,


info:[

"Kategori : Spirit Territory"

],


monsters:[

"Fae Creature",
"Spirit Beast"

]


}



]


},







/* ======================================
   IGNARIS
====================================== */


ignaris:{


title:"🔥 Ignaris Continent",

subtitle:"Land of Fire and Steel",


locations:[



{

id:"DNG-008",

name:"Rune Mines",

type:"Mining Dungeon",

rank:"B+",


desc:`

Tambang kuno yang menghasilkan
material rune dan kristal Aether.

`,


info:[

"Resource : Rune Ore",
"Resource : Aether Crystal"

],


monsters:[

"Mine Golem",
"Crystal Beast"

]


},






{

id:"DNG-009",

name:"Obsidian Citadel",

type:"Ancient Fortress Dungeon",

rank:"S",



desc:`

Benteng obsidian kuno yang memiliki
teknologi dan rahasia peradaban lama.

`,


info:[

"Kategori : Ancient Fortress"

],


monsters:[

"Obsidian Guardian"

]


}



]


},







/* ======================================
   FROSTHEIM
====================================== */


frostheim:{


title:"❄ Frostheim Continent",

subtitle:"Land of Northern Ice",


locations:[



{

id:"DNG-010",

name:"Frost Giant Caves",

type:"Monster Cave",

rank:"A+",


desc:`

Gua besar tempat Frost Giant
berkembang biak.

`,


info:[

"Threat : High"

],


monsters:[

"Frost Giant",
"Ice Beast"

]


},





{

id:"DNG-011",

name:"Glacial Spire",

type:"Frozen Tower",

rank:"S",


desc:`

Menara es misterius yang muncul
dari badai mana.

`,


info:[

"Fenomena : Mana Storm"

],


monsters:[

"Ice Elemental"

]


}



]


},







/* ======================================
   SYLVARA
====================================== */


sylvara:{


title:"🌿 Sylvara Continent",

subtitle:"Land of Life",


locations:[



{

id:"DNG-012",

name:"The World Ruins",

type:"Ancient Ruins",

rank:"S",


desc:`

Reruntuhan kuno yang memiliki
hubungan dengan sejarah World Core.

`,


info:[

"Status : Ancient Mystery"

],


monsters:[

"Ancient Guardian"

]


},




{

id:"DNG-013",

name:"The Sunken Ruins",

type:"Lost Civilization Dungeon",

rank:"A+",


desc:`

Kota kuno yang tenggelam
dalam energi alam.

`,


info:[

"Kategori : Lost Civilization"

],


monsters:[

"Water Spirit",
"Ancient Beast"

]


},




{

id:"DNG-014",

name:"Fae's Hollow",

type:"Spirit Dungeon",

rank:"A",


desc:`

Tempat tersembunyi para Fae kuno.

`,


info:[

"Connection : Spirit Realm"

],


monsters:[

"Fae Guardian"

]


}



]



},
	  
/* ======================================
   FORBIDDEN LAND
====================================== */


void:{


title:"🌌 The Forbidden Land",

subtitle:"The Last Territory",



locations:[




{

id:"DNG-015",

name:"World Core Anomaly",

type:"World Core Dungeon",

rank:"SS",


desc:`

Wilayah dengan gangguan langsung
terhadap energi World Core.

Aliran mana di area ini tidak mengikuti
hukum dunia normal.

Dipercaya menjadi salah satu titik
terdekat dengan inti penciptaan Aetherion.

`,


info:[

"Lokasi : Southern Void Region",

"Status : Forbidden",

"Hubungan : World Core"

],


monsters:[

"Void Entity",

"Ancient Guardian",

"Unknown Lifeform"

]


},






{

id:"DNG-016",

name:"Ancient Ruins of Zeth",

type:"Ancient Civilization Dungeon",

rank:"S+",


desc:`

Reruntuhan peradaban Zeth yang hilang
ribuan tahun lalu.

Tidak diketahui apakah kehancurannya
disebabkan perang, bencana,
atau fenomena World Core.

`,


info:[

"Kategori : Lost Civilization",

"Era : Ancient Age"

],


monsters:[

"Ancient Construct",

"Zeth Guardian"

]


},








{

id:"DNG-017",

name:"The Shattered Altar",

type:"Unknown Ancient Dungeon",

rank:"SS+",


desc:`

Altar kuno yang memiliki hubungan
dengan sejarah Seven Gods.

Energi misterius masih aktif meskipun
telah hancur selama ribuan tahun.

`,


info:[

"Status : Restricted",

"Connection : Seven Gods",

"Danger : Extreme"

],


monsters:[

"Divine Corrupted Guardian",

"Unknown Entity"

]


},








{

id:"DNG-018",

name:"Echoing Chasm Wastes",

type:"Void Territory",

rank:"S+",


desc:`

Jurang luas yang menyebabkan
distorsi ruang dan waktu.

Suara dari dalam jurang dipercaya
berasal dari dimensi lain.

`,


info:[

"Fenomena : Spatial Distortion",

"Connection : Inner Void"

],


monsters:[

"Void Beast",

"Spatial Predator"

]


},








{

id:"DNG-019",

name:"Oakhee Chasm",

type:"Void Chasm",

rank:"A+",


desc:`

Jurang besar wilayah Merinah Republic.

Area ini menjadi salah satu lokasi
penelitian energi Void.

`,


info:[

"Wilayah : Merinah Republic",

"Status : Dangerous Area"

],


monsters:[

"Void Creature",

"Chasm Beast"

]


}

]

}


};

/* ======================================
   DUNGEON DISPLAY SYSTEM
====================================== */


const detailBox = document.getElementById("detail");

const dungeonContent = document.getElementById("dungeon-content");





function openDungeonRegion(id){


let region = dungeons[id];


let html = `



<h1>
${region.title}
</h1>


<h2>
${region.subtitle}
</h2>



`;





region.locations.forEach(dungeon=>{



html += `



<div class="dungeon-item">



<h3>

${dungeon.id}

<br>

${dungeon.name}

</h3>




<div class="rank rank-${dungeon.rank}">

RANK ${dungeon.rank}

</div>




<p>

<b>Type:</b>

${dungeon.type}

</p>





<p>

${dungeon.desc}

</p>






<h3>
Information
</h3>



<ul>

`;





dungeon.info.forEach(info=>{


html += `


<li>
${info}
</li>


`;


});



html += `


</ul>




<h3>
Known Monsters
</h3>


<ul>

`;





dungeon.monsters.forEach(monster=>{


html += `


<li>
${monster}
</li>


`;


});



html += `


</ul>



</div>


`;



});







dungeonContent.innerHTML = html;



detailBox.style.display="flex";



}









function closeDungeon(){


detailBox.style.display="none";


}