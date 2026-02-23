export const Heros = () => {
    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>What have u been reading?</h1>
                            <p className='lead'>The library would love to know what u r reading.
                                So we can provide personalized recommendations.</p>
                            <a className='btn main-color btn-lg text-white' href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>Try to check in daily as our collection is always changing.
                                We work none stop to bring you the best experience possible.</p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>
            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                            <h1>What have u been reading?</h1>
                            <p className='lead'>The library would love to know what u r reading.
                                So we can provide personalized recommendations.</p>
                            <a className='btn main-color btn-lg text-white' href="#">Sign Up</a>
                        </div>
                    </div>
                    <div className='m-2'>
                        <div className='col-image-right'></div>
                        <div className='mt-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>Try to check in daily as our collection is always changing.
                                We work none stop to bring you the best experience possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}