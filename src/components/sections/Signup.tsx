const Signup = () => {
    return (
        <>
            <section className="singup py-3 py-lg-5">
                <div className="container my-5">
                    <h2 className="h3 mb-2">Faites-vous connaitre partout au Maroc</h2>
                    <p className="mb-5">Soyez visible sur Google et Allo Honda (plus que <strong>1 mille</strong> visiteurs
                        par
                        jour).</p>
                    <div className="row align-items-center gy-5">
                        <div className="col-12 col-lg-6">
                            <img src="img/etes-vous-entreprise.jpg" className="img-fluid"
                                alt="réferncer votre activité professionnel" />
                        </div>
                        <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                            <h3 className="h4 mb-3">Êtes-vous transport professionnel ?</h3>
                            <p className="lead">Inscrivez-vous et référencer votre activité de transport professionnel via
                                notre
                                Annuaire de transport de marchandises au Maroc.</p>
                            <h4 className="h5 mt-4 mb-3">Aujourd'hui avec notre plateforme...</h4>
                            <ul className="mb-4">
                                <li>Soyez plus visible sur l'internet.</li>
                                <li>Service totalement Gratuit.</li>
                                <li>Plus que <strong>1 000</strong> sociétés de transport réferencées sur notre plateforme.
                                </li>
                                <li>Gangez plus des visiteurs pour votre activité.</li>
                                <li>Recevez plus des demandes.</li>
                                <li>Echanger avec plusieurs activitées de marchandises.</li>
                            </ul>
                            <a href="singup.html" className="btn btn-md btn-warning ms-3"
                                title="Mettez en avant votre établissement">Mettez en avant votre établissement</a>
                        </div>
                    </div>
                    <div className="row align-items-center mt-3 mt-lg-5 gy-5">
                        <div className="col-12 col-lg-6 col-xl-5 order-1 order-lg-0">
                            <h3 className="h4 mb-3">Êtes-vous transport particulier ?</h3>
                            <p>Inscrivez-vous et référencer votre activité tant que transport particulier via notre Annuaire
                                de transport de marchandises au Maroc.</p>
                            <h4 className="h5 mt-4 mb-3">Aujourd'hui avec notre plateforme...</h4>
                            <ul className="mb-4">
                                <li>Soyez plus visible sur l'internet.</li>
                                <li>Service totalement Gratuit.</li>
                                <li>Plus que <strong>1 000</strong> transport particulier réferencées sur notre plateforme.
                                </li>
                                <li>Gangez plus des visiteurs pour votre activité.</li>
                                <li>Recevez plus des demandes.</li>
                                <li>Echanger avec plusieurs activitées de marchandises.</li>
                            </ul>
                            <a href="singup.html" className="btn btn-md btn-warning ms-3"
                                title="Réferencez votre service particulier">Réferencez votre service particulier</a>
                        </div>
                        <div className="col-12 col-lg-6 offset-xl-1 order-0 order-lg-0">
                            <img src="img/etes-vous-entreprise.jpg" className="img-fluid"
                                alt="réferncer votre activité professionnel" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;