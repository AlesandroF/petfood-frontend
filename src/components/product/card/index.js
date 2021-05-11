import './styles.css';

const Product = () => {
    return (
        <div className="product col-3" >
            <img src="https://cobasi.vteximg.com.br/arquivos/ids/302791/Racao-Heroi-Adulto-Carne-e-Vegetais.jpg?v=637184141121230000"
                className="img-fluid align-center" />
            <button className="btn btn-primary rounded-circle">+</button>
            <h4 >
                <label className="badge badge-primary" > R$ 90, 00 </label>
            </h4>
            <small>
                <b>
                    Ração para cachorros adultos - 15 kg.
                </b>
            </small>
        </div>
    )
}

export default Product;