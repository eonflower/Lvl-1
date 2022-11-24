const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const data = JSON.parse(xhr.responseText);
      const arr = data.objects[0].pokemon;

      pokemonData(arr)
    } 
}



     pokemonData = (array) => {
        for (let i = 0; i < array.length; i++) {
            let div = document.createElement("div")
            let h1 = document.createElement("h1")
            let h3 = document.createElement("h3")
            h1.innerText = array[i].name;
            h3.innerText = array[i].resource_uri;
            document.body.appendChild(div);
            div.appendChild(h1);
            div.appendChild(h3);
        
         }
    }
