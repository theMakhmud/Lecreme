import categories from '../data/category.json';
import { priceType } from '../lib/price';
import './ProductCard.css';

function formatPrice(value) {
    return value.toLocaleString('ru-RU');
}

function formatDuration(minutes) {
    if (minutes < 60) return `${minutes} мин`;
    const hours = Math.round(minutes / 60);
    return `${hours} ч`;
}

export default function ProductCard({ product }) {
    const categoryPath = categories
        .find((c) => c.id === product.category_id)
        ?.path.toLowerCase();

    const price = priceType(product);
    const variant = product.variants[0];
    const isWeight = 'price_per_100g' in variant;
    const hasSizes = product.variants.length > 1;

    return (
        <li>
            <article className="card">
                <a href={`/category/${categoryPath}/${product.path.toLowerCase()}`}>
                    <div className="photo" />
                    <div className="info">
                        <h3>{product.title}</h3>
                        <div className="perf" />
                        <div className="row">
                            <p>Цена</p>
                            <span className="mono">
                                {price == null
                                    ? '—'
                                    : isWeight
                                        ? `от ${formatPrice(price)} / 100 г`
                                        : `${hasSizes ? 'от ' : ''}${formatPrice(price)} сум`}
                            </span>
                        </div>
                        <div className="perf" />
                        <div className="row">
                            <p>Срок</p>
                            <span className="stamp">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="7" cy="7" r="1.6" fill="currentColor" />
                                </svg>
                                <span className="mono">{formatDuration(variant.active_minutes)}</span>
                            </span>
                        </div>
                    </div>
                </a>
            </article>
        </li>
    );
}
