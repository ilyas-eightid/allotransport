import React from 'react'
import Inputs from '../form/Inputs'
import LoadingSpinner from './LoadingSpinner'
import Input from '../form/elements/Input'
import Select from '../form/elements/Select'

type Props = {
    elements: any,
    errors: any,
    register: any
}

export default function FormElements({ elements, errors, register }: Props) {
    return (

        <div className="col-12 col-md-12">
            <div className='row gy-3'>
                {
                    elements.map((element: any, index: number) => {
                        return (
                            <div className={element.Class} key={index}>
                                {
                                    (element.Type == 'text') && <Input element={element} errors={errors} register={register} />
                                }
                                {
                                    (element.Type == 'select') && <Select element={element} errors={errors} register={register} />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}