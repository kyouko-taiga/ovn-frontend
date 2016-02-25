import react from 'React'
import {render} from 'react-dom'
import {Router} from 'react-router'


class App extends React.Component {
    render() {
        return <div>Hello, World!</div>
    }
}


const routes = {
    path: '/',
    component: App
}


render(<Router routes={routes} />, document.getElementById('ovn-app'))
