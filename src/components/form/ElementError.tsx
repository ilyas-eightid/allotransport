import React from 'react'

type Props = {
    element: any,
    errors: any
}

export default function ElementError({ element, errors }: Props) {
    return (
        <>
            {
                (element.Name in errors) && <div className="invalid-feedback d-block">{element.Error}</div>
            }
        </>
    )
}