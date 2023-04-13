import Link from 'next/link'
import React from 'react'

type Props = {
    widgets: any[]
}

export default function WidgetLinks({ widgets }: Props) {
    return (
        <>
            {
                widgets.map((widget, index) => {
                    return (
                        <div className="mb-5 mb-lg-0" key={index}>
                            <h4 className="h6 mb-4">{widget.Title}</h4>
                            <ul className="list-unstyled">
                                {
                                    widget.Links.map((link: any, index: any) => {
                                        return (
                                            <li key={index}>
                                                <Link className="text-decoration-none text-white" title={link.title} href={link.href}>{link.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}