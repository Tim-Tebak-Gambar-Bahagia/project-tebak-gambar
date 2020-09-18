<template>
    <div id="howTo">
        <div class="content">
            <img src="https://media.giphy.com/media/H1LydVxIZzA9s5YySj/giphy.gif" width="200px">
            <div>
                <h3>How To Play whAtS oN yoUr scReeN Game?</h3>
                <ul style="text-align: left;">
                    <li>Pemain harus menebak gambar yang tepat </li>
                    <li>Terdapat lima gambar yang harus ditebak </li>
                    <li>Pemain meletakkan jawaban di kotak "jawaban", di mana jawaban yang benar diidentifikasi oleh server dan poin secara otomatis ditambahkan ke skor pemain.</li>
                    <li>Pemain dapat berinteraksi dengan pemain lain di kotak obrolan</li>
                    <li>Pemain harus menebak secara benar untuk lanjut ke gambar selanjutnya</li>
                    <li>Pemain dinyatakan menang ketika berhasil menebak kelima gambar pertanyaan</li>
                    <li>Apabila sudah ada pemain yang dinyatakan menang, maka permainan akan berhenti dan ditampilkan leaderboard</li>
                </ul>
            </div>
            <button class="btn btn-dark" @click="$router.push('/')"> Close </button>
        </div>
    </div>
</template>