
export class Rich {

constructor(name,worth,image) {

    this.name = name,
    this.worth = worth,
    this.image = image

  }

 addToHtml(){
      
id_parent.innerHTML += 
`<div class="inner-div">
<h2>name is : ${this.name}</h2>
<h2>${this.name} is worth : ${this.worth}</h2>
<img src="${this.image}" alt="${this.name}">
</div>`

    }


}