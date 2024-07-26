# Laravel React E-Commerce

Aplikasi cloning [Tokopedia](https://www.tokopedia.com/) dengan beberapa modifikasi pada halaman tertentu, dibangun menggunakan ReactJS untuk frontend dan Laravel untuk backend.

## Daftar Isi

- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Fitur](#fitur)

## Instalasi

### Prasyarat

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/)

### Setup Backend (Laravel)

1. Clone repository:

    ```bash
    git clone https://github.com/username/laravel-react-ecommerce.git
    cd laravel-react-ecommerce
    ```

2. Masuk ke direktori `backend`:

    ```bash
    cd backend
    ```

3. Instal dependensi PHP:

    ```bash
    composer install
    ```

4. Salin file `.env.example` ke `.env` dan perbarui kredensial database:

    ```bash
    cp .env.example .env
    ```

5. Hasilkan application key:

    ```bash
    php artisan key:generate
    ```

6. Jalankan migrasi database:

    ```bash
    php artisan migrate
    ```

7. Mulai server development Laravel:

    ```bash
    php artisan serve
    ```

### Setup Frontend (ReactJS)

1. Masuk ke direktori `frontend`:

    ```bash
    cd ../frontend
    ```

2. Instal dependensi Node.js:

    ```bash
    npm install
    ```

3. Mulai server development React:

    ```bash
    npm run dev
    ```

## Penggunaan

- Buka browser Anda dan navigasikan ke `http://localhost:8000` untuk mengakses backend Laravel.
- Buka browser Anda dan navigasikan ke `http://localhost:5173` untuk mengakses frontend React.

## Fitur yang Masih Tersedia

- **Autentikasi Pengguna:** Fungsi register, login, dan logout.
- **Daftar Produk:** Melihat daftar produk, paginasi, search produk, variant produk.
- **Detail Produk:** Melihat informasi detail tentang produk tertentu.
- **Review Produk:** Melihat review product.
- **Manajemen Keranjang:** Menambah dan melihat produk dari keranjang belanja.