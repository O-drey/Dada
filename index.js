// DRAG NAME
const nameDragQueenAudio = new Audio("./assets/sounds/enter-name-flipper.wav")
const btnDragName = document.getElementById("drag-name-btn")
const dragNameSpan = document.getElementById("drag-name-result")

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lazy-load1")

  images.forEach((img) => {
    img.style.opacity = "0"
    img.style.transform = "translateY(-20px)"
    img.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out"
  })

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          setTimeout(() => {
            img.src = img.dataset.src
            img.style.opacity = "1"
            img.style.transform = "translateY(0)"
          }, 500) // Délai de 500ms avant l'affichage de l'image
          observer.unobserve(img)
        }
      })
    },
    { rootMargin: "0px", threshold: 0.1 }
  )

  images.forEach((img) => {
    observer.observe(img)
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lazy-load2")

  images.forEach((img) => {
    img.style.opacity = "0"
    img.style.transform = "translateY(-20px)"
    img.style.transition = "opacity 1s ease-out, transform 1s ease-out"
  })

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          setTimeout(() => {
            img.src = img.dataset.src
            img.style.opacity = "1"
            img.style.transform = "translateY(0)"
          }, 500) // Délai de 500ms avant l'affichage de l'image
          observer.unobserve(img)
        }
      })
    },
    { rootMargin: "0px", threshold: 0.1 }
  )

  images.forEach((img) => {
    observer.observe(img)
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lazy-load3")

  images.forEach((img) => {
    img.style.opacity = "0"
    img.style.transform = "translateY(20px)"
    img.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out"
  })

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          setTimeout(() => {
            img.src = img.dataset.src
            img.style.opacity = "1"
            img.style.transform = "translateY(0)"
          }, 500) // Délai de 500ms avant l'affichage de l'image
          observer.unobserve(img)
        }
      })
    },
    { rootMargin: "0px", threshold: 0.1 }
  )

  images.forEach((img) => {
    observer.observe(img)
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lazy-load4")

  images.forEach((img) => {
    img.style.opacity = "0"
    img.style.transform = "translateY(20px)"
    img.style.transition = "opacity 1s ease-out, transform 1s ease-out"
  })

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          setTimeout(() => {
            img.src = img.dataset.src
            img.style.opacity = "1"
            img.style.transform = "translateY(0)"
          }, 500) // Délai de 500ms avant l'affichage de l'image
          observer.unobserve(img)
        }
      })
    },
    { rootMargin: "0px", threshold: 0.1 }
  )

  images.forEach((img) => {
    observer.observe(img)
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lazy-load5")

  images.forEach((img) => {
    img.style.opacity = "0"
    img.style.transform = "translateY(20px) rotate(-180deg)"
    img.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out"
  })

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          setTimeout(() => {
            img.src = img.dataset.src
            img.style.opacity = "1"
            img.style.transform = "translateY(0) rotate(0deg)"

            // Ajout de l'animation de rotation en boucle pendant 5 secondes
            img.style.animation = "rotateLoop 0.3s linear infinite"
            setTimeout(() => {
              img.style.animation = "none"
            }, 1000)
          }, 500) // Délai de 500ms avant l'affichage de l'image
          observer.unobserve(img)
        }
      })
    },
    { rootMargin: "0px", threshold: 0.1 }
  )

  images.forEach((img) => {
    observer.observe(img)
  })
})

// Ajout de l'animation de rotation via CSS
const style = document.createElement("style")
style.innerHTML = `
    @keyframes rotateLoop {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`
document.head.appendChild(style)

//Fonction où le nom drag est généré
const generateDragName = () => {
  // Possible titles
  const titles = ["MISS", "MRS", "LADY", "DAME", "MADAME", "QUEEN", "PRINCESS"]
  // First name options
  const firstNames = [
    "Peaches",
    "Backroll",
    "Orgazma",
    "Sequence",
    "Felicia",
    "Kiki",
    "Summer",
    "Iona",
    "Ornacia",
    "Ivana",
    "Charity",
    "Ophelia",
    "Toxic",
    "Ida",
    "Regina",
    "Alotta",
    "Mimi",
    "Frieda",
    "Tyra",
    "Bon Qui Qui",
    "Coco",
    "Amanda",
    "Zizi",
  ]

  // Last name options
  const lastNames = [
    "Rivers",
    "Lake",
    "Surprise",
    "Eleganza",
    "Goodnight",
    "Kayne",
    "Beaverhousen",
    "Balls",
    "Summers",
    "Vision",
    "Heaux",
    "CutaB*tch",
    "Filth",
    "Tucker",
    "K.Mart",
    "Wylde",
    "Latifah",
    "O'Plenty",
    "Bang Bang",
    "Foxxx",
    "Caliente",
    "Bush",
    "D-Lite",
    "Alert",
    "Anaconda",
    "Diamond",
  ]

  // Helper function: pick a random item from an array
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)]

  // Randomly select one from each category
  const title = random(titles)
  const first = random(firstNames)
  const last = random(lastNames)

  // Build the full drag name and remove extra space if no title
  const name = `${title} ${first} ${last}`.trim()

  // Display the generated drag name
  dragNameSpan.textContent = name

  // Play a sound effect when name is generated
  nameDragQueenAudio.play()
}
//Au click, on appelle la fonction generateDragName()
btnDragName.addEventListener("click", generateDragName)

//READING
const readingDiv = document.getElementById("reading")
const readingAudio = new Audio("./assets/sounds/sergeeo-turning-pages.wav")

