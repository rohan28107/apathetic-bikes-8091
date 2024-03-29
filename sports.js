let sportsData=[
    {
        id:3,
        image_url:
        "https://images.firstpost.com/wp-content/uploads/2022/09/Sunil-Chhetri.jpg?impolicy=website&width=640&height=363",
        name:"FIFA releases 'Captain Fantastic' on Sunil Chhetri's untold story of tremendous feats",
        mainPara:"As a result of this exclusive series, Sunil Chhetri will unquestionably be the point of contact while discussing Indian football worldwide.",
        linkPage:"sports.html",
        para2:"Sunil Chhetri, Indian national football team captain’s, legacy has acquired new heights after FIFA created a special series about him in recognition of his fantastic career. The series named ‘Captain Fantastic’ is available on FIFA+ and it has three episodes.",
        para3:"Chhetri’s participation in a series by the international football’s governing body is unique considering he represents a country that has not yet competed in the FIFA World Cup.",
        para4:"However, Chhetri’s goal scoring prowess has propelled him to stand alongside football’s greatest ever – Cristiano Ronaldo and Lionel Messi. The 37-year-old is currently the third-highest goal scorer in international football among active players. Ronaldo tops the list with 117 goals, and Chhetri is only six goals behind Messi’s 90 goal tally. During his distinguished career, Chhetri has played 131 games for the Indian squad and netted 84 goals.",
        para5:"https://pbs.twimg.com/media/FdqXN1HWIAMJ3zE?format=jpg&name=small",
        // para6:"https://twitter.com/FIFAWorldCup/status/1574746035297177600?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1574746035297177600%7Ctwgr%5E0f0d8cf98adc897cdda5bd1d42a284e0d213efc8%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.firstpost.com%2Fsports%2Ffootball-news%2Ffifa-releases-captain-fantastic-on-sunil-chhetris-untold-story-of-tremendous-feats-11346541.html",
        para7:"FIFA+ is a content initiative by the global body and this series is a component of that project. As a result, Chhetri will unquestionably be the point of focus while discussing Indian football worldwide. Some of the scenes were filmed in Bangalore, where Chhetri currently resides, in addition to Delhi, where Chhetri’s parents live and where he grew up.",
        para8:"The first episode of the series travels back to Chhetri’s early days as India’s talismanic captain. This fly-on-the-wall saga uncovers unseen tales of the captain, from his precocious pre-teen anguish to the early sparks of his romance with his future wife — all leading up to his India debut at the age of 20.",
        para9:"The second episode of the series follows Chhetri beginning to excel for the national team and gradually establishing himself as a mainstay.",
        para10:"Chhetri achieves the pinnacle of both his professional and personal life in the third episode of the show. As Chhetri’s fame and on-field performances rise, awards have mounted up and records have been broken.",
    },
];


sportsData.forEach(function (el){
    let card =document.createElement("div");

    let newsImg=document.createElement("img");
    newsImg.src=el.image_url;

    let heading=document.createElement("h1");
    heading.innerText=el.name;

    let mainParas=document.createElement("p");
    mainParas.innerText=el.mainPara;

    let paras2=document.createElement("p");
    paras2.innerText=el.para2;

    let paras3=document.createElement("p");
    paras3.innerText=el.para3;

    let paras4=document.createElement("p");
    paras4.innerText=el.para4;

    let paras5=document.createElement("img");
    paras5.src=el.para5;

    let paras6=document.createElement("p");
    paras6.innerText=el.para6;

    let paras7=document.createElement("p");
    paras7.innerText=el.para7;

    let paras8=document.createElement("p");
    paras8.innerText=el.para8;

    let paras9=document.createElement("p");
    paras9.innerText=el.para9;

    let paras10=document.createElement("p");
    paras10.innerText=el.para10;

    let paras11=document.createElement("p");
    paras11.innerText=el.para11;
    
    let paras12=document.createElement("p");
    paras12.innerText=el.para12;

    card.append(heading, mainParas, newsImg, paras2, paras3, paras4, paras5, paras7, paras8, paras9, paras10);
    document.querySelector("#sports-left").append(card);
      
});

