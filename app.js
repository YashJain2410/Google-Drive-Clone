const express = require('express')
const userRouter = require('./routes/user.routes.js')

const app = express();

app.set('view engine', 'ejs')
app.use(express.json())                                   //Built in validator
app.use(express.urlencoded({ extended: true }))           //Built in validator

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})