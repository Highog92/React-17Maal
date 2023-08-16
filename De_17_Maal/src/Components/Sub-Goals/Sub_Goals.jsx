import style from '../Sub-Goals/Sub_Goals.module.scss'

export function SubGoals() {

    return (

        <section className={style.Sub_Goals}>
            <article>

                <hgroup>
                    <h3>
                        <span>
                            Delmålene
                        </span>
                        <a href="">Tilbage til top</a>
                    </h3>
                </hgroup>

                <p>
                    FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for,
                    hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.
                    Se eksempler på enkelte delmål her:
                </p>
                <p className={style.galleryText}>
                    Se eksempler på enjekte delmål her:
                </p>
            </article>
        </section>

    )


}