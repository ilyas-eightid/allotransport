import React from 'react'
import Card from './Card'

type Props = {
    data: any[]
}

export default function Listing({ data }: Props) {

    

    return (
        <>
            <div className="heading mb-4">
                <h2 className="h5">All Merchand Transports Activities in Morocco</h2>
                <p>Showing 10 of 2 businesses :</p>
            </div>
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