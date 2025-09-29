export default function Hero({ bookIcon }) {

    return (
        <>
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

        </>
    )

}