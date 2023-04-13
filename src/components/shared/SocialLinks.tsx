import Link from 'next/link'
import React from 'react'

type Props = {
    Items: any[]
}

export default function SocialLinks({ Items }: Props) {
    return (
        <>
            <ul className="list-inline">
                {
                    Items.map((item, index) => {
                        return (
                            <li className="list-inline-item" key={index}>
                                <Link className="text-warning text-decoration-none" target="_blank" href={item.Href} title={item.title}>{item.Title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}