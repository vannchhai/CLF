﻿var countryList = [
	"Afghanistan (‫افغانستان‬‎)",
	"Albania (Shqipëri)",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antigua & Barbuda",
	"Argentina",
	"Armenia (Հայաստան)",
	"Aruba",
	"Ascension Island",
	"Australia",
	"Austria (Österreich)",
	"Azerbaijan (Azərbaycan)",
	"Bahamas",
	"Bahrain (‫البحرين‬‎)",
	"Bangladesh (বাংলাদেশ)",
	"Barbados",
	"Belarus (Беларусь)",
	"Belgium",
	"Belize",
	"Benin (Bénin)",
	"Bermuda",
	"Bhutan (འབྲུག)",
	"Bolivia",
	"Bosnia & Herzegovina (Босна и Херцеговина)",
	"Botswana",
	"Brazil (Brasil)",
	"British Indian Ocean Territory",
	"British Virgin Islands",
	"Brunei",
	"Bulgaria (България)",
	"Burkina Faso",
	"Burundi (Uburundi)",
	"Cambodia (កម្ពុជា)",
	"Cameroon (Cameroun)",
	"Canada",
	"Cape Verde (Kabu Verdi)",
	"Caribbean Netherlands",
	"Cayman Islands",
	"Central African Republic (République centrafricaine)",
	"Chad (Tchad)",
	"Chile",
	"China (中国)",
	"Colombia",
	"Comoros (‫جزر القمر‬‎)",
	"Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
	"Congo (Republic) (Congo-Brazzaville)",
	"Cook Islands",
	"Costa Rica",
	"Côte d’Ivoire",
	"Croatia (Hrvatska)",
	"Cuba",
	"Curaçao",
	"Cyprus (Κύπρος)",
	"Czech Republic (Česká republika)",
	"Denmark (Danmark)",
	"Djibouti",
	"Dominica",
	"Dominican Republic (República Dominicana)",
	"Ecuador",
	"Egypt (‫مصر‬‎)",
	"El Salvador",
	"Equatorial Guinea (Guinea Ecuatorial)",
	"Eritrea",
	"Estonia (Eesti)",
	"Ethiopia",
	"Falkland Islands (Islas Malvinas)",
	"Faroe Islands (Føroyar)",
	"Fiji",
	"Finland (Suomi)",
	"France",
	"French Guiana (Guyane française)",
	"French Polynesia (Polynésie française)",
	"Gabon",
	"Gambia",
	"Georgia (საქართველო)",
	"Germany (Deutschland)",
	"Ghana (Gaana)",
	"Gibraltar",
	"Greece (Ελλάδα)",
	"Greenland (Kalaallit Nunaat)",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guinea (Guinée)",
	"Guinea-Bissau (Guiné-Bissau)",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hong Kong (香港)",
	"Hungary (Magyarország)",
	"Iceland (Ísland)",
	"India (भारत)",
	"Indonesia",
	"Iran (‫ایران‬‎)",
	"Iraq (‫العراق‬‎)",
	"Ireland",
	"Israel (‫ישראל‬‎)",
	"Italy (Italia)",
	"Jamaica",
	"Japan (日本)",
	"Jordan (‫الأردن‬‎)",
	"Kazakhstan (Казахстан)",
	"Kenya",
	"Kiribati",
	"Kuwait (‫الكويت‬‎)",
	"Kyrgyzstan (Кыргызстан)",
	"Laos (ລາວ)",
	"Latvia (Latvija)",
	"Lebanon (‫لبنان‬‎)",
	"Lesotho",
	"Liberia",
	"Libya (‫ليبيا‬‎)",
	"Liechtenstein",
	"Lithuania (Lietuva)",
	"Luxembourg",
	"Macau (澳門)",
	"Macedonia (FYROM) (Македонија)",
	"Madagascar (Madagasikara)",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Martinique",
	"Mauritania (‫موريتانيا‬‎)",
	"Mauritius (Moris)",
	"Mexico (México)",
	"Micronesia",
	"Moldova (Republica Moldova)",
	"Monaco",
	"Mongolia (Монгол)",
	"Montenegro (Crna Gora)",
	"Montserrat",
	"Morocco",
	"Mozambique (Moçambique)",
	"Myanmar (Burma) (မြန်မာ)",
	"Namibia (Namibië)",
	"Nauru",
	"Nepal (नेपाल)",
	"Netherlands (Nederland)",
	"New Caledonia (Nouvelle-Calédonie)",
	"New Zealand",
	"Nicaragua",
	"Niger (Nijar)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands",
	"North Korea (조선민주주의인민공화국)",
	"Norway (Norge)",
	"Oman (‫عُمان‬‎)",
	"Pakistan (‫پاکستان‬‎)",
	"Palau",
	"Palestine (‫فلسطين‬‎)",
	"Panama (Panamá)",
	"Papua New Guinea",
	"Paraguay",
	"Peru (Perú)",
	"Philippines",
	"Poland (Polska)",
	"Portugal",
	"Puerto Rico",
	"Qatar (‫قطر‬‎)",
	"Réunion (La Réunion)",
	"Romania (România)",
	"Russia (Россия)",
	"Rwanda",
	"Samoa",
	"San Marino",
	"São Tomé & Príncipe (São Tomé e Príncipe)",
	"Saudi Arabia (‫المملكة العربية السعودية‬‎)",
	"Senegal",
	"Serbia (Србија)",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten",
	"Slovakia (Slovensko)",
	"Slovenia (Slovenija)",
	"Solomon Islands",
	"Somalia (Soomaaliya)",
	"South Africa",
	"South Korea (대한민국)",
	"South Sudan (‫جنوب السودان‬‎)",
	"Spain (España)",
	"Sri Lanka (ශ්‍රී ලංකාව)",
	"St. Barthélemy (Saint-Barthélemy)",
	"St. Helena",
	"St. Kitts & Nevis",
	"St. Lucia",
	"St. Martin (Saint-Martin)",
	"St. Pierre & Miquelon (Saint-Pierre-et-Miquelon)",
	"St. Vincent & Grenadines",
	"Sudan (‫السودان‬‎)",
	"Suriname",
	"Swaziland",
	"Sweden (Sverige)",
	"Switzerland (Schweiz)",
	"Syria (‫سوريا‬‎)",
	"Taiwan (台灣)",
	"Tajikistan",
	"Tanzania",
	"Thailand (ไทย)",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad & Tobago",
	"Tunisia",
	"Turkey (Türkiye)",
	"Turkmenistan",
	"Turks & Caicos Islands",
	"Tuvalu",
	"U.S. Virgin Islands",
	"Uganda",
	"Ukraine (Україна)",
	"United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
	"United Kingdom",
	"United States",
	"Uruguay",
	"Uzbekistan (Oʻzbekiston)",
	"Vanuatu",
	"Vatican City (Città del Vaticano)",
	"Venezuela",
	"Vietnam (Việt Nam)",
	"Wallis & Futuna",
	"Yemen (‫اليمن‬‎)",
	"Zambia",
	"Zimbabwe"
];