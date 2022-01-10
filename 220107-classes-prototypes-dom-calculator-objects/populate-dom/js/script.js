const data = [
  { name: "Owl",
    src: "img/black.jpg",
    text: "Shot in the dark"
  },
  { name: "Umbrellas",
    src: "img/red.jpg",
    text: "Puddle of red"
  },
  { name: "Orator",
    src: "img/green.jpg",
    text: "Friends, Romans and countrymen..."
  },
  { name: "Jellyfish",
    src: "img/blue.jpg",
    text: "Light up my life"
  }
]

const main = document.body.querySelector("main")

data.forEach(({name, src, text }) => {
  const div = document.createElement("div")
  div.id = name.toLowerCase()
  div.style = "text-align: center;"

  const h1 = document.createElement("h1")
  h1.innerText = name
  const img = document.createElement("img")
  img.src = src
  img.alt = name
  const p = document.createElement("p")
  p.innerHTML = text
  
  div.appendChild(h1)
  div.appendChild(img)
  div.appendChild(p)

  main.appendChild(div)

})