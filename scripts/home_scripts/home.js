
let splashScreen = document.getElementById("splash");

let splashScreenActive = ()=>{
    splashScreen.style.visibility= 'visible'
}

let splashScreenInActive=()=>{
    splashScreen.style.visibility= 'hidden'
}


window.onload=()=>{
    splashScreenActive();

    setTimeout(splashScreenInActive,5000)
}
// Array of gallery items with images and descriptions
let galleryCard = document.getElementById("image-card");


let galleryItems = [
    {
        image :1,
        
        desc: "Perfect droplet, a tiny crystal of clarity, descends one by one. The container of clean water it meets is inviting, with only slight ripples on the surface as a result of its arrival. A reminder of the significance of clean water and sanitation for a healthy world, this tiny addition revitalizes the life-giving resource."

    }
    ,
    {
        image :2,
        
        desc: "Unclean water and poor sanitation cause illness, obstruct access to jobs and education, and keep communities in poverty. To end this cycle, clean water and sanitary infrastructure investments are crucial."

    }
    ,
    {
        image :3,
        
        desc: "The availability of potable water, sufficient sanitary facilities, and the encouragement of hygienic habits. In addition to promoting general health and wellbeing, it guarantees the prevention of waterborne illnesses."

    }
    ,
    {
        image :4,
        
        desc: "An essential component of good hygiene, hand sanitization frequently supports initiatives for clean water and sanitation. It involves killing bacteria on hands with alcohol-based solutions or sanitising wipes to improve general health and stop the spread of disease."

    }
    ,
    {
        image :5,
        
        desc: "Hand washing is an essential hygiene practice that greatly reduces the spread of germs and prevents illnesses when combined with clean water and sanitization. It entails thoroughly cleaning hands with soap and water to enhance general health and wellbeing."

    }
    ,
    {
        image :6,
        
        desc:"There are many risks associated with drinking tap water. Waterborne diseases can result from microbial contamination, and heavy metals and industrial pollutants may persist even after treatment."

    }
    ,
    {
        image :7,
        
        
        desc:"Kids having fun in muddy water brings attention to the health risks and contamination risk that come with not having enough access to clean water and sanitary facilities. "

    }
    ,
    {
        image :8,
        
        desc: "Children are especially vulnerable to waterborne illnesses and skin irritations caused by long-term exposure to muddy and dirty water. Preventing these health risks and enhancing community well-being require guaranteeing access to clean water sources and encouraging hygiene education."

    }
    ,
    {
        image :9,
        
        desc: "To prepare food safely and uphold hygienic standards, a clean water source is necessary. By guaranteeing that food is free of contaminants, it protects culinary hygiene standards and helps avoid foodborne illnesses. Safeguarding public health and guaranteeing the enjoyment of wholesome meals depend on having consistent access to clean water."

    }
    ,
    {
        image :10,
        
        desc: "Many people around the world still have to travel great distances in search of clean water, frequently at great personal cost. This shows the ongoing disparities in access to infrastructure for clean water and the pressing need for all-encompassing policies to guarantee fair access."

    }
    ,
    {
        image :11,
        
        desc: "One practical way to achieve clean water and enhance sanitation is through water filtration. Contaminants are eliminated using a variety of filtration techniques, guaranteeing food safety and hygienic conditions"
    }
    ,
    {
        image :12,
        
        desc: "Clean water and sanitation are seriously threatened by water pollution on a global scale. It happens when pollutants that are harmful to human health and safety, like chemicals, sewage, industrial waste, and plastics, find their way into water bodies. "

    }
    ,
    {
        image :13,
        
        desc: "Due to a lack of sanitary facilities and clean water, children are particularly vulnerable to nutritional deficiencies and health risks. They are susceptible to waterborne illnesses without access to clean water, which can result in malnourishment and stunted growth."

    }
    ,
    {
        image :14,
        
        desc:"In order to guarantee clean water and preserve public health, sanitation practices are essential. These behaviours include a variety of actions such as disposing of waste properly, maintaining personal hygiene, and maintaining sanitation infrastructure."

    }
    ,
    {
        image :15,
        
        desc:"Water sources can become contaminated by hazardous materials from industrial processes, endangering both human health and ecosystems. This phenomenon is known as industrial water pollution."

    }
    ,
    {
        image :16,
        
        desc: "Having access to clean water lowers the risk of illness and advances public health by preventing waterborne diseases and ensuring good sanitation. Clean water is essential for sustainable growth and prosperity in communities all over the world because it promotes economic development, industry, and agriculture."

    }
    ,
    {
        image :17,
        
        desc:"Groundwater, rivers, and lakes are examples of natural water resources that offer vital supplies for cleaning, cooking, drinking, and sanitation.Depletion and deterioration of water quality may result from misuse and pollution of these resources."

    }
    ,
    {
        image :18,
       
        desc: "Natural water resource pollution is a serious risk to human health and ecosystems. Water quality can be lowered by contaminants like chemicals, heavy metals, and pathogens, making it dangerous for aquatic life to swim in and for drinking. Also it's a really risk for the civilization"

    }
    ,
    {
        image :19,
        
        desc:"Global efforts to promote sanitation and supply clean water are greatly aided by glaciers. Large volumes of freshwater are stored in these enormous ice formations, which gradually release the water to nourish lakes, rivers, and groundwater sources."

    }
    ,
    {
        image :21,
        
        desc: "Millions of people worldwide still struggle to get access to clean water in many regions. Natural disasters, inadequate infrastructure, and pollution contamination are a few of the elements causing this difficulty."

    }
    ,
    {
        image :22,
        
        desc: "Urbanisation, population increase, climate change, and poor infrastructure are some of the factors making this global clean water crisis worse. Implementing sustainable water management techniques, funding infrastructure, and allocating resources fairly are all necessary to address the global water crisis."

    }
    ,
    {
        image :23,
       
        desc: "Sanitation and clean water provision are essential tasks that we perform on a daily basis. It's a commitment to preserving public health and wellbeing, not just supplying water. Every effort is made to keep water sources safe and available, from sanitation programmes to purification procedures."
    }
    ,
    {
        image :24,
        
        desc: "Water waste restricts global initiatives to provide clean water and sanitation. Sanitation systems are strained and resources are depleted with every needless drop wasted. We can preserve clean water supplies and guarantee that everyone has access to sanitary facilities by implementing water-saving measures."

    }
    ,
    {
        image :25,
        
        desc:"To guarantee the health and welfare of communities everywhere, it is essential to provide clean water and sanitary facilities to the general public. Individuals are empowered to meet their basic needs for drinking, sanitation, and hygiene by the establishment of public water sources and sanitation facilities. "

    }
    ,
    {
        image :26,
        
        desc:"For those who live in places where the water supply is unstable or tainted, bottled water is a practical way to obtain clean water. High quality and safety standards are ensured by putting it through stringent filtration and purification procedures. Plastic pollution is one of the environmental effects of the widespread use of bottled water."

    }
    ,
    {
        image :27,
        
        desc: "Clean water and sanitation are severely threatened by climate change, which also has an impact on the quantity, quality, and distribution of water resources. Droughts, floods, and water scarcity can be brought on by rising temperatures, extreme weather, and sea level rise, endangering water supplies and sanitization infrastructure. "

    }
    ,
    {
        image :28,
        
        desc: "Sanitation and clean water are essential for maintaining public health and halting the spread of disease, and they are crucial in the medical field. This lowers the risk of infections and complications related to healthcare by ensuring that healthcare facilities can maintain strict hygiene standards."

    }
    ,
    {
        image :29,
        
        desc:"Lack of access to clean water causes problems for children across different regions, increasing their risk of illness and impeding their development. These problems are made worse by inadequate sanitary facilities, which affects their wellbeing and educational opportunities."

    }
    ,
    {
        image :30,
        
        desc: "The lack of clean water and insufficient hygiene standards in rural areas create major barriers to access and maintenance of hygiene standards. Basic sewage systems, waste disposal facilities, and toilets are lacking in many rural communities."

    }

];
// Function to generate unique random numbers
let screenWidth = window.innerWidth
let generateUniqueRandom = (count,max)=>{

    let random = [];

    while (random.length<count){
        let num = Math.floor(Math.random() * max) + 1;
        if (!random.includes(num)){
            random.push(num);

        }
    }

    return random

}

// Function to generate gallery card HTML
let galleryCardGenerate = ()=> {
    let count;
     // Adjust number of gallery items based on screen width
        if (screenWidth<546){
            count = 1;
        }else if(screenWidth<992){
            count = 2
        }else {
            count = 3
        }

    let randItem = generateUniqueRandom(count, galleryItems.length);
    return galleryCard.innerHTML = randItem.map((num) => {
        num = parseInt(num)
        let data = galleryItems[num - 1];
        return `
            <div class="image-outer" >
                <img src="images/home_images/Gallery/img-${data.image}.jpg" alt="">
                <div class="content-gallery">
                    <div class="empty-box"></div>
                    
                    <p>${data.desc}</p>
                </div>
            </div>  
            `
    }).join("");

}



// Initial call to generate gallery cards

galleryCardGenerate();

// window.addEventListener('resize',galleryCardGenerate)


// Initial call to generate gallery cards
setInterval(galleryCardGenerate,10000)