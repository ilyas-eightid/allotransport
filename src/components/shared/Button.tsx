import Link from 'next/link'
import React from 'react'

type Props = {
    data: any,
    outline: boolean
}

export default function Button({ data, outline }: Props) {

    const classCss = outline ? "btn btn-outline-warning" : 'btn btn-warning';

    return (
        <>
            <Link className={classCss} title={data.Title} href={data.Href}>{data.Title}</Link>
        </>
    )
}