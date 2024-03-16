'use strict'

function saveToStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))

}