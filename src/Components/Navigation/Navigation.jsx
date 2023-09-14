import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './navigation.css'

const Navigation = () => {
    const [mobile, setMobile] = useState()
    const [sticky, setSticky] = useState(false)


    const closeTogglemenu = () => {
        setMobile(false)
    }

    // sticky the navigation 
    const stickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }


    window.addEventListener('scroll', stickyNavbar)

    // will reset the link to top when click the link
    const scrolltoTop = () => {
        window.scrollTo(0, 0)
    }


    //for search movie
    const [showInput, setShowinput] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();


    const iconClick = () => {
        setShowinput(true);
    }

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch = () => {
        // Navigate to another page with the search query as a URL parameter
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }



    return (
        <>
            <div className={sticky ? 'sticky nav' : 'sticky'}>

                {/* LOGO HERE */}
                <Link to='/' onClick={() => { closeTogglemenu(); scrolltoTop(); }} >
                    <h1 className=' text-4xl font-bold text-[#f5f5f1] uppercase mr-16'><span className='text-[#bb1d24]'>Mo</span>bi</h1>
                </Link>

                {/* NAVIGATION LINK HERE AND ALSO A MOBILE VIEW */}
                <div className={mobile ? 'nav-area active' : 'nav-area'}>
                    <ul className='flex items-center text-3xl text-[#f5f5f1]'>
                        <Link to='/movies' className='mr-6' onClick={() => { closeTogglemenu(); scrolltoTop(); }}  ><li>Movie</li></Link>
                        <Link to='/tvshow' className='mr-6' onClick={() => { closeTogglemenu(); scrolltoTop(); }} ><li>TV Show</li></Link>
                        <Link to='/plan' className='mr-6' onClick={() => { closeTogglemenu(); scrolltoTop(); }} ><li>Plan</li></Link>
                    </ul>
                </div>

                <div className='flex items-center '>
                    {/* ICON HERE SUCH AS LOGIN SEARCH HERE */}
                    <div className='text-2xl text-[#f5f5f1] cursor-pointer'>
                        <i className="fa-solid fa-magnifying-glass mr-6" onClick={iconClick}></i>
                        <Link to='/login'><i className="fa-solid fa-user mr-6"></i></Link>
                    </div>

                    {showInput && (
                        <div className="search-bar absolute bottom-0 mx-auto left-0 right-0 top-[400px]  w-[50%] rounded-xl p-32 ">
                            <div
                                className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
                                onClick={() => setShowinput(false)}
                            ></div>
                            <div className='bg-[#f5f5f1] flex absolute top-0 left-0 right-0 p-4 rounded-2xl'>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    className='px-3 py-1.5 outline-none w-full text-xl bg-transparent'
                                    onChange={handleInputChange}
                                />
                                <button className='px-3 py-1.5 text-xl hover:text-[#b81d24]' onClick={handleSearch}>Search</button>
                            </div>

                        </div>
                    )}


                    {/* MOBILE VIEW BUTTON HERE */}
                    <div onClick={() => setMobile(!mobile)} className='text-2xl text-[#f5f5f1] cursor-pointer icon'>
                        {mobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </div>
                </div>


            </div>
        </>
    )
}

export default Navigation