import Loader from '@/components/Loader'
import React from 'react'

export default function Loading() {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <Loader />
        </div>
    )
}