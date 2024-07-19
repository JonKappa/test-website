import { Link } from 'react-router-dom'

const d = new Date();
const year = d.getFullYear();
function Footer()
{
    return (
        <>
            <div className='fluid-container' style={{width: '100%'}}>
                <div style={{backgroundColor: 'black'}}>
                    <footer id="footer" style={{color: 'white', paddingTop: '1%', paddingBottom: '3%', textAlign: 'center', }}>
                        Created by <Link to="" style={{color: 'blue'}}>Jonathan Capparell</Link> | ©{year} <br/>All rights reserved.
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Footer;
