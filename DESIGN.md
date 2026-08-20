---
version: alpha
name: Регламент
description: >
  Дизайн-система онлайн-кондитерской, работающей только под заказ.
  Один гротеск, плотная линейная сетка, данные заказа как таблица.
  Зелёный акцент — исключительно для действий.
colors:
  paper: "#FAF9F6"
  stamp: "#A6432E"
  primary: "#141414"
  secondary: "#6B6B66"
  neutral: "#FFFFFF"
  surface: "#FFFFFF"
  surface-muted: "#F6F6F1"
  plate: "#F0F0EA"
  on-surface: "#141414"
  on-surface-muted: "#6B6B66"
  border: "#DCDCD6"
  border-soft: "#ECECE6"
  border-strong: "#141414"
  action: "#1E5B3C"
  action-hover: "#17492F"
  action-active: "#103522"
  action-subtle: "#E8F0EA"
  focus-ring: "#1E5B3C"
  focus-ring-offset: "#FFFFFF"
  error: "#A32020"
  error-surface: "#FBEDED"
  success: "#1E5B3C"
  success-surface: "#E8F0EA"
  warning: "#8A5A00"
  warning-surface: "#FBF2E0"
  disabled: "#B4B4AE"
  disabled-surface: "#F0F0EA"
typography:
  h1:
    fontFamily: Golos Text
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.01em
  h1-mobile:
    fontFamily: Golos Text
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.005em
  h2:
    fontFamily: Golos Text
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  h2-mobile:
    fontFamily: Golos Text
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  h3-card:
    fontFamily: Golos Text
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Golos Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Golos Text
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Golos Text
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.12em
  label-caps-mobile:
    fontFamily: Golos Text
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.08em
  data-value:
    fontFamily: Golos Text
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.3
    fontFeature: "\"tnum\" 1"
  price-md:
    fontFamily: Golos Text
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.2
    fontFeature: "\"tnum\" 1"
  price-lg:
    fontFamily: Golos Text
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
    fontFeature: "\"tnum\" 1"
  caption:
    fontFamily: Golos Text
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
  button-label:
    fontFamily: Golos Text
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 56px
  gutter: 24px
  margin: 32px
  margin-mobile: 16px
  section: 56px
  section-mobile: 40px
  content-max: 1180px
  columns: 12
rounded:
  none: 0px
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.neutral}"
    typography: "{typography.button-label}"
    rounded: "{rounded.none}"
    padding: 16px
    height: 48px
    borderColor: transparent
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.neutral}"
  button-primary-active:
    backgroundColor: "{colors.action-active}"
    textColor: "{colors.neutral}"
  button-primary-focus:
    backgroundColor: "{colors.action-hover}"
    outlineColor: "{colors.focus-ring}"
    outlineWidth: 2px
    outlineOffset: 2px
  button-primary-disabled:
    backgroundColor: "{colors.disabled-surface}"
    textColor: "{colors.disabled}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button-label}"
    rounded: "{rounded.none}"
    padding: 16px
    height: 48px
    borderColor: "{colors.border-strong}"
    borderWidth: 1px
  button-secondary-hover:
    backgroundColor: "{colors.surface-muted}"
    borderColor: "{colors.primary}"
  button-secondary-active:
    backgroundColor: "{colors.plate}"
  button-secondary-focus:
    outlineColor: "{colors.focus-ring}"
    outlineWidth: 2px
    outlineOffset: 2px
  button-secondary-disabled:
    textColor: "{colors.disabled}"
    borderColor: "{colors.border}"
  link:
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    textDecoration: underline
    textUnderlineOffset: 3px
  link-hover:
    textColor: "{colors.action}"
    textDecorationThickness: 2px
  link-focus:
    textColor: "{colors.action}"
    outlineColor: "{colors.focus-ring}"
    outlineWidth: 2px
    outlineOffset: 2px
  link-visited:
    textColor: "{colors.secondary}"
  product-card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    borderWidth: 1px
    rounded: "{rounded.none}"
    padding: 16px
    imageBackgroundColor: "{colors.plate}"
    imageAspectRatio: "1:1"
    titleTypography: "{typography.h3-card}"
    rowLabelTypography: "{typography.label-caps}"
    rowValueTypography: "{typography.data-value}"
    rowBorderColor: "{colors.border-soft}"
    rowPadding: 8px
  product-card-hover:
    borderColor: "{colors.primary}"
    imageBackgroundColor: "{colors.surface-muted}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 12px
    height: 48px
    borderColor: "{colors.border}"
    borderWidth: 1px
    placeholderColor: "{colors.secondary}"
    labelTypography: "{typography.label-caps}"
    labelColor: "{colors.secondary}"
    helperTypography: "{typography.caption}"
  input-hover:
    borderColor: "{colors.secondary}"
  input-focus:
    borderColor: "{colors.action}"
    outlineColor: "{colors.focus-ring}"
    outlineWidth: 2px
    outlineOffset: 1px
  input-error:
    borderColor: "{colors.error}"
    helperColor: "{colors.error}"
  input-disabled:
    backgroundColor: "{colors.disabled-surface}"
    textColor: "{colors.disabled}"
    borderColor: "{colors.border}"
  status-badge:
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 8px
    height: 24px
    borderWidth: 1px
  status-badge-new:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.secondary}"
    borderColor: "{colors.border}"
  status-badge-accepted:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.warning}"
    borderColor: "{colors.warning}"
  status-badge-in-progress:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.warning}"
    borderColor: "{colors.warning}"
  status-badge-ready:
    backgroundColor: "{colors.success-surface}"
    textColor: "{colors.success}"
    borderColor: "{colors.success}"
  status-badge-done:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
  status-badge-cancelled:
    backgroundColor: "{colors.error-surface}"
    textColor: "{colors.error}"
    borderColor: "{colors.error}"
