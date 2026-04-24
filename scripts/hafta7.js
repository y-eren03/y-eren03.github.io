// Elemanlara erişim
const themeBtn = document.getElementById("themeBtn");
const mainBody = document.getElementById("mainBody");
const etkinlikFormu = document.getElementById("etkinlikFormu");
const sonucAlani = document.getElementById("sonucAlani");

// 1. Tema Değiştirme (JavaScript Etkileşimi)
themeBtn.addEventListener("click", () => {
    mainBody.classList.toggle("bg-dark");
    mainBody.classList.toggle("text-white");
    
    // Buton metnini güncelleme
    if (mainBody.classList.contains("bg-dark")) {
        themeBtn.textContent = "Açık Temaya Geç";
        themeBtn.classList.replace("btn-outline-info", "btn-info");
    } else {
        themeBtn.textContent = "Koyu Temaya Geç";
        themeBtn.classList.replace("btn-info", "btn-outline-info");
    }
});

// 2. Form Özeti Oluşturma
etkinlikFormu.addEventListener("submit", (event) => {
    event.preventDefault(); // Sayfa yenilenmesini engelle

    // Değerleri al
    const adSoyad = document.getElementById("adSoyad").value.trim();
    const email = document.getElementById("email").value.trim();
    const bolum = document.getElementById("bolum").value;
    const mesaj = document.getElementById("mesaj").value.trim();
    const onay = document.getElementById("onay").checked;

    // Alan kontrolü (Eksik alan uyarısı)
    if (!adSoyad || !email || !bolum || !onay) {
        alert("Lütfen tüm zorunlu alanları doldurun ve onay kutusunu işaretleyin!");
        return;
    }

    // Özet kartını dinamik olarak oluştur
    sonucAlani.innerHTML = `
        <div class="card border-success shadow-sm mx-auto" style="max-width: 500px;">
            <div class="card-header bg-success text-white">Başvuru Özeti</div>
            <div class="card-body text-start">
                <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Bölüm:</strong> ${bolum}</p>
                <p><strong>Mesaj:</strong> ${mesaj || "Mesaj bırakılmadı."}</p>
                <div class="alert alert-success py-2">Başvurunuz başarıyla alındı!</div>
            </div>
        </div>
    `;
    sonucAlani.classList.replace("bg-light", "bg-white");
});