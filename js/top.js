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
    
    createImg('img1','../travel-imgs/surfwomen.jpg','box1')
    createImg('img2','../travel-imgs/spanishcountrysidesetenil-5b6609a56f1b4eabb1be473f1e4919d2.jpg','box2')
    createImg('img3','../travel-imgs/holiday-season-in-oaxaca.jpg','box3')
    createImg('img4','../travel-imgs/france-2.jpg','box4')
    createImg('img5','../travel-imgs/cameraman.jpg','box5')
    createImg('img6','../travel-imgs/greenvalley.jpg','box6')
    createImg('img7','../travel-imgs/airport1.jpg','box7')