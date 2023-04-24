import React from 'react'

type Props = {
    Message: string
}

export default function Alert({ Message }: Props) {
    return (
        <div className="alert alert-primary" role="alert">
            {Message}
        </div>
    )
}