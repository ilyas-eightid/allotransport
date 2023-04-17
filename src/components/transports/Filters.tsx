import React from 'react'
import Button from '../shared/Button'

type Props = {
    page: any
}

export default function Filters({ page }: Props) {
    return (
        <>
            <div className="border border-primary rounded p-4">
                <h2 className="h5 mb-3">{page.FilterTitle}</h2>
                <form className="" method="get" action="{{ route('activities.index') }}">
                    <div className="filters">
                        <div className="row gy-3">
                            <div className="col-12 form-indice">
                                <p className="mb-0 small" dangerouslySetInnerHTML={{ __html: page.RequiredTitle }}></p>
                            </div>
                            <div className="col-sm-12">
                                <Button data={page.FilterButton} outline={false} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}