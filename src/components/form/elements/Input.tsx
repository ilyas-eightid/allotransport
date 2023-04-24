import React from 'react'
import ElementError from '../ElementError'
import ElementLabel from '../ElementLabel'

type Props = {
    element: any,
    errors: any,
    register: any
}

export default function Input({ element, errors, register }: Props) {
    return (
        <div className='form-floating'>
            <input type={element.Type} id={element.Name} className="form-control"
                placeholder={element.Placeholder} {...register(element.Name, { required: element.isRequired })} />
            <ElementError element={element} errors={errors} />
            <ElementLabel element={element} />
        </div>
    )
}