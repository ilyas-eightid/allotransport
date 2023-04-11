import React from 'react'

type Props = {}

export default function Filters({ }: Props) {
    return (
        <>
            <div className="border border-primary rounded p-4">
                <h2 className="h5 mb-3">Advanced Search</h2>
                <form className="" method="get" action="{{ route('activities.index') }}">
                    <div className="filters">
                        <div className="row gy-3">
                            <div className="col-12 form-indice">
                                <p className="mb-0 small">(<span className="text-danger">*</span>) Required fields.</p>
                            </div>
                            <div className="col-sm-12">
                                <button className="btn btn-sm btn-warning">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}