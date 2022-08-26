import me from '../img/me.1.jpeg'

function About() {
  return (
    <section className="aboutMe" id="about">
      <main>
        <figure>
          <img src={me} alt="Linda Rahayu N" width={250} />
        </figure>
        <div>
          <h2>ABOUT ME</h2>
          <h1 id="who-am-i">WHO AM I</h1>
          <p><strong>I'm Is L.R.N</strong> adalah kepanjangan dari <strong>Linda Rahayu Ningsih</strong> yang lahir di tahun 1998 pada tanggal 5 February. Seorang Fresh Graduate Lulusan S1 dengan Spesialisasi di Management Marketing. Memiliki pengalaman dalam mengembangkan dan mengimplementasikan keuangan sebagai bendahara di dalam organisai semasa menjadi mahasiswi dan melalui kesempatan magang di PT. Pegadaian perusahaan BUMN selama 2 bulan. Motivasi untuk sekarang mencari peluang kerja yang memberi kesempatan untuk semakin berkembang.</p>          
          <div>
          </div>
        </div>

      </main>
    </section>
  )
}

export default About