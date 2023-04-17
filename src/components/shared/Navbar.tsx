import Link from "next/link";

const Navbar = ({ Items }: { Items: any[] }) => {

    return (
        <>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {

                    Items.map((menu, index) => {
                        return <li className="nav-item" key={index}>
                            <Link href={menu.href} className="nav-link px-2" aria-current="page" title={menu.title}>{menu.title}</Link>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Navbar;