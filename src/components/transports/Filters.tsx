import React, { useRef, useState } from 'react'
import Button from '../shared/Button'
import { useForm } from 'react-hook-form';
import FormElements from '../shared/FormElements';

type Props = {
    filter: any
}

export default function Filters({ filter }: Props) {

    const filterForm = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitSuccessful } } = useForm();
    const onSubmit = (FormData: any) => {
        console.log(FormData);
    }

    return (
        <>
            <div className="border border-primary rounded p-4">
                <h2 className="h5 mb-3">{filter.Title}</h2>
                <form onSubmit={handleSubmit(onSubmit)} ref={filterForm}>
                    <div className="filters">
                        <div className="row gy-3">
                            <FormElements elements={filter.Form} errors={errors} register={register} />
                            <div className="col-12 form-indice">
                                <p className="mb-0 small" dangerouslySetInnerHTML={{ __html: filter.RequiredTitle }}></p>
                            </div>
                            <div className="col-sm-12">
                            <button type="submit" className="btn btn-warning" disabled={isLoading} id="submit">{filter.Button.Title}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}