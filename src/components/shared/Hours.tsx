import React from 'react'

type Props = {
    hours: any[]
}

export default function Hours({ hours }: Props) {
    return (
        <>
            {
                hours.map((hour, index) => {
                    return (
                        <div className="d-flex justify-content-between" key={index}>
                            <span>{hour?.Day}</span><span>{hour?.Start}-{hour?.End}</span>
                        </div>
                    )
                })
            }
        </>
    )
}