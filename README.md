 <div align='center'>
 <img src=".github/logo.png"/>
   <br/>
 <h1> Portfolio Builder </h1>
 A simple configuration that turns out into a beautiful portfolio
   <br/>
   <br/>
 
 [![Auto Deploy Action](https://github.com/tauseefansari/Portfolio-Builder/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/tauseefansari/Portfolio-Builder/actions/workflows/deploy.yml)
 
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
 ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
 ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
 ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
 [![GitHub license](https://img.shields.io/github/license/tauseefansari/Portfolio-Builder?style=for-the-badge)](https://github.com/tauseefansari/Portfolio-Builder/blob/main/LICENSE.md)
 [![GitHub issues](https://img.shields.io/github/issues/tauseefansari/Portfolio-Builder?style=for-the-badge)](https://github.com/tauseefansari/Portfolio-Builder/issues)
 [![GitHub stars](https://img.shields.io/github/stars/tauseefansari/Portfolio-Builder?style=for-the-badge)](https://github.com/tauseefansari/Portfolio-Builder/stargazers)
 
 </div>

 ## Table of Content 📝
 - [Demo Link](#demo-link-)
 - [Running Locally](#running-locally-)
 - [Configuration](#configuration-%EF%B8%8F)
 - [Report Bugs](#report-bugs-)
 - [Contribution Guidelines](#contribution-guidelines-%EF%B8%8F)
 - [Contributors](#contributors-)
 - [Licence](#license-)
 
 ## Demo Link 🔗
 
 Access my site at [link](https://tauseefansari.github.io/Portfolio-Builder)
 
 ## Running Locally 💻
 
 Clone the project
 
 ```bash
   git clone https://github.com/tauseefansari/Portfolio-Builder
 ```
 
 Go to the project directory
 
 ```bash
   cd Portfolio-Builder
 ```
 
 Install dependencies
 
 ```bash
   npm install
 ```
 
 Start the server
 
 ```bash
   npm start
 ```

 ## Configuration ⚙️
 [Configuration](https://github.com/tauseefansari/Portfolio-Builder/blob/main/public/json/Configuration.json) is a `json` file which contains all the configuration of portfolio. Any changes in configuration will reload the portfolio if project is running. Feel free to customize the `json` as per your need.
 
 > **Note:** Make sure the format of `json` file is proper. There should not be any error in `json`. Feel free to take a look at my own [Configuration](https://github.com/tauseefansari/tauseefansari.github.io/blob/code/public/json/Configuration.json) just avoid using `emailKey` because then all your emails will be redirect to my email. If you want you can generate you own emailKey using [BootStrap Studio Pro](https://bootstrapstudio.io/) 
 
 
 <details>
 <summary>Tab / Project Title <strong>(Optional)</strong> ⚠️</summary>
 
 ### Tab / Project Title:
 `tabTitle` is an `optional` field and is used to set Tab Tile if no `tabTable` is provided it's default to `Portfolio`
 
 Field | Type | Example
 --- | --- | --- 
 `tabTitle?`  | `string` | <pre><code>tabTile: 'Tauseef Ansari'</code></pre>
 
 </details>
 
 <details>
 <summary>Images Preload <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Images Preload:
 `imagesPreload` is a `mandatory` field of type `string[]` which contains names of all the images with extension which you want to preload before project run. 
 
 > **Note:** Make sure all the images should be in the [images](https://github.com/tauseefansari/Portfolio-Builder/tree/main/public%2Fassets%2Fimages) folder
 
 Field | Type | Example
 --- | --- | --- 
 `imagesPreload`  | `string[]` | <pre><code>imagesPreload: [ <br/>   'my-image.png' <br/> ]</code></pre>
 
 </details>
 
 <details>
 <summary>Social Links<strong>(Mandatory)</strong> ⛔</summary>
 
 ### Social Links:
 `social` is a `mandatory` field of type `Social[]` where each `Social` is of type 
 ```
 { 
   iconName: 'MUI Icon Name', 
   url: 'string' 
 }
 ```
 here `iconName` is an any icon name from [MUI Icon](https://mui.com/material-ui/material-icons/) and `url` is the actual URL.
 
 Field | Type | Example
 --- | --- | --- 
 `social`  | `Social[]` | <pre><code>[ <br/>  { <br/>    iconName: 'Github', <br/>    url: 'https://github.com/tauseefansari' <br/>  } <br/>] </code></pre>
 </details>

 <details>
 <summary>Navigation <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Navigation:
 `navigation` is a `mandatory` field of type `Links[]` where each `Link` is of type 
 ```
 {
   id: 'string',
   title: 'string',
   iconName: 'MUI Icon Name'
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section, `title` is a tooltip title which shows only on large screen devices and `iconName` is an any icon name from [MUI Icon](https://mui.com/material-ui/material-icons/).
 
 Field | Type | Example
 --- | --- | --- 
 `navigaton`  | `Links[]` | <pre><code>[ <br/>  { <br/>    id: 'home', <br/>    title: 'Home', </br>    iconName: 'HomeOutlined' <br/>  } <br/>] </code></pre>
 </details>
 
 <details>
 <summary>Header <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Header:
 `header` is a `mandatory` field of type `object` which contains the following 
 ```
 {
   id: 'string',
   header: 'string',
   title: 'string',
   subTitle: 'string',
   downloadCVBtn: { 
     title: 'string', 
     url: 'string'
   },
   letsTalkBtn: { 
     title: 'string', 
     link: 'string'
   },
   headerImage: 'string'
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section. `header` renders on the top and then `title` and `subTitle` renders respectively. After that it then renders two buttons `downloadCVBtn` and `letsTalkBtn` and then lastly it renders the `headerImage`.
 
 > **Note:** Make sure the image name provided in `headerImage` is included in the `imagesPreload` and in the [images](https://github.com/tauseefansari/Portfolio-Builder/tree/main/public%2Fassets%2Fimages) folder
 
 Field | Type | Example
 --- | --- | --- 
 `header`  | `object` | <pre><code>{ <br/>   id: 'home', <br/>   header: 'Hello I am', <br/>   title: 'Tauseef Ansari', </br>   subTitle: 'React Developer', <br/>   downloadCVBtn: { <br/>     title: 'My Resume', <br/>     url: 'https://github.com/tauseefansari/Portfolio-Builder' <br/>   }, <br/>   letsTalkBtn: { <br/>     title: 'Let's Talk', <br/>     link: 'contact' <br/>   }, <br/>   headerImage: 'me.png'<br/>} </code></pre>
 </details>
 
 <details>
 <summary>About <strong>(Mandatory)</strong> ⛔</summary>
 
 ### About:
 `about` is a `mandatory` field of type `object` which contains the following 
 ```
 {
   id: 'string',
   header: 'string',
   title: 'string',
   aboutImage: 'string',
   aboutCards: [
     {
         iconName: 'MUI Icon Name',
         title: 'string',
         description: 'string'
     }
   ],
   aboutDescriptions: 'string'
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section. `header` renders on the top and then renders `title`. After that it then renders `aboutImage`, `aboutCards` and then lastly it renders the `aboutDescriptions`.
 
 > **Note:** Make sure the image name provided in `aboutImage` is included in the `imagesPreload` and in the [images](https://github.com/tauseefansari/Portfolio-Builder/tree/main/public%2Fassets%2Fimages) folder and the `iconName` is an any icon name from [MUI Icon](https://mui.com/material-ui/material-icons/)
 
 Field | Type | Example
 --- | --- | --- 
 `about`  | `object` | <pre><code>{ <br/>   id: 'about', <br/>   header: 'Get to Know', <br/>   title: 'About Me', </br>   aboutImage: 'me-about.png', <br/>   aboutCards: [ <br/>     { <br/>        iconName: 'MilitaryTech', <br/>        title: 'Experience', <br/>        description: '1+ Year Experience' <br/>     } <br/>   ], <br/>  aboutDescriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'<br/>} </code></pre>
 </details>

 <details>
 <summary>Skills <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Skills:
 `skills` is a `mandatory` field of type `object` which contains the following 
 ```
 {
   id: 'string',
   header: 'string',
   title: 'string',
   skillCards: [
     {
         iconName: 'Developer Icon Name',
         title: 'string',
         progress: 'string'
     }
   ]
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section. `header` renders on the top and then renders `title`. After that it then lastly renders `skillCards`.
 
 > **Note:** Make sure the `iconName` here is an any icon name from [Developer Icons](https://react-icons.github.io/react-icons/icons?name=di).
 
 Field | Type | Example
 --- | --- | --- 
 `skills`  | `object` | <pre><code>{ <br/>   id: 'skills', <br/>   header: 'What Skill I Have', <br/>   title: 'My Skills', </br>   skillsCards: [ <br/>     { <br/>        iconName: 'DiReact', <br/>        title: 'React', <br/>        progress: '95%' <br/>     } <br/>   ]<br/>} </code></pre>
 </details>
 
 <details>
 <summary>Timeline <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Timeline:
 `timeline` is a `mandatory` field of type `object` which contains the following 
 ```
 {
   id: 'string',
   header: 'string',
   title: 'string',
   timelineCards: [
     {
         date: 'string',
         title: 'string',
         description: 'string'
     }
   ]
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section. `header` renders on the top and then renders `title`. After that it then lastly renders `timelineCards`.
 
 
 Field | Type | Example
 --- | --- | --- 
 `timeline`  | `object` | <pre><code>{ <br/>   id: 'timeline', <br/>   header: 'How I Reach Here', <br/>   title: 'My Journey', </br>   timelineCards: [ <br/>     { <br/>        date: '2022', <br/>        title: 'My Title 1', <br/>        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' <br/>     } <br/>   ]<br/>} </code></pre>
 </details>
 
 <details>
 <summary>Portfolio <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Portfolio:
 `portfolio` is a `mandatory` field of type `object` which contains the following 
 ```
 {
   id: 'string',
   header: 'string',
   title: 'string',
   portfolioCards: [
     {
         image: 'string',
         title: 'string',
         description: 'string',
         buttons: [
             {
                 title: 'string',
                 url: 'string'
             }
         ]
     }
   ]
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section. `header` renders on the top and then renders `title`. After that it then lastly renders `portfolioCards`.
 
 > **Note:** Make sure the image name provided in `image` is included in the `imagesPreload` and in the [images](https://github.com/tauseefansari/Portfolio-Builder/tree/main/public%2Fassets%2Fimages) folder and the `iconName` is an any icon name from [MUI Icon](https://mui.com/material-ui/material-icons/)
 
 Field | Type | Example
 --- | --- | --- 
 `portfolio`  | `object` | <pre><code>{ <br/>   id: 'portfolio', <br/>   header: 'My Recent Works', <br/>   title: 'Portfolio', </br>   portfolioCards: [ <br/>     { <br/>        image: 'project-1.jpg', <br/>        title: 'My Project 1', <br/>        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', <br/>        buttons: [ <br/>          { <br/>             title: 'GitHub', <br/>             url: 'https://github.com/tauseefansari/Portfolio-Builder'<br/>          } <br/>        ]  <br/>     } <br/>   ]<br/>} </code></pre>
 </details>

 <details>
 <summary>Testimonials <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Testimonials:
 `testimonials` is a `mandatory` field of type `object` which contains the following 
 ```
 {
   id: 'string',
   header: 'string',
   title: 'string',
   testimonialsCards: [
     {
         image: 'string',
         title: 'string',
         description: 'string'
     }
   ]
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section. `header` renders on the top and then renders `title`. After that it then lastly renders `testimonialsCards`.
 
 > **Note:** Make sure the image name provided in `aboutImage` is included in the `imagesPreload` and in the [images](https://github.com/tauseefansari/Portfolio-Builder/tree/main/public%2Fassets%2Fimages) folder and the `iconName` is an any icon name from [MUI Icon](https://mui.com/material-ui/material-icons/)
 
 Field | Type | Example
 --- | --- | --- 
 `testimonials`  | `object` | <pre><code>{ <br/>   id: 'testimonials', <br/>   header: 'Reviews From LinkedIn', <br/>   title: 'Testimonials', </br>   testimonialsCards: [ <br/>     { <br/>        image: 'member-1.jpg', <br/>        title: 'Member 1', <br/>        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'<br/>     } <br/>   ]<br/>} </code></pre>
 </details>
 
 <details>
 <summary>Contact <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Contact:
 `contact` is a `mandatory` field of type `object` which contains the following 
 ```
 {
   id: 'string',
   header: 'string',
   title: 'string',
   mailSubject?: 'string',
   emailKey?: 'string',
   contactCards: [
     {
         iconName: 'MUI Icon Name',
         title: 'string',
         description: 'string',
         link: {
             url: 'string',
             title: 'string'
         }
     }
   ],
   contactForm: [
     {
         type: 'string',
         placeholder: 'string'
     }
   ],
   submitBtn: 'string'
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section. `header` renders on the top and then renders `title`. After that it then renders `contactCards` and then lastly renders `contactForm` with `submitBtn`.
 
 > **Note:** Make sure the `iconName` is an any icon name from [MUI Icon](https://mui.com/material-ui/material-icons/) and `link` is the actual URL.
 
 Field | Type | Example
 --- | --- | --- 
 `contact`  | `object` | <pre><code>{ <br/>   id: 'contact', <br/>   header: 'Get In Touch', <br/>   title: 'Contact Me', </br>   mailSubject: 'Contact Me Portfolio', </br>   emailKey: 'MY_SECRET_KEY',</br>   contactCards: [ <br/>     { <br/>        iconName: 'Email', <br/>        title: 'Email', <br/>        description: 'tauseeftanvir@gmail.com',<br/>        link: { <br/>           url: 'mailto:tauseeftanvir@gmail.com', <br/>           title: 'Send a message' <br/>        } <br/>      } <br/>   ], <br/>   contactForm: [ <br/>      { <br/>         type: 'text',<br/>         placeholder: 'Your Full Name'<br/>      } <br/>   ], <br/>   submitBtn: 'Send Message'<br/>} </code></pre>
 </details>
 
 <details>
 <summary>Footer <strong>(Mandatory)</strong> ⛔</summary>
 
 ### Footer:
 `footer` is a `mandatory` field of type `object` which contains the following 
 ```
 {
   id: 'string',
   header: 'string',
   links: [
     {
         id: 'string',
         title: 'string'
     }
   ],
   copyright: 'string'
 }
 ```
 here `id` is the id of sections like `home`, `timeline` etc. so when you click on navigation it will smoothly move down to the desired section. `header` renders on the top and then renders `title`. After that it then renders `links` and then lastly renders `copyright` text.
 
 > **Note:** Make sure the `iconName` is an any icon name from [MUI Icon](https://mui.com/material-ui/material-icons/) and `link` is same links in which are in `Navigations`.
 
 Field | Type | Example
 --- | --- | --- 
 `footer`  | `object` | <pre><code>{ <br/>   id: 'footer', <br/>   header: 'Tauseef Ansari', <br/>   links: [ <br/>     { <br/>        id: 'home', <br/>        title: 'Home' <br/>      } <br/>   ], <br/>   copyright: 'Tauseef Ansari: All rights reserved'<br/>} </code></pre>
 </details>

 ## Report Bugs 🐛
  Use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/tauseefansari/Portfolio-Builder/issues/new)
 
 ## Contribution Guidelines ⚒️
 
 1. Fork it 🍴
 2. Add code that you want to edit 👨‍💻
 3. Push to your github and request a pull request to `main` 🙋
 
 ## Contributors 👥
 
 <a href="https://github.com/tauseefansari/Portfolio-Builder/graphs/contributors">
 <img src="https://contrib.rocks/image?repo=tauseefansari/Portfolio-Builder" />
 </a>
 
 ## License 🪪
 
 MIT license @ [Tauseef Ansari](https://github.com/tauseefansari/Portfolio-Builder/blob/main/LICENSE.md)
