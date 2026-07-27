/* ======================================
   AETHERION RELIGION CODEX
   DATABASE V1.0
====================================== */


const religions = {



/* ======================================
   SEVEN GREAT GODS
====================================== */


seven:{


title:"⛪ Seven Great Gods",

subtitle:"The Guardians of Aetherion",


groups:[


{

name:"🌟 Seven Divine Guardians",

desc:`

Kepercayaan terbesar di Aetherion.
Masyarakat percaya bahwa tujuh dewa agung
menciptakan dunia dan menjaga keseimbangan.

Namun kebenaran kuno menyatakan bahwa
mereka bukan pencipta dunia, melainkan
penjaga World Core.

`,


members:[


"God of Creation",
"God of Wisdom",
"God of Life",
"God of Time",
"God of Elements",
"God of Order",
"God of Souls"


],


info:[

"Status : Major Religion",
"Pengikut : Hampir seluruh ras",
"Era : Ancient Age"

]


}



]


},






/* ======================================
   WORLD CORE BELIEF
====================================== */


core:{


title:"💎 World Core Faith",

subtitle:"The Origin Theory",


groups:[


{

name:"Followers of The Core",

desc:`

Kelompok kecil yang percaya bahwa
seluruh energi Aetherion berasal dari
World Core.

Mereka menolak konsep bahwa Seven Gods
adalah pencipta dunia.

`,


members:[


"Core Scholars",
"Ancient Researchers",
"World Core Priests"

],


info:[

"Status : Forbidden Knowledge",
"Region : Centralis & Forbidden Land",
"Research : World Core"

]


}



]


},







/* ======================================
   SPIRIT WORSHIP
====================================== */


spirit:{


title:"🌿 Spirit Worship",

subtitle:"Religion of Nature and Spirits",



groups:[


{

name:"Spirit Covenant",

desc:`

Kepercayaan bangsa Elf dan Spirit Folk.
Mereka percaya bahwa semua kehidupan
memiliki roh dan hubungan dengan Spirit Realm.

`,


members:[


"Forest Spirits",
"Ancient Spirits",
"Nature Guardians"

],


info:[

"Ras Dominan : Elf",
"Wilayah : Eldoria & Sylvara",
"Element : Nature"

]


}



]


},







/* ======================================
   DAEMORI BELIEF
====================================== */


daemori:{


title:"🌑 Daemori Ancient Faith",

subtitle:"Shadow and Balance",


groups:[


{

name:"The Shadow Path",

desc:`

Kepercayaan kuno bangsa Daemori.
Mereka percaya bahwa kegelapan bukanlah
kejahatan, tetapi bagian dari keseimbangan dunia.

`,


members:[


"Shadow Priests",
"Abyss Researchers",
"Dark Scholars"

],


info:[

"Ras : Daemori",
"Region : Abyssal Border",
"View : Balance Between Light and Dark"

]


}



]


},







/* ======================================
   ABYSS CULT
====================================== */


abyss:{


title:"🔥 Abyss Cult",

subtitle:"Forbidden Religion",


groups:[


{

name:"Followers of The Abyss",

desc:`

Kelompok terlarang yang menyembah
kekuatan dari Abyss Realm.

Mereka percaya kehancuran dunia adalah
jalan menuju evolusi baru.

`,


members:[


"Abyss Priest",
"Corrupted Mage",
"Void Worshiper"

],


info:[

"Status : Illegal",
"Threat : Extreme",
"Connection : Abyss Realm"

]


}



]


},







/* ======================================
   DRAGON ANCESTRAL BELIEF
====================================== */


dragon:{


title:"🐉 Dragon Ancestor Religion",

subtitle:"The First Children of Aetherion",


groups:[


{

name:"Ancient Dragon Path",

desc:`

Kepercayaan bangsa Dragonborn.
Mereka percaya naga adalah makhluk pertama
yang memahami energi Aether.

`,


members:[


"Elder Dragon",
"Dragonborn Clan",
"Ancient Dragon Priest"

],


info:[

"Ras : Dragonborn",
"Element : Aether",
"Age : Before Human Civilization"

]


}



]


},

dragon:{


title:"🐉 Dragon Ancestor Religion",

subtitle:"The First Children of Aetherion",


groups:[


{

name:"Ancient Dragon Path",

desc:`

Kepercayaan bangsa Dragonborn.
Mereka percaya naga adalah makhluk pertama
yang memahami energi Aether.

`,


members:[


"Elder Dragon",
"Dragonborn Clan",
"Ancient Dragon Priest"

],


info:[

"Ras : Dragonborn",
"Element : Aether",
"Age : Before Human Civilization"

]


}



]


},







/* ======================================
   HOLY CHURCH
====================================== */


church:{


title:"⛪ Holy Church of Seven Gods",

subtitle:"The Largest Religious Organization",


groups:[


{

name:"Divine Church",

desc:`

Organisasi keagamaan terbesar di Aetherion.
Mereka menyebarkan ajaran Seven Great Gods
dan menjaga hubungan antara manusia
dengan kekuatan ilahi.

Holy Church memiliki pengaruh besar
dalam politik, pendidikan, dan kerajaan.

`,


members:[


"High Priest",
"Saint Order",
"Holy Knight",
"Church Scholar"

],


info:[

"Status : Official Religion",
"Headquarters : Centralis",
"Authority : High Influence"

]


},



{

name:"Holy Knight Order",

desc:`

Pasukan suci yang bertugas melindungi
umat manusia dari ancaman monster,
Abyss, dan kekuatan terlarang.

`,


members:[


"Paladin",
"Templar",
"Guardian Knight"

],


info:[

"Role : Religious Military",
"Enemy : Abyss Creatures"

]


}



]


},









/* ======================================
   ANCIENT TRUTH
====================================== */


ancient:{


title:"📜 Ancient Truth",

subtitle:"The Lost Knowledge Before History",


groups:[


{

name:"The Ancient Scholars",

desc:`

Kepercayaan sekaligus penelitian rahasia
yang mencari kebenaran sebelum era kerajaan.

Mereka percaya sejarah dunia telah berubah
dan banyak informasi tentang World Core,
Seven Gods, dan penciptaan Aetherion
telah disembunyikan.

`,


members:[


"Ancient Researchers",
"Lost Civilization Scholars",
"World Core Explorers"

],


info:[

"Status : Hidden Knowledge",
"Access : Restricted",
"Connection : Ancient Era"

]


},



{

name:"Fragments of Creation",

desc:`

Kelompok ini mencari pecahan informasi
tentang asal mula dunia dan hubungan
antara World Core dengan tujuh Authority.

`,


members:[


"Archaeologist",
"Forbidden Mage",
"Ancient Historian"

],


info:[

"Threat Level : Unknown",
"Secret : World Origin"

]


}



]


}

};









/* ======================================
   DISPLAY SYSTEM
====================================== */


const detailBox = document.getElementById("detail");

const religionContent =
document.getElementById("religion-content");






function openReligion(id){



let religion = religions[id];



let html = `


<h1>
${religion.title}
</h1>


<h2>
${religion.subtitle}
</h2>


`;






religion.groups.forEach(group=>{



html += `



<div class="religion-item">


<h2>
${group.name}
</h2>



<p>

${group.desc}

</p>





<h3>
Followers / Members
</h3>


<ul>

`;





group.members.forEach(member=>{


html += `

<li>
${member}
</li>


`;


});




html += `

</ul>



<h3>
Information
</h3>


<ul>

`;






group.info.forEach(data=>{


html += `


<li>
${data}
</li>


`;


});





html += `


</ul>



</div>


`;



});







religionContent.innerHTML = html;



detailBox.style.display="flex";



}









function closeReligion(){


detailBox.style.display="none";


}