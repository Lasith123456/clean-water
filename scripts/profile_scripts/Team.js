let team = [
    // Array of team members with their details
    {
        name:"Lasith Ranishka",
        image:"../../images/profile_images/Student_01.jpg",
        role:"Student 1",
        tasks:"\nSplash Screen | Shop"
    },
    {
        name:"Yasiru Lakshitha",
        image:"../../images/profile_images/Student_02.jpg",
        role:"Student 2",
        tasks:"\nHome Page | Feedback"
    },
    {
        name:"Sashan Fernando",
        image:"../../images/profile_images/Student_03.jpg",
        role:"Student 3",
        tasks:"\nUser Profile | Team"
    },
    {
        name:"Ishan Dakshina",
        image:"../../images/profile_images/Student_04.jpg",
        role:"Student 4",
        tasks:"\nGallery | Sitemap"
    },

];

let teamCards = document.getElementById("about-outer");

// Function to generate team member cards
let teamCardsGenerator = ()=>{
    // Generate HTML for each team member card and join them together
    return teamCards.innerHTML = team.map((card)=>{
        return `
            <div class="about-container" style='background-image: url(${card.image})'>
                <div class="container-details">
                    <h1>${card.name}</h1>
                    <p>Role : ${card.role}</p>
                    <p>Designed and implemented pages: ${card.tasks}</p>
                </div>
            </div>
        `
    }).join("");
}
// Generate team member cards
teamCardsGenerator();