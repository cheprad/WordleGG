
arr = []
arrA = []
arrB = []

function readtextfile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                // alert(allText);

                var lines = allText.split('\n');
                for(var line = 0; line < lines.length; line++){
                    // console.log(lines[line]);
                    arr.push(lines[line]);
                }
            }
        }
    }
    rawFile.send(null);
   
}    



function uniq(a) {
    return Array.from(new Set(a));
 }
function getKeyByValue(object, value) {
    carta
    return Object.keys(object).find(key => object[key] === value);
  }
function kuy(){
    arrA = []
    arrB = []
    arrC = []
    arrD = []
    arrE = []
    result = []
    var A = document.getElementById("A").value;
    var B = document.getElementById("B").value;
    var C = document.getElementById("C").value;
    var D = document.getElementById("D").value;
    var E = document.getElementById("E").value;
    A = A.toLowerCase()
    B = B.toLowerCase()
    C = C.toLowerCase()
    D = D.toLowerCase()
    E = E.toLowerCase()
    count = 0
    error = false
    test = []
    // test.push('pop')
    // test.push('pop')
    // ta = uniq(test)
    // alert(ta)

    
    if (A !== "") {
        for (var i = 0; i < arr.length; i++) {
            str = arr[i]
            if (str.charAt(0)==A){
                arrA.push(str)
            }
        };
    }
    if (B !== "") {
        for (var i = 0; i < arr.length; i++) {
            str = arr[i]
            if (str.charAt(1)==B){
                arrB.push(str)
            }
        };
    }
    if (C !== "") {
        for (var i = 0; i < arr.length; i++) {
            str = arr[i]
            if (str.charAt(2)==C){
                arrC.push(str)
            }
        };
    }
    if (D !== "") {
        for (var i = 0; i < arr.length; i++) {
            str = arr[i]
            if (str.charAt(3)==D){
                arrD.push(str)
            }
        };
    }
    if (E !== "") {
        for (var i = 0; i < arr.length; i++) {
            str = arr[i]
            if (str.charAt(4)==E){
                arrE.push(str)
            }
        };
    }
    // console.log(arrA)
    // console.log(arrB)
    // console.log(arrC)
    // console.log(arrD)
    // console.log(arrE)

    
    for (var i = 0; i < arrA.length; i++) {
        str = arrA[i]
        result.push(str)
    };
    for (var i = 0; i < arrB.length; i++) {
        str = arrB[i]
        result.push(str)
    };
    for (var i = 0; i < arrC.length; i++) {
        str = arrC[i]
        result.push(str)
    };
    for (var i = 0; i < arrD.length; i++) {
        str = arrD[i]
        result.push(str)
    };
    for (var i = 0; i < arrE.length; i++) {
        str = arrE[i]
        result.push(str)
    };

    
    const counts = {};
    const sampleArray = result;
    sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    // console.log(counts)
    r = 0
    last = []
    for (const [key, value] of Object.entries(counts)) {

        if (value >= r){
            if (value > r){
                last = []
            }
            r = value
        
            console.log(key, value);
            last.push(key)
        }
    }

    for (var i = 0; i < last.length; i++) {
        if (A !== "") {
            for (var x = 0; x < last[i].length; x++) {
                if (last[i][0] !== A) {
                    console.log("DICK")
                    error = true
                }
            };
        }
        if (B !== "") {
            for (var x = 0; x < last[i].length; x++) {
                if (last[i][1] !== B) {
                    console.log("DICK")
                    error = true
                }
            };
        }
        if (C !== "") {
            for (var x = 0; x < last[i].length; x++) {
                if (last[i][2] !== C) {
                    console.log("DICK")
                    error = true
                }
            };
        }
        if (D !== "") {
            for (var x = 0; x < last[i].length; x++) {
                if (last[i][3] !== D) {
                    console.log("DICK")
                    error = true
                }
            };
        }
        if (E !== "") {
            for (var x = 0; x < last[i].length; x++) {
                if (last[i][4] !== E) {
                    console.log("DICK")
                    error = true
                }
            };
        }

    };

    if (error == true){
        str = '<h1>ไม่มีคำนี้โว้ย</h1>'
        document.getElementById("slideContainer").innerHTML = str;
    } else {

        console.log(last)
        var str = '<ul>'
    
        last.forEach(function(slide) {
        str += '<li>'+ slide + '</li>';
        }); 
    
        str += '</ul>';
        document.getElementById("slideContainer").innerHTML = str;
    }



}

readtextfile("word.txt")

