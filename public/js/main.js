
let progress = document.querySelectorAll("p")[1]

console.log(progress);

let littleBottle = document.querySelectorAll(".littleBottle")
let bigBottle = document.querySelector(".bigBottle")

console.log(littleBottle);

let total = 0

littleBottle.forEach(element => {
    element.addEventListener("click", () => {
        element.style.background = "#3ad0f9"
        element.style.transition = "0.3s"
        

        if (element.querySelector("p").innerText == "250 ml") {
            
            total += 12.5 
            console.log(total);
            move(total)

            switch (total) {
                case 12.5:
                    progress.innerText = "12,5 %"
                    break;

                case 25:
                    progress.innerText = "25 %"
                    break;

                case 37.5:
                    progress.innerText = "37.5 %"
                    break;

                case 50:
                    progress.innerText = "50 %"
                    break;
                
                case 62.5:
                    progress.innerText = "62.5 %"
                    break;

                case 75:
                    progress.innerText = "75 %"
                    break;

                case 87.5:
                    progress.innerText = "87.5 %"
                    break;

                case 100:
                    progress.innerText = "100 %"
                    break;

            }
        }
        
    })

    element.addEventListener("dblclick", () => {
        element.style.background = ""

        total -= 12.5
            console.log(total);
            move(total)
      
    })
    
})

let i = 0;

function move(quantite) {
  if (i == 0) {
    i = 1;

    let elem = document.getElementsByClassName("progress")[0];
    let height = 1;
    let id = setInterval(frame, 10);

    function frame() {
      if (height >= quantite) {
        clearInterval(id);
        i = 0;

      } else {
        height++;
        elem.style.height = height + "%";
      }
    }
  }
}