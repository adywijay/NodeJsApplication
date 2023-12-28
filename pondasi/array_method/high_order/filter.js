let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

/**
 * Manual Filtering
 */
let bigCitiesbefore = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCitiesbefore.push(cities[i]);
    }
}
console.log(bigCitiesbefore);

/**
 * Embeded / builtin function javascript
 */

let bigCities = cities.filter(city => city.population > 3000000);
bigCities.forEach((value, index, array) => {
    console.table(value);
});

