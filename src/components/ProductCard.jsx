import categories from '../data/category.json';
import { priceType } from '../lib/price';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const categoryPath = categories
        .find((c) => c.id === product.category_id)
        ?.path.toLowerCase();

    const price = priceType(product);
    const variant = product.variants[0];

    return (
        <li>
            <article className="card">
                <a href={`/category/${categoryPath}/${product.path.toLowerCase()}`}>
                    <div className="photo" />
                    <div className="info">
                        <h3>{product.title}</h3>
                        <div>
                            <p>Цена</p>
                            <span>{price != null ? `${price}` : '—'} <p>сум</p></span>
                        </div>
                        <div>
                            <p>Срок</p>
                            <span>{variant.active_minutes} часов</span>
                        </div>
                    </div>
                </a>
            </article>
        </li>
    );
}
