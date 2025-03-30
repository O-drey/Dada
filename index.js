// DRAG NAME

const nameDragQueenDiv = document.getElementById("curtain")
const nameDragQueenAudio = new Audio("./assets/sounds/enter-name-flipper.wav")
const nameDragQueenAudioSubmit = new Audio(
  "./assets/sounds/enter-name-flipper-laser.wav"
)

const btnDragName = document.getElementById("drag-name-btn")
const dragNameSpan = document.getElementById("drag-name-result")
console.log(btnDragName)

const generateDragName = () => {
  const name = "fdfjdjfod"
  dragNameSpan.textContent = name
}
btnDragName.addEventListener("click", generateDragName)

//READING
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

//JOHNSON-RIVERA
const audioFootsteps = new Audio(
  "./assets/sounds/footsteps-walking-in-high-heels-shoes-01.wav"
)

const playFootsteps = () => {
  audioFootsteps.play()
}

const johnsonRivera = document.querySelector("#johnson-rivera-img img")
console.log("johnsonRivera :", johnsonRivera)

johnsonRivera.addEventListener("mouseover", () => {
  setTimeout(playFootsteps(), 0)
  setTimeout(() => {
    playFootsteps()
    audioFootsteps.playbackRate = 1.5
  }, 1500)
  setTimeout(() => {
    playFootsteps()
    audioFootsteps.playbackRate = 2
  }, 2500)
})

//RIOT
const dragQueenRiotDiv = document.getElementById("riot")
const dragQueenRiotAudio = new Audio(
  "./assets/sounds/slogan-manif-drag-queen.mp3"
)

dragQueenRiotDiv.addEventListener("dblclick", () => {
  dragQueenRiotAudio.play()
})

//FORBIDDEN DRAG
const forbiddenQueenRiotDiv = document.getElementById("riot")
const forbiddenQueenRiotAudio = new Audio(
  "https://youtu.be/k1-TrAvp_xs?si=AoCcB-ihlUJc22NN&t=11"
)

forbiddenQueenRiotDiv.addEventListener("dblclick", () => {
  forbiddenQueenRiotAudio.play()
})

//PARTY
const divImgParty = document.getElementById("party")
console.log(divImgParty)
const imgParty = document.querySelector("img#party-queens")
const audioParty = new Audio()
audioParty.src =
  "./assets/sounds/sylvia-rivera-y-all-better-quiet-down-1973.wav"

// CLOCK ROTATION

const partyClock = document.getElementById("party-clock")
partyClock.addEventListener("drag", () => {
  divImgParty.style.backgroundImage =
    "linear-gradient(rgba(255,255,255,0), rgba(255, 255, 255, 0)), url('./assets/imgs/party.png')"
  partyClock.style.animation = "rotate"

  // const keyFrames = document.createElement("style")

  // keyFrames.innerHTML = `
  // @keyframes party-clock {
  //   from {
  //     transform: rotate(0deg);
  //   }
  //   to {
  //     transform: rotate(360deg);
  //   }
  // }

  // #party-joy-clock {
  //   animation: party-clock 1s ease infinite;
  // }
  // `
  // partyClock.appendChild(keyFrames)
})

// DOGS
const divDogs = document.getElementById("dogs")
const audioDogs = new Audio("./assets/sounds/dog-barking-02.wav")
const imgDogs = [
  "./assets/imgs/harring-dog-red.png",
  "./assets/imgs/harring-dog-green.png",
  "./assets/imgs/harring-dog-blue.png",
  "./assets/imgs/harring-dog-white.png",
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

const observeParty = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          console.log(element.intersectionRatio)
          // element.target.style.visibility = "visible"

          const text = document.createElement("p")
          text.className = "shouting-text"
          text.innerHTML = "Y'all better quiet down!"
          divImgParty.appendChild(text)

          text.style.rotate = "-10deg"
          text.style.right = "20%"

          audioParty.play()
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

observeParty()
