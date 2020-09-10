import User from '../../models/User'
import nc from 'next-connect'
import database from '../../middlewares/database'

const route = nc()
route.use(database())

//Get Users
route.get(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

//Register User
route.post(async (req, res) => {
    try {
        const user = User({
            username: req.body.username,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        })

        await user.save()

        res.status(200).send(user.toAuthJSON())

    } catch(err) {
        console.log(err)
        res.status(400).send("Bad Request")
    }
})

export default route