import me from '../img/me.3.jpeg'

function Portfolio() {
  return (
    <section className="aboutMe" id="portfolio">
      <div className='headings'>
      </div>
      <main>
        <figure>
          <img src={me} alt="Linda Rahayu N" width={350} />
        </figure>
        <div>
          <h2>PORTFOLIO</h2>
          <h1 id="who-am-i">(Tentang Ku)</h1>
          <p>Saya adalah seseorang yang antusias dan bermotivasi tinggi dengan kemampuan kepemimpinan, inisiatif dan mencari tantangan baru. Berpengalaman dalam organisasi internal maupun eksternal kampus.</p>
            <h2>KETERAMPILAN</h2>
            <p>Komunikasi Keterampilan komunikasi yang baik diperoleh melalui pengalaman saya sebagai anggota UKM MAPEAL STIM YKPN dan menjadi peserta di beberapa pelatihan. Organisasi/Manajerial Fleksibel, dapat dengan mudah beradaptasi dengan lingkungan sosial. Fokus, dapat fokus dengan tugas dan tanggung jawab dalam mewujudkan tujuan perusahaan. Disiplin, selalu berusaha disiplin dalam segala sesuatu.</p>
          <div>
          </div>
        </div>

      </main>
    </section>
  )
}

export default Portfolio