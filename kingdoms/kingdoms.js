/* =====================================
   AETHERION KINGDOMS CODEX
   JAVASCRIPT V1.0
===================================== */


const detail = document.getElementById("detail");

const info = document.getElementById("info");





const kingdoms = {



elarion:{


title:"🏛 Elarion Empire",

content:`

<h1>
Elarion Empire
</h1>


<h3>
"Peradaban dan Kemajuan"
</h3>


<p>

Kerajaan terbesar di Centralis Continent.
Elarion menjadi pusat politik,
perdagangan,
dan perkembangan ilmu sihir Aetherion.

</p>


<h3>
Wilayah
</h3>

<ul>

<li>Centralis Continent</li>

<li>Ibu Kota: Elarion Capital</li>

</ul>



<h3>
Ras Dominan
</h3>

<ul>

<li>Human</li>

<li>Elf</li>

<li>Dwarf</li>

<li>Beastkin</li>

</ul>



<h3>
Kekuatan Utama
</h3>

<ul>

<li>Militer terbesar</li>

<li>Akademi sihir terbaik</li>

<li>Diplomasi internasional</li>

<li>Guild Adventurer terbesar</li>

</ul>



<h3>
Sistem Pemerintahan
</h3>


<p>

Monarki Kekaisaran.
Kaisar memiliki kekuasaan tertinggi
dibantu oleh bangsawan dan dewan kerajaan.

</p>

`

},







sylvan:{


title:"🌳 Sylvan Covenant",

content:`

<h1>
Sylvan Covenant
</h1>


<h3>
"Alam dan Keseimbangan"
</h3>



<p>

Aliansi kuno bangsa Elf yang menjaga
hutan abadi Eldoria.

</p>



<h3>
Wilayah</h3>

<ul>

<li>Eldoria Continent</li>

<li>Ancient Forest Region</li>

</ul>




<h3>
Ras Dominan
</h3>

<ul>

<li>High Elf</li>

<li>Wood Elf</li>

<li>Spirit Folk</li>

<li>Beastkin</li>

</ul>




<h3>
Keunggulan
</h3>

<ul>

<li>Nature Magic</li>

<li>Spirit Contract</li>

<li>Pengetahuan kuno</li>

<li>Hubungan dengan Spirit Realm</li>

</ul>




<h3>
Pemerintahan
</h3>


<p>

Dipimpin oleh Council of Elders
dan pemimpin spiritual Elf.

</p>

`

},









ironforge:{


title:"🔥 Ironforge Dominion",

content:`

<h1>
Ironforge Dominion
</h1>


<h3>
"Baja dan Api"
</h3>


<p>

Kerajaan industri terbesar yang terkenal
dengan senjata,
armor,
dan teknologi rune.

</p>




<h3>
Wilayah
</h3>

<ul>

<li>Ignaris Continent</li>

<li>Mountain Forge City</li>

</ul>



<h3>
Ras Dominan
</h3>

<ul>

<li>Dwarf</li>

<li>Dragonborn</li>

<li>Human</li>

</ul>




<h3>
Keunggulan
</h3>

<ul>

<li>Blacksmith legendaris</li>

<li>Rune Technology</li>

<li>Artefak kuno</li>

<li>Senjata anti monster</li>

</ul>




<h3>
Pemerintahan
</h3>

<p>

Dipimpin oleh Forge King,
penguasa yang dipilih berdasarkan kemampuan.

</p>

`

},









northern:{


title:"❄ Northern Clans",

content:`

<h1>
Northern Clans
</h1>


<h3>
"Kekuatan dan Bertahan Hidup"
</h3>



<p>

Kumpulan klan pejuang dari wilayah es Frostheim.

</p>



<h3>
Wilayah
</h3>

<ul>

<li>Frostheim Continent</li>

<li>Frozen Mountains</li>

</ul>




<h3>
Ras Dominan
</h3>

<ul>

<li>Human Utara</li>

<li>Beastkin Utara</li>

</ul>




<h3>
Keunggulan
</h3>

<ul>

<li>Prajurit kuat</li>

<li>Hunter monster</li>

<li>Survival extreme</li>

<li>Resistensi dingin</li>

</ul>




<h3>
Budaya
</h3>

<p>

Menghormati kekuatan,
keberanian,
dan kehormatan.

</p>

`

},











verdant:{


title:"🌿 Verdant Kingdom",

content:`

<h1>
Verdant Kingdom
</h1>



<h3>
"Kehidupan dan Evolusi"
</h3>



<p>

Kerajaan yang hidup berdampingan
dengan alam Sylvara.

</p>




<h3>
Wilayah
</h3>

<ul>

<li>Sylvara Continent</li>

<li>Spirit Forest</li>

</ul>



<h3>
Ras Dominan
</h3>

<ul>

<li>Beastkin</li>

<li>Dryad</li>

<li>Spirit Creature</li>

</ul>



<h3>
Keunggulan
</h3>

<ul>

<li>Mana alami tinggi</li>

<li>Magic Beast langka</li>

<li>Life Magic</li>

</ul>



<h3>
Pemerintahan
</h3>

<p>

Dipimpin oleh Raja yang dipilih
oleh Spirit Guardian.

</p>

`

},










daemori:{


title:"🌑 Daemori Kingdom",

content:`

<h1>
Daemori Kingdom
</h1>



<h3>
"Kehormatan dan Kebebasan"
</h3>




<p>

Kerajaan bangsa Daemori
yang berada di perbatasan Abyss Realm.

</p>




<h3>
Wilayah
</h3>

<ul>

<li>Abyssal Border Continent</li>

<li>Realm Barrier Area</li>

</ul>




<h3>
Ras Dominan
</h3>

<ul>

<li>Daemori</li>

<li>Human</li>

<li>Ras Buangan</li>

</ul>




<h3>
Keunggulan
</h3>

<ul>

<li>Dark Magic</li>

<li>Elite Warrior</li>

<li>Pengalaman melawan Abyss Monster</li>

</ul>




<h3>
Pandangan Dunia
</h3>


<p>

Daemori menolak dianggap sebagai monster
dan berjuang mendapatkan tempat di dunia.

</p>


`

}




};









function openKingdom(id){


detail.style.display="flex";


info.innerHTML =
kingdoms[id].content;


}








function closeDetail(){


detail.style.display="none";


}
