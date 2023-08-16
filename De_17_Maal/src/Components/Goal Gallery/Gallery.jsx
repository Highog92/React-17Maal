import style from '../Goal Gallery/Gallary.module.scss'
import img1 from '../../assets/images/Goals/1Goal-No-Poverty.png'
import img2 from '../../assets/images/Goals/2Goal-No-Hunger.png'
import img3 from '../../assets/images/Goals/3Goal-Good-Health.png'
import img4 from '../../assets/images/Goals/4Goal-Good-Education.png'
import img5 from '../../assets/images/Goals/5Goal-Gender-Equality.png'
import img6 from '../../assets/images/Goals/6Goal-Clean-Water.png'
import img7 from '../../assets/images/Goals/7Goal-Clean-Energy.png'
import img8 from '../../assets/images/Goals/8Goal-Decent-Work.png'
import img9 from '../../assets/images/Goals/9Goal-Industry.png'
import img10 from '../../assets/images/Goals/10Goal-Inequalities.png'
import img11 from '../../assets/images/Goals/11Goal-Sustainable-Cities.png'
import img12 from '../../assets/images/Goals/12Goal-Responsible-Consumption.png'
import img13 from '../../assets/images/Goals/13Goal-Climate-Action.png'
import img14 from '../../assets/images/Goals/14Goal-Life-Water.png'
import img15 from '../../assets/images/Goals/15Goal-Life-Land.png'
import img16 from '../../assets/images/Goals/16Goal-Institutions.png'
import img17 from '../../assets/images/Goals/17Goal-Partnership.png'
import GlobalRing from '../../assets/images/Goals/Global-Goals.png'
export function Gallery() {

    return (

        <section className={style.GalleryGrid}>
            <div>
                <img src={img1} alt="1" />
                <img src={img2} alt="2" />
                <img src={img3} alt="3" />
                <img src={img4} alt="4" />
                <img src={img5} alt="5" />
                <img src={img6} alt="6" />
                <img src={img7} alt="7" />
                <img src={img8} alt="8" />
                <img src={img9} alt="9" />
                <img src={img10} alt="10" />
                <img src={img11} alt="11" />
                <img src={img12} alt="12" />
                <img src={img13} alt="13" />
                <img src={img14} alt="14" />
                <img src={img15} alt="15" />
                <img src={img16} alt="16" />
                <img src={img17} alt="17" />
                <img src={GlobalRing} alt="18" />
            </div>

        </section>



    )


}