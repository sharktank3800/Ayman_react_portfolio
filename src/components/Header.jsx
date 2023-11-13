import {NavLink} from "react-router-dom"

function Header(){

    return (

        <header className="d-flex justify-content-between pt-2 ps-3 pe-2 bg-dark">
            <h3 className="text-light">Ayman Shiham</h3>

            <nav>

                <NavLink to={"/"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
                <NavLink to={"/resume"}>Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header