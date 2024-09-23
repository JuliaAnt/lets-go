import styles from './CountriesData.module.scss'
import React, { useState } from 'react'
const Data = [
  {
    letter: 'А',
    items: [
      { href: '/australia.html', regionType: 'islands', name: 'Австралия' },
      { href: '/austria.html', regionType: 'europe', name: 'Австрия' },
      { href: '/azerbaijan.html', regionType: 'asia', name: 'Азербайджан' },
      { href: '/albania.html', regionType: 'europe', name: 'Албания' },
      { href: '/algeria.html', regionType: 'asia', name: 'Алжир' },
      { href: '/angola.html', regionType: 'asia', name: 'Ангола' },
      { href: '/andorra.html', regionType: 'europe', name: 'Андорра' },
      { href: '/antigua-i-barbuda.html', regionType: 'islands', name: 'Антигуа и Барбуда' },
      { href: '/argentina.html', regionType: 'america', name: 'Аргентина' },
      { href: '/armenia.html', regionType: 'asia', name: 'Армения' },
      { href: '/afganistan.html', regionType: 'asia', name: 'Афганистан' },
    ],
  },
  {
    letter: 'Б',
    items: [
      { href: '/bagamas.html', regionType: 'islands', name: 'Багамские Острова' },
      { href: '/bangladesh.html', regionType: 'asia', name: 'Бангладеш' },
      { href: '/barbados.html', regionType: 'islands', name: 'Барбадос' },
      { href: '/bahrein.html', regionType: 'asia', name: 'Бахрейн' },
      { href: '/belarus.html', regionType: 'europe', name: 'Белоруссия' },
      { href: '/beliz.html', regionType: 'america', name: 'Белиз' },
      { href: '/belgium.html', regionType: 'europe', name: 'Бельгия' },
      { href: '/benin.html', regionType: 'asia', name: 'Бенин' },
      { href: '/bulgaria.html', regionType: 'europe', name: 'Болгария' },
      { href: '/bolivia.html', regionType: 'america', name: 'Боливия' },
      { href: '/bosnia-i-gerzegovina.html', regionType: 'europe', name: 'Босния и Герцеговина' },
      { href: '/botsvana.html', regionType: 'asia', name: 'Ботсвана' },
      { href: '/brazilia.html', regionType: 'america', name: 'Бразилия' },
      { href: '/brunei.html', regionType: 'asia', name: 'Бруней' },
      { href: '/burkina-faso.html', regionType: 'asia', name: 'Буркина-Фасо' },
      { href: '/burundi.html', regionType: 'asia', name: 'Бурунди' },
      { href: '/butan.html', regionType: 'asia', name: 'Бутан' },
    ],
  },
  {
    letter: 'В',
    items: [
      { href: '/vanuatu.html', regionType: 'islands', name: 'Вануату' },
      { href: '/united-kingdom.html', regionType: 'europe', name: 'Великобритания' },
      { href: '/hungary.html', regionType: 'europe', name: 'Венгрия' },
      { href: '/venesuela.html', regionType: 'america', name: 'Венесуэла' },
      { href: '/east-timor.html', regionType: 'asia', name: 'Восточный Тимор' },
      { href: '/vietnam.html', regionType: 'asia', name: 'Вьетнам' },
    ],
  },
  {
    letter: 'Г',
    items: [
      { href: '/asia/gabon.html', regionType: 'asia', name: 'Габон' },
      { href: '/islands/gaiti.html', regionType: 'islands', name: 'Гаити' },
      { href: '/america/gaiana.html', regionType: 'america', name: 'Гайана' },
      { href: '/asia/gambia.html', regionType: 'asia', name: 'Гамбия' },
      { href: '/asia/gana.html', regionType: 'asia', name: 'Гана' },
      { href: '/america/guatemala.html', regionType: 'america', name: 'Гватемала' },
      { href: '/asia/guinea.html', regionType: 'asia', name: 'Гвинея' },
      { href: '/asia/guinea-bissau.html', regionType: 'asia', name: 'Гвинея-Бисау' },
      { href: '/europe/germany.html', regionType: 'europe', name: 'Германия' },
      { href: '/america/honduras.html', regionType: 'america', name: 'Гондурас' },
      { href: '/islands/grenada.html', regionType: 'islands', name: 'Гренада' },
      { href: '/europe/greece.html', regionType: 'europe', name: 'Греция' },
      { href: '/europe/georgia.html', regionType: 'europe', name: 'Грузия' },
    ],
  },
  {
    letter: 'Д',
    items: [
      { href: '/europe/denmark.html', regionType: 'europe', name: 'Дания' },
      { href: '/asia/dgibuti.html', regionType: 'asia', name: 'Джибути' },
      { href: '/islands/dominika.html', regionType: 'islands', name: 'Доминика' },
      { href: '/islands/dominikana.html', regionType: 'islands', name: 'Доминикана' },
    ],
  },
  {
    letter: 'Е',
    items: [{ href: '/asia/egypt.html', regionType: 'asia', name: 'Египет' }],
  },
  {
    letter: 'З',
    items: [
      { href: '/asia/zambia.html', regionType: 'asia', name: 'Замбия' },
      { href: '/asia/zimbabve.html', regionType: 'asia', name: 'Зимбабве' },
    ],
  },
  {
    letter: 'И',
    items: [
      { href: '/asia/israel.html', regionType: 'asia', name: 'Израиль' },
      { href: '/asia/india.html', regionType: 'asia', name: 'Индия' },
      { href: '/islands/indonesia.html', regionType: 'islands', name: 'Индонезия' },
      { href: '/asia/iordania.html', regionType: 'asia', name: 'Иордания' },
      { href: '/asia/iraq.html', regionType: 'asia', name: 'Ирак' },
      { href: '/asia/iran.html', regionType: 'asia', name: 'Иран' },
      { href: '/europe/ireland.html', regionType: 'europe', name: 'Ирландия' },
      { href: '/europe/iceland.html', regionType: 'europe', name: 'Исландия' },
      { href: '/europe/spain.html', regionType: 'europe', name: 'Испания' },
      { href: '/europe/italy.html', regionType: 'europe', name: 'Италия' },
    ],
  },
  {
    letter: 'К',
    items: [
      { href: '/kabo-verde.html', regionType: 'islands', name: 'Кабо-Верде' },
      { href: '/kazakhstan.html', regionType: 'asia', name: 'Казахстан' },
      { href: '/cambodia.html', regionType: 'asia', name: 'Камбоджа' },
      { href: '/camerun.html', regionType: 'asia', name: 'Камерун' },
      { href: '/canada.html', regionType: 'america', name: 'Канада' },
      { href: '/quatar.html', regionType: 'asia', name: 'Катар' },
      { href: '/kenia.html', regionType: 'asia', name: 'Кения' },
      { href: '/cyprus.html', regionType: 'europe', name: 'Кипр' },
      { href: '/kirgizia.html', regionType: 'asia', name: 'Киргизия' },
      { href: '/kiribati.html', regionType: 'islands', name: 'Кирибати' },
      { href: '/china.html', regionType: 'asia', name: 'Китай' },
      { href: '/colombia.html', regionType: 'america', name: 'Колумбия' },
    ],
  },
  {
    letter: 'Л',
    items: [
      { href: '/laos.html', regionType: 'asia', name: 'Лаос' },
      { href: '/latvia.html', regionType: 'europe', name: 'Латвия' },
      { href: '/lesoto.html', regionType: 'asia', name: 'Лесото' },
      { href: '/liberia.html', regionType: 'asia', name: 'Либерия' },
      { href: '/lebanon.html', regionType: 'asia', name: 'Ливан' },
      { href: '/livia.html', regionType: 'asia', name: 'Ливия' },
      { href: '/lithuania.html', regionType: 'europe', name: 'Литва' },
      { href: '/lichtenstein.html', regionType: 'europe', name: 'Лихтенштейн' },
      { href: '/luxembourgh.html', regionType: 'europe', name: 'Люксембург' },
    ],
  },
  {
    letter: 'М',
    items: [
      { href: '/mauricius.html', regionType: 'islands', name: 'Маврикий' },
      { href: '/mauritania.html', regionType: 'asia', name: 'Мавритания' },
      { href: '/madagascar.html', regionType: 'islands', name: 'Мадагаскар' },
      { href: '/malaui.html', regionType: 'asia', name: 'Малави' },
      { href: '/malasia.html', regionType: 'asia', name: 'Малайзия' },
      { href: '/mali.html', regionType: 'asia', name: 'Мали' },
      { href: '/maldivas.html', regionType: 'islands', name: 'Мальдивы' },
      { href: '/malta.html', regionType: 'europe', name: 'Мальта' },
      { href: '/marocco.html', regionType: 'asia', name: 'Марокко' },
    ],
  },
  {
    letter: 'Н',
    items: [
      { href: '/namibia.html', regionType: 'asia', name: 'Намибия' },
      { href: '/nauru.html', regionType: 'islands', name: 'Науру' },
      { href: '/nepal.html', regionType: 'asia', name: 'Непал' },
      { href: '/niger.html', regionType: 'asia', name: 'Нигер' },
      { href: '/nigeria.html', regionType: 'asia', name: 'Нигерия' },
      { href: '/netherlands.html', regionType: 'europe', name: 'Нидерланды' },
      { href: '/nikaragua.html', regionType: 'america', name: 'Никарагуа' },
      { href: '/new-zealand.html', regionType: 'islands', name: 'Новая Зеландия' },
      { href: '/norway.html', regionType: 'europe', name: 'Норвегия' },
    ],
  },
  {
    letter: 'О',
    items: [
      { href: '/oae.html', regionType: 'asia', name: 'ОАЭ' },
      { href: '/oman.html', regionType: 'asia', name: 'Оман' },
    ],
  },
  {
    letter: 'П',
    items: [
      { href: '/pakistan.html', regionType: 'asia', name: 'Пакистан' },
      { href: '/palau.html', regionType: 'islands', name: 'Палау' },
      { href: '/panama.html', regionType: 'america', name: 'Панама' },
      { href: '/papua-new-guinea.html', regionType: 'islands', name: 'Папуа — Новая Гвинея' },
      { href: '/paraguai.html', regionType: 'america', name: 'Парагвай' },
      { href: '/peru.html', regionType: 'america', name: 'Перу' },
      { href: '/poland.html', regionType: 'europe', name: 'Польша' },
      { href: '/portugal.html', regionType: 'asia', name: 'Португалия' },
    ],
  },
  {
    letter: 'Р',
    items: [
      { href: '/ruanda.html', regionType: 'asia', name: 'Руанда' },
      { href: '/romania.html', regionType: 'europe', name: 'Румыния' },
      { href: '/russia.html', regionType: 'europe', name: 'Россия' },
    ],
  },
  {
    letter: 'С',
    items: [
      { href: '/salvador.html', regionType: 'america', name: 'Сальвадор' },
      { href: '/samoa.html', regionType: 'islands', name: 'Самоа' },
      { href: '/san-marino.html', regionType: 'europe', name: 'Сан-Марино' },
      { href: '/saudi-arabia.html', regionType: 'asia', name: 'Саудовская Аравия' },
      { href: '/seyshellas.html', regionType: 'islands', name: 'Сейшелы' },
      { href: '/senegal.html', regionType: 'asia', name: 'Сенегал' },
      { href: '/serbia.html', regionType: 'europe', name: 'Сербия' },
      { href: '/singapur.html', regionType: 'asia', name: 'Сингапур' },
      { href: '/siria.html', regionType: 'asia', name: 'Сирия' },
      { href: '/slovakia.html', regionType: 'europe', name: 'Словакия' },
      { href: '/slovenia.html', regionType: 'europe', name: 'Словения' },
      { href: '/usa.html', regionType: 'america', name: 'США' },
    ],
  },
  {
    letter: 'Т',
    items: [
      { href: '/tajikistan.html', regionType: 'asia', name: 'Таджикистан' },
      { href: '/thailand.html', regionType: 'islands', name: 'Таиланд' },
      { href: '/tanzania.html', regionType: 'asia', name: 'Танзания' },
      { href: '/togo.html', regionType: 'asia', name: 'Того' },
      { href: '/tonga.html', regionType: 'islands', name: 'Тонга' },
      { href: '/trinidad-i-tobago.html', regionType: 'islands', name: 'Тринидад и Тобаго' },
      { href: '/tuvalu.html', regionType: 'islands', name: 'Тувалу' },
      { href: '/tunisia.html', regionType: 'asia', name: 'Тунис' },
      { href: '/turkmenistan.html', regionType: 'asia', name: 'Туркмения' },
      { href: '/turkey', regionType: 'asia', name: 'Турция' },
    ],
  },
  {
    letter: 'У',
    items: [
      { href: '/uganda.html', regionType: 'asia', name: 'Уганда' },
      { href: '/uzbekistan.html', regionType: 'asia', name: 'Узбекистан' },
      { href: '/ukraine.html', regionType: 'europe', name: 'Украина' },
      { href: '/urugwai.html', regionType: 'america', name: 'Уругвай' },
    ],
  },
  {
    letter: 'Ф',
    items: [
      { href: '/fiji.html', regionType: 'islands', name: 'Фиджи' },
      { href: '/philippines.html', regionType: 'islands', name: 'Филиппины' },
      { href: '/finland.html', regionType: 'europe', name: 'Финляндия' },
      { href: '/france.html', regionType: 'europe', name: 'Франция' },
    ],
  },
  {
    letter: 'Х',
    items: [{ href: '/croatia.html', regionType: 'europe', name: 'Хорватия' }],
  },
  {
    letter: 'Ч',
    items: [
      { href: '/chad.html', regionType: 'asia', name: 'Чад' },
      { href: '/montenegro.html', regionType: 'europe', name: 'Черногория' },
      { href: '/cheque.html', regionType: 'europe', name: 'Чехия' },
      { href: '/chili.html', regionType: 'america', name: 'Чили' },
    ],
  },
  {
    letter: 'Ш',
    items: [
      { href: '/switzerland.html', regionType: 'europe', name: 'Швейцария' },
      { href: '/sweden.html', regionType: 'europe', name: 'Швеция' },
      { href: '/sri-lanka.html', regionType: 'islands', name: 'Шри-Ланка' },
    ],
  },
  {
    letter: 'Э',
    items: [
      { href: '/ecuador.html', regionType: 'america', name: 'Эквадор' },
      { href: '/eritrea.html', regionType: 'asia', name: 'Эритрея' },
      { href: '/eswatini.html', regionType: 'asia', name: 'Эсватини' },
      { href: '/estonia.html', regionType: 'europe', name: 'Эстония' },
      { href: '/ephiopia.html', regionType: 'asia', name: 'Эфиопия' },
    ],
  },
  {
    letter: 'Ю',
    items: [
      { href: '/south-africa.html', regionType: 'asia', name: 'ЮАР' },
      { href: '/south-sudan.html', regionType: 'asia', name: 'Южный Судан' },
    ],
  },
  {
    letter: 'Я',
    items: [
      { href: '/jamaica.html', regionType: 'islands', name: 'Ямайка' },
      { href: '/japan.html', regionType: 'asia', name: 'Япония' },
    ],
  },
]

