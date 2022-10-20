// Array.prototype.find()
function findUserByUsername(usersArray, username) {
    return usersArray.find(obj => obj.username === username);
  } // End of Array.prototype.find()
  


// Array.prototype.findIndex()
function removeUser(usersArray, username) {
    let idx = usersArray.findIndex(obj => obj.username === username);
    if(idx !== -1){
        return usersArray.splice(idx, 1)[0];
    }
} // End of Array.prototype.findIndex()