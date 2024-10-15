// returning the items as written in the string
const cities = ["Abuja", "Calabar", "Lagos", "Edo"];
console.log(cities);

// returning reverse items
const cities2 = cities.reverse();
console.log(cities2);

// counting the characters in the string
const num = "one, two, three";
const countCharacters = num.length;

console.log(countCharacters);

// Capitalizing the first letters
function capitalizeCities(cities) {
  return cities
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const citiesAround = "abuja calabar lagos edo";
const capitalized = capitalizeCities(citiesAround);
console.log(capitalized);
