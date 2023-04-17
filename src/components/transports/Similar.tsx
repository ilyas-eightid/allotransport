import Link from 'next/link'
import React from 'react'

type Props = {
    data: any
}

export default function Similar({ data }: Props) {
    return (
        <div>
            <div className="card border-warning">
                <div className="card-body">
                    <div className="d-block d-md-flex justify-content-between align-items-top">
                        <div>
                            <div className="card-title h5 mb-4">{data.attributes.Title}</div>
                            <h3 className="ps-1 mb-2 blockquote-footer">{data.attributes.Category.data.attributes.Name}</h3>
                            <p className="mb-0">N, 1 rue gibraltar،, Tangier 90000</p>
                        </div>
                        <div className="card-call-action mt-3 mt-xl-0 mt-3 mt-xl-0 text-start text-md-end text-lg-center">
                            <Link className="btn btn-sm btn-warning mb-0 mb-md-2 mb-xl-0" href={'/transports/' + data.attributes.slug}>Consulter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}