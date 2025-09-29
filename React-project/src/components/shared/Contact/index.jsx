export default function Contact() {

    return (
        <>
            <section id="contact" className="bg-light py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Contact Galenabooks</h2>
                        <p className="text-muted">
                            Ada pertanyaan atau masukan? Silakan hubungi kami melalui informasi atau formulir di bawah ini.
                        </p>
                    </div>

                    <div className="row">
                        {/* Info kontak */}
                        <div className="col-md-5 mb-4">
                            <h5 className="fw-bold mb-3">Informasi Kontak</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <i className="bi bi-geo-alt-fill me-2"></i> Jl. A. Yani, Surabaya
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-envelope-fill me-2"></i> support@galenabooks.com
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-telephone-fill me-2"></i> +62 812-000-1111
                                </li>
                            </ul>
                            <h6 className="fw-bold mt-4">Ikuti kami:</h6>
                            <div>
                                <a href="https://instagram.com" className="me-3 text-decoration-none">
                                    <i className="bi bi-instagram fs-4"></i>
                                </a>
                                <a href="https://facebook.com" className="me-3 text-decoration-none">
                                    <i className="bi bi-facebook fs-4"></i>
                                </a>
                                <a href="https://twitter.com" className="text-decoration-none">
                                    <i className="bi bi-twitter fs-4"></i>
                                </a>
                            </div>
                        </div>

                        {/* Form kontak */}
                        <div className="col-md-7">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nama</label>
                                    <input type="text" className="form-control" id="name" placeholder="Nama Anda" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Pesan</label>
                                    <textarea className="form-control" id="message" rows="3" placeholder="Tulis pesan Anda di sini"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Kirim Pesan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}