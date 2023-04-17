import React from 'react'
import Card from './Card'

type Props = {
    data: any[]
}

export default function Listing({ data }: Props) {

    return (
        <>
           
            <div className="listing-card">
                {
                    data.map((item, index) => {
                        return <Card item={item.attributes} key={index} />
                    })
                }
            </div>
        </>
    )
}