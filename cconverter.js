let data = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF",
    "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK",
    "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ",
    "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS",
    "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT",
    "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP",
    "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
    "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "USD", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
];

let country_data = {
    "AED": "United Arab Emirates - Dirham",
    "AFN": "Afghanistan - Afghani",
    "ALL": "Albania - Lek",
    "AMD": "Armenia - Dram",
    "ANG": "Netherlands Antilles - Guilder",
    "AOA": "Angola - Kwanza",
    "ARS": "Argentina - Peso",
    "AUD": "Australia - Dollar",
    "AWG": "Aruba - Guilder",
    "AZN": "Azerbaijan - Manat",
    "BAM": "Bosnia and Herzegovina - Convertible Mark",
    "BBD": "Barbados - Dollar",
    "BDT": "Bangladesh - Taka",
    "BGN": "Bulgaria - Lev",
    "BHD": "Bahrain - Dinar",
    "BIF": "Burundi - Franc",
    "BMD": "Bermuda - Dollar",
    "BND": "Brunei - Dollar",
    "BOB": "Bolivia - Boliviano",
    "BRL": "Brazil - Real",
    "BSD": "Bahamas - Dollar",
    "BTN": "Bhutan - Ngultrum",
    "BWP": "Botswana - Pula",
    "BYN": "Belarus - Ruble",
    "BZD": "Belize - Dollar",
    "CAD": "Canada - Dollar",
    "CDF": "Democratic Republic of the Congo - Franc",
    "CHF": "Switzerland - Franc",
    "CLP": "Chile - Peso",
    "CNY": "China - Yuan Renminbi",
    "COP": "Colombia - Peso",
    "CRC": "Costa Rica - Colon",
    "CUP": "Cuba - Peso",
    "CVE": "Cape Verde - Escudo",
    "CZK": "Czech Republic - Koruna",
    "DJF": "Djibouti - Franc",
    "DKK": "Denmark - Krone",
    "DOP": "Dominican Republic - Peso",
    "DZD": "Algeria - Dinar",
    "EGP": "Egypt - Pound",
    "ERN": "Eritrea - Nakfa",
    "ETB": "Ethiopia - Birr",
    "EUR": "Eurozone - Euro",
    "FJD": "Fiji - Dollar",
    "FKP": "Falkland Islands - Pound",
    "FOK": "Faroe Islands - Krone",
    "GBP": "United Kingdom - Pound",
    "GEL": "Georgia - Lari",
    "GGP": "Guernsey - Pound",
    "GHS": "Ghana - Cedi",
    "GIP": "Gibraltar - Pound",
    "GMD": "Gambia - Dalasi",
    "GNF": "Guinea - Franc",
    "GTQ": "Guatemala - Quetzal",
    "GYD": "Guyana - Dollar",
    "HKD": "Hong Kong - Dollar",
    "HNL": "Honduras - Lempira",
    "HRK": "Croatia - Kuna",
    "HTG": "Haiti - Gourde",
    "HUF": "Hungary - Forint",
    "IDR": "Indonesia - Rupiah",
    "ILS": "Israel - Shekel",
    "IMP": "Isle of Man - Pound",
    "INR": "India - Rupee",
    "IQD": "Iraq - Dinar",
    "IRR": "Iran - Rial",
    "ISK": "Iceland - Krona",
    "JEP": "Jersey - Pound",
    "JMD": "Jamaica - Dollar",
    "JOD": "Jordan - Dinar",
    "JPY": "Japan - Yen",
    "KES": "Kenya - Shilling",
    "KGS": "Kyrgyzstan - Som",
    "KHR": "Cambodia - Riel",
    "KID": "Kiribati - Dollar",
    "KMF": "Comoros - Franc",
    "KRW": "South Korea - Won",
    "KWD": "Kuwait - Dinar",
    "KYD": "Cayman Islands - Dollar",
    "KZT": "Kazakhstan - Tenge",
    "LAK": "Laos - Kip",
    "LBP": "Lebanon - Pound",
    "LKR": "Sri Lanka - Rupee",
    "LRD": "Liberia - Dollar",
    "LSL": "Lesotho - Loti",
    "LYD": "Libya - Dinar",
    "MAD": "Morocco - Dirham",
    "MDL": "Moldova - Leu",
    "MGA": "Madagascar - Ariary",
    "MKD": "North Macedonia - Denar",
    "MMK": "Myanmar - Kyat",
    "MNT": "Mongolia - Tugrik",
    "MOP": "Macau - Pataca",
    "MRU": "Mauritania - Ouguiya",
    "MUR": "Mauritius - Rupee",
    "MVR": "Maldives - Rufiyaa",
    "MWK": "Malawi - Kwacha",
    "MXN": "Mexico - Peso",
    "MYR": "Malaysia - Ringgit",
    "MZN": "Mozambique - Metical",
    "NAD": "Namibia - Dollar",
    "NGN": "Nigeria - Naira",
    "NIO": "Nicaragua - Cordoba",
    "NOK": "Norway - Krone",
    "NPR": "Nepal - Rupee",
    "NZD": "New Zealand - Dollar",
    "OMR": "Oman - Rial",
    "PAB": "Panama - Balboa",
    "PEN": "Peru - Sol",
    "PGK": "Papua New Guinea - Kina",
    "PHP": "Philippines - Peso",
    "PKR": "Pakistan - Rupee",
    "PLN": "Poland - Zloty",
    "PYG": "Paraguay - Guarani",
    "QAR": "Qatar - Rial",
    "RON": "Romania - Leu",
    "RSD": "Serbia - Dinar",
    "RUB": "Russia - Ruble",
    "RWF": "Rwanda - Franc",
    "SAR": "Saudi Arabia - Riyal",
    "SBD": "Solomon Islands - Dollar",
    "SCR": "Seychelles - Rupee",
    "SDG": "Sudan - Pound",
    "SEK": "Sweden - Krona",
    "SGD": "Singapore - Dollar",
    "SHP": "Saint Helena - Pound",
    "SLE": "Sierra Leone - Leone",
    "SLL": "Sierra Leone - Leone",
    "SOS": "Somalia - Shilling",
    "SRD": "Suriname - Dollar",
    "SSP": "South Sudan - Pound",
    "STN": "Sao Tome and Principe - Dobra",
    "SYP": "Syria - Pound",
    "SZL": "Eswatini - Lilangeni",
    "THB": "Thailand - Baht",
    "TJS": "Tajikistan - Somoni",
    "TMT": "Turkmenistan - Manat",
    "TND": "Tunisia - Dinar",
    "TOP": "Tonga - Paʻanga",
    "TRY": "Turkey - Lira",
    "TTD": "Trinidad and Tobago - Dollar",
    "TVD": "Tuvalu - Dollar",
    "TWD": "Taiwan - Dollar",
    "TZS": "Tanzania - Shilling",
    "UAH": "Ukraine - Hryvnia",
    "UGX": "Uganda - Shilling",
    "UYU": "Uruguay - Peso",
    "USD": "United States - Dollar",
    "UZS": "Uzbekistan - Som",
    "VES": "Venezuela - Bolívar Soberano",
    "VND": "Vietnam - Dong",
    "VUV": "Vanuatu - Vatu",
    "WST": "Samoa - Tala",
    "XAF": "CEMAC - CFA Franc BEAC",
    "XCD": "Organisation of Eastern Caribbean States - Dollar",
    "XDR": "IMF - Special Drawing Rights",
    "XOF": "UEMOA - CFA Franc BCEAO",
    "XPF": "French territories - CFP Franc",
    "YER": "Yemen - Rial",
    "ZAR": "South Africa - Rand",
    "ZMW": "Zambia - Kwacha",
    "ZWL": "Zimbabwe - Dollar"
};

