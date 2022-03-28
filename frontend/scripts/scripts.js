alert('HALO,SELAMAT DATANG');
var lagi = true;

while(lagi===true){
    var nama = prompt('Masukkan nama anda : ');
    alert('HALO ' + nama);

    lagi = confirm('Coba lagi?');
}
 alert('Baiklah,terimakasih!');

function runFunction(){
    document.getElementById('paragraf1').innerHTML=
    'Spotify adalah layanan musik digital, podcast, dan video yang memberimu akses ke jutaan lagu dan konten lain dari kreator di seluruh dunia.'
    document.getElementsByTagName('p')[1].style.color = 'green'
}

function testFunction(){
    document.getElementById('paragraf2').innerHTML='Instagram adalah sosial media berbasis gambar yang memberikan layanan berbagi foto atau video secara online'
    document.getElementsByTagName('p')[2].style.color = 'purple'
}