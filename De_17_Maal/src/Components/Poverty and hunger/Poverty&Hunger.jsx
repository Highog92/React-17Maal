import Sustainability from '../../assets/images/Image-Sustainability.jpg'
import style from '../../Components/Growth and Sustainability/Growth_and_Sustainability.module.scss'
export function GrowthSustain() {

    return (

        <section className={style.threeSections}>

            <article>
                <h3>Vækst vs. bæredygtighed.</h3>
                <p>
                    En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.
                </p>
                <p>
                    Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.
                </p>
                <p>
                    De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.
                </p>
            </article>
            <img src={Sustainability} alt="Growth & Sustainability" />
        </section>
    )
}