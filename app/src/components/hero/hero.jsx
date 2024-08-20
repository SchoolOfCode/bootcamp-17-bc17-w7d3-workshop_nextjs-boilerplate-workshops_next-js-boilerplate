import Link from 'next/link';
export default function Hero() {
    return (
        <>
            <section className="hero">
              <img src="resources/hero-mobile.png" />
              <article>
                <strong id="discover">Discover the Perfect Fireplace ...</strong><br /><strong>Book consultation: </strong><Link href="/bookings">Book Here</Link>
              </article>
            </section>
        </>
    )
}
