interface MusicPlayerDevice {
    volume: number;
    time: number;
    song: string;
    details: Details;
}
interface Details{
    author: string;
    year: number;
}

const player: MusicPlayerDevice = {
    volume: 70,
    time: 100,
    song: "thank you",
    details: {
        author: "camilo",
        year: 2015
    }
}

//nub way to do it
console.log("el volumen actual es de: ", player.volume);
console.log("el tiempo actual es de: ", player.time);
console.log("la cancion actual es: ", player.song);
console.log("el autor es: ", player.details.author);


//medium level
const { volume, time, song, details } = player;
const {author} = details

console.log("el volumen actual es de: ", volume);
console.log("el tiempo actual es de: ", time);
console.log("la cancion actual es: ", song);
console.log("el autor es: ", author);

//pro
//vol and singer are customized names
//authos is a proporty, not a class 
const { volume:vol, details:{author:singer} } = player;

console.log("el volumen actual es de: ", vol);
console.log("el autor es: ", singer);