/* ==========================================
   AETHERION CONTINENTS V2
   JAVASCRIPT
========================================== */

const popup=document.getElementById("popup");

const popupBody=document.getElementById("popupBody");

const close=document.getElementById("close");

close.onclick=()=>{

popup.style.display="none";

};

window.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

};



const continents={


centralis:{

title:"🏛 CENTRALIS CONTINENT",

image:"image/centralis.png",

theme:"Heart of Civilization",

kingdom:"Elarion Empire",

race:"Human • Elf • Dwarf • Beastkin",

danger:"★★☆☆☆",

population:"★★★★★",

mana:"★★★★☆",

description:`

<p>

Centralis merupakan pusat peradaban terbesar di dunia Aetherion.

Wilayah ini menjadi tempat berkembangnya berbagai kerajaan manusia,

akademi sihir terbesar, guild petualang,

serta jalur perdagangan internasional.

</p>

<h3>Keunggulan</h3>

<ul>

<li>Tanah paling subur.</li>

<li>Pusat perdagangan dunia.</li>

<li>Akademi sihir terbesar.</li>

<li>Militer paling lengkap.</li>

</ul>

`

},




eldoria:{

title:"🌳 ELDORIA CONTINENT",

image:"image/eldoria.png",

theme:"Ancient Forest",

kingdom:"Sylvan Covenant",

race:"Elf • Spirit Folk • Beastkin",

danger:"★★☆☆☆",

population:"★★★☆☆",

mana:"★★★★★",

description:`

<p>

Hutan kuno yang dipenuhi energi spiritual.

Tempat tinggal bangsa Elf dan para Spirit.

</p>

<h3>Keunggulan</h3>

<ul>

<li>Spirit Contract.</li>

<li>Ancient Tree.</li>

<li>Nature Magic.</li>

<li>Pengetahuan kuno.</li>

</ul>

`

},




ignaris:{

title:"🔥 IGNARIS CONTINENT",

image:"image/ignaris.png",

theme:"Land of Fire",

kingdom:"Ironforge Dominion",

race:"Dwarf • Dragonborn • Human",

danger:"★★★☆☆",

population:"★★★☆☆",

mana:"★★★☆☆",

description:`

<p>

Wilayah gunung api dan tambang terbesar.

Seluruh senjata legendaris berasal dari Ignaris.

</p>

<h3>Keunggulan</h3>

<ul>

<li>Rune Technology.</li>

<li>Legendary Blacksmith.</li>

<li>Artefak kuno.</li>

<li>Volcanic Energy.</li>

</ul>

`

},




frostheim:{

title:"❄ FROSTHEIM",

image:"image/frostheim.png",

theme:"Frozen North",

kingdom:"Northern Clans",

race:"Northern Human • Beastkin",

danger:"★★★★☆",

population:"★★☆☆☆",

mana:"★★★☆☆",

description:`

<p>

Benua es yang dipenuhi badai mana,

monster salju,

dan pegunungan raksasa.

</p>

<h3>Keunggulan</h3>

<ul>

<li>Prajurit terkuat.</li>

<li>Pemburu monster.</li>

<li>Ketahanan hidup.</li>

</ul>

`

},




sylvara:{

title:"🌿 SYLVARA",

image:"image/sylvara.png",

theme:"Land of Life",

kingdom:"Verdant Kingdom",

race:"Dryad • Beastkin",

danger:"★★☆☆☆",

population:"★★★☆☆",

mana:"★★★★★",

description:`

<p>

Wilayah dengan konsentrasi mana alami tertinggi.

Rumah bagi berbagai Magic Beast langka.

</p>

<h3>Keunggulan</h3>

<ul>

<li>Spirit Realm Connection.</li>

<li>Life Magic.</li>

<li>Ancient Forest.</li>

</ul>

`

},







abyssal:{

title:"😈 ABYSSAL BORDER",

image:"image/abyssal.png",

theme:"Border of Abyss",

kingdom:"Daemori Kingdom",

race:"Daemori • Human",

danger:"★★★★★",

population:"★★☆☆☆",

mana:"★★★★☆",

description:`

<p>

Wilayah yang berbatasan langsung dengan Abyss Realm.

Konflik melawan monster Abyss terjadi setiap hari.

</p>

<h3>Keunggulan</h3>

<ul>

<li>Benteng pertahanan.</li>

<li>Elite Knight.</li>

<li>Veteran Adventurer.</li>

</ul>

`

},




void:{

title:"🌌 SOUTHERN VOID REGION",

image:"image/forbiddenland.png",

theme:"Forbidden Land",

kingdom:"None",

race:"Unknown",

danger:"☠☠☠☠☠",

population:"None",

mana:"Infinite",

description:`

<p>

Wilayah yang diyakini memiliki hubungan langsung

dengan World Core.

Tidak ada kerajaan yang mampu menguasainya.

</p>

<h3>Status</h3>

<ul>

<li>Forbidden Area.</li>

<li>Mana tidak stabil.</li>

<li>Realm Distortion.</li>

<li>Ancient Ruins.</li>

</ul>

`

}



};





function openContinent(id){

const c=continents[id];

popup.style.display="flex";

popupBody.innerHTML=`

<img src="${c.image}"

style="width:100%;
height:300px;
object-fit:cover;
border-radius:15px;
margin-bottom:25px;">

<h1 style="color:gold;">

${c.title}

</h1>

<h3>

${c.theme}

</h3>

<br>

<p><b>Kingdom :</b> ${c.kingdom}</p>

<p><b>Dominant Race :</b> ${c.race}</p>

<p><b>Danger :</b> ${c.danger}</p>

<p><b>Population :</b> ${c.population}</p>

<p><b>Mana Density :</b> ${c.mana}</p>

<hr style="margin:20px 0;">

${c.description}

`;

}