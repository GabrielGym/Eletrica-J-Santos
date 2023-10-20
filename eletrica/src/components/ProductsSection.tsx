import { products } from "../database/Products";
import capaDeFundo from "../assets/Group 29.png"
import border from '../assets/border.png'
import '../styles/ProductsSection.css'

export const ProductsSection = () => (
    <section id="scrollTargetProducts">
        <div>
            <img src={capaDeFundo} alt="capa de fundo" />
        </div>
        <ul className="conteiner-products">
            {products.map((product) => {
                return (
                    <li className="card-product" key={product.id}>
                        <h3 className="category-product">{product.category}</h3>
                        <div className="conteiner-img">
                            <img src={product.img} alt={product.name} className="img-product" />
                            <span><img src={border} alt="borda azul" /></span>
                        </div>
                        <h2 className="name-product">{product.name}</h2>
                        <div className="conteiner-prices">
                            <span className="value-product">R$ {product.value},00</span>
                            <h3 className="discount-price-product">R$ {product.discountPrice ? (product.value * (1 - (product.discountPrice / 100))).toFixed(2) : null}</h3>
                        </div>
                        {product.installments ? <p className="installments-product">ou em {product.installments}x de R$ {(product.value * (1 - (product.discountPrice! / 100)) / product.installments).toFixed(2)}</p> : null}
                    </li>
                )
            })}
        </ul>
    </section>
)