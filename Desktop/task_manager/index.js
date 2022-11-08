import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import router from './routes';
import sequelize from './model';

const app = express();

const PORT = process.env.PORT

sequelize.
    authenticate().
    then(() => {
        console.log("connection established successully")
    }).catch((error) => {
        console.log('unable to connect', error)
    })

app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))