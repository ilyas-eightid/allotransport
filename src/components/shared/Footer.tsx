import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Button from "./Button";
import WidgetLinks from "./WidgetLinks";
import Widgets from "./Widgets";

type props = {
    data: any
}

const Footer = ({ data }: props) => {
    
    return (
        <>
            <footer className="bg-primary text-white pt-5">
                <div className="container">
                    <div className="footer-logo mb-2">
                        <Link href="/" style={{
                            display: 'inline-block',
                            flexDirection: 'column',
                            height: '39px',
                            width: '279px',
                            position: 'relative'
                        }}>
                            <Image className="img-fluid" layout="fill" objectFit="cover" alt={data.SubLogo} src={process.env.STRAPI_PUBLIC_URL + data.FooterLogo.data.attributes.url} />
                        </Link>
                    </div>
                    <div className="footer-description pb-5">
                        <div className="row row-cols-1 row-cols-lg-2 g-2">
                            <div className="col">
                                <p dangerouslySetInnerHTML={{ __html: data.SubLogo }}>
                                </p>
                                <SocialLinks Items={data.SocialLinks} />
                            </div>
                            {/* <div className="col text-start text-lg-end">
                                <Button data={data.Button} outline={true} />
                            </div> */}
                        </div>
                    </div>
                    <div className="d-block d-lg-flex justify-content-between">
                        <WidgetLinks widgets={data.FooterWidgetLinks} />
                        <Widgets widgets={data.FooterWidgets} />
                    </div>
                    <div className="copyright mt-5 border-top border-0 border-warning text-warning py-3 text-start">
                        <span><small>{data.Copyright}</small></span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;