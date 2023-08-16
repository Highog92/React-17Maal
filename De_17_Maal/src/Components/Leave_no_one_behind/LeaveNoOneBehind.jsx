import LeaveNoOneImg from '../../assets/images/Image-Leave-No-One.jpg'
import style from '../Leave_no_one_behind/LeaveNoOneBehind.module.scss'
export function LeaveNoOneBehind() {

    return (

        <section className={style.threeSections}>

            <article>
                <h3>Leave no-one behind.</h3>
                <p>
                    I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger,
                    at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.
                </p>
                <p>
                    Arbejdet med verdensmålene skal begynde med, at de
                    fattigste og mest marginaliserede adresseres først.
                </p>

                <p> Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten
                    for menneskerettigheder er altafgørende.
                    Med andre ord: “Leave No-One behind”.
                </p>
            </article>
            <img src={LeaveNoOneImg} alt="Leave_NoOne_Behind" />
        </section>
    )
}