import bookIcon from './assets/book.png';

function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">galenabooks</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </header>
      </div>

      {/* Hero */}
      <section id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Embrace your favorite book and read it now!
            </h1>
            <p className="lead">
              Discover the joy hidden in your chosen story and lose yourself in its pages today.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-center p-0">
            <img src={bookIcon} alt="Book Illustration" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* Product list */}
      <section id="book" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              A glimpse into our top-selling favorites—crafted by talented creators, waiting for you below.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">View</a>
              <a href="#" className="btn btn-secondary my-2">Other Book</a>
            </p>
          </div>
        </div>
      </section>

      {/* book */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://i.pinimg.com/736x/da/a7/c1/daa7c1fc935e46c72d733073dd29bd5c.jpg" className="card-img-top" alt="Book 1" />
                <div className="card-body">
                  <p className="card-text mb-2">
                    Pasta Kacang Merah by Durian Sukegawa
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Read</button>
                    </div>
                    <small className="text-body-secondary">Rp. 175.000</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://i.pinimg.com/1200x/14/f9/73/14f973e92cca4791bd9674bd6f0d8162.jpg" className="card-img-top" alt="Book 1" />
                <div className="card-body">
                  <p className="card-text mb-2">
                    Sisi Tergelap Surga by Brian Khrisna
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Read</button>
                    </div>
                    <small className="text-body-secondary">Rp. 99.000</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://i.pinimg.com/1200x/e3/0c/32/e30c324d70e620d324bb620331785e6d.jpg" className="card-img-top" alt="Book 1" />
                <div className="card-body">
                  <p className="card-text mb-2">
                    Laut Bercerita by Leila S. Chudori
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Read</button>
                    </div>
                    <small className="text-body-secondary">Rp. 99.000</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <section id="team" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Meet Our Team</h2>
          <p className="text-muted">The passionate people behind Galena</p>
        </div>
        <div className="row">
          <div
            className="col-md-4 text-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src="https://i.pinimg.com/736x/64/b7/17/64b717e17017c40662b63f3a74546cb7.jpg"
              alt="Team 1"
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                marginBottom: '1rem',
                objectFit: 'cover'
              }}
            />
            <h5 style={{ marginBottom: '0.25rem' }}>Pharita</h5>
            <p style={{ color: '#6c757d', margin: 0 }}>Founder galenabooks</p>
          </div>

          <div className="col-md-4 text-center">
            <img src="https://i.pinimg.com/736x/12/c2/a2/12c2a2c38d66333f1d7b6da008095a6a.jpg" alt="Team 3" className="rounded-circle mb-3" style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              marginBottom: '1rem',
              objectFit: 'cover'
            }} />
            <h5>Ruka</h5>
            <p className="text-muted">Head of Sales</p>
          </div>

          <div className="col-md-4 text-center">
            <img src="https://i.pinimg.com/1200x/81/26/ef/8126efb4b87151441bda20371fc3976a.jpg" alt="Team 3" className="rounded-circle mb-3" style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              marginBottom: '1rem',
              objectFit: 'cover'
            }} />
            <h5>Ahyeon</h5>
            <p className="text-muted">Social Media Specialist</p>
          </div>
        </div>
      </section>

      {/* Contact */}
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


      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
        </footer>
      </div>
    </>
  );
}

export default App;
