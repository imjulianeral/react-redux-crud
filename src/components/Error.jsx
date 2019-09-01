import React from 'react'

export default function Error(msg) {
    return (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
            { msg }
        </div>
    )
}