---

# Регламент — дизайн-система онлайн-кондитерской

## Overview

Кондитерская без витрины: товаров в наличии не существует, всё печётся под заказ.
Интерфейс должен звучать как надёжный производственный график, а не как
магазин с кнопкой «купить сейчас». Отсюда характер системы: **документ, а не
лендинг**.

Личность: сдержанная, аккуратная, немного техническая. Ощущение, которое должен
вызывать экран, — «здесь всё посчитано»: срок изготовления, свободные даты,
загрузка производства. Плотность выше среднего: линии вместо теней, таблицы
вместо плашек, никаких скруглений и градиентов.

Аудитория — человек, который планирует событие: день рождения, свадьба, вынос
торта к дате. Ему важны не эмоции от картинки, а два числа: **сколько стоит** и
**когда будет готово**. Оба видны на любом уровне каталога.

Один гротеск с кириллицей — **Golos Text** (Google Fonts) — на всё: заголовки,
текст, метки, цифры. Разница между уровнями держится на размере, весе и
трекинге, а не на смене шрифта.

## Colors

Палитра — почти монохромная. Белая бумага, чёрная типографика, серые
утилитарные элементы, тёплый серо-бежевый для плашек под фотографии. Один
цветной токен на весь сайт.

- **Primary (#141414):** графитно-чёрный. Заголовки, основной текст, значения
  в таблицах, границы вторичной кнопки.
- **Secondary (#6B6B66):** тёплый серый. Метки, подписи, метаданные,
  плейсхолдеры. Никогда — для смысловых значений вроде цены или срока.
- **Neutral / Surface (#FFFFFF):** белая бумага, основа страницы и карточек.
- **Surface-muted (#F6F6F1) и Plate (#F0F0EA):** тонированные слои. Plate —
  фон под фотографиями и заглушками, Surface-muted — фон hover-состояний и
  спокойных информационных строк.
- **Border (#DCDCD6), Border-soft (#ECECE6), Border-strong (#141414):** три
  уровня линий. Border — рамка карточек и полей, Border-soft — разделители
  внутри карточки, Border-strong — контур вторичной кнопки.
- **Action (#1E5B3C):** тёмно-зелёный. Единственный цвет системы.
- **Error (#A32020), Warning (#8A5A00), Success (#1E5B3C), Disabled (#B4B4AE):**
  служебные состояния. Каждый — с собственной светлой подложкой, чтобы
  состояние читалось и без цвета текста.

### Правило акцента

**Зелёный (#1E5B3C) означает «здесь можно нажать».** Ничего больше.

Разрешено: фон основной кнопки, цвет ссылки в hover и focus, кольцо фокуса,
активный пункт навигации, доступная дата в календаре, галочка чекбокса.

Запрещено: заголовки любого уровня, надзаголовки и категории, декоративные
линии, иконки без действия, фоны секций, цифры цен, бейджи «хит» и «новинка»,
рамки карточек. Заголовок «Печём под заказ» — чёрный. Надзаголовок
«Производство под заказ» — чёрный или серый, не зелёный.

Единственное исключение — статус **«Готов»** и сообщение об успехе: там зелёный
работает как семантика состояния, а не как декор, и всегда идёт на подложке
`success-surface` с рамкой, то есть визуально отличим от кнопки.

Дисциплина проверяется просто: если убрать все зелёные пиксели, экран должен
остаться полностью читаемым и потерять только подсветку действий.

## Typography

Один шрифт — **Golos Text** — в четырёх ролях.

- **Заголовки (600):** h1 44px с отрицательным трекингом −0.01em, h2 24px.
  H1 на странице ровно один. Названия товаров в листинге — h3-card 17px внутри
  `<article>`.
- **Текст (400):** body-md 16px/1.55 для абзацев, body-sm 14px/1.5 для
  вторичных описаний, состава и условий доставки.
- **Метки (600, uppercase, трекинг 0.12em):** label-caps 11px — навигация,
  подписи строк в карточке («Цена», «Срок»), статусы, названия полей формы.
  Только заглавными, только короткими словами: русские слова в caps теряют
  читаемость длиннее двух-трёх слогов.
- **Цифры (600, tabular):** data-value 15px, price-md 16px, price-lg 22px — с
  `font-feature-settings: "tnum" 1`. Табличные цифры обязательны везде, где
  числа стоят друг под другом.

### Поведение на мобильном

Переключение на одной точке — 768px. Меняются только два уровня, остальные
остаются как есть:

- **h1 → h1-mobile:** 44px → 30px, трекинг ослабляется до −0.005em, интерлиньяж
  растёт до 1.18. Длинные русские заголовки на 375px иначе рвутся на четыре
  строки.
- **h2 → h2-mobile:** 24px → 20px.
- **label-caps → label-caps-mobile:** размер *растёт* 11px → 12px, а трекинг
  *падает* 0.12em → 0.08em. На плотных экранах разряженные капсы 11px
  перестают читаться; на мобильном приоритет у разборчивости, не у ритма.
- Текст и цифры не уменьшаются никогда: body-md остаётся 16px (меньше — зум
  полей ввода в iOS), price-lg остаётся 22px.
- Максимальная длина строки текста — 68 символов на десктопе; на мобильном
  ограничение снимается, работают поля.

## Layout

Сетка — фиксированная максимальная ширина **1180px**, 12 колонок, жёлоб
**24px**, внешние поля **32px** (мобильные — 16px).

Шкала отступов кратна **4px** и используется целиком, без промежуточных
значений: 4 · 8 · 16 · 24 · 32 · 48 · 56. Ничего вроде 10px, 14px или 20px в
системе нет — если значение не из шкалы, это ошибка вёрстки.

Ритм задают три интервала:

- **8px** — внутри строки данных (метка ↔ значение, вертикальный padding строк
  таблицы в карточке).
- **16px / 24px** — внутренние отступы карточек и полей; 24px — жёлоб сетки.
- **56px** — расстояние между смысловыми блоками страницы (герой → каталог →
  статьи). На мобильном 40px.

Иерархия строится не тенями, а **линиями и тональными слоями**: белая карточка
в рамке `border` на белом фоне, разделители `border-soft` внутри. Тени
отсутствуют полностью. Секции героя разделены вертикальной линией, а не
отступом — это подчёркивает документный характер.

## Elevation & Depth

Плоская система. Глубина передаётся тремя средствами, в порядке приоритета:

1. **Линия.** Рамка 1px `border` очерчивает каждый самостоятельный объект:
   карточку, поле, фотоплашку.
2. **Тональный слой.** `plate` и `surface-muted` отступают назад, `surface`
   выходит вперёд.
3. **Контраст типографики.** Значение 600-м весом рядом с меткой 11px
   uppercase читается как «главное / служебное».

`box-shadow` не используется нигде, включая выпадающие меню и модальные окна —
там работает рамка `border-strong` 1px.

## Shapes

Радиусов нет: `rounded.none = 0px` для кнопок, полей, карточек, бейджей,
фотоплашек и модальных окон. Это единственное значение шкалы — прямой угол
несёт смысл «производственный документ» и отделяет систему от типового
кондитерского визуала со скруглениями и пилюлями.

Толщина линий — только 1px. Исключение — кольцо фокуса 2px.

## Components

**Кнопка основная** — зелёная заливка, белый текст, высота 48px, padding
16px×24px, прямой угол. Одна на экран: это шаг, ведущий к заказу. Hover —
`action-hover`, active — `action-active`, disabled — серая плашка без зелёного.

**Кнопка вторичная** — прозрачная, рамка 1px `border-strong`, чёрный текст. В
hover заливается `surface-muted`, рамка не меняет толщину (иначе скачет
раскладка).

**Фокус** видимый и одинаковый у всего интерактивного: `outline: 2px solid
#1E5B3C; outline-offset: 2px`. `outline: none` без замены запрещён. У полей
ввода offset 1px, чтобы кольцо не сливалось с соседним полем. Фокус никогда не
передаётся только цветом рамки — всегда кольцо.

**Ссылка** — чёрная с подчёркиванием, offset 3px. В hover становится зелёной и
подчёркивание утолщается до 2px: цвет здесь допустим, потому что ссылка —
действие. Пагинация и хлебные крошки — настоящие `<a href>`.

**Карточка товара** — `<article>` в рамке 1px, фотография 1:1 на `plate` с
нижней линией, затем h3-card, затем таблица строк: «Цена» / «Срок». Каждая
строка — метка label-caps слева, значение data-value справа, разделитель
`border-soft`, вертикальный padding 8px. Цена и срок видны всегда, на любом
уровне каталога. Hover — рамка темнеет до `primary`; кнопки «в корзину» на
карточке нет: заказ начинается с выбора даты на странице товара.

**Поле ввода** — высота 48px, рамка 1px, прямой угол, подпись сверху
label-caps серым. Ошибка: рамка `error` + текст ошибки `caption` цветом
`error` под полем, обязательно словами («Введите телефон в формате
+7 900 000-00-00»), не только цветом.

**Плашка статуса заказа** — прямоугольник, label-caps, светлая подложка +
рамка того же семейства. Пять статусов жизненного цикла плюс отмена:
Новый (серый), Принят и В работе (`warning`), Готов (`success`), Выдан
(чёрный контур), Отменён (`error`). Статус — состояние, а не кнопка: он
никогда не выглядит как основная кнопка, поэтому подложка светлая, а не
заливка `action`.

## Работа с фотографиями

Фотографии — любительские: снято на телефон, разный свет, разный фон, разное
качество. Система обязана держать это без деградации.

- **Единые пропорции.** Листинг и карточки — строго **1:1**. Герой — **3:2**.
  Пропорция задаётся контейнером (`aspect-ratio`), фото вписывается
  `object-fit: cover`. Разнокалиберные снимки никогда не встают в ряд разной
  высоты.
- **Рамка обязательна.** Каждая фотография в рамке 1px `border` или с линией
  снизу. Рамка — главный инструмент: она даёт границу кадру, у которого фон
  случайно совпал с белым фоном страницы.
- **Спокойный фон вокруг.** Под фотографией — `plate` (#F0F0EA). Пока
  изображения нет, эта же плашка работает заглушкой с текстовой подписью
  («фото торта, 1:1») — макет читается готовым и без картинок.
- **Никакого текста на фото.** Все надписи — текстом в DOM, поверх фотографий
  ничего не пишется. Это требование и доступности, и SEO.
- **`<img>` всегда с `width`, `height` и осмысленным `alt`** — иначе прыгает
  раскладка при загрузке.
- Фильтры, тонирование, наложения и градиентные шторки не применяются:
  они сделают плохое фото плохим и обработанным.
- Если снимок совсем слабый, лучше оставить плашку-заглушку, чем ставить его в
  ряд с приличными.

## Правила для цен

- Цена — **всегда data-value / price-md / price-lg с табличными цифрами**
  (`"tnum" 1`) и весом 600. Цвет — `primary`. Зелёным цена не бывает никогда.
- **Выравнивание вправо** во всех таблицах и строках карточки: цены стоят в
  одной колонке и сравниваются глазом по разряду. Метка — влево, значение —
  вправо.
- Числа рассчитаны **до шестизначных**: 999 999 ₽. Колонка цены резервирует
  ширину под шесть разрядов, чтобы «2 400 ₽» и «128 000 ₽» не сдвигали
  раскладку. Табличные цифры делают эту ширину предсказуемой.
- Разряды — **тонкий неразрывный пробел** (`&thinsp;` / `&nbsp;`), не запятая
  и не точка: `2 400 ₽`, `128 000 ₽`.
- Символ рубля — после числа, через неразрывный пробел, тем же весом и
  размером. Не подстрочный, не серый.
- Копейки не показываются. Цены целые.
- Рядом с ценой в карточке — срок изготовления той же структурой строки. Это
  пара, они не разделяются.
- «от 2 400 ₽» — только если у товара есть варианты по весу; слово «от»
  набирается body-sm серым, число — обычной ценой.
- Итоговая сумма считается на сервере; интерфейс её только отображает.

## Do's and Don'ts

- **Do** использовать зелёный только для действий: кнопка, ссылка в hover,
  фокус, доступная дата.
- **Don't** окрашивать зелёным заголовки, надзаголовки, иконки, линии и цены.
- **Do** держать одну основную кнопку на экран.
- **Don't** добавлять радиусы, тени и градиенты — система плоская и прямоугольная.
- **Do** брать отступы только из шкалы, кратной 4px.
- **Don't** снимать `outline` без равноценной замены; фокус всегда видимый.
- **Do** показывать цену и срок изготовления на каждой карточке.
- **Don't** писать «в наличии», «купить сейчас», «осталось 2 шт.» — товаров в
  наличии не существует.
- **Do** выравнивать цены вправо табличными цифрами с запасом на шесть разрядов.
- **Don't** ставить текст поверх фотографий.
- **Do** соблюдать WCAG AA: 4.5:1 для текста. `secondary` (#6B6B66) на белом —
  4.8:1, допустим для подписей; `disabled` (#B4B4AE) применяется только к
  неактивным элементам.
- **Don't** использовать больше двух весов Golos Text на экране (400 и 600).
