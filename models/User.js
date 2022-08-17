"use strict";

class User{
    constructor(username, email, password, firstName, lastName, dateOfBirth, mobile, gender, address){
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.mobile = mobile;
        this.gender = gender;
        this.address = address;
    }
    
    getUsername(){
        return this.username;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    getDateOfBirth(){
        return this.dateOfBirth;
    }

    getMobile(){
        return this.mobile;
    }

    getGender(){
        return this.gender;
    }

    getAddress(){
        return this.address;
    }

    setUsername(){
        this.username = username;
    }

    setEmail(){
        this.email = email;
    }

    setPassword(){
        this.password = password;
    }

    setFirstName(){
        this.firstName = firstname;
    }

    setLastName(){
        this.lastName = lastname;
    }

    setDateOfBirth(){
        this.dateOfBirth = dateOfBirth;
    }

    setMobile(){
        this.mobile = mobile;
    }

    setGender(){
        this.gender = gender;
    }

    setAddress(){
        this.address = address;
    }
}

module.exports = User;