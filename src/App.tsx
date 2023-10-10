import {useState } from "react";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App()
{
    const [alertVisable, setAlertVisiblility] = useState(false);

    // return (
    // <div>
    //     {alertVisable && <Alert onClose={() => setAlertVisiblility(false)}>Hello World Alert</Alert>}

    //     <Button color="primary" onClick={() => setAlertVisiblility(true)}>Hello World</Button>
    // </div>);

    return (
        <>
            <Nav/>
        </>
    );
}

export default App;
