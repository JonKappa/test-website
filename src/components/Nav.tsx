import { Link, NavLink, useLocation } from 'react-router-dom'

interface Props {
    to: string;
    children: string;
}

function Nav()
{
    return (
        <nav className="nav">

            <ul>
                <NavLink to="/">
                    {({ isActive }) => (
                        <img className="site-logo" src={isActive ? "./src/assets/high-black-trans-logo.png" : "./src/assets/high-white-trans-logo.png"} height="64px" width="100px" />
                    )}
                </NavLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }: Props)
{
    const path = useLocation().pathname;

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Nav;
