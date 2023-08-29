let currentVal = 0; // Hesaplamalar için mevcut değeri saklamak üzere bir değişkeni başlat.
let result = 0; // Hesaplamaların sonucunu saklamak üzere bir değişkeni başlat.
let isClickSymbol = false; // Bir sembol düğmesinin tıklanıp tıklanmadığını takip et.
let isClickNumber = false; // Bir sayı düğmesinin tıklanıp tıklanmadığını takip et.
let selectSymbol = 0; // Şu anda seçili sembolün (işlem operatörü) kimliğini saklamak için bir değişkeni başlat.

function ClickNumber(val) {
    // Bu işlev, bir sayı düğmesine tıklandığında çağrılır.

    if (isClickSymbol && !isClickNumber) {
        $('#inputVal').text(0); // Daha önce sembol tıklanmışsa ve hiçbir sayı tıklanmamışsa, giriş değerini sıfırla.
    }

    let inputVal = $('#inputVal').text(); // Giriş değerini al.

    if (inputVal == 0) {
        $('#inputVal').text(val); // Eğer giriş değeri 0 ise, değeri tıklanan sayıyla güncelle.
    } else {
        $('#inputVal').text(inputVal + '' + val); // Aksi halde mevcut giriş değerine tıklanan sayıyı ekleyerek güncelle.
    }

    isClickNumber = true; // Bir sayı düğmesine tıklandı olarak işaretle.
}

function ClickSymbol(val) {
    // Bu işlev, bir sembol düğmesine tıklandığında çağrılır.

    let inputVal = $('#inputVal').text(); // Giriş değerini al.

    switch (val) {
        case 1:
            currentVal = 0;
            result = 0;
            $('#inputVal').text(0);
            break;
        case 2:
            inputVal = (-1) * inputVal;
            $('#inputVal').text(inputVal);
            break;
        case 3:
            selectSymbol = 3;
            inputVal = inputVal / 100;
            $('#inputVal').val(inputVal);
            break;
        case 4:
            selectSymbol = 4;
            if (!isClickSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) / parseFloat(inputVal);
                currentVal = result;
                $('#inputVal').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 5:
            // ... Diğer sembol durumları da benzer şekilde devam eder.
            break;
        // Diğer case durumları da benzer şekilde devam eder.

        case 6:
            // Durum 6: Çıkarma sembolü tıklanmışsa
            selectSymbol = 6; // Seçilen sembolü 6 olarak belirle.
            if (!isClickSymbol) {
                currentVal = inputVal; // Eğer daha önce sembol tıklanmamışsa, mevcut değeri giriş değeri olarak kaydet.
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) - parseFloat(inputVal); // Eğer sembol tıklanmış ve bir sayı tıklanmışsa, mevcut değerden giriş değerini çıkar ve sonucu hesapla.
                currentVal = result; // Sonucu mevcut değer olarak kaydet.
                $('#inputVal').text(result); // Sonucu giriş değeri olarak göster.
            }
            isClickSymbol = true; // Bir sembol tıklandı olarak işaretle.
            isClickNumber = false; // Bir sayı tıklanmadı olarak işaretle.
            break;
        case 7:
            // Durum 7: Toplama sembolü tıklanmışsa
            selectSymbol = 7; // Seçilen sembolü 7 olarak belirle.
            if (!isClickSymbol) {
                currentVal = inputVal; // Eğer daha önce sembol tıklanmamışsa, mevcut değeri giriş değeri olarak kaydet.
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) + parseFloat(inputVal); // Eğer sembol tıklanmış ve bir sayı tıklanmışsa, mevcut değere giriş değerini ekle ve sonucu hesapla.
                currentVal = result; // Sonucu mevcut değer olarak kaydet.
                $('#inputVal').text(result); // Sonucu giriş değeri olarak göster.
            }
            isClickSymbol = true; // Bir sembol tıklandı olarak işaretle.
            isClickNumber = false; // Bir sayı tıklanmadı olarak işaretle.
            break;
        case 8:
            // Durum 8: Eşittir sembolü tıklanmışsa
            ClickSymbol(selectSymbol); // Önceki seçilen sembol işlevini çağır.
            break;
        case 9:
            // Durum 9: Ondalık nokta sembolü tıklanmışsa
            if (!inputVal.includes('.')) {
                inputVal = inputVal + '.'; // Eğer giriş değeri zaten ondalık nokta içermiyorsa, ondalık noktayı ekleyerek güncelle.
                $('#inputVal').text(inputVal); // Güncellenmiş giriş değerini göster.
            }
            break;
    }
}    