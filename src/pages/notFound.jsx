import {Link} from "react-router-dom"

function notFound(){
    return(
        <section>
            <h1>404</h1>
            <p>Oups ! Cette page n'existe pas.</p>
            <Link to="/">Retour à l'accueil</Link>
        </section>
    );
}
export default notFound;