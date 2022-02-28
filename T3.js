(function () {
	
	/*The line from 4-8 creates promise object that has parameters such as resolve(to run code if true)and reject(to run code if reject). 
	It has setTimeOut function that takes parameter such as a callback function and other parameter is 100ms which will execute 
	the in that many seconds. This means that once the promise was successful after 100ms it will resolve and return the result 
	
    var aProm = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1);
        }, 100);
    });*/
	
-----------------------------------------------------------------------------------------------------------------------------------
	/*This section will execute based on the result's value. Since 1 is passed to the result. Exit A is printed in the console
	  and in the later section which has two ".then", respective return statement is executed simultaneously and hence 4 
	  is printed to console.  
		
    aProm.then(function (result) {
        if (result === "1") {
            console.log("Exit A");
            return 1;
        }
        if (result === 2) {
            console.log("Exit B");
            return 2;
        } else {
            console.log("Exit C");
			console.log(result);
            return 3;
        }
        return 4;
    }).then(function (result) {
        return result * 2;
    }).then(function (result) {
        console.log(result * 2);
    }); */

	
	/* The control will not execute this section unless something goes wrong 
    var bProm = new Promise(function (resolve, reject) {
        reject("I don't like Thursdays");
    });*/

------------------------------------------------------------------------------------------------------------------------------------
   
	/* This is the first line to get executed due to asynchronous behavior of the code because of setTimeOut 
   // A Second Promise chain - yahee!
    bProm.finally(function (result) {
        console.log("This is the end // Hold your breath and count to ten //");
    })*/

})();

