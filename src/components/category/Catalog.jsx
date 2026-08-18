import { useEffect, useState } from 'react'
import CategoryFilter from './CategoryFilter'
import Breadcrumbs from '../layout/Breadcrumbs.jsx'
import './Catalog.css'

const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Каталог', href: '/catalog/' },
]

// цена товара = цена первого варианта
const priceOf = (product) => {
    const v = product.variants[0]
    return 'price_per_100g' in v ? v.price_per_100g : v.price
}
const priceLabel = (product) => {
    const v = product.variants[0]
    return 'price_per_100g' in v ? `от ${v.price_per_100g} сум` : `${v.price} сум`
}

// Читаем фильтр ИЗ URL — единственный источник правды.
// Именно поэтому он переживает перезагрузку и работает при отправке ссылки.
const readURL = (minBound, maxBound) => {
    const p = new URLSearchParams(window.location.search)
    return {
        selected: p.getAll('category').map(Number).filter((n) => !Number.isNaN(n)),
        min: p.has('min') ? Number(p.get('min')) : minBound,
        max: p.has('max') ? Number(p.get('max')) : maxBound,
    }
}

const Catalog = ({ products, categories, minPrice, maxPrice }) => {
    // Состояние инициализируется из URL при загрузке.
    const [filter, setFilter] = useState(() => readURL(minPrice, maxPrice))

    // Любое изменение фильтра → обновляем состояние И переписываем URL (без перезагрузки).
    const commit = (next) => {
        setFilter(next)
        const p = new URLSearchParams()
        next.selected.forEach((id) => p.append('category', id))
        if (next.min > minPrice) p.set('min', String(next.min))
        if (next.max < maxPrice) p.set('max', String(next.max))
        const qs = p.toString()
        window.history.pushState({}, '', qs ? `?${qs}` : window.location.pathname)
    }

    // Кнопки «назад/вперёд» браузера — перечитываем URL.
    useEffect(() => {
        const onPop = () => setFilter(readURL(minPrice, maxPrice))
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
    }, [minPrice, maxPrice])

    const { selected, min, max } = filter

    // --- обработчики фильтра ---
    const toggleCat = (id) => {
        const nextCats = selected.includes(id)
            ? selected.filter((c) => c !== id)   // убрать
            : [...selected, id]                  // добавить (мультивыбор)
        commit({ ...filter, selected: nextCats })
    }
    const selectAll = () => commit({ ...filter, selected: [] })   // «Все товары» = сброс категорий
    const setPrice = (min, max) => commit({ ...filter, min, max })

    // --- фильтрация товаров (позже эта логика уйдёт в Appwrite Query) ---
    const visible = products.filter((p) => {
        const inCat = selected.length === 0 || selected.includes(p.category_id)
        const price = priceOf(p)
        const inPrice = price >= min && price <= max
        return inCat && inPrice
    })

    return (
        <div className="catalog_layout">
            <CategoryFilter
                products={products}
                categories={categories}
                minPrice={minPrice}
                maxPrice={maxPrice}
                selected={selected}
                min={min}
                max={max}
                onToggleCat={toggleCat}
                onSelectAll={selectAll}
                onPriceChange={setPrice}
            />

            <section className="product_grid">
                <div className="routing">
                    <Breadcrumbs items={breadcrumbs} />
                </div>

                <p className="result_count">{visible.length} товаров</p>

                {visible.length === 0 ? (
                    <p className="empty">По выбранным фильтрам ничего не найдено.</p>
                ) : (
                    <ul className="product_cards">
                        {visible.map((product) => (
                            <li key={product.id}>
                                <article className="card">
                                    <a href={`/catalog/${product.path}`}>
                                        <div className="photo" />
                                        <div className="info">
                                            <h3>{product.title}</h3>
                                            <div>
                                                <p>Цена</p>
                                                <span>{priceLabel(product)}</span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}

export default Catalog
