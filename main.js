//Create function to Shuffle placement of images
//box1 - box7 ..

// Naviator to different grid by pressing buttons

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

createImg('img1','./movie-img/airbud_.jpg','box1', 30)
createImg('img2','./movie-img/holes.jpg','box2', 80)
createImg('img3','./movie-img/blade.jpg','box3', 80)
createImg('img4','./movie-img/spykids.jpg','box4', 80)
createImg('img5','./movie-img/outcold.jpg','box5', 80)
createImg('img6','./movie-img/punks_.jpg','box6', 80)
createImg('img7','./movie-img/theotherme.jpg','box7', 80)
// create ('img3','./movie-img/')

