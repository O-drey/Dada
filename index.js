const divImgRivera = document.getElementById("party")
console.log(divImgRivera)
const imgRivera = document.querySelector("img#party-queens")
const audioRivera = new Audio()
audioRivera.src =
  "./assets/sounds/sylvia-rivera-y-all-better-quiet-down-1973.wav"

// DOGS
const divDogs = document.getElementById("dogs")

const audioDogs = new Audio()
audioDogs.src = "./assets/sounds/dog-barking-02.wav"
const imgDogs = [
  "./assets/imgs/harring-dog-purple.png",
  "./assets/imgs/harring-dog-orange.png",
  "./assets/imgs/harring-dog-yellow.png",
]

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
  document.querySelectorAll("#party").forEach((img) => {
    observer.observe(img)
  })
}

const observeRivera = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          console.log(element.intersectionRatio)
          // element.target.style.visibility = "visible"

          const text = document.createElement("p")
          text.className = "shouting-text"
          text.innerHTML = "Y'all better quiet down!"
          divImgRivera.appendChild(text)

          text.style.rotate = "-10deg"
          text.style.right = "20%"

          audioRivera.play()
          observeDogs()
          if (element.intersectionRatio > 0) {
            observer.unobserve(element.target)
          }
        }
      })
    },
    { threshold: 1 } // Se déclenche dès que l'élément est complètement visible
  )

  // Applique l'observer à chaque image
  document.querySelectorAll("party").forEach((img) => {
    observer.observe(img)
  })
}

// CURTAINS
const curtains = document.getElementById("curtains")
const curtainsImg = [
  "./assets/imgs/curtain-left.png",
  "./assets/imgs/curtain-right.png",
]
let curtainHadInteraction = false

const curtainRight = document.getElementById("curtain-right")
const curtainLeft = document.getElementById("curtain-left")

const curtainAudio = new Audio()
curtainAudio.src = "./assets/sounds/curtain-slide-pull-05.wav"

const mouseDrag = () => {
  curtainRight.addEventListener("drag", () => {
    curtainAudio.play()
    curtainHadInteraction = true
  })
  curtainLeft.addEventListener("drag", () => {
    curtainAudio.play()
    curtainHadInteraction = true
  })
  curtainLeft.addEventListener("dragleave", () => {
    curtains.style.visibility = "hidden"
    curtainHadInteraction = true
  })
  curtainRight.addEventListener("dragleave", () => {
    curtains.style.visibility = "hidden"
    curtainHadInteraction = true
  })
}

mouseDrag()

const readingDiv = document.getElementById("reading")
console.dir(readingDiv)
const readingAudio = new Audio("./assets/sounds/sergeeo-turning-pages.wav")

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    readingAudio.volume = 0.3
    readingAudio.play()
    console.log(readingAudio.currentTime)
    setTimeout(() => readingAudio.pause(), 9000)
  }
})

const johnsonRiveraAudio = new Audio("./assets/sounds/temawas-applause.mp3")
const johnsonRiveraDiv = document.getElementById("johnson-rivera")
console.dir(johnsonRiveraDiv)

johnsonRiveraDiv.addEventListener("mouseover", () => {
  johnsonRiveraAudio.play()
  if (johnsonRiveraAudio.currentTime === 8000) {
    johnsonRiveraAudio.pause()
    johnsonRiveraAudio.currentTime = 0
  }
})

const audioFootsteps = new Audio(
  "./assets/sounds/footsteps-walking-in-high-heels-shoes-01.wav"
)

const playFootsteps = () => {
  audioFootsteps.play()
}

if (curtainHadInteraction) {
  setTimeout(playFootsteps(), 3000)
  setTimeout(() => {
    playFootsteps()
    audioFootsteps.playbackRate = 1.5
  }, 2500)
  setTimeout(playFootsteps(), 1500)
}

if (curtainHadInteraction) {
  observeRivera()
} else {
}

const dragQueenRiotDiv = document.getElementById("riot")
const dragQueenRiotAudio = new Audio(
  "./assets/sounds/slogan-manif-drag-queen.mp3"
)

dragQueenRiotDiv.addEventListener("dblclick", () => {
  dragQueenRiotAudio.play()
})
