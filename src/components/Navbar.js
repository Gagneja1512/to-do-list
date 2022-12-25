import { Fragment } from "react"
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <Fragment>
            <div  className={classes.navbar}>
                <div className={classes.menu}>
                    <h3 className={classes.menu_text}>Menu</h3>
                    <div>
                        Lists
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar