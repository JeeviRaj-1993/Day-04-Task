//C)Sum of all numbers in an array 
//anonymous  : 

function sum (array){
                  var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
                }
// IIFE :    
                   (function(array){
                    var sum = 0;
                         for(var i = 0 ; i< array.length ; i++){
                            sum = sum + array[i];
                          }
                          return sum;
                    })([1,2,3,4])               

//Arrow:       
                     sum = (array)=>{
                        var sum = 0;
                             for(var i = 0 ; i< array.length ; i++){
                                sum = sum + array[i];
                              }
                              return sum;
                              }                 