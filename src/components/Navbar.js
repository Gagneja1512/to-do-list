import { Fragment } from "react"
import classes from './Navbar.module.css'
import Lists from "./Lists"

const Navbar = () => {
    return (
        <Fragment>
            <div  className={classes.navbar}>
                <div className={classes.menu}>
                    <h3 className={classes.menu_text}>Menu</h3>
                    <div className={classes.menu_list}>
                       <Lists></Lists>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar