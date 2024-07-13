import { Skeleton } from '@/components/ui/skeleton'
import { Coffee } from 'lucide-react'
import React from 'react'

const ViewProfileSkeleton = () => {
  return (
    <section className='bg-slate-200 pb-10'>
    <div>
        <Skeleton className='relative bg-gray-200 h-60'>
        </Skeleton>
        <div className='relative max-w-3xl mx-auto pt-20'>
            <Skeleton className='absolute bottom-[92%] left-5 ml-30 bg-gray-400 size-36 rounded-lg border-4 border-white'>
                <div className='h-full w-full rounded-lg flex justify-center items-center overflow-hidden z-[10]'>
                    <div
                        className='absolute left-full bottom-0 ml-3'
                    >
                    </div>
                </div>
            </Skeleton>
            <div className='grid grid-rows-2 sm:grid-cols-2 gap-2 max-w-xl sm:max-w-3xl mx-auto'>
                <Skeleton className = 'bg-white rounded-lg p-5 h-[300px]'/>
                

                <Skeleton className='bg-white flex flex-col rounded-lg p-10 gap-3 h-[300px]'/>
            </div>
        </div>
    </div>
    </section>
  )
}

export default ViewProfileSkeleton
