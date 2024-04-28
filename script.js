  // =========Sum==============  
    let number1 = 10;
    let number2 = 20;

    var result = number1+number2;

    console.log("The Result is:"+result);

    // ----------conketenation------------

    let firstName = ("Rony");
    let secondName = ("Khan");

    console.log(firstName+' '+secondName);

    // -------------------Array----------------------
    let marks = [97, 97, 90, 95, 89, 79, 80, 85, 80, 85];
    console.log("idex array is:"+marks [5]);
    console.log("idex array is:"+marks [7]);
    console.log("idex array is:"+marks [9]);
    console.log("idex array is:"+marks [10]);

    // ------------Associative Array-------------
    let Human = {firstName:"Rony", secondName:"Khan", age:12, blance:56};
    console.log("The age is:"+Human.age);
    console.log("The blance is:"+Human.blance);

    // --------------Multi Dimentional Array--------

    let twoDimentional = [
      [10, 3, 4, 5, 10, 38],
      [15, 4, 6, 10, 9, 14],
      [15, 4, 7, 12, 8, 16],
      [14, 7, 9, 11, 6, 19],
      [15, 9, 4, 22, 3, 41],
    ];

    console.log("The Multiple Array is:"+twoDimentional[3][4])
    console.log("The Multiple Array is:"+twoDimentional[4][5])
    console.log("The Multiple Array is:"+twoDimentional[3][6])
    console.log("The Multiple Array is:"+twoDimentional[2][4])