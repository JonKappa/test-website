import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

interface Props {
    to: string;
    children: string;
}

function Nav()
{
    return (
        <nav className="nav">
            <Link to="/test-website/">
                <img id="logo" src="src/assets/high-white-trans-logo.png" height="64px" width="100px" />
            </Link>

            <ul>
                <CustomLink to="/test-website/projects">Projects</CustomLink>
                <CustomLink to="/test-website/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }: Props)
{
    const path = useLocation().pathname;

    console.log(path);

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Nav;
