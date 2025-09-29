export default function Team() {

    return (

        <>
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
        </>
    )
}