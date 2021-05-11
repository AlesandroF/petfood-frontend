import Header from '../../components/header';
import Product from '../../components/product/card';
import './styles.css';

const Petshop = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className="img-fluid petshop-image" src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png" />
                        <b>Petlove</b>
                        <div className="petshop-infos">
                            <span class="mdi mdi-star"></span>
                            <text>
                                <b>2,8</b>
                            </text>
                            <span class="mdi mdi-cash-usd-outline"></span>
                            <text>$$$</text>
                            <span class="mdi mdi-crosshairs-gps"></span>
                            <text>2,9 km</text>
                        </div>

                        <label className="badge badge-primary">Frete Grátis</label>
                    </div>
                    <div className="col-10">
                        <h5>Produtos</h5>
                        <br />
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => <Product />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Petshop;