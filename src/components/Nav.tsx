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
                <li>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <img className="site-logo" src={isActive ? "./assets/high-black-trans-logo.png" : "./assets/high-white-trans-logo.png"} height="64px" width="100px" />
                        )}
                    </NavLink>
                </li>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }: Props)
{
    const path = useLocation().pathname;

    const isActive = path === to;

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Nav;
