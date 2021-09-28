exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('suburb').del()
  // .then(function () {
  // Inserts seed entries
  return knex('suburb').insert([
    { id: 1, name: "Aro Valley", region: "Wellington", neighbours: "22, 55, 5, 14, 40" },
    { id: 2, name: "Berhampore", region: "Wellington", neighbours: "57, 37, 31, 51, 17, 12, 25, 33" },
    { id: 3, name: "Breaker Bay", region: "Wellington", neighbours: "49, 32" },
    { id: 4, name: "Broadmeadows", region: "Wellington", neighbours: "18, 36, 39, 23" },
    { id: 5, name: "Brooklyn", region: "Wellington", neighbours: "1, 34, 57, 33, 25, 21" },
    { id: 6, name: "Churton Park", region: "Wellington", neighbours: "46, 54, 18, 41" },
    { id: 7, name: "Crofton Downs", region: "Wellington", neighbours: "38, 19, 60" },
    { id: 8, name: "Evans Bay", region: "Wellington", neighbours: "13, 48" },
    { id: 9, name: "Glenside", region: "Wellington", neighbours: "54, 11, 15, 18, 41" },
    { id: 10, name: "Grenada North", region: "Wellington", neighbours: "53, 15, 11, 9, 54" },
    { id: 11, name: "Grenada", region: "Wellington", neighbours: "10, 15, 44, 9, 46" },
    { id: 12, name: "Happy Valley", region: "Wellington", neighbours: "25, 5, 17" },
    { id: 13, name: "Hataitai", region: "Wellington", neighbours: "42, 48, 8, 24, 37, 34, 35" },
    { id: 14, name: "Highbury", region: "Wellington", neighbours: "21, 22, 1, 5" },
    { id: 15, name: "Horokiwi", region: "Wellington", neighbours: "53, 88, 10, 61, 36" },
    { id: 16, name: "Houghton Bay", region: "Wellington", neighbours: "31, 17, 51" },
    { id: 17, name: "Island Bay", region: "Wellington", neighbours: "2, 31, 51, 16, 25, 33" },
    { id: 18, name: "Johnsonville", region: "Wellington", neighbours: "6, 44, 18, 36, 39, 4, 23 " },
    { id: 19, name: "Kaiwharawhara", region: "Wellington", neighbours: "45, 58, 38" },
    { id: 20, name: "Karaka Bays", region: "Wellington", neighbours: "30, 62, 32" },
    { id: 21, name: "Karori", region: "Wellington", neighbours: "28, 60, 40, 14" },
    { id: 22, name: "Kelburn", region: "Wellington", neighbours: "56, 59, 1, 14, 21, 40" },
    { id: 23, name: "Khandallah", region: "Wellington", neighbours: "18, 4, 39, 19, 38" },
    { id: 24, name: "Kilbirnie", region: "Wellington", neighbours: "8, 47, 27, 31, 13" },
    { id: 25, name: "Kingston", region: "Wellington", neighbours: "2, 5, 33, 31, 12" },
    { id: 26, name: "Linden", region: "Wellington", neighbours: "125, 53, 10, 54, 6, 9, 126" },
    { id: 27, name: "Lyall Bay", region: "Wellington", neighbours: "24, 47, 31" },
    { id: 28, name: "Mākara", region: "Wellington", neighbours: "29, 41, 21" },
    { id: 29, name: "Mākara Beach", region: "Wellington", neighbours: "28, 41" },
    { id: 30, name: "Maupuia", region: "Wellington", neighbours: "49, 32, 8" },
    { id: 31, name: "Melrose", region: "Wellington", neighbours: "37, 24, 47, 27, 17, 51, 2" },
    { id: 32, name: "Miramar", region: "Wellington", neighbours: "30, 20, 62, 49, 52, 47, 24" },
    { id: 33, name: "Mornington", region: "Wellington", neighbours: "5, 57, 37, 2, 25" },
    { id: 34, name: "Mount Cook", region: "Wellington", neighbours: "55, 35, 13, 37, 5, 1" },
    { id: 35, name: "Mount Victoria", region: "Wellington", neighbours: "42, 48, 13, 37, 34, 55" },
    { id: 36, name: "Newlands", region: "Wellington", neighbours: "44, 61, 11, 15, 39, 18" },
    { id: 37, name: "Newtown", region: "Wellington", neighbours: "34, 13, 57, 8, 2, 24, 31" },
    { id: 38, name: "Ngaio", region: "Wellington", neighbours: "7, 23, 19, 58" },
    { id: 39, name: "Ngauranga", region: "Wellington", neighbours: "4, 18, 36, 19, 23" },
    { id: 40, name: "Northland", region: "Wellington", neighbours: "60, 58, 56, 22, 14, 21" },
    { id: 41, name: "Ohariu", region: "Wellington", neighbours: "18, 9, 54, 29, 130" },
    { id: 42, name: "Oriental Bay", region: "Wellington", neighbours: "35, 59, 48, 55" },
    { id: 43, name: "Ōwhiro Bay", region: "Wellington", neighbours: "5, 25, 17, 28" },
    { id: 44, name: "Paparangi", region: "Wellington", neighbours: "18, 9, 11, 61, 36" },
    { id: 45, name: "Pipitea", region: "Wellington", neighbours: "19, 59, 56, 58" },
    { id: 46, name: "Redwood", region: "Wellington", neighbours: "54, 6, 10" },
    { id: 47, name: "Rongotai", region: "Wellington", neighbours: "8, 30, 32, 24, 27" },
    { id: 48, name: "Roseneath", region: "Wellington", neighbours: "59, 42, 35, 13, 8" },
    { id: 49, name: "Seatoun", region: "Wellington", neighbours: "32, 62, 3, 52" },
    { id: 50, name: "Shelly Bay", region: "Wellington", neighbours: "30, 32" },
    { id: 51, name: "Southgate", region: "Wellington", neighbours: "2, 37, 31, 17, 16" },
    { id: 52, name: "Strathmore Park", region: "Wellington", neighbours: "32, 47, 3" },
    { id: 53, name: "Takapu Valley", region: "Wellington", neighbours: "125, 67, 54, 10, 15" },
    { id: 54, name: "Tawa", region: "Wellington", neighbours: "26, 41, 6, 46" },
    { id: 55, name: "Te Aro", region: "Wellington", neighbours: "59, 22, 1, 42, 35, 34, 22" },
    { id: 56, name: "Thorndon", region: "Wellington", neighbours: "58, 45, 22, 59, 60, 40" },
    { id: 57, name: "Vogeltown", region: "Wellington", neighbours: "5, 34, 37, 2, 33" },
    { id: 58, name: "Wadestown", region: "Wellington", neighbours: "38, 19, 56, 60, 7" },
    { id: 59, name: "Wellington Central", region: "Wellington", neighbours: "45, 55, 22, 56" },
    { id: 60, name: "Wilton", region: "Wellington", neighbours: "7, 58, 56, 21" },
    { id: 61, name: "Woodridge", region: "Wellington", neighbours: "11, 15, 44, 9, 36" },
    { id: 62, name: "Worser Bay", region: "Wellington", neighbours: "32, 20, 49" },
    { id: 63, name: "Alicetown", region: "Lower Hutt", neighbours: "86, 86, 83, 88, 65, 98, 78" },
    { id: 64, name: "Arakura", region: "Lower Hutt", neighbours: "74, 87, 73, 94" },
    { id: 65, name: "Ava", region: "Lower Hutt", neighbours: "82, 63, 78, 98, 84, 88" },
    { id: 66, name: "Avalon", region: "Lower Hutt", neighbours: "92, 97, 85, 71, 68, 67" },
    { id: 67, name: "Belmont", region: "Lower Hutt", neighbours: "79, 66, 85, 68, 93" },
    { id: 68, name: "Boulcott", region: "Lower Hutt", neighbours: "67, 66, 71, 78, 93" },
    { id: 69, name: "Days Bay", region: "Lower Hutt", neighbours: "70" },
    { id: 70, name: "Eastbourne", region: "Lower Hutt", neighbours: "69" },
    { id: 71, name: "Epuni", region: "Lower Hutt", neighbours: "68, 85, 72, 96, 78" },
    { id: 72, name: "Fairfield", region: "Lower Hutt", neighbours: "66, 85, 64, 96, 71" },
    { id: 73, name: "Glendale", region: "Lower Hutt", neighbours: "64, 77, 94, 87" },
    { id: 74, name: "Gracefield", region: "Lower Hutt", neighbours: "95, 94, 90, 98, 84" },
    { id: 75, name: "Harbour View", region: "Lower Hutt", neighbours: "93, 83, 78, 86" },
    { id: 76, name: "Haywards", region: "Lower Hutt", neighbours: "128, 105, 114, 81, 79" },
    { id: 77, name: "Homedale", region: "Lower Hutt", neighbours: "73, 70, 94" },
    { id: 78, name: "Hutt Central", region: "Lower Hutt", neighbours: "68, 71, 72, 96, 98, 63, 83, 75" },
    { id: 79, name: "Kelson", region: "Lower Hutt", neighbours: "76, 81, 92, 66, 67" },
    { id: 80, name: "Korokoro", region: "Lower Hutt", neighbours: "82, 63, 65, 88, 15" },
    { id: 81, name: "Manor Park", region: "Lower Hutt", neighbours: "76, 112, 91, 89" },
    { id: 82, name: "Maungaraki", region: "Lower Hutt", neighbours: "86, 78, 63, 88, 80" },
    { id: 83, name: "Melling", region: "Lower Hutt", neighbours: "75, 68, 78, 63, 82, 86" },
    { id: 84, name: "Moera", region: "Lower Hutt", neighbours: "98, 95, 74, 90, 88, 65" },
    { id: 85, name: "Naenae", region: "Lower Hutt", neighbours: "97, 66, 68, 71" },
    { id: 86, name: "Normandale", region: "Lower Hutt", neighbours: "93, 75, 83, 63, 82" },
    { id: 87, name: "Parkway", region: "Lower Hutt", neighbours: "74, 73, 94, 64" },
    { id: 88, name: "Petone", region: "Lower Hutt", neighbours: "82, 63, 84, 90, 15, 80" },
    { id: 89, name: "Pomare", region: "Lower Hutt", neighbours: "91, 92, 81" },
    { id: 90, name: "Seaview", region: "Lower Hutt", neighbours: "84, 74, 70, 69, 88" },
    { id: 91, name: "Stokes Valley", region: "Lower Hutt", neighbours: "112, 81, 89, 92" },
    { id: 92, name: "Taitā", region: "Lower Hutt", neighbours: "89, 91, 97, 66, 79" },
    { id: 93, name: "Tirohanga", region: "Lower Hutt", neighbours: "75, 67, 68, 78, 83 " },
    { id: 94, name: "Wainuiomata", region: "Lower Hutt", neighbours: "73, 64, 87, 74, 77" },
    { id: 95, name: "Waiwhetū", region: "Lower Hutt", neighbours: "96, 74, 84, 98" },
    { id: 96, name: "Waterloo", region: "Lower Hutt", neighbours: "71, 72, 95, 78, 98" },
    { id: 97, name: "Wingate", region: "Lower Hutt", neighbours: "66, 92, 89, 91, 85" },
    { id: 98, name: "Woburn", region: "Lower Hutt", neighbours: "96, 78, 95, 84, 65" },
    { id: 99, name: "Birchville", region: "Upper Hutt", neighbours: "104, 117, 100, 116" },
    { id: 100, name: "Brown Owl", region: "Upper Hutt", neighbours: "116, 99, 104, 115, 108, 117, 101" },
    { id: 101, name: "Clouston Park", region: "Upper Hutt", neighbours: "102, 117, 108" },
    { id: 102, name: "Ebdentown", region: "Upper Hutt", neighbours: "103, 101, 117, 106, 119" },
    { id: 103, name: "Elderslea", region: "Upper Hutt", neighbours: "120, 119, 102" },
    { id: 104, name: "Emerald Hill", region: "Upper Hutt", neighbours: "99, 115, 116, 100" },
    { id: 105, name: "Heretaunga", region: "Upper Hutt", neighbours: "118, 114" },
    { id: 106, name: "Kingsley Heights", region: "Upper Hutt", neighbours: "119, 102, 101" },
    { id: 107, name: "Mangaroa", region: "Upper Hutt", neighbours: "108" },
    { id: 108, name: "Maoribank", region: "Upper Hutt", neighbours: "106, 101, 117, 100, 116, 107" },
    { id: 109, name: "Maymorn", region: "Upper Hutt", neighbours: "107, 115" },
    { id: 110, name: "Moonshine", region: "Upper Hutt", neighbours: "113" },
    { id: 111, name: "Parkdale", region: "Upper Hutt", neighbours: "104, 99, 115, 116, 100" },
    { id: 112, name: "Pinehaven", region: "Upper Hutt", neighbours: "114" },
    { id: 113, name: "Riverstone Terraces", region: "Upper Hutt", neighbours: "110" },
    { id: 114, name: "Silverstream", region: "Upper Hutt", neighbours: "105, 112" },
    { id: 115, name: "Te Mārua", region: "Upper Hutt", neighbours: "104, 109" },
    { id: 116, name: "Timberlea", region: "Upper Hutt", neighbours: "108, 100, 104" },
    { id: 117, name: "Tōtara Park", region: "Upper Hutt", neighbours: "101, 102" },
    { id: 118, name: "Trentham", region: "Upper Hutt", neighbours: "120, 105" },
    { id: 119, name: "Upper Hutt Central", region: "Upper Hutt", neighbours: "106, 120, 103, 102, 101" },
    { id: 120, name: "Wallaceville", region: "Upper Hutt", neighbours: "118, 103, 119" },
    { id: 121, name: "Whitemans Valley", region: "Upper Hutt", neighbours: "107, 119" },
    { id: 122, name: "Aotea", region: "Porirua", neighbours: "135, 123, 144, 125, 141, 139" },
    { id: 123, name: "Ascot Park", region: "Porirua", neighbours: "122, 135, 136, 144, 145" },
    { id: 124, name: "Camborne", region: "Porirua", neighbours: "140, 138, 131" },
    { id: 125, name: "Cannons Creek", region: "Porirua", neighbours: "67, 142, 141, 144" },
    { id: 126, name: "Elsdon", region: "Porirua", neighbours: "130, 139, 142" },
    { id: 127, name: "Hongoeka", region: "Porirua", neighbours: "140, 138" },
    { id: 128, name: "Judgeford", region: "Porirua", neighbours: "145, 137" },
    { id: 129, name: "Karehana Bay", region: "Porirua", neighbours: "138, 127" },
    { id: 130, name: "Kenepuru", region: "Porirua", neighbours: "126, 139, 141" },
    { id: 131, name: "Mana", region: "Porirua", neighbours: "136, 124" },
    { id: 132, name: "Moonshine Valley", region: "Porirua", neighbours: "113" },
    { id: 133, name: "Onepoto", region: "Porirua", neighbours: "142, 143" },
    { id: 134, name: "Paekākāriki Hill", region: "Porirua", neighbours: "137, 138" },
    { id: 135, name: "Papakōwhai", region: "Porirua", neighbours: "123, 122, 136" },
    { id: 136, name: "Paremata", region: "Porirua", neighbours: "135, 123, 145, 124" },
    { id: 137, name: "Pāuatahanui", region: "Porirua", neighbours: "145, 128" },
    { id: 138, name: "Plimmerton", region: "Porirua", neighbours: "140, 127, 131, 124, 134" },
    { id: 139, name: "Porirua Central", region: "Porirua", neighbours: "122, 125, 141, 130, 126, 142" },
    { id: 140, name: "Pukerua Bay", region: "Porirua", neighbours: "138, 134" },
    { id: 141, name: "Rānui", region: "Porirua", neighbours: "122, 125, 142, 139" },
    { id: 142, name: "Takapūwāhia", region: "Porirua", neighbours: "143, 139, 126" },
    { id: 143, name: "Tītahi Bay", region: "Porirua", neighbours: "133, 142" },
    { id: 144, name: "Waitangirua", region: "Porirua", neighbours: "123, 125" },
    { id: 145, name: "Whitby", region: "Porirua", neighbours: "136, 123, 137" }
  ])
}
//   )
// }
