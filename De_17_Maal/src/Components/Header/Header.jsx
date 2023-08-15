import style from './Header.module.scss'
import HeaderColorWheel from '../../assets/images/ColorWheel.png'


export function Header() {

    return (
        <header>
            <img src={HeaderColorWheel} alt="Top Color Wheel" />
            <hgroup>
                <h1>
                    The Global Goals
                </h1>
                <h2>For sustainable Developement</h2>
            </hgroup>

        </header>
    )


}