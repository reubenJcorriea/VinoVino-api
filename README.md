
# VinoVino App - Server

VinoVino is a wine info and pairing app aimed to inform the user about any given wine.



## Backend Stack

![Node.js](https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465)

![Express.js](https://camo.githubusercontent.com/6f61ce982d7a61713d63c947148300012945bd4a4cafb8b9313e2426c5a1f273/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3430344435393f7374796c653d666f722d7468652d6261646765)

![Axios](https://camo.githubusercontent.com/75cd45ec0a6972fdb0fa6862254f2400e212242b45cf380dd1127229ccb1a1aa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4178696f732d77686974653f7374796c653d666f722d7468652d6261646765)

![mysql](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
## Run Locally

Clone the project:

```bash
  git clone git@github.com:reubenJcorriea/VinoVino-api.git
```

Go to the project directory:

```bash
  cd server
```

Install dependencies:

```bash
  npm install
```

Migrate database:

```bash
  knex migrate:latest
```

Seed database:

```bash
  knex seed:run
```

Start the app

```bash
  npm run start
```
