// Image popup window

let imageDetails = [
    {
        image: "../../images/gallery_images/img-1.jpg",
        title: "Water Droplet",
        desc: "Perfect droplet, a tiny crystal of clarity, descends one by one. The container of clean water it meets is inviting, with only slight ripples on the surface as a result of its arrival. A reminder of the significance of clean water and sanitation for a healthy world, this tiny addition revitalizes the life-giving resource."
    },
    {
        image:"../../images/gallery_images/img-2.jpg",
        title:"Poverty, Clean Water & Sanitation",
        desc: "Unclean water and poor sanitation cause illness, obstruct access to jobs and education, and keep communities in poverty. To end this cycle, clean water and sanitary infrastructure investments are crucial."
    },
    {
        image:"../../images/gallery_images/img-3.jpg",
        title:"Availability",
        desc:"The availability of potable water, sufficient sanitary facilities, and the encouragement of hygienic habits. In addition to promoting general health and wellbeing, it guarantees the prevention of waterborne illnesses."
    },
    {
        image:"../../images/gallery_images/img-3.jpg",
        title:"Sanitizing",
        desc:"An essential component of good hygiene, hand sanitization frequently supports initiatives for clean water and sanitation. It involves killing bacteria on hands with alcohol-based solutions or sanitising wipes to improve general health and stop the spread of disease."
    },
    {
        image:"../images/img-5.jpg",
        title:"Wash your Hands",
        desc:"Hand washing is an essential hygiene practice that greatly reduces the spread of germs and prevents illnesses when combined with clean water and sanitization. It entails thoroughly cleaning hands with soap and water to enhance general health and wellbeing."
    },
    {
        image:"../images/img-6.jpg",
        title:"General Tap Water",
        desc:"There are many risks associated with drinking tap water. Waterborne diseases can result from microbial contamination, and heavy metals and industrial pollutants may persist even after treatment."
    },
    {
        image:"../images/img-7.jpg",
        title:"Kids and Unclean Water",
        desc:"Kids having fun in muddy water brings attention to the health risks and contamination risk that come with not having enough access to clean water and sanitary facilities. "
    },
    {
        image:"../images/img-8.jpg",
        title:"Children and Sanitation",
        desc:"Children are especially vulnerable to waterborne illnesses and skin irritations caused by long-term exposure to muddy and dirty water. Preventing these health risks and enhancing community well-being require guaranteeing access to clean water sources and encouraging hygiene education."
    },
    {
        image:"../images/img-9.jpg",
        title:"Preparing Food",
        desc:"To prepare food safely and uphold hygienic standards, a clean water source is necessary. By guaranteeing that food is free of contaminants, it protects culinary hygiene standards and helps avoid foodborne illnesses. Safeguarding public health and guaranteeing the enjoyment of wholesome meals depend on having consistent access to clean water."
    },
    {
        image:"../images/img-10.jpg",
        title:"Struggle when Accessing Clean Water",
        desc:"Many people around the world still have to travel great distances in search of clean water, frequently at great personal cost. This shows the ongoing disparities in access to infrastructure for clean water and the pressing need for all-encompassing policies to guarantee fair access."
    },
    {
        image:"../images/img-11.jpg",
        title:"Water Filtration",
        desc:"One practical way to achieve clean water and enhance sanitation is through water filtration. Contaminants are eliminated using a variety of filtration techniques, guaranteeing food safety and hygienic conditions"
    },
    {
        image:"../images/img-12.jpg",
        title:"Global Water Pollution",
        desc:"Clean water and sanitation are seriously threatened by water pollution on a global scale. It happens when pollutants that are harmful to human health and safety, like chemicals, sewage, industrial waste, and plastics, find their way into water bodies. "
    },
    {
        image:"../images/img-13.jpg",
        title:"Lack of Nutrition",
        desc:"Due to a lack of sanitary facilities and clean water, children are particularly vulnerable to nutritional deficiencies and health risks. They are susceptible to waterborne illnesses without access to clean water, which can result in malnourishment and stunted growth."
    },
    {
        image:"../images/img-14.jpg",
        title:"Sanitation Behaviours",
        desc:"In order to guarantee clean water and preserve public health, sanitation practices are essential. These behaviours include a variety of actions such as disposing of waste properly, maintaining personal hygiene, and maintaining sanitation infrastructure."
    },
    {
        image:"../images/img-15.jpg",
        title:"Industrial Pollution",
        desc:"Water sources can become contaminated by hazardous materials from industrial processes, endangering both human health and ecosystems. This phenomenon is known as industrial water pollution."
    },
    {
        image:"../images/img-16.jpg",
        title:"Access to Clean Water",
        desc:"Having access to clean water lowers the risk of illness and advances public health by preventing waterborne diseases and ensuring good sanitation. Clean water is essential for sustainable growth and prosperity in communities all over the world because it promotes economic development, industry, and agriculture."
    },
    {
        image:"../images/img-17.jpg",
        title:"Natural Water Resources",
        desc:"Groundwater, rivers, and lakes are examples of natural water resources that offer vital supplies for cleaning, cooking, drinking, and sanitation.Depletion and deterioration of water quality may result from misuse and pollution of these resources."
    },
    {
        image:"../images/img-18.jpg",
        title:"Pollution of Natural Water Resources",
        desc:"Natural water resource pollution is a serious risk to human health and ecosystems. Water quality can be lowered by contaminants like chemicals, heavy metals, and pathogens, making it dangerous for aquatic life to swim in and for drinking. Also it's a really risk for the civilization"
    },
    {
        image:"../images/img-19.jpg",
        title:"Glaciers and Clean Water",
        desc:"Global efforts to promote sanitation and supply clean water are greatly aided by glaciers. Large volumes of freshwater are stored in these enormous ice formations, which gradually release the water to nourish lakes, rivers, and groundwater sources."
    },
    {
        image:"../images/img-20.jpg",
        title:"Homeless Individuals",
        desc:"Access to clean water is extremely difficult for those who are homeless, which exacerbates their already unstable living circumstances. They frequently don't have consistent access to sanitary facilities and clean water sources when they don't have secure housing."
    },
    {
        image:"../images/img-21.jpg",
        title:"Struggle to Access Clean Water",
        desc:"Millions of people worldwide still struggle to get access to clean water in many regions. Natural disasters, inadequate infrastructure, and pollution contamination are a few of the elements causing this difficulty."
    },
    {
        image:"../images/img-22.jpg",
        title:"Global Crisis",
        desc:"Urbanisation, population increase, climate change, and poor infrastructure are some of the factors making this global clean water crisis worse. Implementing sustainable water management techniques, funding infrastructure, and allocating resources fairly are all necessary to address the global water crisis."
    },
    {
        image:"../images/img-23.jpg",
        title:"Supply of Clean Water",
        desc:"Sanitation and clean water provision are essential tasks that we perform on a daily basis. It's a commitment to preserving public health and wellbeing, not just supplying water. Every effort is made to keep water sources safe and available, from sanitation programmes to purification procedures."
    },
    {
        image:"../images/img-24.jpg",
        title:"Wasting Water",
        desc:"Water waste restricts global initiatives to provide clean water and sanitation. Sanitation systems are strained and resources are depleted with every needless drop wasted. We can preserve clean water supplies and guarantee that everyone has access to sanitary facilities by implementing water-saving measures."
    },
    {
        image:"../images/img-25.jpg",
        title:"Public Availability of Clean Water",
        desc:"To guarantee the health and welfare of communities everywhere, it is essential to provide clean water and sanitary facilities to the general public. Individuals are empowered to meet their basic needs for drinking, sanitation, and hygiene by the establishment of public water sources and sanitation facilities. "
    },
    {
        image:"../images/img-26.jpg",
        title:"Bottled Water",
        desc:"For those who live in places where the water supply is unstable or tainted, bottled water is a practical way to obtain clean water. High quality and safety standards are ensured by putting it through stringent filtration and purification procedures. Plastic pollution is one of the environmental effects of the widespread use of bottled water."
    },
    {
        image:"../images/img-27.jpg",
        title:"Climate Changes vs Clean Water",
        desc:"Clean water and sanitation are severely threatened by climate change, which also has an impact on the quantity, quality, and distribution of water resources. Droughts, floods, and water scarcity can be brought on by rising temperatures, extreme weather, and sea level rise, endangering water supplies and sanitization infrastructure. "
    },
    {
        image:"../images/img-28.jpg",
        title:"Clean Water, Sanitation and Medical Sector",
        desc:"Sanitation and clean water are essential for maintaining public health and halting the spread of disease, and they are crucial in the medical field. This lowers the risk of infections and complications related to healthcare by ensuring that healthcare facilities can maintain strict hygiene standards."
    },
    {
        image:"../images/img-29.jpg",
        title:"Children and Clean Water",
        desc:"Lack of access to clean water causes problems for children across different regions, increasing their risk of illness and impeding their development. These problems are made worse by inadequate sanitary facilities, which affects their wellbeing and educational opportunities."
    },
    {
        image:"../images/img-30.jpg",
        title:"Rural Communities",
        desc:"The lack of clean water and insufficient hygiene standards in rural areas create major barriers to access and maintenance of hygiene standards. Basic sewage systems, waste disposal facilities, and toilets are lacking in many rural communities."
    }
]



document.querySelectorAll('.more-button').forEach(button => {
    button.onclick = () => {

        const parentImageFrame = button.closest('.image-frame');
        const image = parentImageFrame.querySelector('img');

        console.log(parentImageFrame.querySelector('img'))
      
        document.querySelector('.image-pop img').src = image.getAttribute('src');
        
        document.querySelector('.image-pop').style.display = 'block';



        let imageObj = imageDetails.find((e)=>e.image === image.getAttribute('src'));

        console.log(imageObj);

        if (imageObj){
            document.getElementById("title").textContent = imageObj.title;
            document.getElementById("desc-para").textContent = imageObj.desc;
        }else{
            console.log('No matching object')
        }





    };
});


document.querySelector('.image-pop span').onclick = () => {
    document.querySelector('.image-pop').style.display = 'none';
};