let datas2=[
    {
        id:1,
        image_url:
        "https://images.firstpost.com/wp-content/uploads/2022/07/Mahindra-to-begin-deliveries-of-2022-Scorpio-N-from-September-26-bookings-start-on-July-30.jpg?impolicy=website&width=640&height=362",
        name:"Mahindra to begin deliveries of 2022 Scorpio-N from September 26, bookings start on July 30",
        mainPara:"Mahindra will be delivering the first lot of 20,000 Scorpio-N starting September 26 and until December 2022. Based on customer enquiry trends, the company has prioritised the production of Z8 L variants to match customer expectations at the time of delivery",
        linkPage:"./auto.html",
        para2:"Mahindra launched the Scorpio-N amid much fanfare and anticipation. Saying that Mahindra has been on a roll with the launch of its SUVs would be an understatement. The excitement around the Mahindra Scorpio-N would be a testimony to that. This is coming at a time when Mahindra already has a backlog of about 1.5 lakh deliveries of its XUV700. Mahindra Scorpio-N has been priced from Rs 11.99 lakh to Rs 23.90 lakh, ex-showroom. Bookings for the same will start later this week, on July 30. Mahindra has now revealed the delivery timeline for the Scorpio-N.",
        para3:"Mahindra launched the Scorpio-N amid much fanfare and anticipation. Saying that Mahindra has been on a roll with the launch of its SUVs would be an understatement. The excitement around the Mahindra Scorpio-N would be a testimony to that. This is coming at a time when Mahindra already has a backlog of about 1.5 lakh deliveries of its XUV700.",
        para4:"Mahindra Scorpio-N has been priced from Rs 11.99 lakh to Rs 23.90 lakh, ex-showroom. Bookings for the same will start later this week, on July 30. Mahindra has now revealed the delivery timeline for the Scorpio-N.",
        para5:"The deliveries of the all-new 2022 Mahindra Scorpio-N are scheduled to start on September 26, from the first day of the Sharad Navratri.",
        para6:"As per Mahindra, over 20,000 units of the Scorpio-N are planned for the initial rollout which will last until December 2022. Based on customer enquiry trends, the company has prioritised the production of Z8 L variants to match customer expectations at the time of delivery. ",
        para7:"Pre-bookings for this SUV will begin this Saturday, July 30 at 11 AM online on the company’s official website as well as across Mahindra’s dealerships in India. The company will be following the same booking and delivery strategy that they had planned for the XUV700.",
        para8:"However, one can only hope that Mahindra and their customers do not face the same fiasco that they had to endure with the deliveries of the XUV700.",
        para9:"It is worth mentioning that the introductory prices of the Scorpio-N will remain valid for the first 25,000 bookings only, after which the automotive company is bound to increase its prices.",
        para10:"The new Scorpio-N is offered with two engine options. First, the SUV gets a 2.0-litre mStallion turbocharged petrol engine that develops 197bhp & 380Nm of torque. The second engine option is a 2.2-litre mHawk diesel unit that churns out up to 173bhp & 400Nm of torque, depending on the variant.",
        para11:"As for transmission options, users get to choose between a 6-speed MT and a 6-speed torque-converter AT with Mahindra’s 4 XPLOR 4WD system.",
        para12:"Given the aggressive pricing of the Scorpio-N, Mahindra plans to take on the Tata Safari, Hyundai Creta, MG Hector and Kia Seltos."
    },
    {
        id:2,
        image_url:
        "https://images.firstpost.com/wp-content/uploads/2022/09/Sunil-Chhetri.jpg?impolicy=website&width=640&height=363",
        name:"FIFA releases 'Captain Fantastic' on Sunil Chhetri's untold story of tremendous feats",
        mainPara:"As a result of this exclusive series, Sunil Chhetri will unquestionably be the point of contact while discussing Indian football worldwide.",
        linkPage:"./sports.html",
        para2:"Sunil Chhetri, Indian national football team captain’s, legacy has acquired new heights after FIFA created a special series about him in recognition of his fantastic career. The series named ‘Captain Fantastic’ is available on FIFA+ and it has three episodes.",
        para3:"Chhetri’s participation in a series by the international football’s governing body is unique considering he represents a country that has not yet competed in the FIFA World Cup.",
        para4:"However, Chhetri’s goal scoring prowess has propelled him to stand alongside football’s greatest ever – Cristiano Ronaldo and Lionel Messi. The 37-year-old is currently the third-highest goal scorer in international football among active players. Ronaldo tops the list with 117 goals, and Chhetri is only six goals behind Messi’s 90 goal tally. During his distinguished career, Chhetri has played 131 games for the Indian squad and netted 84 goals.",
        para6:"https://twitter.com/FIFAWorldCup/status/1574746035297177600?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1574746035297177600%7Ctwgr%5E0f0d8cf98adc897cdda5bd1d42a284e0d213efc8%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.firstpost.com%2Fsports%2Ffootball-news%2Ffifa-releases-captain-fantastic-on-sunil-chhetris-untold-story-of-tremendous-feats-11346541.html",
        para7:"FIFA+ is a content initiative by the global body and this series is a component of that project. As a result, Chhetri will unquestionably be the point of focus while discussing Indian football worldwide. Some of the scenes were filmed in Bangalore, where Chhetri currently resides, in addition to Delhi, where Chhetri’s parents live and where he grew up.",
        para8:"The first episode of the series travels back to Chhetri’s early days as India’s talismanic captain. This fly-on-the-wall saga uncovers unseen tales of the captain, from his precocious pre-teen anguish to the early sparks of his romance with his future wife — all leading up to his India debut at the age of 20.",
        para9:"The second episode of the series follows Chhetri beginning to excel for the national team and gradually establishing himself as a mainstay.",
        para10:"Chhetri achieves the pinnacle of both his professional and personal life in the third episode of the show. As Chhetri’s fame and on-field performances rise, awards have mounted up and records have been broken.",
        para11:"",
        para12:""
    },
    {
        id:3,
        image_url:"",
        name:"On Lata’s birth anniversary, PM Modi hails crossing named after iconic singer in Ayodhya",
        mainPara:"Uttar Pradesh Chief Minister Yogi Adityanath will inaugurate a crossing named after Mangeshkar in the holy city of Ayodhya—believed to be the birthplace of Lord Ram. Called Lata Chowk, the crossing is being touted as a gift to her plethora of fans by the BJP-led Uttar Pradesh government",
        linkPage:"./india.html",
        para2:"New Delhi: Prime Minister Narendra Modi on Wednesday paid tribute to iconic singer Lata Mangeshkar on her birth anniversary and said he was glad that a crossing was being named after her in the temple town of Ayodhya.",
        para3:"The prime minister shared a special relationship with the legendary singer and was one of the first to attend her funeral when she passed away on 6 February, 2022 after battling prolonged illness. Sharing a nostalgic tweet PM Modi said, “Remembering Lata Didi on her birth anniversary. There is so much that I recall…the innumerable interactions in which she would shower so much affection. I am glad that today, a Chowk in Ayodhya will be named after her. It is a fitting tribute to one of the greatest Indian icons.”",
        para4:"Uttar Pradesh Chief Minister Yogi Adityanath will inaugurate a crossing named after Mangeshkar in the holy city of Ayodhya—believed to be the birthplace of Lord Ram. Called Lata Chowk, the crossing is being touted as a gift to her plethora of fans by the BJP-led Uttar Pradesh government.",
        para5:"A 40-foot-long Veena has been installed at the crossing as a tribute to the singer. It weighs around 14 tonnes. The replica of the musical instrument was designed by an artist called Ram Sutar in about two months.",
        para6:"There will also be an exhibition of Lata Mangeskar's paintings in Ram Katha Park as part of the inauguration ceremony. Prime Minister Narendra Modi, who was originally going to inaugurate the Chowk, will address the people gathered for the inauguration through a video message during the event.",
        para7:"This is the singer’s 93rd birth anniversary. Among India’s legendary artists, she remains one of the most popular as well as among those who have won the highest- number of civilian awards bestowed by the Indian government. She is the recipient of Bharat Ratna—India’s highest civilian honour, the Padma Vibhushan and the Padma Bhushan to name just a few.",
    },
    {
        id:4,
        image_url:"https://images.firstpost.com/wp-content/uploads/2022/09/Red_carpet_at_81st_Academy_Awards_in_Kodak_Theatre.jpg?impolicy=website&width=640&height=363",
        name:"And the Oscar doesn’t go to... Why is Russia boycotting the Academy Awards?",
        mainPara:"Amid growing tensions with Washington over the Ukraine war, Russia said it will not submit entries to the Oscars. This is the first time the country has boycotted the coveted film awards since the fall of the Soviet Union",
        linkPage:"./explainer.html",
        para2:"Russia’s isolation from the world continues as the war in Ukraine reaches a critical point. Its ties with the United States, which has slapped the Kremlin with sanctions after strict sanctions since the February invasion, have plummeted. Now Russia has announced that it will not be submitting a film for the upcoming 2023 international Oscars race.",
        para3:"This is the first time that the country has boycotted the coveted film awards since the fall of the Soviet Union.",
        para4:"Let’s take a closer look.",
        para5:"The boycott was announced amid growing tensions between Washington and Moscow following Russia’s invasion of Ukraine on 24 February this year.",
        para6:"According to AFP, the boycott was announced by the Russian film academy on Monday evening. The Kremlin recently accused the United States administration of having a direct role in the Ukraine war and has threatened to cut all ties with the country, according to a report by Variety.",
        para7:"The Russian academy said in a statement, “The presidium of the Film Academy of Russia has decided not to nominate a national film for the Oscars award of the American Academy of Motion Picture Arts and Sciences.”",
        para8:"The country’s boycott is not limited to the Oscars.Recently, Russia imposed personal sanctions on 25 Americans including actors Sean Penn and Ben Stiller as a response to US sanctions against Russians amid the war.",
        para9:"Both Penn and Stiller have been vocal critics of Russia’s invasion of Ukraine. According to a report by NPR, Sean is an activist involved in relief work while Ben is a goodwill ambassador for the UN High Commissioner for Refugees.",
    }
];

datas2.forEach(function (el){
    
    let card2 =document.createElement("div");
    card2.addEventListener("click", function(){
        linkToPage(el);
    });

    let heading=document.createElement("h3");
    heading.innerText=el.name;

    let mainParas=document.createElement("p");
    mainParas.innerText=el.mainPara;

    card2.append(heading, mainParas);
    document.querySelector("#sports-right").append(card2);
    
});

function linkToPage(el){
    // console.log(el.linkPage);
    window.open(el.linkPage);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }