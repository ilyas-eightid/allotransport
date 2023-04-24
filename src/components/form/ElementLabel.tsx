import React from 'react'

type Props = {
    element: any
}

export default function ElementLabel({ element }: Props) {
    return (
        <label htmlFor={element.Name} className="form-label">{element.Title}{element.isRequired ? <span className="text-danger">*</span> : ''}</label>
    )
}