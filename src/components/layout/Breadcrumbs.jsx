import './Breadcrumbs.css'

const Breadcrumbs = ({ items = [] }) => {
    return (
        <nav aria-label="Хлебные крошки" className="breadcrumbs">
            <ol>
                {items.map((item, index) => {
                    const isPage = index === items.length - 1
                    return (
                        <li key={item.label ?? item.href}>
                            { isPage || !item.href ? (
                                <span aria-current="page">{item.label}</span>
                            ) : (
                                <a href={item.href}>{item.label}</a>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default Breadcrumbs
