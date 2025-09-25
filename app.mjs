import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // tambah dua data baru
    store({ nama: "Syifa", umur: 30, alamat: "jln. kelengkeng", email: "syifa@gmail.com" });
    store({ nama: "Halimah", umur: 31, alamat: "jln. pandan", email: "halimah@gmail.com" });

    // tampilkan data
    index();

    // hapus data index ke-2 (misal)
    destroy(2);

    // tampilkan data lagi setelah dihapus
    index();
};

main();
