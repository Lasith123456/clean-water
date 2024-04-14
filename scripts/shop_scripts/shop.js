let cart = [];

// let splashCount = 0;
// window.onload=()=>{
//     if (splashCount !==2){
//         window.location.href = "../pages/splash.html"
//     }else {
//
//     }
//
//
// }








let productDetails = [
    {
        id:1,
        title: "Promotional printed t-shirt ladies",
        sizes: ["S","M","L","XL"],
        image: 1,
        description: "Elevate your brand with our stylish Promotional Printed T-Shirt for " +
            "ladies. Comfortable, flattering fit crafted from premium fabric, customizable with vibrant prints. " +
            "Perfect for promoting your message with flair.",
        colors:["#023020","#301934","#E5E4E2"],
        availability: true,
        category: ["ladies","t-shirts"],
        price:350.00,
        comments:[

            {
            name:"Lasith Hettiarachchi",
            commentGiven: "Comfortable, stylish, durable fabric, vibrant colors, perfect fit, " +
                "easy care, versatile wear, quality stitching, affordable, breathable material.",

            },

            {
            name:"Ishan Dakshina",
            commentGiven: "Comfortable fit, vibrant colors, and durable fabric. Highly recommended!",

            },

        ]
    },
    {
        id:2,
        title: "Promotional Clean water Mug",
        sizes: [],
        image: 2,
        description: "Introducing our Promotional Clean Water Mug: a sleek, eco-friendly solution to " +
            "hydrate while spreading awareness. Each purchase supports clean water " +
            "initiatives. Stylish. Sustainable. Sip for a cause.",
        colors:["White","Blue"],
        availability: true,
        category: ["mugs","cups"],
        price:100.00,
        comments:[]
    },
    {
        id:3,
        title: "Promotional printed t-shirt save water",
        sizes: ["S","M","L","XL"],
        image: 3,
        description: "Introducing our \"Save Water\" Promotional Printed T-Shirt, a stylish statement " +
            "piece with a purpose. Spread awareness while staying comfortable in this eco-friendly tee. Join " +
            "the movement, conserve water, and make a difference.",
        colors:["White","Red","Black"],
        availability: true,
        category: ["ladies","t-shirts","gents"],
        price:450.00,
        comments:[]
    },
    {
        id:4,
        title: "Promotional printed t-shirt drink water",
        sizes: ["S","M","L","XL"],
        image: 4,
        description: "Stay hydrated in style with our Promotional Printed T-Shirt, featuring a vibrant \"Drink Water\" " +
            "design. Comfortable, breathable, and eco-friendly, it's the perfect way to promote hydration and " +
            "wellness. Join the movement and sip responsibly!",
        colors:["White","Purple","Black"],
        availability: true,
        category: ["ladies","t-shirts","gents"],
        price:350.00,
        comments:[]
    },
    {
        id:5,
        title: "Promotional water bottles-clear",
        sizes: [],
        image: 5,
        description: "Introducing our Clear Promotional Water Bottles: sleek, durable, and eco-friendly. Stay " +
            "hydrated on-the-go while promoting your brand with every sip. Clear design for easy monitoring of " +
            "water intake. Hydrate responsibly, promote sustainability.",
        colors:["Red","Blue","Green"],
        availability: true,
        category: ["mugs","cups"],
        price:100.00,
        comments:[]
    },
    {
        id:6,
        title: "Clean water wrist Bands",
        sizes: [],
        image: 6,
        description: "Introducing our Clean Water Wrist Bands: Stylish and impactful accessories promoting clean " +
            "water initiatives. Wear your support proudly, each band represents a donation towards providing clean " +
            "water to those in need. Join the movement, make a difference, one wristband at a time.",
        colors:["Red","Blue","Green","Orange","White"],
        availability: true,
        category: ["Others"],
        price:20.00,
        comments:[]
    },
    {
        id:7,
        title: "Capsule water bottle",
        sizes: [],
        image: 7,
        description: "Introducing our innovative Capsule Water Bottle: Compact, portable, and designed for " +
            "convenience on-the-go. With its unique capsule shape, it fits seamlessly into bags and pockets. Stay " +
            "hydrated anytime, anywhere, with style and practicality combined.",
        colors:["Red","Blue","Green","Orange","White"],
        availability: true,
        category: ["Others"],
        price:20.00,
        comments:[]
    },

];

