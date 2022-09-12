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
    
    createImg('img1','../sport-imgs/zebpowell2.jpg','box1')
    createImg('img2','../sport-imgs/tyshawnjones1.jpg','box2')
    createImg('img3','../sport-imgs/giorgi1.jpg','box3')
    createImg('img4','../sport-imgs/Andrew-2.jpg','box4')
    createImg('img5','../sport-imgs/simone-biles1.jpg','box5')
    createImg('img6','../sport-imgs/isreael-adesanya-1.jpg','box6')
    createImg('img7','../sport-imgs/sandsurfing1.jpg','box7')