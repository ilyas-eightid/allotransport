import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

type Props = {
    item: any
}

export default function Card({ item }: Props) {

    console.log(item);


    return (
        <>
            <div className="card border-light mb-3">
                <div className="card-body">
                    <div className="d-block d-xl-flex justify-content-between align-items-top">
                        <div className="text-center w-50 me-3">
                            <Link className="text-black text-decoration-none" href={item.slug}>
                                <Image alt={item.Title} width="106" height="106" className="img-fluid rounded-circle"
                                    src={'http://127.0.0.1:1337' + item.seo.metaImage.data.attributes.url} />
                            </Link>
                        </div>
                        <div>
                            <h3 className="card-title h5 mb-1">
                                <Link className="text-black text-decoration-none" href={`/transport/${encodeURIComponent(item.slug)}`}>
                                    {item.Title}
                                </Link>
                            </h3>
                            <p className="mb-4">{item.Address}</p>
                            <p className="mb-2 blockquote-footer">{item.Description}</p>
                        </div>
                    </div>
                </div>
            </div></>
    )
}