//En appuyant sur Entrée, l'audio des pages se lance.
document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    readingAudio.volume = 0.3 //on diminue le volume à 30% avant de le jouer
    readingAudio.play()
    setTimeout(() => readingAudio.pause(), 9000) // au bout de 9 secondes, l'audio s'arrête
  }
})

//JOHNSON-RIVERA

const playFootsteps = () => {
  //On crée l'audio des pas.
  const audioFootsteps = new Audio(
    "./assets/sounds/footsteps-walking-in-high-heels-shoes-01.wav"
  )
  //on joue l'audio
  audioFootsteps.play()
}

//On sélectionne l'image qui est dans la div qui qui est dans la div #johnson-rivera-img
const johnsonRivera = document.querySelector("#johnson-rivera-img img")

//on attache un évènement survol à l'image
johnsonRivera.addEventListener("mouseover", () => {
  //lorsque l'image est survolée, l'audio est joué en décalage. Pourquoi le créer à chaque appel de la fonction ? Parce qu'un audio ne peut pas se rejouer en décalage lorsqu'il est déjà en cours de lecture.
  setTimeout(playFootsteps, 0) //on appelle la référence de la fonciton et pas la fonction directemetn sinon les audios se lancent sans attendre le timeout.
  setTimeout(playFootsteps, 2000)
  setTimeout(playFootsteps, 4000)
})

//RIOT
const dragQueenRiotDiv = document.getElementById("riot")
const dragQueenRiotAudio = new Audio(
  "./assets/sounds/slogan-manif-drag-queen.mp3"
)
// Select the swappable letter container
const original = document.querySelector(".original")
const swap = document.querySelector(".swap")

// When drag starts, hide R and show N
original.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "swap")
  original.style.opacity = "0"
  swap.style.opacity = "1"
})
// When drag ends, hide N and show R again
original.addEventListener("dragend", () => {
  original.style.opacity = "1"
  swap.style.opacity = "0"
})

// Au double-clic, l'audio de la manifestation se lance
dragQueenRiotDiv.addEventListener("dblclick", () => {
  dragQueenRiotAudio.play()
})

//FORBIDDEN DRAG
const forbiddenQueenRiotDiv = document.getElementById("forbidden-drag")
const forbiddenQueenRiotAudio = new Audio(
  "./assets/sounds/mozart-lacrimosa.wav"
)

// SVETLANA : changer le trigger par un autre de ton choix
forbiddenQueenRiotDiv.addEventListener("dblclick", () => {
  forbiddenQueenRiotAudio.play()
})

//PARTY
const divImgParty = document.getElementById("party")
const imgParty = document.querySelector("img#party-queens")
const audioParty = new Audio("./assets/sounds/party-music.mp3")

// CLOCK ROTATION

const partyClock = document.getElementById("party-clock")
partyClock.addEventListener("dragend", () => {
  //dès qu'on relache l'horloge au drag le son se lance et les images apparaissent en fond.
  divImgParty.style.backgroundImage =
    "linear-gradient(rgba(255,255,255,0), rgba(255, 255, 255, 0)), url('./assets/imgs/party.png')"
  partyClock.style.animation = "rotate"

  audioParty.volume = 0.2 // on initialise le son à 20%
  audioParty.play() //on joue la musique dès que le drag prend fin

  let volume = 0.2 //on initialise la variable volue au même volume que le morceau pour éviter des fluctuations de volume lorsque le morceau joue.
  const interval = setInterval(() => {
    if (volume < 1) {
      //tant que volume est inférieur à 1 on augmente progressivement le son
      volume = Math.min(volume + 0.1, 1) // Augmentation progressive : Math.min pour le minimum entre 0.2 et 1. Le son augment progressivement de 10%.
      audioParty.volume = volume //volume a une nouvelle valeur toutes les 4 secondes
    } else {
      clearInterval(interval) // l'intervalle s'arrête dès que le volume maximum est atteint.
    }
  }, 4000) // Le volume augmente toutes les 4 secondes.

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
  "./assets/imgs/harring-dog-green.png",
  "./assets/imgs/harring-dog-white.png",
  "./assets/imgs/harring-dog-red.png",
  "./assets/imgs/harring-dog-blue.png",
]
const audioSylvia = new Audio(
  "./assets/sounds/sylvia-rivera-y-all-better-quiet-down-1973.wav"
)

const observeDogs = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          imgDogs.forEach((el, index) => {
            let img = document.createElement("img")
            img.src = el
            img.id = `dog-${index + 1}`
            divDogs.appendChild(img)
          })

          audioDogs.volume = 0.7
          audioDogs.loop = true
          audioDogs.play()

          setTimeout(() => audioSylvia.play(), 4000)
          setTimeout(() => audioDogs.pause(), 9000)

          if (element.intersectionRatio > 0) {
            observer.unobserve(element.target)
          } // On arrête d'observer après l'ajout des chiens
        }
      })
    },
    { threshold: 0.5 } // Se déclenche dès que l'élément est complètement visible
  )

  observer.observe(divDogs)
}

const observeParty = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          audioParty.play()
          observeDogs()

          if (element.intersectionRatio > 0) {
            observer.unobserve(element.target)
          }
        }
      })
    },
    { threshold: 0.5 } // Se déclenche dès que l'élément est complètement visible
  )

  // Applique l'observer à chaque image
  document.querySelectorAll("#party").forEach((img) => {
    observer.observe(img)
  })
}

observeParty()
