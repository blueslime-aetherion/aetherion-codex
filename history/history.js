/* ======================================
   AETHERION HISTORY CODEX
   DATABASE V1.0
====================================== */


const historyData = {



/* ======================================
   AGE I
====================================== */


creation:{


title:"🌌 AGE I - The Age of Creation",


content:`


<h2>
Kelahiran Dunia Aetherion
</h2>


<p>

Era pertama dalam sejarah Aetherion.
Pada masa ini World Core muncul sebagai
sumber utama energi penciptaan.

</p>


<h3>
Peristiwa Utama
</h3>


<ul>

<li>World Core tercipta.</li>

<li>Seven Great Gods membentuk struktur dunia.</li>

<li>Realm pertama mulai terbentuk.</li>

<li>Aether Energy mulai mengalir.</li>

<li>Spirit Realm dan Abyss Realm muncul.</li>

</ul>



<h3>
Warisan Era Ini
</h3>


<p>

Seluruh hukum dunia, sistem mana,
dan hubungan antar Realm berasal dari era ini.

</p>


`


},








/* ======================================
   AGE II
====================================== */


gods:{


title:"👑 AGE II - Age of Gods",


content:`


<h2>
Era Seven Great Gods
</h2>


<p>

Pada era ini Seven Great Gods menjadi
penjaga keseimbangan dunia.

</p>


<h3>
Peristiwa Utama
</h3>


<ul>

<li>Ras pertama mulai diciptakan.</li>

<li>Dragon Ancient pertama muncul.</li>

<li>World Tree tumbuh di Eldoria.</li>

<li>Authority System mulai dikenal.</li>

<li>Abyss Realm mulai disegel.</li>

</ul>



<h3>
Catatan Sejarah
</h3>


<p>

Masyarakat modern percaya bahwa para dewa
adalah pencipta dunia.
Namun kebenaran tentang World Core masih menjadi misteri.

</p>


`


},









/* ======================================
   AGE III
====================================== */


ancient:{


title:"🏛 AGE III - Ancient Civilization",


content:`


<h2>
Era Peradaban Pertama
</h2>


<p>

Periode ketika ras kuno membangun
peradaban besar pertama Aetherion.

</p>


<h3>
Perkembangan
</h3>


<ul>


<li>Rune Technology ditemukan.</li>

<li>Magic Engineering berkembang.</li>

<li>Kota kuno raksasa dibangun.</li>

<li>Dungeon pertama muncul.</li>

<li>Artefak kuno mulai dibuat.</li>


</ul>



<h3>
Akhir Era</h3>


<p>

Sebagian besar peradaban kuno menghilang
karena bencana besar yang belum diketahui.

</p>


`


},










/* ======================================
   AGE IV
====================================== */


kingdom:{


title:"⚔ AGE IV - Great Kingdom Era",


content:`


<h2>
Berdirinya Kerajaan Besar
</h2>


<p>

Era dimana kerajaan modern Aetherion
mulai terbentuk.

</p>



<h3>
Kerajaan Besar</h3>


<ul>

<li>Elarion Empire</li>

<li>Sylvan Covenant</li>

<li>Ironforge Dominion</li>

<li>Northern Clans</li>

<li>Verdant Kingdom</li>

<li>Daemori Kingdom</li>

</ul>



<h3>
Perubahan Dunia</h3>


<p>

Politik, perdagangan, dan hubungan antar ras
mulai berkembang.

</p>


`


},







/* ======================================
   AGE V
====================================== */


expansion:{


title:"🌍 AGE V - Age of Expansion",


content:`


<h2>
Era Penjelajahan Dunia
</h2>


<p>

Makhluk hidup mulai menjelajahi seluruh
wilayah Aetherion.

</p>


<h3>
Peristiwa</h3>


<ul>

<li>Guild Adventurer didirikan.</li>

<li>Dungeon mulai dipetakan.</li>

<li>Akademi sihir berkembang.</li>

<li>Perdagangan antar benua meningkat.</li>

<li>Monster Classification dibuat.</li>

</ul>



`


},







/* ======================================
   AGE VI
====================================== */


conflict:{


title:"🔥 AGE VI - Age of Conflict",


content:`


<h2>
Era Perang Besar
</h2>


<p>

Era penuh konflik yang mengubah
keseimbangan dunia.

</p>


<h3>
Peristiwa Besar</h3>


<ul>

<li>Perang antar kerajaan.</li>

<li>Realm Barrier mulai melemah.</li>

<li>Abyss Creature muncul kembali.</li>

<li>Forbidden Land ditutup.</li>

<li>World Core menjadi tidak stabil.</li>


</ul>


<h3>
Dampak</h3>


<p>

Banyak wilayah berubah menjadi dungeon
dan area berbahaya.

</p>


`


},







/* ======================================
   AGE VII
====================================== */


current:{


title:"⭐ AGE VII - Current Era",


content:`


<h2>
Era Saat Ini
</h2>


<p>

Era dimana cerita utama Aetherion berlangsung.

</p>



<h3>
Kondisi Dunia</h3>


<ul>

<li>Kerajaan besar masih bertahan.</li>

<li>Guild Adventurer semakin berkembang.</li>

<li>Dungeon kuno mulai ditemukan.</li>

<li>Misteri World Core mulai terungkap.</li>

<li>Kekuatan lama mulai bangkit.</li>

</ul>



<h3>
Tokoh Utama</h3>


<p>

Velze Voul lahir pada era ini,
membawa perubahan besar terhadap sejarah dunia.

</p>


`


}



};








const detailBox = document.getElementById("detail");

const historyContent =
document.getElementById("history-content");







function openAge(id){


let age = historyData[id];


historyContent.innerHTML = `


<h1>
${age.title}
</h1>


${age.content}


`;



detailBox.style.display="flex";


}







function closeAge(){


detailBox.style.display="none";


}