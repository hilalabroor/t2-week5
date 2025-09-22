## Identitas
- **Nama**: M. Wahyu Hilal Abroor
- **NIM**: F1D02310123

## Deskripsi Tugas
Tugas ini bertujuan untuk mengimplementasikan enam metode array JavaScript (`map`, `filter`, `reduce`, `find`, `some`, `every`) menggunakan minimal 10 data dalam sebuah array.  
Disini saya menggunakan data 10 Film Terbaik Sepanjang Masa yang berisi judul, tahun rilis, rating, dan sutradara. berikut datanya:
<img width="808" height="332" alt="image" src="https://github.com/user-attachments/assets/193e68de-5ba0-4758-9457-28d8ff72dd17" />

## Implementasi
### map()
- **Tujuan**: Membuat semua judul film menjadi huruf kapital.  
- **Screenshot**:  
<img width="491" height="333" alt="image" src="https://github.com/user-attachments/assets/43fddfd4-ac53-4548-a5ce-5ec1af88caac" />

### filter()
- **Tujuan**: Menyaring film dengan rating ≥ 9.  
- **Screenshot**:  
<img width="760" height="187" alt="image" src="https://github.com/user-attachments/assets/71501b90-e412-4f5e-8c57-dd91e7530f69" />

### reduce()
- **Tujuan**: Menghitung rata-rata rating semua film.  
- **Screenshot**:  
<img width="467" height="32" alt="image" src="https://github.com/user-attachments/assets/31855556-a92f-42f2-97c7-2ccc125fd773" />

### find()
- **Tujuan**: Mencari film pertama yang disutradarai oleh Steven Spielberg.  
- **Screenshot**:  
<img width="498" height="197" alt="image" src="https://github.com/user-attachments/assets/5a3d4d82-042f-4077-b49d-01d11edd3648" />

### some()
- **Tujuan**: Mengecek apakah ada film yang dirilis sebelum 1940.
- **Screenshot**:  
<img width="587" height="24" alt="image" src="https://github.com/user-attachments/assets/d9472b55-d08e-49f8-9db9-48b64904477e" />
outputnya true, karena ada film dari 1939.

### every()
- **Tujuan**: Mengecek apakah semua film memiliki rating di atas 9.  
- **Screenshot**:  
<img width="586" height="24" alt="image" src="https://github.com/user-attachments/assets/f08eae96-3aca-4ec5-9a84-6232cec3692f" />
outputnya false, karena sebagian ada film yang ratingnya di bawah 9.


## Kesimpulan
- `map()` adalah metode yang digunakan untuk memodifikasi setiap elemen array dan menghasilkan array baru.  
- `filter()` adalah metode yang digunakan untuk memilih elemen tertentu yang sesuai dengan kriteria yang di tentukan.  
- `reduce()` adalah metode yang digunakan untuk menggabungkan/meringkas semua elemen array menjadi satu nilai saja dengan sebuah perhitungan.  
- `find()` adalah metode yang digunakan untuk mencari satu elemen pertama yang cocok dengan kondisi.  
- `some()` adalah metode yang digunakan untuk mengecek apakah ada minimal satu elemen yang memenuhi kondisi.  
- `every()` adalah metode yang digunakan untuk mengecek apakah semua elemen memenuhi kondisi tertentu.