let categories = ['all'];


if (cart.length===0 ){
    document.getElementById("cart-value").style.display= 'none';
}else{
    document.getElementById("cart-value").style.display= 'block';
}

let productCard = document.getElementById("product-card");

let itemsDisplay = ()=>{



    return (productCard.innerHTML = productDetails.map((e)=>{
        return `
            <div class="product-card" >
                        <div class="product-inner-display" >
                            <div class="image-area">
                                <img src="../../images/shop_images/products/img-${e.image}.jpg" alt="" onclick="shopItemClick(${e.id})" class="click">
                            </div>
                            <div class="text-area">
                                <div class="item-details">
                                    <div class="item-title" onclick="shopItemClick(${e.id})">
                                        <h3>${e.title}</h3>
                                    </div>
                                    <div class="product-desc click" onclick="shopItemClick(${e.id})">
                                        <p>${e.description}</p>
                                    </div>
                                    <div class="product-card-bottom click" ">
                                        <div class="price-display">
                                            <p>$${e.price}</p>
                                        </div>
                                        <div class="add-to-cart-button">
                                            <input type="button" value="Add To Cart" class="add-to-cart-item-view" 
                                            onclick="addToCart(${e.id})" ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        `
    }).join(""))
}

itemsDisplay();

// add to cart function------------------------------------------------------------------------
let addToCart = (id)=>{
    let existingItem = cart.find(e=>e.id===id);
    if (existingItem === undefined){
        cart.push({id:id,quantity:1})
    }else {
        existingItem.quantity++
    }
    document.getElementById("cart-value").textContent = cart.reduce((total,item)=>{
        return total+item.quantity;
    },0)

    if (cart.length===0 ){
        document.getElementById("cart-value").style.display= 'none';
    }else{
        document.getElementById("cart-value").style.display= 'block';
    }
}



// Categories------------------------------------------------------------------------

let updateCategories=()=>{
    productDetails.forEach((item)=>{
        item.category.map((productCategory)=>{
            let isCategoryExists = categories.find(cat=>cat === productCategory)
            if (!isCategoryExists){
                categories.push(productCategory);
            }
        })
    })
}



let categoryItemGenerator = ()=>{
    updateCategories()
    let categoryLocation = document.getElementById("categories-list");
    return categoryLocation.innerHTML = categories.map((category)=>{
        return `
            <div class="category-item">
                        <input type="radio" id="${category}" name="category" value="${category}" ${category === "All"? "checked": ""}>
                        <label for=${category} >${category} </label><br>
                    </div>
        `;
    }).join("");
}

categoryItemGenerator()

//----------------------Arrange data based on categories-------------------------------

let shopItemsToDisplay = [];

let selectedCategory = "all";

let getCategory = () => {

    categories.forEach((category) => {
        document.getElementById(category).addEventListener("click", () => {
            selectedCategory = category;
            productItemsToDisplay();
            displayCard();
        });
    });
}

let displayCard = () => {
    productCard.innerHTML = '';
    if (selectedCategory === "all") {
        shopItemsToDisplay = [...productDetails];
    }

    cardsGenerator();
};

getCategory();

let productItemsToDisplay = ()=>{

    shopItemsToDisplay = productDetails.filter(item =>
        item.category.includes(selectedCategory));
}

let cardsGenerator = ()=>{
    productCard.innerHTML = shopItemsToDisplay.map((e)=>{
        return `
            
            <div class="product-card" >
                        <div class="product-inner-display" >
                            <div class="image-area">
                                <img src="../../images/shop_images/products/img-${e.image}.jpg" alt="" onclick="shopItemClick()" class="click">
                            </div>
                            <div class="text-area">
                                <div class="item-details">
                                    <div class="item-title click" onclick="shopItemClick(${e.id})">
                                        <h3>${e.title}</h3>
                                    </div>
                                    <div class="product-desc click" onclick="shopItemClick(${e.id})">
                                        <p>${e.description}</p>
                                    </div>
                                    <div class="product-card-bottom">
                                        <div class="price-display click" >
                                            <p>$${e.price}</p>
                                        </div>
                                        <div class="add-to-cart-button">
                                            <input type="button" value="Add To Cart" class="add-to-cart-item-view" 
                                            onclick="addToCart(${e.id})" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        `;

    }).join("");
    productItemsToDisplay();
    //totalCost()
}


