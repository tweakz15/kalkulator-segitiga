function hitungLuas(tinggi, alas) {
    const luas = 0.5 * tinggi * alas;
    document.getElementById('luas').value = luas;
}

function hitungKeliling(a,b,c) {
    const keliling = a+b+c;
    document.getElementById('keliling').value = keliling;
}


document.getElementById('submit_1').addEventListener('click', function(){
    let tinggi = parseInt(document.getElementById('tinggiSegitiga').value);
    let alas = parseInt(document.getElementById('alasSegitiga').value);
    hitungLuas(tinggi, alas);
})


document.getElementById('submit_2').addEventListener('click', function(){
    let a = parseInt(document.getElementById('sisi_a').value);
    let b = parseInt(document.getElementById('sisi_b').value);
    let c = parseInt(document.getElementById('sisi_c').value);
    hitungKeliling(a,b,c);
})

document.getElementById('btn_choice').addEventListener('click', function(){
    const sectionLuas = document.getElementById('luasSegitiga');
    const sectionKeliling = document.getElementById('kelilingSegitiga');
    const button    = document.getElementById('btn_choice');

    if (sectionLuas.style.display === "none"){
        sectionLuas.style.display = "block";
        sectionKeliling.style.display = 'none'
       button.innerText = 'Luas';
        
    } else{
        sectionKeliling.style.display = "block";
        sectionLuas.style.display = 'none';
        button.innerText = 'Keliling';
    }
})

document.getElementById('reset').addEventListener('click', function(){
    var form = document.querySelector('form');
    form.reset();
  })




    