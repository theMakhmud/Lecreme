import { useEffect, useState } from 'react'
import CategoryFilter from "../../components/category/CategoryFilter"
import '../catalog/Catalog.css'
import ProductCard from '../../components/ProductCard'
import { priceType } from '../../lib/price' 

const CATALOG_INTRO = 'Все категории — пирожные, десерты, булочки, чизкейки — в одном каталоге. Отмечайте нужные категории и цену слева, чтобы собрать то, что нужно, без переходов между страницами. У каждой позиции свой срок — он производственный, а не рекламный.'

const CATALOG_SEO = `Lecreme — кондитерская, которая печёт под заказ, а не продаёт с полки. У нас нет готовой витрины: каждый десерт, торт или партия пирожных начинает готовиться после оформления заказа, поэтому дата и время выдачи известны заранее и рассчитаны по реальной загрузке производства.

В каталоге — пирожные поштучно от 30 000 сум, порционные десерты и ассорти на развес от 23 000 сум за 100 г, свежие круассаны и булочки, которые печём в день выдачи, и чизкейки целиком трёх диаметров — от 15 см на 4–6 человек до 25 см на большой стол. Отмечайте категории и диапазон цены слева — список обновится без перехода между страницами.

У каждой позиции указан минимальный срок изготовления: он включает работу кондитера и обязательное охлаждение, это производственное время, а не маркетинговый приём. Все позиции можно собрать в один заказ — готовность рассчитается по самой долгой из них, а дату и время мы подтвердим по телефону.`

const readUrl = (min, max) => {
    const param = new URLSearchParams(window.location.search)
    return {
        selected: param.getAll('category').map(Number),
        min: param.has('min') ? Number(param.get('min')) : min,
        max: param.has('max') ? Number(param.get('max')) : max,
        sort: param.has('sort') ? param.get('sort') === 'popular' : 'popular',
    }
}

/**
 * @param {{ products: any[], categories: any[], minPrice: number, maxPrice: number, initialSelected?: number[] }} props
 */
const Catalog = ({ products, categories, minPrice, maxPrice, initialSelected = [] }) => {

    const [filter, setFilter] = useState({
        selected: initialSelected,
        min: minPrice,
        max: maxPrice,
        sort: 'popular',
    })
    // TODO: состояние фильтра (selected, min, max, sort)


    // TODO: чтение URL при загрузке + кнопка «назад» (только в браузере, не при серверном рендере)

    const commit = (current) => {
        setFilter(current)
        const param = new URLSearchParams()

        if (current.min > minPrice) param.set('min', String(current.min))
        if (current.max < maxPrice) param.set('max', String(current.max))

        if (current.sort !== 'popular') param.set('sort', String(current.sort))

        let basePath
        if (current.selected.length === 1) {
            basePath = `/${categories.find((c) => c.id === current.selected[0]).path}/`
        } else {
            basePath = '/catalog/'
            current.selected.forEach((id) => param.append('category', id))
        }

        const qs = param.toString()
        const newUrl = qs ? basePath + '?' + qs : basePath
        window.history.pushState({}, "", newUrl)
    }

    const { selected, min, max, sort } = filter


    const toggle = (id) => {
        const categ = selected.includes(Number(id))
            ? selected.filter((c) => c !== Number(id))
            : [...selected, Number(id)]
        commit({...filter, selected: categ})
    }

    const sortToggle = (sort) => {
        commit({...filter, sort: sort})
    }

    const allSelect = () => commit({...filter, selected: []})
    const setPrice = (min, max) => commit({...filter, min, max})

    const sorters = {
        popular: (a, b) => b.is_popular - a.is_popular,
        onPrice: (a, b) => priceType(a) - priceType(b),
        onTime: (a, b) => a.variants[0].active_minutes - b.variants[0].active_minutes
    }


    const visiable = products.filter((p) => {
        const product = selected.length === 0 || selected.includes(p.category_id)
        const price = priceType(p)
        const inPrice = price >= min && price <= max
        return product && inPrice
    }).sort(sorters[sort])


    // TODO: запись состояния в URL (одна категория -> /{path}/, иначе /catalog/?...)

    // TODO: фильтрация по категориям и цене + сортировка -> visible

    // TODO: активная категория для заголовка/описания/SEO-текста

    useEffect( () => {
        setFilter(readUrl(minPrice, maxPrice))
    }, [])

    return (
        <div className="wrapper">
            <CategoryFilter
                products={products}
                categories={categories}
                minPrice={minPrice}
                maxPrice={maxPrice}
                selected={selected}
                onToggle={toggle}
                onSelectAll={allSelect}
                onSetPrice={setPrice}
                min={min}
                max={max} />

            <section className="products_grid" aria-labelledby="catalog-title">
                <header className='head'>
                    <span>
                        <h1 id="catalog-title">Каталог</h1>
                        <p>{visiable.length} товаров</p>
                    </span>

                    <p>{CATALOG_INTRO}</p>

                </header>

                <div className="row">
                    <p aria-live="polite">
                        {visiable.length} товаров
                    </p>
                    <div className="sort" role="group" aria-label="Сортировка">
                        <span id="sort-label">Сортировка:</span>
                        <button type="button" onClick={() => sortToggle('popular')} className={`${sort == 'popular' ? 'active' : ''}`} aria-describedby="sort-label">по популярности</button>
                        <button type="button" onClick={() => sortToggle('onPrice')} className={`${sort == 'onPrice' ? 'active' : ''}`} aria-describedby="sort-label">по цене</button>
                        <button type="button" onClick={() => sortToggle('onTime')} className={`${sort == 'onTime' ? 'active' : ''}`} aria-describedby="sort-label">по времени готовности</button>
                    </div>
                </div>

                <ul className="product_cards">
                    {visiable.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>

                <div className="seo_word">{CATALOG_SEO}</div>
            </section>
        </div>
    )
}

export default Catalog
