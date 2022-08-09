export class House{
    constructor({id, bedrooms, bathrooms, year, price, description, imgUrl}){
        this.id = id
        this.bedrooms = bedrooms || ''
        this.bathrooms = bathrooms || ''
        this.year = year || ''
        this.price = price || ''
        this.description = description || ''
        this.img = imgUrl || ''
    }

    get Template(){
        return /*html */ `
    <div class="col-4 p-3">
        <div class="bg-white elevation-2">
            <img class="img-fluid" src="${this.img}" alt="">
            <div class="p-2">
                <h4 class="text-center"> ${this.bedrooms} Beds | <span class="text-success">$<b>${this.price}</b></span></h4>
                <p>${this.description}</p>
                <p class="text-end text-dark m-0">Bathrooms: <b>${this.bathrooms}</b> in <b>${this.year}</b></p>
                <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Adjust Car Settings</button> 
                <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
            </div>
        </div>
      </div>
        `
    }

}
