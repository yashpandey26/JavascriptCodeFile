The behavioir of this code is asynchronous as well 

(function () {

  this.zero = 0;
  this.one = 1;
  this.two = 2;
  this.three = 3;
-------------------------------------------------------------------------------------------------------------------------------------
  
  /*This section will run after 1 second and it setTimeOut contains callback function that cecks if the value of actual is 0. 
  If it is true then it is considered resolve and returns 1.
  
  function calcEy() {
    return new Promise(function(fnResolve, fnReject) {
      setTimeout(function() {
        this.actual === 0 ? fnResolve(1) : fnReject();
      }, 1000);
    });
  };*/
------------------------------------------------------------------------------------------------------------------------------------

 /* This section will execute last. The parameter of resolve is returned here and is compared with respective condition. 
	if the condition is true then respective statement is executed.   
 
  var pCalcEy = calcEy().then(function(oRes){
    if (oRes > 0) {
      console.log(oRes);
    } else {
      console.log(oRes - 10);
    }
  }, function() {
    alert("Nonono");
  });*/
  
-------------------------------------------------------------------------------------------------------------------------------------  
  
  /*This section will be executed first because of the asynchronous nature of the code. The setTimeOut is set to 100ms and the 
  value of this.actual = 0.
  
  // var pCalcBee = new Promise(function() {
    // setTimeout(function() {
      // this.actual = 0;
    // }, 100);
    // return this.actual;
  // });*/
  
 -------------------------------------------------------------------------------------------------------------------------------------

  Promise.all(pCalcEy, pCalcBee).then(function(aResults) {
     this.actual = aResults[1];
  });

})();