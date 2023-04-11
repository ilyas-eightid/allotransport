const Footer = () => {
    return (
        <>
            <footer className="bg-primary text-white pt-5">
                <div className="container">
                    <div className="footer-logo mb-2">
                        <img className="img-fluid" src="" alt="Annuaire des transports de marchandises au Maroc" />
                    </div>
                    <div className="footer-description pb-5">
                        <div className="row row-cols-1 row-cols-lg-2 g-2">
                            <div className="col">
                                <p>
                                    Fondée en 2020, 1<sup>er</sup> annuaire des transports de marchandises au Maroc.
                                </p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="text-warning text-decoration-none" target="_blank"
                                            title="Suivez AlloHonda sur Facebook">Facebook</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-warning text-decoration-none" target="_blank"
                                            title="Suivez AlloHonda sur Instagram">Instagram</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="text-warning text-decoration-none" target="_blank"
                                            title="Suivez AlloHonda sur Linkedin">Linkedin</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col text-start text-lg-end">
                                <a href="#" className="btn btn-outline-warning" title="Référencez votre activité">Référencez votre
                                    activité</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-block d-lg-flex justify-content-between">
                        <div className="mb-5 mb-lg-0">
                            <h4 className="h6 mb-4">footer.about</h4>
                            <ul className="list-unstyled">
                                <li><a href="{{ route('cms', 'about-us" className="text-decoration-none text-white"
                                    title="navbar.about">navbar.about</a></li>
                                <li><a href="cms.html" className="text-decoration-none text-white"
                                    title="navbar.partners">navbar.partners</a></li>
                                <li><a href="{{ route('faq" className="text-decoration-none text-white"
                                    title="navbar.help">navbar.help</a></li>
                                <li><a href="{{ route('contact" className="text-decoration-none text-white"
                                    title="navbar.contact">navbar.contact</a></li>
                            </ul>
                        </div>
                        <div className="mb-5 mb-lg-0">
                            <h4 className="h6 mb-4">footer.links</h4>
                            <ul className="list-unstyled">
                                <li><a href="{{ route('cms', 'terms-and-conditions" className="text-decoration-none text-white"
                                    title="navbar.terms">navbar.terms</a>
                                </li>
                                <li><a href="{{ route('cms', 'privacy-policy" className="text-decoration-none text-white"
                                    title="navbar.privacy">navbar.privacy</a>
                                </li>
                                <li><a href="/" className="text-decoration-none text-white"
                                    title="navbar.legal">navbar.legal</a>
                                </li>
                                <li><a href="{{ route('cms', 'personal-data" className="text-decoration-none text-white"
                                    title="navbar.rgpd">navbar.rgpd</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-5 mb-lg-0">
                            <h4 className="h6 mb-4">Contactez-nous</h4>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-pin-map text-warning"></i> 15, avennue Ismail,<br />90110
                                    Tanger</li>
                                <li><i className="bi bi-telephone text-warning"></i> <a href="tel:+212601100993"
                                    className="text-decoration-none text-white" title="">+212 601 100
                                    993</a></li>
                                <li><i className="bi bi-envelope text-warning"></i> <a href="mailto:info@allohonda.ma"
                                    className="text-decoration-none text-white" title="">info@allohonda.ma</a></li>
                            </ul>
                        </div>
                        <div className="mb-5 mb-lg-0">
                            <h4 className="h6 mb-4">Téléchargez l'application</h4>
                            <ul className="list-unstyled">
                                <li><a href="cms" className="text-decoration-none text-white" title="">Allohonda ?</a></li>
                                <li><a href="#" className="text-decoration-none text-white" title="">Partenaires</a></li>
                                <li><a href="/" className="text-decoration-none text-white"
                                    title="Help">Help</a></li>
                                <li><a href="#" className="text-decoration-none text-white" title="">Contactez-nous</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright mt-5 border-top border-0 border-warning text-warning py-3 text-start">
                        <span><small>© 2022 AlloHonda.ma</small></span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;