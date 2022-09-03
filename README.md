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

> **Note:** Make sure the format of `json` file is proper. There should not be any error in `json`


<details>
<summary>Tab / Project Title <strong>(Optional)</strong> ⚠️</summary>

### Tab / Project Title:
`tabTitle` is an `optional` field and is used to set Tab Tile if no `tabTable` is provided it's default to `Portfolio`

Field | Type | Example
--- | --- | --- 
`tabTitle?`  | string | `tabTile: 'Tauseef Ansari'`

</details>

<details>
<summary>Images Preload <strong>(Mandatory)</strong> ⛔</summary>

### Images Preload:
 `imagesPreload` is a `mandatory` field of type `string[]` which contains names of all the images with extension which you want to preload before project run. 
> **Note:** Make sure all the images should be in the [images](https://github.com/tauseefansari/Portfolio-Builder/tree/main/public%2Fassets%2Fimages) folder

Field | Type | Example
--- | --- | --- 
`imagesPreload`  | `string[]` | ```imagesPreload: ['my-image.png']```

</details>

## Report Bugs 🐛

- Use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/tauseefansari/Portfolio-Builder/issues/new)

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
