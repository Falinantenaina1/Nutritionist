const teamMembers = document.getElementById("team-members");
const teamCategory = document.querySelectorAll(".team-group input");

const teamGroup = [
  [
    {
      name: "Sarah Mitchell",
      poste: "Founder and CEO",
      imgUrl: "./assets/images/sarah-mitchell.png",
    },
    {
      name: "Emily Thompson",
      poste: "Chief Operating Officer",
      imgUrl: "./assets/images/emily-thompson-member.png",
    },
    {
      name: "John Davis",
      poste: "Chief Financial Officer",
      imgUrl: "./assets/images/john-davis.png",
    },
    {
      name: "Rachel Adams",
      poste: "Chief Marketing Officer",
      imgUrl: "./assets/images/rachel-adams.png",
    },
  ],
  [
    {
      name: "Nina Patel",
      poste: "Nutritionist",
      imgUrl: "./assets/images/sarah-mitchell.png",
    },
    {
      name: "Emily Walker",
      poste: "Dietitian",
      imgUrl: "./assets/images/emily-thompson-member.png",
    },
    {
      name: "Oliver Green",
      poste: "Clinical Dietitian",
      imgUrl: "./assets/images/john-davis.png",
    },
    {
      name: "Lucas Adams",
      poste: "Sports Nutritionist",
      imgUrl: "./assets/images/rachel-adams.png",
    },
  ],
  [
    {
      name: "Emily Carter",
      poste: "Support Manager",
      imgUrl: "./assets/images/sarah-mitchell.png",
    },
    {
      name: "Sophia Bennett",
      poste: "Support Specialist",
      imgUrl: "./assets/images/emily-thompson-member.png",
    },
    {
      name: "Olivia Hayes",
      poste: "Service Rep",
      imgUrl: "./assets/images/john-davis.png",
    },
    {
      name: "James Morgan",
      poste: "Tech Support",
      imgUrl: "./assets/images/rachel-adams.png",
    },
  ],
  [
    {
      name: "Alex Johnson",
      poste: "Marketing Director",
      imgUrl: "./assets/images/sarah-mitchell.png",
    },
    {
      name: "Morgan Lee",
      poste: "SEO Specialist",
      imgUrl: "./assets/images/emily-thompson-member.png",
    },
    {
      name: "Taylor Parker",
      poste: "Content Manager",
      imgUrl: "./assets/images/john-davis.png",
    },
    {
      name: "Jordan Smith",
      poste: "Data Analyst",
      imgUrl: "./assets/images/rachel-adams.png",
    },
  ],
  [
    {
      name: "Ava Martinez",
      poste: "UX/UI Designer",
      imgUrl: "./assets/images/sarah-mitchell.png",
    },
    {
      name: "Olivia Brown",
      poste: "Data Scientist",
      imgUrl: "./assets/images/emily-thompson-member.png",
    },
    {
      name: "Ethan Clark",
      poste: "Full Stack Developer",
      imgUrl: "./assets/images/john-davis.png",
    },
    {
      name: "Liam Scott",
      poste: "Systems Analyst",
      imgUrl: "./assets/images/rachel-adams.png",
    },
  ],
];

const generateTeamHtml = (index) => {
    teamGroup[index].forEach(({name, poste, imgUrl}) => {
        teamMembers.innerHTML += `
        <div class="member">
            <img src="${imgUrl}" alt="${imgUrl}-avatar">
            <div class="member-info">
                <h3>${name}</h3>
                <p>${poste}</p>
            </div>
        </div>
    `;
    })
}

generateTeamHtml(0);


teamCategory.forEach((category, index) => {
  category.addEventListener("click", () => {
    teamMembers.innerHTML = "";
    if (category.checked) {
      generateTeamHtml(index);
    }
  });
});
