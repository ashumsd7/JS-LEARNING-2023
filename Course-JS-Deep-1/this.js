var house= {
    price:100000,
    squareFeet:2000,
    owner:'Ashu',
    getPricePerSqFeet: function(){
        console.log(this)
        return this.price/this.squareFeet
    }



}

console.log(house.getPricePerSqFeet());