const accountId = 5555
let accountEmail = "test@gmail.com"
var accountPassword = "123654"
accountCity = "Indore"

console.log(accountId);

/*
do not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);