//Create function to Shuffle placement of images
//box1 - box7 ..

// Naviator to different grid by pressing buttons

// Function created to insert imgs into css grid boxes
function createImg (name, URL, boxName, width) {
// Create BLANK img object so HTML box is able to hold IMG
name = document.createElement("img")
// Insert URL because need content to fill the img object
name.src = URL
// Reset image size so it can display as desired
name.style.width = `${width}%`
// so we can put created img object inside Specified html box 
document.querySelector(`.${boxName}`).appendChild(name)
}

createImg('img1','../movie-imgs/airbud_.jpg','box1')
createImg('img2','../movie-imgs/holes.jpg','box2')
createImg('img3','../movie-imgs/blade.jpg','box3')
createImg('img4','../movie-imgs/spykids.jpg','box4')
createImg('img5','../movie-imgs/outcold.jpg','box5')
createImg('img6','../movie-imgs/punks_.jpg','box6')
createImg('img7','../movie-imgs/theotherme.jpg','box7')