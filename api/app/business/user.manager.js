'use strict'

import UserDAO from "../DAO/userDAO";
import PasswordDAO from "../DAO/passwordDAO"
import TokenDAO from "../DAO/tokenDAO"
import applicationException from "../service/applicationException"
import sha1 from 'sha1';

function create(context) {
    function hashString(password) {
        return sha1(password);
    }

    async function authenticate(name, password) {
        let userData;
        const user = await UserDAO.getByEmailOrName(name);
        if (!user) {
            throw applicationException.new(applicationException.UNAUTHORIZED, 'User with that email does not exist');
        }
        if (!user.active) {
            throw applicationException.new(applicationException.NOT_FOUND, 'User does not exist or does not active');
        }
        userData = await user;
        await PasswordDAO.authorize(user.id, hashString(password));
        const token = await TokenDAO.create(userData);
        return getToken(token);
    }

    function getToken(token) {
        return {token: token.value};
    }

    async function getUserByToken(receivedToken) {
        const token = await TokenDAO.get(receivedToken);
        return await UserDAO.get(token.userId);
    }

    async function createNewOrUpdate(data) {
        let result = await UserDAO.createNewOrUpdate(data);
        if (await data.password) {
            return await PasswordDAO.createOrUpdate({userId: result.id, password: hashString(data.password)});
        } else {
            return result;
        }
    }

    async function removeUserById(id) {
        return await UserDAO.removeById(id);
    }

    async function removeHashSession(userId) {
        return await TokenDAO.remove(userId);
    }


    return {
        authenticate: authenticate,
        createNewOrUpdate: createNewOrUpdate,
        removeUserById: removeUserById,
        removeHashSession: removeHashSession,
        getUserByToken: getUserByToken
    };
}

export default {
    create: create
};