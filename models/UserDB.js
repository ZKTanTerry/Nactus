"use strict";

var db = require('../db-connections');

class UserDB{
    getAllUser(callback){
        var sql = "SELECT * FROM mydb.user";
        db.query(sql, callback);
    }

    addUser(user, callback){
        var sql = "INSERT INTO mydb.user (username, email, password, firstName, lastName, dateOfBirth, mobile, gender, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return db.query(sql, [user.getUsername(), user.getEmail(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getDateOfBirth(), user.getMobile(), user.getGender(), user.getAddress()], callback);
    }

    deleteUser(username, callback){
        var sql = "DELETE FROM mydb.user WHERE username = ?"
        return db.query(sql, [username], callback);
    }

    userLogin(user, callback){
        var sql = "SELECT * FROM mydb.user WHERE username = ? AND password = ?";
        return db.query(sql, [user.getUsername(), user.getPassword()], callback);
    }

    userUpdate(user, callback){
        var sql = "UPDATE mydb.user SET password = ? WHERE username = ?";
        return db.query(sql, [user.getPassword(), user.getUsername()], callback);
    }
}

module.exports = UserDB;