import users from "./data.mjs";

const index = () => {
    //tampilkan data
    users.map((user, i) => {
        console.log(`${i + 1}. ${user.nama} - ${user.umur + "tahun"} - ${user.alamat} - ${user.email}`);
    });
};

const store = (user) => {
    //tambahkan data baru
    users.push(user);
    console.log("Data berhasil ditambahkan");
};

const destroy = (indexUser) => {
    //hapus data sesuai index
    if (indexUser >= 0 && indexUser < users.length) {
        users.splice(indexUser, 1);
        console.log("Data berhasil dihapus");
    } else {
        console.log("Index tidak valid");
    }
};

export { index, store, destroy };
