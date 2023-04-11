const Statistic = () => {
    return (
        <>
            <section className="numbers bg-light py-3 py-lg-5">
                <div className="container my-5">
                    <h2 className="h3 mb-2">Quelques statistiques qui nous font confiance</h2>
                    <p className="lead mb-5">
                        Trouvez votre transport de marchandises parmi <strong>25554</strong> Transports au Maroc.
                    </p>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
                        <div className="col">
                            <div className="d-flex align-items-center bg-white">
                                <div className="w-25 p-3 text-center text-primary">
                                    <span className="fw-bold h6">2000</span>
                                </div>
                                <div className="w-75 p-3 text-start">
                                    <h3 className="h6 mb-0 text-primary">Transports Professionnels</h3>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center bg-white">
                                <div className="w-25 p-3 text-center text-primary">
                                    <span className="fw-bold h6">3000</span>
                                </div>
                                <div className="w-75 p-3 text-start">
                                    <h3 className="h6 mb-0 text-primary">Transports particuliers</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center bg-white">
                                <div className="w-25 p-3 text-center text-primary">
                                    <span className="fw-bold h6">120</span>
                                </div>
                                <div className="w-75 p-3 text-start">
                                    <h3 className="h6 mb-0 text-primary">Visiteurs</h3>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex align-items-center bg-white">
                                <div className="w-25 p-3 text-center text-primary">
                                    <span className="fw-bold h6">50</span>
                                </div>
                                <div className="w-75 p-3 text-start">
                                    <h3 className="h6 mb-0 text-primary">Villes</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statistic;