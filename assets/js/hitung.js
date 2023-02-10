// document.getElementById('mbah').addEventListener('mouseup', hitung);

number = NaN;
if (isNaN(number)) number = 0;
console.log(number);

function hitung() {
    // Jumlah Harta
    var totHarta = parseInt(document.getElementById('totHarta').value.replace('Rp', '').replace(/(\..*?)/g, '0'));
    var kelamin = $(":radio[name=kelamin]:checked").val();
    totHarga = isNaN(totHarta) ? 0 : totHarta
    
    // Gender
    if(kelamin == 'Lelaki') {
        var nikah = $(":radio[name=nikah]:checked").val();

        // Status
        if(nikah == 'sudahNikah') {
            var anak = $(":radio[name=anak]:checked").val();

            // Anak
            if(anak == "Ya") {
                var anakLelaki = parseInt(document.getElementById('anakLelaki').value); 
                var anakPerempuan = document.getElementById('anakPerempuan').value;
                
                // console.log(bagPasangan)

                // Anak lelaki (Completed)
                if(anakLelaki > 0 && anakPerempuan <= 0) {
                    // console.log(bagAnakLelaki);
                    var bagPasangan = totHarta * (1/8);
                    var bagAnakLelaki = totHarta * (7/8);
                    bagAnakLelaki = isNaN(bagAnakLelaki) ? 0 : bagAnakLelaki
                }
                // Anak Perempuan (Completed)
                else if(anakPerempuan > 0 && anakLelaki <= 0) {
                    var cucu = $(":radio[name=cucu]:checked").val();

                    // console.log(bagAnakPerempuan);
                    if(cucu == "Ya") {
                        var cucuLelaki = document.getElementById('cucuLelaki').value; 
                        var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                        if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                            var bagPasangan = totHarta * (1/8);
                            var bagCucuLelaki = totHarta * (3/8);
                            var bagAnakPerempuan = totHarta * (4/8);
                        }
                        else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                            var bagPasangan = totHarta * (4/32);
                            var bagAnakPerempuan = totHarta * (21/32);
                            var bagCucuPerempuan = totHarta * (7/32);
                        }
                        else {
                            var bagPasangan = totHarta * (3/24);
                            var bagCucuLelaki = totHarta * (14/24);
                            var bagCucuPerempuan = totHarta * (7/24);
                        }
                    }
                    else {
                        var bagPasangan = totHarta * (1/8);
                        var bagAnakPerempuan = totHarta * (7/8);
                    }
                }
                // Anak lelaki & Perempuan (Completed)
                else if(anakPerempuan > 0 && anakLelaki > 0) {
                    var bagPasangan = totHarta * (3/24);
                    var bagAnakLelaki = totHarta * (14/24);
                    // console.log(bagAnakLelaki);

                    var bagAnakPerempuan = totHarta * (7/24);
                    // console.log(bagAnakPerempuan);
                }
                else {
                    var cucu = $(":radio[name=cucu]:checked").val();
                    
                    if(cucu == "Ya") {
                        var cucuLelaki = document.getElementById('cucuLelaki').value; 
                        var cucuPerempuan = document.getElementById('cucuPerempuan').value;

                        if(cucuLelaki > 0 && cucuPerempuan <= 0) {
                            var bagPasangan = totHarta * (1/8);
                            var bagCucuLelaki = totHarta * (7/8);
                        }
                        else if(cucuPerempuan > 0 && cucuLelaki <= 0) {
                            var bagPasangan = totHarta * (1/8);
                            var bagCucuPerempuan = totHarta * (7/8);
                        }
                        else {
                            var bagPasangan = totHarta * (1/8);
                            var bagCucuLelaki = totHarta * (2/8);
                            var bagCucuPerempuan = totHarta * (1/8);
                        }
                    }
                    else {

                    }
                }
            }
            // Ga punya anak >> Orangtua
            else {
                // console.log(bagPasangan)
                var ortu = document.getElementById('ortu').value;
                
                // Bapak Hidup, Ibu Tidak
                if(ortu == ortuArray[0]) {
                    // console.log(ortuArray[0]);
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek dari Ibu Hidup (Completed)
                    if(nenek == "Ya") {
                        var bagPasangan = totHarta * (3/12);
                        var bagBapak = totHarta * (7/12);
                        var bagNenekI = totHarta * (2/12);
                    }
                    // Nenek dari Ibu Tidak (Completed)
                    else {
                        var bagPasangan = totHarta * (1/4);
                        var bagBapak = totHarta * (3/4);
                    }
                }
                // Bapak Tidak, Ibu Hidup
                else if(ortu == ortuArray[1]) {
                    // console.log(ortuArray[1]);
                    
                    var mbah = document.getElementById('mbah').value;

                    // Kakek Hidup, Nenek Tidak - Bapak (Completed)
                    if(mbah == mbahArray[0]) {
                        var bagPasangan = totHarta * (3/12);
                        var bagIbu = totHarta * (4/12);
                        var bagKakek = totHarta * (5/12); 
                    }
                    // Kakek Tidak, Nenek Hidup - Bapak (Completed)
                    else if(mbah == mbahArray[1]) {
                        var bagPasangan = totHarta * (1/4);
                        var bagIbu = totHarta * (3/4);
                    }
                    // Kakek dan Nenek Tidak - Bapak (Completed)
                    else if(mbah == mbahArray[2]) {
                        var bagPasangan = totHarta * (1/4);
                        var bagIbu = totHarta * (3/4);
                    }
                    // Kakek dan Nenek Hidup - Bapak (Completed)
                    else {
                        var bagPasangan = totHarta * (3/12);
                        var bagIbu = totHarta * (4/12);
                        var bagKakek = totHarta * (5/12); 
                    }
                }
                // Bapak dan Ibu Tidak
                else if(ortu == ortuArray[2]) {
                    // console.log(ortuArray[2]);
                    var nenek = $(":radio[name=nenekIbu]:checked").val();

                    // Nenek dari Ibu Hidup (Completed)
                    if(nenek = "Ya") {
                        var mbah = document.getElementById('mbah').value;
                        
                        // Kakek Hidup, Nenek Tidak - Bapak (Completed)
                        if(mbah == mbahArray[0]) {
                            var bagPasangan = totHarta * (3/12);
                            var bagNenekI = totHarta * (2/12);
                            var bagKakek = totHarta * (7/12);
                        }
                        // Kakek Tidak, Nenek Hidup - Bapak (Completed)
                        else if(mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (2/8);
                            var bagNenekI = totHarta * (3/8);
                            var bagNenek = totHarta * (3/8);
                        }
                        // Kakek dan Nenek Tidak - Bapak (Completed)
                        else if(mbah == mbahArray[2]) {
                            var bagPasangan = totHarta * (1/4);
                            var bagNenekI = totHarta * (3/4);
                        }
                        // Kakek dan Nenek Hidup - Bapak (Completed)
                        else {
                            var bagPasangan = totHarta * (3/12);
                            var bagNenekI = totHarta * (1/12);
                            var bagKakek = totHarta * (7/12);
                            var bagNenek = totHarta * (1/12)
                        }
                    }
                    // Nenek dari Ibu Tidak (Completed)
                    else {
                        var mbah = document.getElementById('mbah').value;
                        
                        // Kakek Hidup, Nenek Tidak - Bapak (Completed)
                        if(mbah == mbahArray[0] || mbah == mbahArray[1]) {
                            var bagPasangan = totHarta * (1/4);
                            var bagKakek = totHarta * (3/4);
                        }
                        // Kakek dan Nenek Tidak - Bapak (Completed)
                        else if(mbah == mbahArray[2]) {
                            var bagPasangan = totHarta;
                        }
                        // Kakek dan Nenek Hidup - Bapak (Completed)
                        else {
                            var bagPasangan = totHarta * (3/12);
                            var bagKakek = totHarta * (7/12);
                            var bagNenek = totHarta * (2/12);
                        }
                    }
                }
                // Bapak dan Ibu Hidup
                else {

                    // Kakek Hidup, Nenek Tidak - Bapak (Completed)
                    var bagPasangan = totHarta * (1/4);
                    var bagBapak = totHarta * (2/4); 
                    var bagIbu = totHarta * (1/4);
                }
            }
        }
        else {
            var ortu = document.getElementById('ortu').value;

            if(ortu == ortuArray[0]) {
                // console.log(ortuArray[0]);
                var nenek = $(":radio[name=nenekIbu]:checked").val();

                if(nenek = "Ya") {
                    var bagBapak = totHarta * (5/6);
                    var bagNenekI = (totHarta - bagBapak) * (1/6);
                }
            }
            else if(ortu == ortuArray[1]) {
                // console.log(ortuArray[1]);
                var bagIbu = totHarta * (1/3);
                
                var mbah = document.getElementById('mbah').value;

                if(mbah == mbahArray[0]){
                    var bagKakek = (totHarta - bagIbu) * (2/3); 
                }
                else if(mbah == mbahArray[3]) {
                    var bagKakek = (totHarta - bagIbu) * (2/3); 
                }
            }
            else if(ortu == ortuArray[2]) {
                // console.log(ortuArray[2]);
                var nenek = $(":radio[name=nenekIbu]:checked").val();

                if(nenek = "Ya") {
                    var mbah = document.getElementById('mbah').value;

                    if(mbah == mbahArray[0]){
                        var bagNenekI = parseInt(totHarta * (1/6));
                        var bagKakek = parseInt(totHarta * (5/6));
                        // console.log(bagNenekI);
                        // console.log(bagKakek);
                    }
                    else if(mbah == mbahArray[1]) {
                        var bagNenekI = totHarta * (1/2);
                        var bagNenek = totHarta * (1/2);
                        // console.log(bagNenekI);
                        // console.log(bagNenek);
                    }
                    else if(mbah == mbahArray[2]) {
                        var bagNenekI = totHarta;
                        // console.log(bagNenekI);
                    }
                    else if(mbah == mbahArray[3]) {
                        var bagNenekI = parseInt(totHarta * (1/12));
                        var bagKakek = parseInt(totHarta * (10/12));
                        var bagNenek = parseInt(totHarta * (1/12));
                        console.log(bagNenekI);
                        console.log(bagKakek);
                        console.log(bagNenek);
                    }
                }
                else {

                }
            }
            else if(ortu == ortuArray[3]) {
                // console.log(ortuArray[3]);
                var anakLelaki = document.getElementById('anakLelaki').value; 
                var anakPerempuan = document.getElementById('anakPerempuan').value;
            }
        }
    }
    else {
        var nikah = $(":radio[name=nikah]:checked").val();

        if(nikah == 'sudahNikah') {
            var anak = $(":radio[name=anak]:checked").val();

            if(anak = "Ya") {
                var anakLelaki = document.getElementById('anakLelaki').value; 
                var anakPerempuan = document.getElementById('anakPerempuan').value;
                
                var bagPasangan = totHarta * (1/4);
                // console.log(bagPasangan)
                if(anakLelaki > 0 && anakPerempuan <= 0) {
                    var bagAnakLelaki = totHarta - bagPasangan;
                    // console.log(bagAnakLelaki);
                }
                else if(anakPerempuan > 0 && anakLelaki <= 0) {
                    var bagAnakPerempuan = (totHarta - bagPasangan) * (1/2);
                    // console.log(bagAnakPerempuan);
                }
                else {
                    var bagAnakLelaki = parseInt((totHarta - bagPasangan) * (2/3));
                    // console.log(bagAnakLelaki);

                    var bagAnakPerempuan = parseInt((totHarta - bagPasangan) * (1/3));
                    // console.log(bagAnakPerempuan);
                }
            }
            else {  
                var bagPasangan = totHarta * (1/2);
                // console.log(bagPasangan)
            }
        }
        else{
            var ortu = document.getElementById('ortu').value;

            if(ortu == ortuArray[0]) {
                // console.log(ortuArray[0]);
            }
            else if(ortu == ortuArray[1]) {
                // console.log(ortuArray[1]);
            }
            else if(ortu == ortuArray[2]) {
                // console.log(ortuArray[2]);
                var mbah = document.getElementById('ortu').value;
            }
            else if(ortu == ortuArray[3]) {
                // console.log(ortuArray[3]);
            }
        }
    }

    localStorage.setItem("valPasangan", bagPasangan);
    localStorage.setItem("valAnakLelaki", bagAnakLelaki);
    localStorage.setItem("valAnakPerempuan", bagAnakPerempuan);
    localStorage.setItem("valBapak", bagBapak);
    localStorage.setItem("valIbu", bagIbu);
    localStorage.setItem("valKakek", bagKakek);
    localStorage.setItem("valNenek", bagNenek);
    localStorage.setItem("valNenekI", bagNenekI);
    localStorage.setItem("valCucuLelaki", bagCucuLelaki);
    localStorage.setItem("valCucuPerempuan", bagCucuPerempuan);
}

