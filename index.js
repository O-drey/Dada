const divImgRivera = document.getElementById("sylvia-rivera")
const imgRivera = new Image()
const audioRivera = new Audio()
audioRivera.src =
  "./assets/sounds/sylvia-rivera-y-all-better-quiet-down-1973.wav"
imgRivera.src = "./assets/imgs/sylviarivera.png"
imgRivera.title = "Sylvia Rivera, 1973"

// DOGS
const divDogs = document.getElementById("dogs")

const audioDogs = new Audio()
audioDogs.src = "./assets/sounds/dog-barking-02.wav"
const imgDogs = [
  "./assets/imgs/harring-dog-purple.png",
  "./assets/imgs/harring-dog-orange.png",
  "./assets/imgs/harring-dog-yellow.png",
]

setTimeout(() => {
  divImgRivera.appendChild(imgRivera)
}, 3000)

const observeDogs = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          element.target.style.visibility = "visible"

          imgDogs.forEach((el, index) => {
            let img = document.createElement("img")
            img.src = el
            img.id = `dog-${index + 1}`
            divDogs.appendChild(img)
          })

          audioDogs.volume = 0.7
          audioDogs.loop = true
          audioDogs.play()

          setTimeout(() => audioDogs.pause(), 4000)
          console.log("is playing dogs barking")

          if (element.intersectionRatio > 0) {
            observer.unobserve(element.target)
          }
        }
      })
    },
    { threshold: 1 } // Se déclenche dès que l'élément est complètement visible
  )

  // Applique l'observer à chaque image
  document.querySelectorAll("#sylvia-rivera").forEach((img) => {
    observer.observe(img)
  })
}

const observeRivera = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          element.target.style.visibility = "visible"

          // setTimeout(() => {
          const text = document.createElement("p")
          text.className = "shouting-text"
          text.innerHTML = "Y'all better quiet down!"
          divImgRivera.appendChild(text)

          text.style.rotate = "-10deg"
          text.style.right = "20%"

          audioRivera.play()
          observeDogs()
          // }, 2500)
          if (element.intersectionRatio > 0) {
            observer.unobserve(element.target)
          }
        }
      })
    },
    { threshold: 1 } // Se déclenche dès que l'élément est complètement visible
  )

  // Applique l'observer à chaque image
  document.querySelectorAll("#sylvia-rivera").forEach((img) => {
    observer.observe(img)
  })
}

observeRivera()

// CURTAINS
const curtains = document.getElementById("curtains")
const curtainsImg = [
  "./assets/imgs/curtain-left.png",
  "./assets/imgs/curtain-right.png",
]

// curtainsImg.forEach((curtain) => {
//   curtains.appendChild(curtain)
// })

const curtainRight = document.getElementById("curtain-right")
const curtainLeft = document.getElementById("curtain-left")
const curtainAudio = new Audio()
curtainAudio.src = "./assets/sounds/curtain-slide-pull-05.wav"
const mouseDrag = () => {
  curtainRight.addEventListener("drag", () => {
    curtainAudio.play()
  })
  curtainLeft.addEventListener("drag", () => {
    curtainAudio.play()
  })
  curtainLeft.addEventListener("dragleave", () => {
    curtains.style.visibility = "hidden"
  })
  curtainRight.addEventListener("dragleave", () => {
    curtains.style.visibility = "hidden"
  })
}

mouseDrag()
