import User from '../../../models/User'
import nc from 'next-connect'
import database from '../../../middlewares/database'

const route = nc()
route.use(database())

//Get User
route.get(async (req, res) => {
    const {
        query: { username },
    } = req

    const user = await User.findOne({username: username})
    res.status(200).json(user)
})

export default route