import mongoose from 'mongoose'

export default function database() {
    return async (req, res, next) => {
        if(mongoose.connection.readyState !== 1) {
            try {
                await mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})
                console.log('Connected to MongoDB')
            } catch(err) {
                console.log(err)
                console.error('Unable to connect to MongoDB')
            }
        }
        next();
    }
}