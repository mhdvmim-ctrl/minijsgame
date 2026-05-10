function js1() {
    //kirish
    alert('sizga topshiriq beriladi bacharsangiz yuldz olasiz')

    alert('1-royxatdan otish kerak')
    //royxatdan otish
    let login = prompt('login')

    let pass = prompt('password')

    let num = +prompt('sizga berilgan ID raqam')

    alert('tekshirilmoqda........')

    if (login == 'admin' && pass == 'admin' && num == 2010) {
        alert('siz tizimga kirdingiz')
    } else {
        alert('sizda xatolik yuz berdi iltimos qaytadan urunib kring agar tizimda nosozlik bolsa (+998)-91-337-0-02 ga aloqaga chiqing')
    }
    //oyin boshlanishi
    alert('oyinni boshlash')
    alert('oyin shartlari siz togri bergan javobingizga 1ta kod beriladi oyin oxirida kodni kiritasiz ')
    // 1-savol
    let s1 = +prompt('1-savol: HTML nechinchi yil paydo bolgan? 1) 1991-yil 2) 1995-yil  (Javobni 1 yoki 2 shaklida kiriting)');
    if (s1 == 1) {
        alert('Togri! Kod: 10');
    } else {
        alert('Afsuski notogri!');
    }

    // 2-savol
    let s2 = +prompt('2-savol: CSS nechinchi yil paydo bolgan? 1) 1994-yil 2) 1996-yil');
    if (s2 == 2) {
        alert('Togri! Kod: 20');
    } else {
        alert('Afsuski notogri!');
    }

    // 3-savol
    let s3 = +prompt('3-savol: JavaScript nechinchi yil yaratilgan? 1) 1995-yil 2) 1997-yil');
    if (s3 == 1) {
        alert('Togri! Kod: 30');
    } else {
        alert('Afsuski notogri!');
    }

    // 4-savol
    let s4 = +prompt('4-savol: HTML nima? 1) Dasturlash tili 2) Gipermatnli belgilash tili');
    if (s4 == 2) {
        alert('Togri! Kod: 40');
    } else {
        alert('Afsuski notogri!');
    }

    // 5-savol
    let s5 = +prompt('5-savol: CSS nima? 1) Stil berish tili 2) Malumotlar bazasi');
    if (s5 == 1) {
        alert('Togri! Kod: 50');
    } else {
        alert('Afsuski notogri!');
    }

    // 6-savol
    let s6 = +prompt('6-savol: JavaScript nima? 1) Brauzer uchun dasturlash tili 2) Operatsion tizim');
    if (s6 == 1) {
        alert('Togri! Tabriklaymiz!');
    } else {
        alert('Afsuski notogri!');
    }

    alert('SAVOLLAR TUGADI ENDI BALLARNI ISOBLAYMIZ')
    alert('berilgan kodlarni kiriting agar javob topolmagan bolsangiz 0 qoying')

    let j1 = +prompt('1-savol kodi>>>')
    let j2 = +prompt('2-savol kod>>>>')
    let j3 = +prompt('3-savol kod>>>>')
    let j4 = +prompt('4-savol kod>>>>')
    let j5 = +prompt('5-savol kod>>>>')
    let j6 = +prompt('6-savol kod>>>>')

    let ball = 0

    if (j1 == 10) {
        ball += 1
    }

    if (j2 == 20) {
        ball += 1
    }

    if (j3 == 30) {
        ball += 1
    }

    if (j4 == 40) {
        ball += 1
    }

    if (j5 == 50) {
        ball += 1
    }

    if (j6 == 60) {
        ball += 1
    }

    alert('tabriklaymiz oyinimizni tugatdingiz sizni balingiz >>>' + ball +'ball')

    alert('sizni yana oyinda kutib qolamiz')
}