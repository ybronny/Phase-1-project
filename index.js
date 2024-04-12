


const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ffb31afebc604add82e5dbb624d24995", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    const jsonData = {
        "status": "ok",
        "totalResults": 10,
        "articles": [
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Manish Singh",
            "title": "Apple alerts users in 92 nations to mercenary attacks in new warning | TechCrunch",
            "description": "Apple sent threat notifications to iPhone users in 92 countries on Wednesday, warning them that may have been targeted by mercenary spyware attacks. The Apple has warned users in 92 nations of possible mercenary spyware attacks.",
            "url": "https://techcrunch.com/2024/04/10/apple-warning-mercenary-spyware-attacks/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/04/gettyimages-528771760.jpg?resize=1200,800",
            "publishedAt": "2024-04-11T04:54:24Z",
            "content": "Apple sent threat notifications to iPhone users in 92 countries on Wednesday, warning them that may have been targeted by mercenary spyware attacks.\r\nThe company sent the alerts to individuals in 92 … [+870 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Natasha Lomas and Ivan Mehta",
            "title": "Alternative browsers report uplift after EU's DMA choice screen mandate | TechCrunch",
            "description": "A flagship European Union digital market regulation appears to be shaking up competition in the mobile browser market. It's been a little over a month Is a flagship European Union digital market regulation shaking up competition in the mobile browser market? …",
            "url": "https://techcrunch.com/2024/04/10/eu-dma-browser-choice-screen-early-impact/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/12/GettyImages-182865389.jpg?resize=1200,1094",
            "publishedAt": "2024-04-10T21:17:49Z",
            "content": "A flagship European Union digital market regulation appears to be shaking up competition in the mobile browser market.\r\nIt’s been a little over a month since the Digital Markets Act (DMA) came into a… [+12591 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Aria Alamalhodaei and Devin Coldewey",
            "title": "Astranis unveils Omega 'MicroGEO' satellites for beaming dedicated broadband down from high orbit | TechCrunch",
            "description": "Astranis has taken the wraps off a new generation of communications satellites that will serve broadband to customers on Earth from geostationary orbit,",
            "url": "https://techcrunch.com/2024/04/10/astranis-unveils-omega-microgeo-satellites-for-beaming-dedicated-broadband-down-from-high-orbit/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/04/Omega-With-Beams.jpg?resize=1200,731",
            "publishedAt": "2024-04-10T21:06:08Z",
            "content": "Astranis has taken the wraps off a new generation of communications satellites that will serve broadband to customers on Earth from geostationary orbit, but faster and smaller than any comsat up ther… [+4007 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Apple News is testing a game that kind of looks like NYT Connections | TechCrunch",
            "description": "Apple News is testing a new game for iOS 17.5 called Quartiles, which requires players to organize a grid of 20 syllables into five four-syllable words.",
            "url": "https://techcrunch.com/2024/04/10/apple-news-is-testing-a-game-that-kind-of-looks-like-nyt-connections/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/02/apple-news-ios-icon.jpg?resize=1200,675",
            "publishedAt": "2024-04-10T20:45:51Z",
            "content": "Apple News is testing a new game for iOS 17.5 called Quartiles, which requires players to organize a grid of 20 syllables into five four-syllable words. Spotted by Gadget Hacks, the interface for Qua… [+1314 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Christine Hall",
            "title": "Google Cloud Next 2024: Everything announced so far | TechCrunch",
            "description": "Don’t have time to be in Las Vegas? That’s OK: We’ve summed up the most important parts of this year's Google Cloud Next.",
            "url": "https://techcrunch.com/2024/04/10/google-cloud-next-2024-everything-you-need-to-know/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/04/Screenshot-2024-04-09-at-11.11.40 AM.png?resize=1200,674",
            "publishedAt": "2024-04-10T20:27:06Z",
            "content": "Googles Cloud Next 2024 event takes place in Las Vegas through Thursday, and that means lots of new cloud-focused news on everything from Gemini, Googles AI-powered chatbot, to AI to devops and secur… [+8565 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Amanda Silberling",
            "title": "Hundreds of creators sign letter slamming Meta's limit on political content | TechCrunch",
            "description": "If you haven't been seeing much political content on Instagram lately, there's a reason for that. Since March, Instagram and Threads have instituted a new",
            "url": "https://techcrunch.com/2024/04/10/hundreds-of-creators-sign-letter-slamming-metas-limit-on-political-content/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1228781108.jpg?resize=1200,798",
            "publishedAt": "2024-04-10T20:11:30Z",
            "content": "If you haven’t been seeing much political content on Instagram lately, there’s a reason for that. Since March, Instagram and Threads have instituted a new default setting that limits political conten… [+2354 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Devin Coldewey",
            "title": "Space diversity initiative builds steam with new leadership and K-12 focused National Space Day | TechCrunch",
            "description": "A growing effort to attract more women and people of color into the space industry has shared some of its first results and a new occasion to rally",
            "url": "https://techcrunch.com/2024/04/10/space-diversity-initiative-builds-steam-with-new-leadership-and-k-12-focused-national-space-day/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/04/space-workforce-2030-space-day.jpg?resize=1200,873",
            "publishedAt": "2024-04-10T17:55:12Z",
            "content": "A growing effort to attract more women and people of color into the space industry has shared some of its first results and a new occasion to rally around: National Space Day, May 3, when thousands o… [+5711 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Alyssa Stringer and Cody Corrall",
            "title": "A comprehensive list of 2023 & 2024 tech layoffs | TechCrunch",
            "description": "A complete list of all the known layoffs in tech, from Big Tech to startups, broken down by month throughout 2023 and 2024.",
            "url": "https://techcrunch.com/2024/04/10/tech-layoffs-2023-list/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/layoffs.jpg?resize=1200,645",
            "publishedAt": "2024-04-10T17:38:30Z",
            "content": "The tech-wide reckoning that began in 2022 and ran throughout into 2023 has continued into this year. And while 2024’s losses are not at that scale, they’re still significant, driven by big names lik… [+50494 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "YouTube is turning off kids' ability to write comments in supervised experiences | TechCrunch",
            "description": "YouTube's comments section, historically, has had a bad reputation, but a change rolling out could prevent kids from wading into the comments cesspool. In",
            "url": "https://techcrunch.com/2024/04/10/youtube-is-turning-off-kids-ability-to-write-comments-in-supervised-experiences/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/04/boy_watching_video_GettyImages_1477635798.jpeg?resize=1200,800",
            "publishedAt": "2024-04-10T17:21:44Z",
            "content": "YouTube’s comments section, historically, has had a badreputation, but a change rolling out could prevent kids from wading into the comments cesspool. In an email to parents who supervise a child’s a… [+2890 chars]"
          },
          {
            "source": {
              "id": "techcrunch",
              "name": "TechCrunch"
            },
            "author": "Jagmeet Singh",
            "title": "Exclusive: Checkr, the background-screening platform last valued at $5 billion, cuts 32% of workforce",
            "description": "Checkr, a 10-year-old startup that offers employee background checks, has laid off 382 employees — 32% of its workforce.",
            "url": "https://techcrunch.com/2024/04/10/checkr-layoffs/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/04/employment-form-getty.jpg?w=1200",
            "publishedAt": "2024-04-10T17:10:30Z",
            "content": "Checkr, a 10-year-old startup that offers employee background checks and was last valued at $5 billion in April 2022, has laid off 382 employees as companies are not significantly hiring talent.\r\nTec… [+1986 chars]"
          }
        ]
      }
      

     const container = document.createElement('div');
     container.className = 'article-container';
     
     // Loop through the articles array and create DOM elements
     jsonData.articles.forEach(article => {
       // Create article div
       const articleDiv = document.createElement('div');
       articleDiv.className = 'article';
     
       // Create title element
       const titleElement = document.createElement('h2');
       titleElement.textContent = article.title;
     
       // Create author element
       const authorElement = document.createElement('p');
       authorElement.textContent = `Author: ${article.author}`;
     
       // Create description element
       const descriptionElement = document.createElement('p');
       descriptionElement.textContent = article.description;
     
       // Append elements to article div
       articleDiv.appendChild(titleElement);
       articleDiv.appendChild(authorElement);
       articleDiv.appendChild(descriptionElement);
     
       // Append article div to container
       container.appendChild(articleDiv);
     });
     
     // Append container to the body
     document.body.appendChild(container);