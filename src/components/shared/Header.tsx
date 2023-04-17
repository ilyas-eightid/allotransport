import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import Button from "./Button";

type props = {
    data: any
}

const Header = ({ data }: props) => {

    return (
        <>
            <Link className="logo d-flex align-items-center justify-content-center pt-3 d-md-none" href="/">
                <Image alt="Allohonda - Annuaire des transports au Maroc" className="img-fluid" width="200" height="100" src={'http://127.0.0.1:1337' + data.Logo.data.attributes.url} />
            </Link>
            <header className="bg-white border-bottom sticky-top py-2">
                <nav className="navbar navbar-light navbar-expand-xl">
                    <div className="container-fluid container-lg">
                        <button className="btn btn-md border-primary d-xl-none" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#menuMobileLabel" aria-controls="menuMobile" aria-expanded="false"
                            aria-label="{{ __('Toggle navigation') }}">
                            <i className="bi bi-list"></i>
                        </button>
                        <Link className="logo d-none me-auto ms-3 d-md-block d-xl-none" href="/">
                            <Image alt="Allohonda - Annuaire des transports au Maroc" className="img-fluid" width="200" height="100" src={'http://127.0.0.1:1337' + data.Logo.data.attributes.url} />
                        </Link>
                        <div className="collapse navbar-collapse">
                            <Link href="/" className="navbar-brand">
                                <Image alt="Allohonda - Annuaire des transports au Maroc" className="img-fluid" width="200" height="100" src={'http://127.0.0.1:1337' + data.Logo.data.attributes.url} />
                            </Link>
                            <Navbar Items={data.Menu} />
                        </div>
                        {/* <div className="text-end">
                            <Button data={data.Button} outline={false} />
                        </div> */}
                    </div>
                </nav>
                <div className="offcanvas offcanvas-start" id="menuMobileLabel" aria-labelledby="menuMobileLabel">
                    <div className="offcanvas-header">
                        <span className="offcanvas-title text-muted" id="offcanvasLabel">Navigation</span>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Navbar Items={data.Menu} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;