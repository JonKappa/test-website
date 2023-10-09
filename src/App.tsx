import Button from "./components/Button";
import Alert from "./components/alert";

function App()
{

    return (
    <div>
        <Alert>
            Hello <span>World</span>
        </Alert>

        <Button color="primary" onClick={() => console.log('Clicked')}>Hello World</Button>
    </div>);
}

export default App;
