import React from 'react'

type Props = {
    data: any,
    errors: any,
    register: any
}

export default function Inputs({ data, errors, register }: Props) {

    return (
        <div className="col-12 col-md-12">
            <div className='row gy-3'>
                {
                    data.map((element: any, index: number) => {
                        return (
                            <div className={element.Class} key={index}>
                                {
                                    element.Type == "switch" ?
                                        <div className="form-check form-switch">
                                            <input id={element.Name} className="form-check-input" value="on" {...register(element.Name, { required: element.isRequired })} type="checkbox" />
                                            <label htmlFor={element.Name} className="form-check-label">{element.Title}</label>
                                            {(element.Name in errors) && <div className="invalid-feedback d-block">{element.Error}</div>}
                                        </div>

                                        :
                                        <div className='form-floating'>
                                            {
                                                element.Type == "textarea" ?
                                                    <textarea id={element.Name} className="form-control"
                                                        placeholder={element.Placeholder} style={{ height: "200px" }} {...register(element.Name, { required: element.isRequired })}></textarea>
                                                    :
                                                    <input type={element.Type} id={element.Name} className="form-control"
                                                        placeholder={element.Placeholder} {...register(element.Name, { required: element.isRequired })} />
                                            }
                                            {(element.Name in errors) && <div className="invalid-feedback d-block">{element.Error}</div>}
                                            <label htmlFor={element.Name} className="form-label">{element.Title}{element.isRequired ? <span className="text-danger">*</span>:''}</label>
                                        </div>
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}