let symbol = {
    "USD": "$",
    "AED": "د.إ",
    "AFN": "؋",
    "ALL": "L",
    "AMD": "֏",
    "ANG": "ƒ",
    "AOA": "Kz",
    "ARS": "$",
    "AUD": "$",
    "AWG": "ƒ",
    "AZN": "₼",
    "BAM": "KM",
    "BBD": "$",
    "BDT": "৳",
    "BGN": "лв",
    "BHD": ".د.ب",
    "BIF": "FBu",
    "BMD": "$",
    "BND": "$",
    "BOB": "Bs.",
    "BRL": "R$",
    "BSD": "$",
    "BTN": "Nu.",
    "BWP": "P",
    "BYN": "Br",
    "BZD": "$",
    "CAD": "$",
    "CDF": "FC",
    "CHF": "CHF",
    "CLP": "$",
    "CNY": "¥",
    "COP": "$",
    "CRC": "₡",
    "CUP": "$",
    "CVE": "$",
    "CZK": "Kč",
    "DJF": "Fdj",
    "DKK": "kr",
    "DOP": "$",
    "DZD": "د.ج",
    "EGP": "£",
    "ERN": "Nfk",
    "ETB": "Br",
    "EUR": "€",
    "FJD": "$",
    "FKP": "£",
    "FOK": "kr",
    "GBP": "£",
    "GEL": "₾",
    "GGP": "£",
    "GHS": "₵",
    "GIP": "£",
    "GMD": "D",
    "GNF": "FG",
    "GTQ": "Q",
    "GYD": "$",
    "HKD": "$",
    "HNL": "L",
    "HRK": "kn",
    "HTG": "G",
    "HUF": "Ft",
    "IDR": "Rp",
    "ILS": "₪",
    "IMP": "£",
    "INR": "₹",
    "IQD": "ع.د",
    "IRR": "﷼",
    "ISK": "kr",
    "JEP": "£",
    "JMD": "$",
    "JOD": "د.ا",
    "JPY": "¥",
    "KES": "Sh",
    "KGS": "с",
    "KHR": "៛",
    "KID": "$",
    "KMF": "CF",
    "KRW": "₩",
    "KWD": "د.ك",
    "KYD": "$",
    "KZT": "₸",
    "LAK": "₭",
    "LBP": "ل.ل",
    "LKR": "රු",
    "LRD": "$",
    "LSL": "L",
    "LYD": "ل.د",
    "MAD": "د.م.",
    "MDL": "L",
    "MGA": "Ar",
    "MKD": "ден",
    "MMK": "K",
    "MNT": "₮",
    "MOP": "P",
    "MRU": "UM",
    "MUR": "₨",
    "MVR": ".ރ",
    "MWK": "MK",
    "MXN": "$",
    "MYR": "RM",
    "MZN": "MT",
    "NAD": "$",
    "NGN": "₦",
    "NIO": "C$",
    "NOK": "kr",
    "NPR": "₨",
    "NZD": "$",
    "OMR": "ر.ع.",
    "PAB": "B/.",
    "PEN": "S/",
    "PGK": "K",
    "PHP": "₱",
    "PKR": "₨",
    "PLN": "zł",
    "PYG": "₲",
    "QAR": "ر.ق",
    "RON": "lei",
    "RSD": "дин",
    "RUB": "₽",
    "RWF": "FRw",
    "SAR": "ر.س",
    "SBD": "$",
    "SCR": "₨",
    "SDG": "ج.س.",
    "SEK": "kr",
    "SGD": "$",
    "SHP": "£",
    "SLE": "Le",
    "SLL": "Le",
    "SOS": "Sh",
    "SRD": "$",
    "SSP": "£",
    "STN": "Db",
    "SYP": "£",
    "SZL": "E",
    "THB": "฿",
    "TJS": "ЅМ",
    "TMT": "T",
    "TND": "د.ت",
    "TOP": "T$",
    "TRY": "₺",
    "TTD": "$",
    "TVD": "$",
    "TWD": "NT$",
    "TZS": "Sh",
    "UAH": "₴",
    "UGX": "USh",
    "UYU": "$",
    "UZS": "so'm",
    "VES": "Bs.S",
    "VND": "₫",
    "VUV": "VT",
    "WST": "T",
    "XAF": "FCFA",
    "XCD": "$",
    "XDR": "XDR",
    "XOF": "CFA",
    "XPF": "₣",
    "YER": "﷼",
    "ZAR": "R",
    "ZMW": "ZK",
    "ZWL": "$"
}

