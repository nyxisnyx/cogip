import style from "./style.module.css"

export const WorkBetter = () => {
    return (
        <div className={style.workBetter}>
            <p>WORK BETTER IN YOUR COMPANY</p>
            <div className={style.rightSide}>
                    <img src="home_footer.png" alt="a drawing of a phone tilted towards the left in a 3D fashion" className={style.phone} />
                    <img src="footer_shape.png" className={style.shape} />
            </div>
        </div>
    )
}