import React from 'react'
import ElementError from '../ElementError'
import ElementLabel from '../ElementLabel'

type Props = {
    element: any,
    errors: any,
    register: any,
}

export default function Select({ element, errors, register }: Props) {
    return (
        <div className='form-floating'>

            <select className="form-control" value={''} id={element.Name} {...register(element.Name, { required: element.isRequired })}>
                <option value="">{element.Placeholder}</option>
                {
                    element.data?.map((item: any, index: number) => {
                        return <option value={item.value} key={index}>{item.title}</option>
                    })
                }

            </select>

            <ElementError element={element} errors={errors} />
            <ElementLabel element={element} />
        </div >
    )
}