import { useEffect, useState } from 'react'
import CategoryFilter from "../../components/category/CategoryFilter"
import '../catalog/Catalog.css'
import ProductCard from '../../components/ProductCard'
import { priceType } from '../../lib/price'

const readUrl = (minBound, maxBound) => {
    const param = new URLSearchParams(window.location.search)

    return {
        selected: param.getAll('category').map(Number),
        min: param.has('min') ? Number(param.get('min')) : minBound,
        max: param.has('max') ? Number(param.get('max')) : maxBound,
        popular: param.has('popular') ? param.get('popular') === 'true' : true,
        onPrice: param.get('onPrice') === 'true',
        onTime: param.get('onTime') === 'true'
    }
}

const ROWS = ['popular', 'onPrice', 'onTime']

const Catalog = ({ products, categories, minPrice, maxPrice }) => {
    const [filter, setFilter] = useState(readUrl(minPrice, maxPrice))

    const commit = (next) => {
        setFilter(next)
        console.log(next)
        const param = new URLSearchParams()
        next.selected.forEach((id) => param.append('category', id))
        ROWS.forEach((row) => param.set(row, String(next[row])))
        if (next.min > minPrice) param.set('min', String(next.min))
        if (next.max < maxPrice) param.set('max', String(next.max))
        const qs = param.toString()
        const newUrl = qs ? `${window.location.pathname}?${qs}` : window.location.pathname
        window.history.pushState({}, '', newUrl)
    }

    const { selected, min, max, popular, onPrice, onTime } = filter

    const toggle = (id) => {
        const nid = Number(id)
        const categ = selected.includes(nid)
            ? selected.filter((curren) => curren !== nid)
            : [...selected, nid]
        commit({...filter, selected: categ})
    }

    const toggleRow = (filed) => {
        commit({...filter, [filed]: !filter[filed]})
    }
    
    const SelectAll = () => commit({...filter, selected: []})
    const setPrice = (min, max) => commit({...filter, min, max})

    const visible = products.filter((p) => {
        const inCat = selected.length === 0 || selected.includes(p.category_id)
        const price = priceType(p)
        const inPrice = price >= min && price <= max
        return inCat && inPrice
    })


    return (
        <div className="wrapper">
            <CategoryFilter 
                products={products} 
                categories={categories} 
                minPrice={minPrice} 
                maxPrice={maxPrice}
                selected={selected}
                onToggle={toggle}
                onSelectAll={SelectAll}
                onSetPrice={setPrice}
                min={min} 
                max={max} />

            <section className="products_grid" aria-labelledby="catalog-title">
                <header className='head'>
                    <span>
                        <h1>
                            {selected.length === 1
                            ? categories.find((c) => c.id === selected[0])?.title
                            : 'Каталог'}
                        </h1>
                        <p>{visible.length} товаров</p>
                    </span>

                    <p>
                        {selected.length === 1
                            ? categories.find((c) => c.id === selected[0])?.description
                            : 'Все категории — пирожные, десерты, булочки, чизкейки — в одном каталоге. Отмечайте нужные категории и цену слева, чтобы собрать то, что нужно, без переходов между страницами. У каждой позиции свой срок — он производственный, а не рекламный.'}
                    </p>

                </header>

                <div className="row">
                    <p aria-live="polite">
                        {visible.length} товаров
                    </p>
                    <div className="sort" role="group" aria-label="Сортировка">
                        <span id="sort-label">Сортировка:</span>
                        <button type="button" className={popular ? "active" : ''} onClick={() => toggleRow('popular')} aria-describedby="sort-label">по популярности</button>
                        <button type="button" className={onPrice ? "active" : ''} onClick={() => toggleRow('onPrice')} aria-describedby="sort-label">по цене</button>
                        <button type="button" className={onTime ? "active" : ''} onClick={() => toggleRow('onTime')} aria-describedby="sort-label">по времени готовности</button>
                    </div>
                </div>

                <ul className="product_cards">
                    {visible.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Catalog