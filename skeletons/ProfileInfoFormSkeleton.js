import { Skeleton } from "@/components/ui/skeleton"

console.log('Skeleton')

const ProfileInfoFormSkeleton = () => {
  return (
    <div>
    <Skeleton className='relative bg-gray-200 p-4 rounded-lg'>
        <div className='relative bg-gray-400 size-24 rounded-full'>
            <div className='absolute top-1/2 left-5 h-full w-full rounded-lg flex justify-center items-center overflow-hidden z-[10]'>
             </div>
        </div>
    </Skeleton>
    <div className= "flex flex-col gap-3">   
        <div className="flex">
            <div className="grow">
                <label className = "block mt-4 font-semibold" htmlFor='usernameIn'>Username:</label>
                <Skeleton className='w-full h-10'></Skeleton>
            </div>
            <div className="grow">
                <label className = "block mt-4 font-semibold" htmlFor='displayNameIn'>Display name:</label>
                <Skeleton className='w-full h-10'></Skeleton>
            </div>
        </div>   
        <div>
            <label className = "block mt-4 font-semibold" htmlFor='bioIn'>Bio:</label>
            <Skeleton className='w-full h-10'></Skeleton>
        </div>
        <div>
            <button 
                className='bg-yellow-300 px-4 py-2 rounded-full mt-4'
            >
                Save Profile
            </button>
        </div>
    </div>
    </div>
  )
}

export default ProfileInfoFormSkeleton
