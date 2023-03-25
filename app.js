
const goPrev = ()=>{
    // slideIndex--;
    console.log(slideIndex);

    showSlides();
     }
    
     const goNext = ()=>{
        // slideIndex++;
        // console.log(slideIndex);
        showSlides();
 }

var slideIndex = 0;
showSlides(); // call showslide method

function showSlides()
{
	var i;

	// get the array of divs' with classname image-sliderfade
	var slides = document.getElementsByClassName("slide");
	
	// get the array of divs' with classname dot


	for (i = 0; i< slides.length; i++) {
		// initially set the display to
		// none for every image.
		slides[i].style.display = "none";
	}

	// increase by 1, Global variable
	slideIndex++;

	// check for boundary
	if (slideIndex > slides.length)
	{
		slideIndex = 1;
	}

	
	slides[slideIndex - 1].style.display = "block";
	

	// Change image every 3 seconds
	setTimeout(showSlides, 3000);
}


// const slides= document.querySelectorAll(".slide")
// let counter=0;

// slides.forEach(
//     (slide,index) =>{
//         slide.style.left = `${index*100}%`
//     }
// )

// const goPrev = ()=>{
//     counter--;
//     slideImage();
// }

// const goNext = ()=>{
//     counter++;
//     slideImage();
// }

// const slideImage = ()=>{
//     slides.forEach( (slide)=> {
        
        
//         slide.style.transform = `translateX(-${counter*100}%)`
       
//     })
// }

