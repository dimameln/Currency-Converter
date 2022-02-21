
async function currencies() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url)
    const data = await response.json()

    const input = document.querySelector('#fist-currency-input')
    const rubles = document.querySelector('.rubles')
    const select = document.querySelector('.currency')
    let selectIndex = select.options.selectedIndex
    let choosenSelect = select.options[selectIndex].text

    function calculateCurrency() {
        let currencyName = data.Valute[choosenSelect].CharCode
        let calculator = (input.value * data.Valute[choosenSelect].Value).toFixed(2)
        rubles.innerHTML = input.value + ' ' + currencyName + ' ' + '&asymp;' + ' ' + calculator + ' ' + 'РУБ.'
    }

    select.addEventListener('change', () => {
        selectIndex = document.querySelector('.currency').options.selectedIndex
        choosenSelect = select.options[selectIndex].text

        calculateCurrency()
    })

    input.addEventListener('input', calculateCurrency)

}

currencies()



