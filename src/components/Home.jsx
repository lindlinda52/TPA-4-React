import me from '../img/me.jpeg'

function Home() {
  return (
    <section className="home" id="home">
      <div className="brief">
        <div>
          <h1><span
            className='im'
          >I'm</span></h1>
          <h1>Linda Rahayu N</h1>
          <p>Seorang Wanita Yang Mencoba Menyibukkan Diri Sebagai Web Develompment, Namun Belum Terlihat Bakatnya , 
            Yeah IT'S ME.
            Thank You For Comming.
          </p>
        </div>
      </div>
      <figure>
        <img src={me} alt="Linda Rahayu N" />
      </figure>
    </section>
  )
}

export default Home