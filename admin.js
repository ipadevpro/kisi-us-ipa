document.getElementById('formCerita').addEventListener('submit', async function(e) {
  e.preventDefault();

  const judul = document.getElementById('judul').value;
  const isi = tinymce.get('isiCerita').getContent();
  const secret = document.getElementById('secret').value;

  const payload = {
    judul,
    isi,
    secret
  };

  const response = await fetch('https://script.google.com/macros/s/DEPLOY_URL_KAMU/exechttps://script.google.com/macros/s/AKfycbzT68ohmGP_QnZHrtnN_VcS_cXuaZ-KiYbTgnxVu_xt0gTm3MAjvpKRzfa42Ji9qIF_Lw/exec', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  const result = await response.text();
  const notif = document.getElementById('notif');

  if (result === "Sukses") {
    notif.style.display = 'block';
    notif.innerText = "Cerita berhasil disimpan! 🎉";
    notif.style.color = 'green';
  } else {
    notif.style.display = 'block';
    notif.innerText = "Gagal menyimpan. Kata rahasia salah?";
    notif.style.color = 'red';
  }
});
