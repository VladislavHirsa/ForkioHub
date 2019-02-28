/*We have blocks and  in each of them arrows(arrow-left, arrow-right);

*/




(function carouselBlocks(){
let arrows_left = [...document.getElementsByClassName("carousel__describe__arrows-left")]     //
let arrows_right = [...document.getElementsByClassName("carousel__describe__arrows-right")];
let carouselContainer = [...document.getElementsByClassName("about__men")];
let index = carouselContainer.findIndex((search) => !search.classList.contains('hide_man'));
let carousel = document.getElementById("carousel");



carousel.addEventListener("click", function (e) {
    if (e.target.classList.contains("carousel__describe__arrows-right")) {
        index = arrows_right.indexOf(e.target)

        for (let i = 0; i < arrows_right.length; i++) {
            console.log(carouselContainer[i].classList.add("hide_man"))
        }

        ++index;

        if (index == carouselContainer.length) {
            index = 0
        }

        carouselContainer[index].classList.remove("hide_man")

    }
})


carousel.addEventListener("click", function (e) {
    if (e.target.classList.contains("carousel__describe__arrows-left")) {
        index = arrows_left.indexOf(e.target)
        for (let i = 0; i < arrows_left.length; i++) {
            carouselContainer[i].classList.add("hide_man")
        }


        if (index == 0) {
            index = carouselContainer.length
        }

        --index;

        carouselContainer[index].classList.remove("hide_man")

    }
})

}())
