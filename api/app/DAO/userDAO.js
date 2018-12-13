import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter'
import applicationException from "../service/applicationException";

const userRole = {
    admin: 'admin',
    user: 'user'
};

const userRoles = [userRole.admin, userRole.user];

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    role: {type: String, enum: userRoles, default: userRole.user, required: false},
    active: {type: Boolean, default: true, required: false},
    isAdmin: {type: Boolean, default: false, required: false}
}, {
    collection: 'dp_user'
});

userSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('dp_user', userSchema);

async function getByEmailOrName(name) {
    const result = await UserModel.findOne({ $or: [{ email: name }, { name: name }] });
    if (result) {
        return mongoConverter(result);
    }
    throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
}

async function get(id) {
    return await UserModel.findOne({_id: id}).then((result) => {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(user) {
    return await Promise.resolve().then(() => {
        if (!user.id) {
            return new UserModel(user).save().then(result => {
                if (result) {
                    return mongoConverter(result);
                }
            });
        } else {
            return UserModel.findOneAndUpdate({_id: data.id}, data);
        }
    }).catch(error => {
        if ('ValidationError' === error.name) {
            error = error.errors[Object.keys(error.errors)[0]];
            console.log(error);
            throw applicationException.new(applicationException.BAD_REQUEST, error.message);
        }
        throw error;
    });
}

export default {
    getByEmailOrName: getByEmailOrName,
    get: get,
    createNewOrUpdate: createNewOrUpdate,

    model: UserModel
}