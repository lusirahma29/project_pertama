import React, { useState } from "react";
import booksData from "../../../utils/books";

export default function ProductList() {
    const [books, setBooks] = useState(booksData);

    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        description: "",
        image: "",
        price: "",
    });

    const handleChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    };

    // Fungsi tambah buku baru
    const handleAddBook = () => {
        if (!newBook.title || !newBook.author) {
            alert("Judul dan Penulis wajib diisi!");
            return;
        }

        const bookToAdd = {
            id: books.length + 1,
            ...newBook,
            price: parseInt(newBook.price) || 0,
            image: newBook.image || "https://via.placeholder.com/150",
        };

        setBooks([...books, bookToAdd]);
        setNewBook({ title: "", author: "", description: "", image: "", price: "" });
    };

    return (
        <section className="container my-5">
            <div className="row">
                {books.map((book) => (
                    <div key={book.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={book.image}
                                className="card-img-top"
                                alt={book.title}
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">
                                    <strong>{book.author}</strong>
                                </p>
                                <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                                    {book.description}
                                </p>

                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <div className="btn-group mt-2">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            View
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            Read
                                        </button>
                                    </div>
                                    <small className="text-body-secondary">
                                        Rp. {book.price.toLocaleString("id-ID")}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Form Tambah Buku Baru */}
                <div className="col-12 mt-5">
                    <h3 className="mb-3"> == Tambah Buku Baru == </h3>
                    <div className="row g-2">
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="title"
                                placeholder="Judul Buku"
                                className="form-control"
                                value={newBook.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="author"
                                placeholder="Penulis"
                                className="form-control"
                                value={newBook.author}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="number"
                                name="price"
                                placeholder="Harga"
                                className="form-control"
                                value={newBook.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="description"
                                placeholder="Deskripsi"
                                className="form-control"
                                value={newBook.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="image"
                                placeholder="URL Gambar"
                                className="form-control"
                                value={newBook.image}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12">
                            <button onClick={handleAddBook} className="btn btn-success mt-3">
                                Tambah Buku
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
