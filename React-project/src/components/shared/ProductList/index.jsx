export default function ProductList() {

    return (
        <>
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

        </>

    )
}