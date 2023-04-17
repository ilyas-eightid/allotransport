import React from 'react'

type Props = { data: any }

export default function Information({ data }: Props) {
    return (
        <>
            <div className="p-3 border border-primary rounded mb-3 text-center">
                <div className="contact-icon mb-3">
                    <i className={data.Icon}></i>
                </div>
                <h2 className="h5 fw-normal mb-1">{data.Title}</h2>
                <p dangerouslySetInnerHTML={{ __html: data.Content }}></p>
            </div>
        </>
    )
}