import tabby from "./pet/tabby.jpg"
import husky from "./pet/husky.jpg"
import grizz from "./pet/grizz.jpg"
import aussie from "./pet/aussie.jpg"
import akita from "./pet/akita.jpg"
import persian from "./pet/persian.jpg"
import sphynx1 from "./pet/Sphynx1.jpg"
import sphynx2 from "./pet/sphynx2.jpg"
import sphynx3 from "./pet/sphynx3.jpg"
import sphynx4 from "./pet/sphynx4.jpg"
import ham from "./pet/ham.jpg"
import beardie from "./pet/beardie.jpg"
import orange from "./pet/orange.jpg"

const friends = [
    {
      name: "Ben",
      age: 29,
      pets: [
        {
          name: "chonk",
          breed: "tabby",
          img: tabby
        },{
          name: "John Johnson",
          breed: "husky",
          img: husky
        },{
          name: "Bear the bear",
          breed: "Grizzly",
          img: grizz
        }
      ]
    },{
      name: "Leslie",
      age: 31,
      pets: [
        {
          name: "Sir",
          breed: "Australian Shepard",
          img: aussie
        }
      ]
    },{
      name: "Eli",
      age: 28,
      pets: [
        {
          name: "Indy",
          breed: "Akita",
          img: akita
        },{
          name: "Anna",
          breed: "persian cat",
          img: persian
        }
      ]
    },{
      name: "Jacob",
      age: 35,
      pets: [
        {
          name: "fluffy",
          breed: "sphynx cat",
          img: sphynx1
        },{
          name: "patches",
          breed: "sphynx cat",
          img: sphynx2
        },{
          name: "tiger",
          breed: "sphynx cat",
          img: sphynx3
        },{
          name: "oscar",
          breed: "sphynx cat",
          img: sphynx4
        }
      ]
    },{
      name: "Aloe",
      age: 26,
      pets: [
        {
          name: "ham",
          breed: "black cat",
          img: ham
        }
      ]
    },{
      name: "Ernie",
      age: 25,
      pets: [
        {
          name: "pluto",
          breed: "Bearded Dragon",
          img: beardie
        },{
          name: "Dill",
          breed: "orange cat",
          img: orange
        }
      ]
    }
  ]
  
export default friends