'use strict'

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import momentWrapper from '../service/momentWrapper'
import mongoConverter from '../service/mongoConverter'
import applicationException from "../service/applicationException";
import jwt from 'jsonwebtoken';

const tokenTypeEnum = {
    authorization: 'authorization'
};

const tokenTypes = [tokenTypeEnum.authorization];

const tokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    createDate: { type: Number, required: true },
    type: { type: String, enum: tokenTypes, required: true },
    value: { type: String, required: true }
}, {
    collection: 'token'
});

const TokenModel = mongoose.model('token', tokenSchema);

async function create(user) {
    const access = 'auth';
    const userData = {
        userId: user.id,
        name: user.email,
        role: user.role,
        access: access
    };
    const value = jwt.sign(
        userData,
        config.JwtSecret,
        {
            expiresIn: '3h'
        });
    const result = await TokenModel({
        userId: user.id,
        type: 'authorization',
        value: value,
        createDate: momentWrapper.get().valueOf()
    }).save();
    if (result) {
        return mongoConverter(result);
    }
    throw applicationException.new(applicationException.BAD_REQUEST, error.message);
}

export default {
    create: create,

    model: TokenModel
}