


export default function Hero(){
    return(
   <div className='container p-5'>
            <div className="row text-center">
                <img src='media/images/landing-Main-homepage.svg' alt="heroimage" className='mb-5 ' style={{width:"80%", margin:'0 auto'}} />
                <h1 className='text-muted fs-2 mb-3 mt-5'>Invest in everything</h1>
                <p   className='text-muted fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a href="http://localhost:5173/signup"><button className='p-2 btn btn-primary mt-4 fs-5 mb-5' style={{width:"20%" , margin:'0 auto'}}>Sign up Now</button></a>
            </div>
        </div>
    );
}