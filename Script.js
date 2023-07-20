// JavaScript source code
function hitung() {
    let berat1 = document.getElementById("berat").value
    let tinggi1 = document.getElementById("tinggi").value
    let usia1 = document.getElementById("usia").value

    let hasil = (parseInt(berat1) / ((parseInt(tinggi1) * parseInt(tinggi1)) / 10000)).toFixed(1) 
        

    //hasil
    document.getElementById("hasilOutput").innerHTML = hasil
    

    //Hasil dengan Text
    if (hasil <= 18.5) {
        document.getElementById("kepala").innerHTML = "Berat Badan Kurang";
    } else if (hasil >= 18.6 && hasil <= 24.9) {
        document.getElementById("kepala").innerHTML = "Berat Badan Ideal";
    } else if (hasil >= 25 && hasil <= 29.9) {
        document.getElementById("kepala").innerHTML = "Berat Badan Lebih";
    } else if (hasil >= 30) {
        document.getElementById("kepala").innerHTML = "Obesitas";
    }
    //Hasil dengan keterangan
    if (hasil <= 18.5) {
        document.getElementById("keterangan").innerHTML = "Anda Kekurangan Berat Badan";
    } else if (hasil >= 18.6 && hasil <= 24.9) {
        document.getElementById("keterangan").innerHTML = "Berat Badan Anda Ideal";
    } else if (hasil >= 25 && hasil <= 29.9) {
        document.getElementById("keterangan").innerHTML = "Anda Memiliki Berat Badan Lebih";
    } else if (hasil >= 30) {
        document.getElementById("keterangan").innerHTML = "Anda Obesitas";
    }
    //Hasil diantara
    if (hasil <= 18.5) {
        document.getElementById("hasildiantara").innerHTML = "Hasil BMI di bawah 18.5";
    } else if (hasil >= 18.6 && hasil <= 24.9) {
        document.getElementById("hasildiantara").innerHTML = "Hasil BMI diantara 18.6 dan 24.9";
    } else if (hasil >= 25 && hasil <= 29.9) {
        document.getElementById("hasildiantara").innerHTML = "Hasil BMI diantara 25 dan 29.9";
    } else if (hasil >= 30) {
        document.getElementById("hasildiantara").innerHTML = "Hasil BMI diatas 30";
    }
    // keterangan hasil
    if (hasil <= 18.5) {
        document.getElementById("hasilket").innerHTML = "Anda berada dalam kategori kekurangan berat badan.";
    } else if (hasil >= 18.6 && hasil <= 24.9) {
        document.getElementById("hasilket").innerHTML = "Anda berada dalam kategori berat badan ideal.";
    } else if (hasil >= 25 && hasil <= 29.9) {
        document.getElementById("hasilket").innerHTML = "Anda berada dalam kategori berat badan berlebih.";
    } else if (hasil >= 30) {
        document.getElementById("hasilket").innerHTML = "Anda berada dalam kategori Obesitas";
    }
    //tips
    if (hasil <= 18.5) {
        document.getElementById("tips").innerHTML = "Cara terbaik untuk menambah berat badan adalah  dengan mengonsumsi makanan yang kaya nutrisi, memilih makanan padat kalori, dan memperbanyak meminum air mineral dan susu.";
    } else if (hasil >= 18.6 && hasil <= 24.9) {
        document.getElementById("tips").innerHTML = "Cara terbaik untuk mempertahankan berat badan adalah  dengan mengonsumsi makanan yang kaya nutrisi,protein,gizi serta rutin berolahraga.";
    } else if (hasil >= 25 && hasil <= 29.9) {
        document.getElementById("tips").innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan menerapkan pola makan yang teratur, menghindari makan dan minuman manis serta rutin berolahraga.";
    } else if (hasil >= 30) {
        document.getElementById("tips").innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan menerapkan pola makan yang teratur, menghindari makan dan minuman manis, makan dalam porsi sedikit serta rutin berolahraga.";
    }

    if (hasil <= 18.5) {
        document.getElementById("tips2").innerHTML = "Jika anda berada dalam kategori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal";
    } else if (hasil >= 18.6 && hasil <= 24.9) {
        document.getElementById("tips2").innerHTML = "Jika anda berada dalam kategori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal.";
    } else if (hasil >= 25 && hasil <= 29.9) {
        document.getElementById("tips2").innerHTML = "Jika anda berada dalam kategori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal.";
    } else if (hasil >= 30) {
        document.getElementById("tips2").innerHTML = "Jika anda berada dalam kategori ini maka anda dianjurkan untuk menaikan berat badan hingga batas normal";
    }
}

function reset() {
    document.getElementById("berat").value = null;
    document.getElementById("usia").value = null;
    document.getElementById("tinggi").value = null;
    document.getElementsByName("gender").value = false;


    console.log("hallo")
}