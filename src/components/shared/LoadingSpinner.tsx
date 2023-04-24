import React from 'react'

type Props = {}

export default function LoadingSpinner({ }: Props) {
    return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}