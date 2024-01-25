export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>GRA, Port Harcourt</h2>
                <p className="about-subtext">Little Lemon was opened to the public in 1995 by an Italian couple, Adrian and Maria, 
                who recently migrated to the beautiful city of Port Harcourt, Rivers State, the southern region of Nigeria. 
                Despite the city's diversity, the couple recognized the lack of Mediterranean cuisine in Port Harcourt, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Rivers State. The couple 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}