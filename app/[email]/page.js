import ViewProfile from '@/components/ViewProfile'
import ViewProfileSkeleton from '@/skeletons/ViewProfileSkeleton';
import React from 'react'

const page = ({params}) => {
  const { email } = params;
  return (
    <ViewProfile email={email}/>
  )
}

export default page