const letters = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'З',
  'И',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ч',
  'Ш',
  'Э',
  'Ю',
  'Я',
]

export const CountriesData: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('letter-1')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLetter(event.target.id)
  }

  const secondHandleChange = (idx: number) => {
    setSelectedIndex(idx)
  }

  return (
    <div className={styles.countriesWrapper}>
      <div className={styles.lettersList}>
        <div className={styles.inputWrapper}>
          {letters.map((letter, index) => (
            <input
              key={letter}
              className={`lettersInput lettersInput--${index + 1}`}
              type='radio'
              name='letter'
              id={`letter-${index + 1}`}
              checked={selectedLetter === `letter-${index + 1}`}
              onChange={handleChange}
            />
          ))}
        </div>

        <ul className={styles.lettersWrapper}>
          {letters.map((letter, index) => (
            <li key={index} className={styles.lettersItem}>
              <label
                className={`${styles.lettersButton} ${
                  selectedLetter === `letter-${index + 1}` ? styles.selected : ''
                }`}
                htmlFor={`letter-${index + 1}`}
                onClick={() => secondHandleChange(index)}
              >
                {letter}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <ul className={styles.countriesData}>
        {Data.map(({ letter, items }, index) => (
          <li key={index} className={styles.wrapperItem}>
            <p className={styles.letter}>{letter}</p>
            <ul
              className={`${styles.countriesList} ${
                selectedIndex === index ? styles.visible : styles.hidden
              }`}
            >
              {items.map(({ href, regionType, name }) => (
                <li key={name} className={styles.countriesItem}>
                  <a href={href} className={styles.countriesLink} data-region-type={regionType}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