const currency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
})

document.getElementById("locPasangan").value = currency.format(localStorage.getItem("valPasangan"));
document.getElementById("locAnakLelaki").value = currency.format(localStorage.getItem("valAnakLelaki"));
document.getElementById("locAnakPerempuan").value = currency.format(localStorage.getItem("valAnakPerempuan"));
document.getElementById("locBapak").value = currency.format(localStorage.getItem("valBapak"));
document.getElementById("locIbu").value = currency.format(localStorage.getItem("valIbu"));
document.getElementById("locKakek").value =  currency.format(localStorage.getItem("valKakek"));
document.getElementById("locNenek").value =  currency.format(localStorage.getItem("valNenek"));
document.getElementById("locNenekI").value =  currency.format(localStorage.getItem("valNenekI"));
document.getElementById("locCucuLelaki").value =  currency.format(localStorage.getItem("valCucuLelaki"));
document.getElementById("locCucuPerempuan").value =  currency.format(localStorage.getItem("valCucuPerempuan"));

// var locPasangan = document.getElementById("locPasangan").value;
// var locAnakLelaki = document.getElementById("locAnakLelaki").value;
// var locAnakPerempuan = document.getElementById("locAnakPerempuan").value;
// var locBapak = document.getElementById("locBapak").value;
// var locKakek = document.getElementById("locKakek").value;
// var locNenekI = document.getElementById("locNenekI").value;                              



