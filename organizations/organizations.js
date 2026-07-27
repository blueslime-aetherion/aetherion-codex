/* ======================================
   AETHERION ORGANIZATIONS CODEX
   DATABASE V1.0
====================================== */


const organizations = {



/* ======================================
   ADVENTURER GUILD
====================================== */


adventurer:{


title:"⚔ Adventurer Guild",


content:`


<h2>
Exploration & Dungeon Organization
</h2>


<p>

Adventurer Guild adalah organisasi terbesar
yang menghubungkan para petualang di seluruh
Aetherion.

Mereka bertugas mengeksplorasi dungeon,
membasmi monster, dan menemukan artefak kuno.

</p>



<h3>
Fungsi Utama
</h3>


<ul>

<li>Eksplorasi dungeon.</li>

<li>Klasifikasi monster.</li>

<li>Perlindungan wilayah.</li>

<li>Pencarian artefak kuno.</li>

<li>Kontrak monster hunting.</li>

</ul>




<h3>
Rank Adventurer
</h3>


<ul>

<li>F Rank - Pemula</li>

<li>E Rank - Beginner</li>

<li>D Rank - Experienced</li>

<li>C Rank - Veteran</li>

<li>B Rank - Elite</li>

<li>A Rank - Master</li>

<li>S Rank - Legend</li>

</ul>



<h3>
Markas Utama
</h3>


<p>
Centralis Continent
</p>


`


},







/* ======================================
   AETHER ACADEMY
====================================== */


academy:{


title:"📖 Aether Academy",


content:`


<h2>
Magic Education Institution
</h2>



<p>

Akademi sihir terbesar di Aetherion
yang bertugas mendidik generasi penyihir,
peneliti, dan pengguna Aether.

</p>




<h3>
Bidang Pendidikan
</h3>


<ul>

<li>Elemental Magic</li>

<li>Ancient Magic</li>

<li>Magic Theory</li>

<li>Combat Training</li>

<li>Monster Research</li>

</ul>




<h3>
Lokasi</h3>


<p>

Centralis Continent -
Elarion Empire

</p>



<h3>
Keunggulan</h3>


<ul>

<li>Memiliki perpustakaan kuno.</li>

<li>Menyimpan penelitian World Core.</li>

<li>Mendidik penyihir tingkat tinggi.</li>

</ul>



`


},







/* ======================================
   MAGE COUNCIL
====================================== */


mage:{


title:"🔮 Mage Council",


content:`


<h2>
Magic Research Organization
</h2>



<p>

Organisasi para penyihir tingkat tinggi
yang mengatur perkembangan ilmu sihir
Aetherion.

</p>




<h3>
Tugas</h3>


<ul>

<li>Mengawasi penggunaan sihir.</li>

<li>Meneliti Aether Energy.</li>

<li>Menyimpan artefak berbahaya.</li>

<li>Membuat hukum sihir.</li>

</ul>




<h3>
Hubungan</h3>


<p>

Berhubungan langsung dengan Akademi,
Guild Adventurer, dan kerajaan besar.

</p>



`


},







/* ======================================
   MERCHANT ALLIANCE
====================================== */


merchant:{


title:"💰 Merchant Alliance",


content:`


<h2>
Global Trade Network
</h2>



<p>

Jaringan perdagangan terbesar
yang menghubungkan seluruh benua.

</p>




<h3>
Aktivitas</h3>


<ul>

<li>Perdagangan antar kerajaan.</li>

<li>Transportasi barang.</li>

<li>Ekonomi dunia.</li>

<li>Perdagangan Aether Crystal.</li>

</ul>




<h3>
Markas</h3>


<p>

Merchant Republic of Oakhaven

</p>



`


},







/* ======================================
   HOLY KNIGHT ORDER
====================================== */


knight:{


title:"🛡 Holy Knight Order",


content:`


<h2>
Guardian Organization
</h2>



<p>

Ordo ksatria yang bertugas menjaga
perdamaian dan melindungi manusia
dari ancaman besar.

</p>




<h3>
Tugas</h3>


<ul>

<li>Melawan monster berbahaya.</li>

<li>Menjaga kota.</li>

<li>Melindungi rakyat.</li>

<li>Mengawal artefak suci.</li>

</ul>




<h3>
Hubungan</h3>


<p>

Sering bekerja sama dengan kerajaan
dan gereja.

</p>



`


},







/* ======================================
   SHADOW ORGANIZATION
====================================== */


shadow:{


title:"🌑 Shadow Organization",


content:`


<h2>
Secret Unknown Group
</h2>



<p>

Organisasi misterius yang keberadaannya
tidak diakui oleh kerajaan manapun.

</p>




<h3>
Informasi Terbatas
</h3>


<ul>

<li>Tujuan tidak diketahui.</li>

<li>Anggota menggunakan identitas rahasia.</li>

<li>Memiliki jaringan mata-mata.</li>

<li>Berhubungan dengan rahasia kuno.</li>

</ul>




<h3>
Status</h3>


<p>

Classified Organization

</p>



`


},







/* ======================================
   ANCIENT RESEARCH SOCIETY
====================================== */


ancient:{


title:"🏺 Ancient Research Society",


content:`


<h2>
Study of Lost Civilization
</h2>



<p>

Organisasi ilmuwan yang mempelajari
reruntuhan kuno, artefak, dan sejarah
yang hilang.

</p>




<h3>
Penelitian</h3>


<ul>

<li>Ancient Civilization.</li>

<li>World Core.</li>

<li>Ancient Magic.</li>

<li>Seven Gods History.</li>

<li>Lost Technology.</li>

</ul>




<h3>
Hubungan Rahasia</h3>


<p>

Dipercaya mengetahui sebagian sejarah
yang sengaja dihapus dari dunia.

</p>



`


}



};









const detail =
document.getElementById("detail");


const organizationContent =
document.getElementById("organization-content");







function openOrganization(id){


let org = organizations[id];



organizationContent.innerHTML = `


<h1>
${org.title}
</h1>


${org.content}


`;



detail.style.display="flex";


}








function closeOrganization(){


detail.style.display="none";


}