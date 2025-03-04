//CHANGER LE FOND
const body = document.body
body.style.backgroundImage = "url('./assets/background.jpg')"
body.style.margin = 0
body.style.padding = 0

// const sylviaRiveraImg = document.getElementById("sylvia-img")
const divImgRivera = document.getElementById("sylvia-rivera")
const imgRivera = new Image()
const audioRivera = new Audio()
// const textRivera = new Text("Y'all better quiet down")

imgRivera.src = "./assets/imgs/sylviarivera.png"
imgRivera.title = "Sylvia Rivera, 1973"
divImgRivera.style.textAlign = "right"
divImgRivera.style.display = "flex"
divImgRivera.style.justifyContent = "right"
divImgRivera.style.alignItems = "center"

audioRivera.src =
  "./assets/sounds/sylvia-rivera-y-all-better-quiet-down-1973.wav"

setTimeout(() => {
  divImgRivera.appendChild(imgRivera)
}, 3000)

const observeRivera = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((element) => {
        console.log(element)
        if (element.isIntersecting) {
          element.target.style.visibility = "visible"
          document.querySelectorAll("#sylvia-rivera").forEach((el) => {
            console.log(el)
          })

          setTimeout(() => {
            const text = document.createElement("p")
            text.innerHTML = "Y'all better quiet down!"
            text.style.fontFamily = "Protest Guerrilla"
            text.style.color = "#fff"
            text.style.fontSize = "48px"
            text.style.display = "inline-block"
            // text.innerHTML = textRivera.data
            divImgRivera.appendChild(text)

            text.style.rotate = "-10deg"

            // setInterval(() => {
            //   text.style.rotate = "30deg"
            // }, 1000)
            // setInterval(() => (text.style.rotate = "-45deg"), 2000)

            audioRivera.play()
          }, 2500)
        }
        // else element.target.style.visibility = "hidden"
      })
    },
    { threshold: 1 } // Se déclenche dès que l'élément est complètement visible
  )

  // Applique l'observer à chaque vers

  document.querySelectorAll("#sylvia-rivera").forEach((img) => {
    console.log("img", img)
    observer.observe(img)
  })
}

observeRivera()

// DOGS

const divDogs = document.getElementById("dogs")
divDogs.style.display = "flex"
divDogs.style.justifyContent = "space-evenly"
divDogs.style.alignItems = "center"
divDogs.style.padding = "160px"

console.log("divDogs", divDogs)
const audioDogs = new Audio("./assets/sounds/dog-barking-02.wav")
const imgDogs = [
  "./assets/imgs/harring-dog-purple.png",
  "./assets/imgs/harring-dog-orange.png",
  "./assets/imgs/harring-dog-yellow.png",
]

setTimeout(() => {
  imgDogs.forEach((el) => {
    let img = document.createElement("img")
    img.src = el
    divDogs.appendChild(img)
  })
}, 3000)

const observeDogs = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((element) => {
        console.log(element)
        if (element.isIntersecting) {
          element.target.style.visibility = "visible"
          document.querySelectorAll("#dogs").forEach((el) => {
            console.log(el)
          })

          setTimeout(() => {
            // setInterval(() => {
            //   text.style.rotate = "30deg"
            // }, 1000)
            // setInterval(() => (text.style.rotate = "-45deg"), 2000)

            audioDogs.play()
            console.log("is playing dogs barking")
          }, 2500)
        }
        // else element.target.style.visibility = "hidden"
      })
    },
    { threshold: 1 } // Se déclenche dès que l'élément est complètement visible
  )

  // Applique l'observer à chaque image

  document.querySelectorAll("#sylvia-rivera").forEach((img) => {
    console.log("img", img)
    observer.observe(img)
  })
  console.log("rivera")
}
