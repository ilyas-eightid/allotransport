import { homeProps } from '@/interfaces/interface';
import React from 'react'

type props = {
    data: any,
}


export default function GlobCta({ data }: props) {
    return (
        <>
            <div className="topbar bg-primary py-5">
                <div className="container">
                    <div className="d-block d-lg-flex justify-content-between align-items-center">
                        <div className="topbar-title">
                            <h1 className="h5 text-white">{data.Title}</h1>
                            <p className="lead text-white">{data.SubTitle}</p>
                        </div>
                        <div>
                            <form action="listing.html">
                                <div className="input-group">
                                    <input type="text" className="form-control py-2 px-3"
                                        placeholder="Entrer le nom de ville..." aria-label="Entrer le nom de ville..."
                                        aria-describedby="button-search" />
                                    <button className="btn btn-sm btn-warning" type="button"
                                        id="button-search">Recherche</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}