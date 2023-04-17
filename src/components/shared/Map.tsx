import React from 'react'

type Props = {}

export default function Map({ }: Props) {
    return (
        <>
            <div className="map mb-5">
                <h2 className="h5 mb-3">Map Location</h2>
                <div id="maplocation" style={{ width: "100%", height: "400px" }}></div>
            </div>
        </>
    )
}