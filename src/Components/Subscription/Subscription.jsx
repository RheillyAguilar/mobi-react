import React from 'react'
const Subscription = () => {
    return (
        <>
            <div className='flex flex-wrap items-center justify-center gap-10 py-20 px-10'>

                {/* BASIC PLAN */}
                <div className='text-white bg-[#b81d24] max-w-xs p-10 rounded-xl '>
                    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-envelope-mail-6431881-5307257.png" alt=""/>
                    <h1 className='text-4xl mb-3'>Basic Plan</h1>

                    <div className='text-xl mb-5'>
                        <p>Watch on your any device</p>
                        <p>1 screen can you watch</p>
                        <p>Unlimited movies and tv show</p>
                        <p>Cancel Plan Anytime</p>
                        <p>₱369 monthly</p>
                    </div>

                    <button className='px-20 py-1.5 text-xl rounded-md text-[#b81d24] bg-[#f5f5f1] hover:bg-[#e50914] hover:text-[#f5f5f1]'>Subscribe</button>
                </div>


                {/* PREMIUM PLAN */}
                <div className='text-white bg-[#b81d24] max-w-xs p-10 rounded-xl'>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/crown-2997231-2516269.png" alt=""/>
                    <h1 className='text-4xl mb-3'>PREMIUM PLAN</h1>

                    <div className='text-xl mb-5'>
                        <p>Ultra HD and HD Available</p>
                        <p>Watch on your any device</p>
                        <p>4 screen can you watch</p>
                        <p>Unlimited movies and tv show</p>
                        <p>₱549 monthly</p>
                    </div>

                    <button className='px-20 py-1.5 text-xl rounded-md text-[#b81d24] bg-[#f5f5f1] hover:bg-[#e50914] hover:text-[#f5f5f1]'>Subscribe</button>
                </div>



                {/* STANDARD PLAN */}
                <div className='text-white bg-[#b81d24] max-w-xs p-10 rounded-xl'>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/setting-2872383-2389560.png" alt=""/>
                    <h1 className='text-4xl mb-3'>STANDARD PLAN</h1>

                    <div className='text-xl mb-5'>
                        <p>HD Available</p>
                        <p>Watch on your any device</p>
                        <p>2 screen can you watch</p>
                        <p>Unlimited movies and tv show</p>
                        <p>₱469 monthly</p>
                    </div>

                    <button className='px-20 py-1.5 text-xl rounded-md text-[#b81d24] bg-[#f5f5f1] hover:bg-[#e50914] hover:text-[#f5f5f1]'>Subscribe</button>
                </div>


            </div>
        </>
    )
}

export default Subscription