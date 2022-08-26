import post1 from '../img/post1.jpeg'
import post2 from '../img/post2.jpeg'
import post3 from '../img/post3.jpeg'

function Blog() {
  return (
    <section className="blog" id="blog">
      <h1 className="headings">My Blog With Filter</h1>
      <main>
        <article>
          <figure>
            <img src={post1} alt="()" width={300} />
          </figure>
          <div>
            <h2>Sydney Harris</h2>
            <p>The real threat is actually not when the computer begins to think like a human, but when humans begin to think like computers".</p>
          </div>
        </article>
        <article>
          <figure>
            <img src={post2} alt="()" width={300} />
          </figure>
          <div>
            <h2>keDale Carnegie</h2>
            <p>People who managed to take advantage of the mistakes that he did, and will try again to perform in a different way".</p>
            <button className="cta-outline black">Read More</button>
          </div>
        </article>
        <article>
          <figure>
            <img src={post3} alt="()" width={300} />
          </figure>
          <div>
            <h2>Alain Ducasse</h2>
            <p>Failure is enriching. It's also important to accept that you'll make mistakes  it's how you build your expertise. The trick is to learn a positive lesson from all of life's negative moments”.</p>
            <button className="cta-outline black">Read More</button>
          </div>
        </article>
      </main>
    </section>
  )
}

export default Blog