# Smart Rating 🍿

Portal Katalog, Trailer, Ulasan, dan Informasi Tempat Nonton Resmi Film dengan UI Modern Dark Mode (ala IDLIX) yang diperbarui sesuai dengan daftar film spesifik.

## Fitur Utama & Revisi Terbaru:
1. **Daftar Film Lengkap Sesuai Permintaan:**
   - **Film Trending di IMDb (Global):** You Can See Everything (2026), Clayface (2026), Wildwood (2026), Street Fighter (2026), Animals (2026), Resident Evil (2026).
   - **Film Populer di Netflix Indonesia:** Dance of the Damned (#1), Cerita Lila (#2), Kuyank (#3), Lembayung (#4), Khadam (#5).
   - **Film Sedang Tayang di Cinema XXI:** Laut Bercerita, The Doll Ghawiah, The Longest Wait, Kuasa Gelap: Perjanjian Darah.
2. **RottenTomatoes Dihapus & Rating Bintang Dinamis:**
   - Bagian RottenTomatoes (Tomatometer %) sudah dihapus.
   - Rating bintang bersifat **Dinamis Real-Time**. Ketika user menambahkan ulasan dengan rating baru (misal rating rendah 1/10 atau tinggi 10/10), rating keseluruhan film akan otomatis dihitung ulang dari rata-rata ulasan.
3. **HeroBanner Slider Sliderr (Slider 4 Film):**
   - HeroBanner di bagian atas berisi 4 film pilihan utama dan dapat **digeser/di-slide** menggunakan panah kiri/kanan (`❮` / `❯`) maupun titik indikator bawah.
4. **Tombol "Tambah Film" Dihapus:**
   - Halaman/tombol tambah data film telah dibersihkan sehingga tampilan web fokus penuh sebagai portal katalog & ulasan.

## Cara Menjalankan di VS Code:
1. Extract file `smart-rating.zip`.
2. Buka foldernya di VS Code.
3. Jalankan terminal:
   ```bash
   npm install
   npm run dev
   ```
4. Buka `http://localhost:5173` di browser.