//----------------------close-product----------------------------------------------------------


let productModal = document.getElementById('product-outer-container')

let productCloseClick = ()=>{
    productModal.style.display = 'none'
}



// ----------------------------------------Load Product------------------------------------------
let productCardData = document.getElementById("product-outer-container");
let itemId;
let shopItemClick = (id)=>{

    productModal.style.display = 'block'
    console.log(id)
    itemId = id;
    loadProductPage()
    generateProductSizes()
    generateProductColors()
    loadComments();
}


let loadProductPage = ()=>{

    let item = productDetails.find(e=>e.id===itemId)


    return productCardData.innerHTML =

        `
    <div class="product-popup">
                <div class="product-popup-background">
                    <div class="product-inner">
                        <div class="close-button">
                            <button onclick="productCloseClick()"><i class="ri-close-circle-fill"></i></button>
                        </div>
                        <div class="product-image-details">
                            <div class="product-image">
                                <div class="product-image">
                                    <img src="../../images/shop_images/products/img-${item.image}.jpg" alt=""  >
                                </div>
                            </div>
                            <div class="product-details">
                                <div class="prod-title">
                                    <h1>${item.title}</h1>
                                </div>
                                <div class="prod-info">
                                    <p>${item.description}</p>
                                </div>
                                <div class="user-options">
                                    <div class="option-1 option">
                                        <div class="option-1-headers option-headers" id="size-option">
                                            <p>Choose Size :</p>
                                        </div>
                                        <div class="option-1-inputs option-inputs">
                                            <div class="size-input-container option-inputs" id="size-container">

                                                <ul id="size-list"></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="option-2 option ">
                                        <div class="option-2-headers option-headers" >
                                            <p>Choose Color :</p>
                                        </div>
                                        <div class="option-2-inputs option-inputs">
                                            <div class="color-input-container option-inputs">
                                            
                                            
                                                <ul id="colors-list"></ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="button-area">
                                    <div class="button-area">
                                        <div class="price"><span>price :</span>$${item.price}</div>
                                        <div class="add-to-cart">
                                            <input type="button" value="Add to Cart" onclick="addToCart(${item.id})">
                                        </div>
                                    </div>
                                </div>
                                <div class="feedbacks">
                                    <div class="comments-topic" id="comments-header">

                                        <p>Comments</p>

                                    </div>

                                    <div class="comment">
                                    
                                        <ul id="added-comments">
                                                
                                        </ul>
                                        

                                    </div>
                                </div>
                                    <div class="add-comment">
                                        <div class="add-comment-inner">
                                            <textarea id="comment" name="comment" rows="3" cols="50" disabled></textarea>
                                        </div>
                                        <div class="add-comment-button">
                                            <button>comment</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    `


}


let generateProductSizes = ()=>{
    let item = productDetails.find(e=>e.id===itemId)
    let categoryContainer = document.getElementById("size-list")

    if (item.sizes.length ===0){
        document.getElementById("size-option").style.display ='none'
    }else {
        item.sizes.forEach((e)=>{

            let newElement = document.createElement("li")
            let checkedAttr = (e === "M")? "checked":""
            newElement.innerHTML = `
            <input type="radio" name="size" id="size-${e}" class="size-radio"  data-content="${e}"${checkedAttr}>
            <label for="size-s"></label>        
            `
            categoryContainer.appendChild(newElement)

        })

    }
}


let generateProductColors = ()=>{
    let item = productDetails.find(e=>e.id===itemId)
    let categoryContainer = document.getElementById("colors-list")

        item.colors.forEach((e,index)=>{
            let inputId = "color-"+(index+1);
            let newElement = document.createElement("li")
            let checkedAttr = (e === item.colors[1])? "checked":""
            newElement.innerHTML = `
            <input type="radio" name="color" id="${inputId}"data-content="${e}" ${checkedAttr}>
            <label for="color-1"></label>       
            `
            categoryContainer.appendChild(newElement)
            document.getElementById(inputId).style.background = String(e);
        })

}

