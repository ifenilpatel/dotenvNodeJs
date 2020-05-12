npm i dotenv

create .env file after install dotevn file and file put data as below

DB_HOST=xyz <br />
DB_USER=xyz <br />
DB_PASS=xyz <br />

- To access these above values just use below code at the top of the js file

require('dotenv').config();

- To access env variable

let v1 = process.env.DB_HOST;
