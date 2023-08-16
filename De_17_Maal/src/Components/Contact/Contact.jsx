import style from '../Contact/Contact.module.scss'
import unLogo from '../../assets/images/UN-Logo-Large.png'
export function Contact() {
    return (

        <section className={style.contactForm}>
            <h3>Kontakt os
                <a href="">Tilbage til Top</a>
            </h3>
            <p>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:
            </p>
            <form>
                <div>
                    <img src={unLogo} alt="UnLogo" />
                </div>
                <div className={style.inputs}>
                    <input type="text" placeholder='Indtast dit fulde navn' />
                    <input type="text" placeholder='Indtast gyldig E-mail' />
                    <input type="text" placeholder='Indstast Telefonnummer' />
                    <textarea placeholder='Evt. Besked'></textarea>
                    <div className={style.buttons}>
                        <button className={style.cancel}>Fortryd</button>
                        <button className={style.send}>Send</button>
                    </div>
                </div>
            </form>


        </section>



    )

}