let loadComments=()=>{
    let item = productDetails.find(e=>e.id===itemId)

    if (item.comments.length===0){
        document.getElementById("comments-header").style.display = 'none'
    }

    item.comments.forEach((e)=>{
        let newElement = document.createElement("li")
        let commentsSection = document.getElementById("added-comments")
        newElement.innerHTML =`
            <div class="single-comment">
               <div class="avatar">
                    <div class="avatar-image"></div>
               </div>
               <div class="comment-added">
                    <span>${e.name} : </span><p>${e.commentGiven}</p>
                    <p>Date 31-04-2025</p>
                </div>
        `
        commentsSection.appendChild(newElement);
    })
}

let cartModal = document.getElementById("cart-outer");
let cartModalClose=()=>{
    cartModal.style.display='none'
}

let cartModalOpen=()=>{
    cartModal.style.display='block'

    loadCartModalTable()
    loadTableRow()
    if (cart.length===0){
        noCartData()
    }else {
        document.getElementById("cart-button-area").style.display='block'
    }


}

//------------------------------------------------------------Load Table--------------------------------------------

let loadCartModalTable = ()=>{

    cartModal.innerHTML = `
        <div class="cart-popup">
                <div class="cart-popup-background">
                    <div class="cart-inner">
                        <div class="close-button" onclick="cartModalClose()">
                            <button><i class="ri-close-circle-fill"></i></button>
                        </div>
                        <div class="table-outer" id="cart-inner">
                            <div class="table-inner" >
                                <table>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Unit price</th>
                                        <th>Price</th>
                                        <th>Options</th>
                                    </tr>
                                    <tbody id="table-cart">
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div class="cart-button-area" id="cart-button-area">
                            <input type="button" value="Check-Out" onclick="onCheckoutClick()">
                            <input type="button" value="Clear-Cart" onclick="clearCart()">
                                                  
                        </div>
                    </div>
                </div>
            </div>
    `
}

let loadTableRow = ()=>{
    let tableRow = document.getElementById("table-cart");

    tableRow.innerHTML = cart.map((c,index)=>{
        let item = productDetails.find(e=>e.id === c.id)
        return `
            <tr>
                <td>#${index+1}</td>
                <td>
                    <img src="../../images/shop_images/products/img-${item.image}.jpg" alt="">
                </td>
                <td>${item.title}</td>
                <td>
                    <button class="table-buttons" onclick="removeQuantity(${c.id})"><i class="ri-arrow-left-wide-fill"></i></button>
                    <span>X ${c.quantity}</span>
                    <button class="table-buttons" onclick="addMore(${c.id})"><i class="ri-arrow-right-wide-fill"></i></button>
                </td>
                <td>$ ${item.price}</td>
                <td>$${item.price*c.quantity}</td>
                <td>
                    <button class="table-buttons remove-item-button" onclick="removeItem(${c.id})"><i class="ri-close-circle-fill"></i></button>
                </td>
             </tr>
        `
    }).join("")

}

let addMore =(id)=>{
    let item = cart.find(e=>id === e.id)
    item.quantity++;
    console.log(cart)
    loadTableRow()
    document.getElementById("cart-value").textContent = cart.reduce((total,item)=>{
        return total+item.quantity;
    },0)

}

let removeQuantity=(id)=>{
    let item = cart.find(e=>e.id===id)
    console.log(cart)
    if (item.quantity !==0){
        item.quantity--;

        loadTableRow()
        document.getElementById("cart-value").textContent = cart.reduce((total,item)=>{
            return total+item.quantity;
        },0)
    }else {
        removeItem(id)
        noCartData()
        if (cart.length===0 ){
            document.getElementById("cart-value").style.display= 'none';
        }else{
            document.getElementById("cart-value").style.display= 'block';
        }
    }
    noCartData()
}

let removeItem = (id)=>{
    cart = cart.filter((x)=>x.id !== id)

    document.getElementById("cart-value").textContent = cart.reduce((total,item)=>{
        return total+item.quantity;
    },0)

    loadCartModalTable();
    loadTableRow()
    noCartData()
    if (cart.length===0 ){
        document.getElementById("cart-value").style.display= 'none';
    }else{
        document.getElementById("cart-value").style.display= 'block';
    }
}

