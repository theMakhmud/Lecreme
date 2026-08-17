import { useEffect, useState } from 'react'
import '..//category/CategoryFilter.css'

const CategoryFilter = ({ products, categories, minPrice, maxPrice }) => {
    const [minValue, setMinValue] = useState(minPrice)
    const [maxValue, setMaxValue] = useState(maxPrice)
    const [activeThumb, setActiveThumb] = useState(null)

    const low = Math.min(minValue, maxValue)
    const high = Math.max(minValue, maxValue)

    const toPercent = (value) => ((value - minPrice) / (maxPrice - minPrice)) * 100

    useEffect(() => {
        const clear = () => setActiveThumb(null)
        window.addEventListener('pointerup', clear)
        return () => window.removeEventListener('pointerup', clear)
    }, [])

    return (
        <aside className="tab_bar">
            <form method="get" action="/catalog/">
                <fieldset className="cat_filter">
                    <legend className="nav_title">Категории</legend>
                    <ul>
                        <li>
                            <label className="cat_item">
                                <input className="cat_input" type="checkbox" name="category" value="" />
                                <span className="name">Все товары</span>
                                <span className="length">{products.length}</span>
                            </label>
                        </li>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <label className="cat_item">
                                    <input className="cat_input" type="checkbox" name="category" value={category.id} />
                                    <span className="name">{category.title}</span>
                                    <span className="length">{products.filter((p) => p.category_id === category.id).length}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </fieldset>

                <fieldset className="price_filter">
                    <legend className="nav_title">Цена</legend>
                    <div className="range">
                        <input
                            type="range"
                            step="1000"
                            min={minPrice}
                            max={maxPrice}
                            value={minValue}
                            className={activeThumb === 'min' ? 'active' : ''}
                            onPointerDown={() => setActiveThumb('min')}
                            onChange={(e) => setMinValue(Number(e.target.value))}
                        />
                        <input
                            type="range"
                            step="1000"
                            min={minPrice}
                            max={maxPrice}
                            value={maxValue}
                            className={activeThumb === 'max' ? 'active' : ''}
                            onPointerDown={() => setActiveThumb('max')}
                            onChange={(e) => setMaxValue(Number(e.target.value))}
                        />
                        <div className="slider">
                            <div
                                className="progress"
                                style={{ left: `${toPercent(low)}%`, right: `${100 - toPercent(high)}%` }}
                            />
                        </div>
                    </div>

                    <div className="price_wrapper">
                        <div className="range_input">
                            <input
                                type="number"
                                min={minPrice}
                                max={maxPrice}
                                placeholder="от"
                                value={low > minPrice ? low : ''}
                                onChange={(e) => setMinValue(Number(e.target.value))}
                            />
                            <input
                                type="number"
                                min={minPrice}
                                max={maxPrice}
                                placeholder="до"
                                value={high < maxPrice ? high : ''}
                                onChange={(e) => setMaxValue(Number(e.target.value))}
                            />
                        </div>
                        <span>{minPrice} сум — {maxPrice} сум</span>
                    </div>
                </fieldset>
            </form>
        </aside>
    )
}

export default CategoryFilter
