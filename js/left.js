//Photos stored in an Arr
const photos = [
    '../sport-imgs/tyshawnjones1.jpg',
    '../sport-imgs/giorgi1.jpg',
    '../sport-imgs/Andrew-2.jpg',
    '../sport-imgs/simone-biles1.jpg',
    '../sport-imgs/isreael-adesanya-1.jpg',
    '../sport-imgs/sandsurfing1.jpg',
    '../sport-imgs/zebpowell1.jpg',
    '../sport-imgs/zebpowell2.jpg',
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