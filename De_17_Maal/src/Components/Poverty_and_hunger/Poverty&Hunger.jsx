import hungryImg from '../../assets/images/Image-Hunger.jpg'
import style from '../Poverty_and_hunger/Poverty&Hunger.module.scss'
export function SultenOgFattig() {

    return (

        <section className={style.threeSections}>

            <article>
                <h3>Fattigdom og sult.</h3>
                <p>
                    Det første af FN’s verdensmål handler om at afskaffe verdens fattigdom inden 2030.                </p>
                <p>
                    Det handler især om at give muligheder for mennesker i verdens fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.                </p>
                <p>
                    En stor udfordring, men vi er allerede godt på vej.                </p>
            </article>
            <img src={hungryImg} alt="Poverty and hunger" />
        </section>
    )
}