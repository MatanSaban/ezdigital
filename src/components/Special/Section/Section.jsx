const Section = (props) => {
    return ( 
        <section className="pageSection">
            <h2 className="centerText" style={{color:'var(--color-primary)', fontWeight:'400'}}>{props.title}</h2>
        </section>
     );
}
 
export default Section;