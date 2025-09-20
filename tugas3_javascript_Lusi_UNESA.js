//array 
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

//Tambah produk
const tambahProduk = (nama, harga, stok) => {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({ id: idBaru, nama, harga, stok });
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
};

//Hapus produk
const hapusProduk = (id) => {
    let index = produkToko.findIndex(p => p.id === id);
    if (index !== -1) {
        let namaProduk = produkToko[index].nama;
        produkToko.splice(index, 1);
        console.log(`Produk "${namaProduk}" berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
};

//menampilakn produk dalam bentuk tabel
const tampilkanProduk = () => {
    console.log("\n=== Daftar Produk Toko ===");
    console.log("===========================================================");
    console.log("| ID | Nama Produk        | Harga (Rp)     | Stok         |");
    console.log("===========================================================");
    produkToko.forEach(produk => {
        console.log(
            `| ${produk.id.toString().padEnd(2)} ` +
            `| ${produk.nama.padEnd(17)} ` +
            `| ${produk.harga.toLocaleString('id-ID').padEnd(13)} ` +
            `| ${produk.stok.toString().padEnd(11)} |`
        ); //pakai tolocalestring agar ada titik(.) pada bentuk rupiahnya
    });
    console.log("===========================================================\n");
};

tampilkanProduk();
tambahProduk("Headset", 150000, 8);
hapusProduk(2);
tampilkanProduk();               