let ic = document.getElementById("input_country");
let oc = document.getElementById("output_country");
let c1 = document.getElementById("cName1");
let c2 = document.getElementById("cName2");
for (let code of data) {
    let ele = document.createElement("option");
    let ele2 = document.createElement("option");
    ele.value = code;
    ele2.value = code;
    if (ele.value === "USD") {
        ele.setAttribute("selected", "");
    }
    if (ele2.value === "INR") {
        ele2.setAttribute("selected", "");
    }
    //console.log(code);
    let z = country_data[code];
    let text = z;
    //console.log(z);
    c1.textContent = "USD";
    c2.textContent = "INR";
    ele.textContent = text;
    ele2.textContent = text;
    // console.log(ic);
    ic.appendChild(ele);
    oc.appendChild(ele2);
}


let input_value = document.getElementById("input");
input_value.value = 1;
let output_value = document.getElementById("output");

let option = {
    method: "GET"
};


let s1 = document.getElementById("givenSymbol");
let s2 = document.getElementById("shownSymbol");

function symbol_notation() {
    s1.textContent = symbol[ic.value];
    s2.textContent = symbol[oc.value];
    c1.textContent = ic.value;
    c2.textContent = oc.value;
    output_value.textContent = "---";

}

function conversion() {
    let base_currency = ic.value;
    let require_currency = oc.value;
    let url = "https://v6.exchangerate-api.com/v6/c321db9d7d177b4bcc02db6b/latest/" + base_currency;
    //url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_DKtECmsTvoFYyXoAQspAod3e3btX6ZFT9qlGuhQt&currencies=INR&base_currency=AMD";
    //console.log(url);
    fetch(url, option).then(response => response.json()).then(jsondata => {
        //console.log(jsondata);
        let code = jsondata["conversion_rates"][require_currency];
        //console.log(code);
        output_value.textContent = Math.round(code * JSON.parse(input_value.value) * 100) / 100;
    });
}

symbol_notation();
conversion();


function call_conversion(event) {
    conversion();
}

let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

let btn = document.getElementById("btn");
btn.addEventListener("click", call_conversion);

ic.addEventListener("change", symbol_notation);
oc.addEventListener("change", symbol_notation)