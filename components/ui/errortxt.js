import React from 'react'

function ErrorTxt({ children }) {
    return (
        <p className='text-xs mt-2 text-red-600'>{children}</p>
    )
}

export default ErrorTxt