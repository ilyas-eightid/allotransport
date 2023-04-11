const Hero = () => {
    return (
        <>
            <section className="bg-primary px-3 px-lg-0 py-3 py-lg-5">
                <div className="container my-0 my-xl-5">
                    <div className="row align-items-center py-5">
                        <div className="col-12 col-lg-8">
                            <h1 className="display-6 fw-bold mb-2 text-white">Annuaire des transports de marchandises</h1>
                            <p className="lead text-light mb-0">Grâce à notre plate-forme vous pourriez facilement trouver des
                                transports via notre moteur de recherche partout au Maroc.</p>
                            <div className="w-75 mt-5">
                                <form action="listing.html">
                                    <div className="input-group">
                                        <input type="text" className="form-control py-2 px-3" placeholder="Entrer le nom de ville..."
                                            aria-label="Entrer le nom de ville..." aria-describedby="button-search" />
                                        <button className="btn btn-warning" type="button" id="button-search">Recherche</button>
                                    </div>
                                </form>
                            </div>
                            <div className="d-block d-flex-md g-2 mt-3">
                                <a href="listing.html" title="lles transports de marchandises à Casablanca"
                                    className="text-white px-1">Casablanca</a>
                                <a href="listing.html" title="les transports de marchandises à Rabat"
                                    className="text-white px-1">Rabat</a>
                                <a href="listing.html" title="les transports de marchandises à Marakkech"
                                    className="text-white px-1">Marakkech...</a>
                                <a href="listing.html" title="Transport partout au Maroc" className="text-warning px-1">Transport
                                    partout au Maroc</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;