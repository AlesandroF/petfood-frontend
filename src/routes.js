import { BrowserRouter as Router, Route } from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Sidebar from './components/siderbar';
import Home from './pages/home';

import './styles/global.css';

const Routes = () => {
    return (
        <>
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/petshop/:id" exact component={Petshop} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/cadastro" exact component={Cadastro} />
            </Router>
            <Sidebar />
        </>
    )
}

export default Routes;