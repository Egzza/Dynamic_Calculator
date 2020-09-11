let f_item = document.getElementById("fItem")
let f_price = document.getElementById("fPrice")


// Add event listener for adding items
document.getElementById("fButton").addEventListener('click',(event)=>{
    event.stopPropagation()
    let item=document.getElementById("fItem").value
    let price=Number(document.getElementById("fPrice").value)
    let total=document.getElementById("cost")
    

    if(item!=""){
        console.log("Valid item")
        f_item.className="valid"
        if(!(Number.isNaN(price)||price<0||price=="")){
            console.log("Valid price")
            f_price.className="valid"
            addToList(item,price)
            let curr=Number(total.innerHTML)
            total.innerHTML = price+curr
            f_item.value=""
            f_price.value=""
        } else{
            console.log("Inavlid price")

            f_price.className="invalid"
        }
        
    } else {
        console.log("Inavlid item")
        f_item.className="invalid"
        if(Number.isNaN(price)||price<0||price==""){
            console.log("invalid price")
            f_price.className="invalid"
        }
    }
})

// Add event listener for nodes with class "remove-item"
document.body.addEventListener('click',(event)=>{
    if(event.target.classList.contains("remove-item")){
        remove_item(event.target.parentNode)
    }
})

// Append new item to list
function addToList(item,price){

    let node_item=document.createElement("li")
    node_item.className = "list-item"
    node_item.setAttribute("data-price", price)
    let list_item = get_element_li(item,price)
    node_item.innerHTML += list_item
    let lst = document.getElementById("list")
    lst.appendChild(node_item)
}

// List item template
function get_element_li (item, price) {
    return `Item: ${item} |   Price: ${price}   <button class="remove-item">❌</button>`
}
  
// Remove child node
let remove_item  = (node_to_remove) => {
    let rm_item=node_to_remove
    subtractFromTotal(rm_item)
    let lst=document.getElementById("list")
    lst.removeChild(rm_item)
}

// Subtract from total
function subtractFromTotal(el){
    //let line = el.innerHTML
    let total=document.getElementById("cost")
    let curr=Number(total.innerHTML)

    let price = el.getAttribute("data-price")

    total.innerHTML = curr-price
}