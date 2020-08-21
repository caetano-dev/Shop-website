//Get the div for adding all items
//const item_place = document.querySelector('.items-place')

//create div for each item's image/name/price
for(let i = 0; i < 7; i++){
    const item_slot = document.createElement('div')
    item_slot.setAttribute('class', 'item_image')

    const item_image = document.createElement('img')
    item_image.setAttribute('class', 'item_image')
    item_image.setAttribute('src', 'tshirt.jpg')

    const item_name = document.createElement('p')
    item_name.setAttribute('class', 'item_name')
    item_name.innerHTML = "cool T-shirt"
    //it can be also an <a/> tag

    const item_price = document.createElement('p')
    item_price.setAttribute('class', 'item_price')
    item_price.innerHTML = "$100,00"

    //append item image/price/name to item_place
    item_slot.appendChild(item_image)
    item_slot.appendChild(item_name)
    item_slot.appendChild(item_price)

    document.getElementById("items-place").appendChild(item_slot) 
}
//css
