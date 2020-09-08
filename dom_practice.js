const image = document.querySelectorAll("#skyline")
console.log(image)

const welcome = document.querySelector('h2')
welcome.innerText = welcome.innerText + "!!!"
console.log(welcome)

const first = document.querySelectorAll(".list")
console.log(first)
//when you use querySelectorAll it finds all times mentioned and returns in array

const listItem = document.querySelectorAll("li")
// console.log(listItem[0].innerText)

listItem[2].style.color = "purple"

listItem[3].innerText = "Jamboree sandwich at the Jambo-ree"

const zoo = document.createElement('img')

zoo.setAttribute("src", "https://www.dallasparks.org/ImageRepository/Document?documentID=971")

const newImage = listItem[0].appendChild(zoo)

newImage.style.height= "100px"

