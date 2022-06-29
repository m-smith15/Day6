function d6() {
    var roll = Math.ceil(Math.random() * 6);
    return roll;
}
    
var playerRoll = d6();
//console.log("The player rolled: " + playerRoll);

var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};
// console.log(monster.id);
// console.log(monster.name);
// console.log(monster.types);

var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id > 99) {
        //console.log(pokémon[i].name);
    }
}

console.log('"mons whos ID is divisble by 3"');
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].id % 3 ===0){
        //console.log(pokémon[i].name);
    }
}

console.log('"mons with more than 1 type"');
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types.length > 1){
       //console.log(pokémon[i].name);
    }
}

console.log('"mons with type ONLY poison"');
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types[0] == 'poison' && pokémon[i].types.length < 2){
        //console.log(pokémon[i].name);
    }
}

console.log('"mons with 2nd type flying"');
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types[1] == 'flying'){
        //console.log(pokémon[i].name);
    }
}

console.log('"mons with type ONLY poison in reverse"');
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types[0] == 'poison' && pokémon[i].types.length < 2){
        var pokeName = pokémon[i].name.split("");
        pokeName.reverse();
        pokeName = pokeName.join("");
        //console.log(pokeName);
    }
}