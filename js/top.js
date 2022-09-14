//Photos stored in an Arr
const photos = [
    '../travel-imgs/surfwomen.jpg',
    '../travel-imgs/spanishcountrysidesetenil-5b6609a56f1b4eabb1be473f1e4919d2.jpg',
    '../travel-imgs/holiday-season-in-oaxaca.jpg',
    '../travel-imgs/france-2.jpg',
    '../travel-imgs/cameraman.jpg',
    '../travel-imgs/greenvalley.jpg',
    '../travel-imgs/airport1.jpg',
    '../travel-imgs/brazil2.jpg',
    '../travel-imgs/brazilwoman1.jpg',
    '../travel-imgs/brazil3.jpg'
 ]

//Each CSS GRID BOX is stored in a Variable
const picHolder1 = document.querySelector('.box1')
const picHolder2 = document.querySelector('.box2')
const picHolder3 = document.querySelector('.box3')
const picHolder4 = document.querySelector('.box4')
const picHolder5 = document.querySelector('.box5')
const picHolder6 = document.querySelector('.box6')
const picHolder7 = document.querySelector('.box7')

//Array that holds all CSS grid boxes
const boxes = [
    picHolder1,
    picHolder2,
    picHolder3,
    picHolder4,
    picHolder5,
    picHolder6,
    picHolder7
]

// console.log(photos[a]) 

function createImg () {
    // Loops through CSS Boxes [inside the html]
    for(let i = 0; i < boxes.length; i++) {
        // Shuffles each photo in photos array
        let a = Math.floor(Math.random() * photos.length);
        // Create new img element inside html document
        let htmlImg = document.createElement('img')
        //stores contents of SHUFFLED photos array INSIDE htmlImg.  
        htmlImg.src = photos.splice(a,1)
        //Takes every box in boxes arr amd changes totents
        boxes[i].appendChild(htmlImg)
    }
}
//Calls function
createImg()