// locPasangan = localStorage.getItem("valPasangan");
// if(locPasangan === typeof(undefined)) {
//     locPasangan = "Rp.0";
// }
// else if(locPasangan === typeof(NaN)) {
//     locPasangan = "Rp.0";
// }

// locAnakLelaki = localStorage.getItem("valAnakLelaki");
// if(locAnakLelaki = typeof(undefined)) {
//     locAnakLelaki = "Rp.0";
// }
// else if(locAnakLelaki = typeof(NaN)) {
//     locAnakLelaki = "Rp.0";
// }

// locBapak = localStorage.getItem("valbapak");
// if(locBapak = typeof(undefined)) {
//     locBapak = "Rp.0";
// }
// else if(locBapak = typeof(NaN)) {
//     locBapak = "Rp.0";
// }

// locKakek = localStorage.getItem("valKakek");
// if(locKakek === typeof(undefined)) {
//     locKakek = "Rp.0";
// }
// else if(locKakek === typeof(NaN)) {
//     locKakek = "Rp.0";
// }

// locNenekI = localStorage.getItem("valNenekI");
// if(locNenekI === typeof(undefined)) {
//     locNenekI = "Rp.0";
// }
// else if(locNenekI === typeof(NaN)) {
//     locNenekI = "Rp.0";
// }


// document.getElementById("locAnakPerempuan").value = localStorage.getItem("valAnakPerempuan");

// if(typeof(undefined)) {
//     val("Rp.0");
// }

// if(typeof(NaN)) {
//     val("Rp.0");
// }

// function getFormat() {
//     $('.harta').priceFormat({
//         prefix: 'Rp.',
//         limit: 13,
//         centsLimit: 0,
//         thousandsSeparator: '.'
//     });
// }
