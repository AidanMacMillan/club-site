import mongoose, { mongo } from 'mongoose'
import 'mongoose-type-email'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//User
const SocialAccounts = {
    github: String,
    reddit: String,
    discord: String,
    steam: String,
    twitch: String,
    youtube: String,
    twitter: String,
    facebook: String,
    instagram: String,
    linkedIn: String
}

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        index: true
    },
    firstName: {
        type: String,
        minlength: 1,
        required: true
    },
    lastName: {
        type: String,
        minlength: 1,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: String,
    portfolio: String,
    socialAccounts: SocialAccounts
}, {timestamps: true})

UserSchema.pre('save', function(next) {
    var user = this

    if(!user.isModified('password')) {
        return next()
    }

    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err) {
            return next(err)
        }

        user.password = hash
        next()
    })
})

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compare(password, this.hash)
}


UserSchema.methods.generateJWT = function() {
    var now = new Date()
    var exp = new Date(now)
    exp.setDate(today.getDate() + 60)

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000, secret)
    })
}

UserSchema.methods.toAuthJSON = function() {
    return {
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
    }
}

export default mongoose.models.User || mongoose.model('User', UserSchema);