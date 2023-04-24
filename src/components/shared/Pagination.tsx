import Link from 'next/link';
import React from 'react'

type Props = {
    data: any
}

export default function Pagination({ data }: Props) {

    const paginationElements = function () {
        const content = [];
        for (let i = 1; i <= parseInt(data.total); i++) {
            content.push(<li className={`page-item ${parseInt(data.page) == i ? 'active' : ''}`} key={i}>
                <Link href={'transports?page=' + i} className="page-link">{i}</Link>
            </li>);
        }

        return content;
    }


    return (
        <nav className="mt-5" aria-label="Page navigation example">
            <ul className="pagination mb-0">
                <li className={`page-item ${parseInt(data.page) == 1 ? 'd-none' : ''}`}>
                    <Link href={'transports?page=' + (parseInt(data.page) - 1)} className="page-link">Previous</Link>
                </li>
                {
                    paginationElements()
                }
                <li className={`page-item ${parseInt(data.page) == parseInt(data.total) ? 'd-none' : ''}`}>
                    <Link href={'transports?page=' + (parseInt(data.page) + 1)} className="page-link">Next</Link>
                </li>
            </ul>
        </nav>
    )
}