let noCartData = ()=>{

    if (cart.length === 0){
        loadCartModalTable();
        document.getElementById("cart-inner").innerHTML = ` 
            <p>No Items in the card...</p>
        `
    }
    document.getElementById("cart-button-area").style.display='none'
}


let clearCart = ()=>{
    cart = []
    noCartData()
    document.getElementById("cart-value").textContent = cart.reduce((total,item)=>{
        return total+item.quantity;
    },0)
}





//---------------------------------------------------------------------------------------Payments----------------------------------

let payment = document.getElementById("check-out-window")

let onCheckoutClick = ()=>{
    cartModalClose()
    payment.style.display = 'block'
    paymentContainerData()
}
let paymentCloseClick = ()=>{
    payment.style.display = 'none'
}

let paymentContent = document.getElementById("payment-content");

let paymentContainerData = ()=>{
    let total=0;
    let totalCost = () => {
        total = cart.reduce((total, e) => {
            let item = productDetails.find(c => c.image === e.id);
            return total + (e.quantity * item.price);
        }, 0);
    }

    totalCost()
    paymentContent.innerHTML=
        `
        <div class="payment-popup">
                <div class="close-button-payment">
                    <button onclick="paymentCloseClick()"><i class="ri-close-circle-fill"></i></button>
                </div>
                <div class="container-main">
                    <div class="main-payment-container">
                        <div class="payment-details">
                            <div class="container-1">
                                <form action="" class="payment-form-group">
                                    <div class="payment-header">
                                        <h1>Payment Details</h1>
                                    </div>
                                    <div class="name-container">
                                        <div class="first-name">
                                            <label for="first-name">First Name</label><br>
                                            <input type="text" name="first-name" id="first-name" required>
                                        </div>
                                        <div class="last-name">
                                            <label for="last-name">Last Name</label><br>
                                            <input type="text" name="last-name" id="last-name" required>
                                        </div>
                                    </div>

                                    <div class="email-phone-container">
                                        <div class="email-container">
                                            <label for="email">Email</label><br>
                                            <input type="email" name="email" id="email" required>
                                        </div>

                                        <div class="phone-number-container">
                                            <label for="phone">Phone</label><br>
                                            <input type="tel" name="phone" id="phone" pattern="0[0-9]{2}-[0-9]{2}-[0-9]{3}" required>
                                        </div>
                                    </div>

                                    <div class="payment-method-container">
                                        <h1>Card Information</h1>
                                    </div>

                                    <div class="date-code-container">
                                        <div class="expire-date-month">
                                            <label for="expire-date-container">Expire Date</label><br>
                                            <input type="month" name="expire-date-container" id="expire-date-container" value="2024-12" required>
                                        </div>

                                        <div class="code">
                                            <label for="code">Security-code</label><br>
                                            <input type="number" name="code" id="code" pattern="[0-9]{3}-[0-9]{3}" placeholder="999-999" required>
                                        </div>
                                        <div class="card-number">
                                            <label for="card-number-container">Card Number</label><br>
                                            <input type="number" name="card-number-container" id="card-number-container"
                                                   pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-" placeholder="xxxx-xxxx-xxxx-xxxx" required>
                                        </div>
                                    </div>

                                    <div class="button-container">
                                        <div class="clear-button-area">
                                            <input type="reset" value="Clear" class="clear">
                                        </div>
                                        <div class="clear-button-area">
                                            <input type="submit" value="Check-out" class="check-out">
                                        </div>


                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="order-summery-progress">
                            <div class="order-summery-inner">
                                <div class="table-header">
                                    <h3>Order Summery</h3>
                                </div>
                                <div class="table-summery">
                                    <table>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                        </tr>
                                        <tbody id="summery-table"></tbody>
                                    </table>
                                </div>
                                <div class="total-price-display">
                                    <h1>Total : $${total}.00</h1>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
    `
    loadSummeryData()

}


let loadSummeryData = ()=>{

    let loadTable=document.getElementById("summery-table");

    loadTable.innerHTML = cart.map((e,index)=>{
        let item = productDetails.find(c=>c.id===e.id)
        return `
            <tr>
                <td>#${index}</td>
                <td>${item.title}</td>
                <td> X${e.quantity} </td>
                <td> $${e.quantity * item.price}</td>
            </tr>
                    
        `
    }).join("")

}



