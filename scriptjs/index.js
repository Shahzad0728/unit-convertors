
    
    function length(){

        let from = document.getElementById("from").value;
        let to = document.getElementById("to").value;
        let fromvalue = parseInt(document.getElementById("fv").value);
        let error = document.getElementById("error");
    
            // meter to other units
    
        if ((fromvalue != NaN) && (fromvalue >= 0)){
            error.innerText = "";
    
                if(from === "meter" && to === "meter"){
                    let m2m = meter2meter(fromvalue);
                    document.getElementById("ov").value = m2m;
                }
           
            else if(from === "meter" && to === "kilometer"){
                let km = meter2kilometer(fromvalue);
                document.getElementById("ov").value = km;
            }
          
            else if(from === "meter" && to === "centimeter"){
              let centimeter = meter2centimeter(fromvalue);
              document.getElementById("ov").value = centimeter;
            }
            
            else if(from === "meter" && to === "milimeter"){
                let milimeter = meter2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "meter" && to === "micrometer"){
                let micrometer = meter2micrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
            
            else if(from === "meter" && to === "nanometer"){
                let nanometer = meter2nanometer(fromvalue);
                document.getElementById("ov").value = nanometer;
            }
    
            else if ( from === "meter" && to === "mile"){
                let mile = meter2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
        
            else  if ( from === "meter" && to === "yard"){
                let yard = meter2yard ( fromvalue );
                document.getElementById("ov").value = yard;
            }
    
            else if ( from === "meter" && to === "foot"){
                let foot = meter2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "meter" && to === "inch"){
                let inch = meter2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "meter" && to === "lightyear"){
                let ly = meter2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
    
            // kilometer  to other units
    
            else if(from === "kilometer" && to === "kilometer"){
                let k2k = kilometer2kilometer(fromvalue);
                document.getElementById("ov").value = k2k;
            }
           
            else if(from === "kilometer" && to === "meter"){
                let km = kilometer2meter(fromvalue);
                document.getElementById("ov").value = km;
            }
        
            else if(from === "kilometer" && to === "centimeter"){
              let centimeter = kilometer2centimeter(fromvalue);
              document.getElementById("ov").value = centimeter;
            }
            
            else if(from === "kilometer" && to === "milimeter"){
                let milimeter = kilometer2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "kilometer" && to === "micrometer"){
                let micrometer = kilometer2micrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
            
            else if(from === "kilometer" && to === "nanometer"){
                let nanometer = kilometer2nanometer(fromvalue);
                document.getElementById("ov").value = nanometer;
            }
    
            else if ( from === "kilometer" && to === "mile"){
                let mile = kilometer2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
        
            else  if ( from === "kilometer" && to === "yard"){
                let yard = kilometer2yard ( fromvalue );
                document.getElementById("ov").value = yard;
            }
    
            else if ( from === "kilometer" && to === "foot"){
                let foot = kilometer2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "kilometer" && to === "inch"){
                let inch = kilometer2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "kilometer" && to === "lightyear"){
                let ly = kilometer2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
    
            // centimeter to other units
    
            else if(from === "centimeter" && to === "centimeter"){
                let c2c = centimeter2centimeter(fromvalue);
                document.getElementById("ov").value = c2c;
            }
           
            else if(from === "centimeter" && to === "meter"){
                let meter = centimeter2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "centimeter" && to === "kilometer"){
              let kilometer = centimeter2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
            
            else if(from === "centimeter" && to === "milimeter"){
                let milimeter = centimeter2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
          
            else if(from === "centimeter" && to === "micrometer"){
                let micrometer = centimeter2micrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
            
            else if(from === "centimeter" && to === "nanometer"){
                let nanometer = centimeter2nanometer(fromvalue);
                document.getElementById("ov").value = nanometer;
            }
    
            else if ( from === "centimeter" && to === "mile"){
                let mile = centimeter2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
        
            else  if ( from === "centimeter" && to === "yard"){
                let yard = centimeter2yard ( fromvalue );
                document.getElementById("ov").value = yard;
            }
    
            else if ( from === "centimeter" && to === "foot"){
                let foot = centimeter2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "centimeter" && to === "inch"){
                let inch = centimeter2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "centimeter" && to === "lightyear"){
                let ly = centimeter2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
    
            // milimeter to other units
    
            else if(from === "milimeter" && to === "milimeter"){
                let m2m = milimeter2milimeter(fromvalue);
                document.getElementById("ov").value = m2m;
            }
           
            else if(from === "milimeter" && to === "meter"){
                let meter = milimeter2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "milimeter" && to === "kilometer"){
              let kilometer = milimeter2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
    
            else if(from === "milimeter" && to === "centimeter"){
                let centimeter = milimeter2centimeter (fromvalue);
                document.getElementById("ov").value = centimeter;
            }
            
            else if(from === "milimeter" && to === "micrometer"){
                let micrometer = milimeter2micrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
            
            else if(from === "milimeter" && to === "nanometer"){
                let nanometer = milimeter2nanometer(fromvalue);
                document.getElementById("ov").value = nanometer;
            }
    
            else if ( from === "milimeter" && to === "mile"){
                let mile = milimeter2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
        
            else  if ( from === "milimeter" && to === "yard"){
                let yard = milimeter2yard ( fromvalue );
                document.getElementById("ov").value = yard;
            }
    
            else if ( from === "milimeter" && to === "foot"){
                let foot = milimeter2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "milimeter" && to === "inch"){
                let inch = milimeter2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "milimeter" && to === "lightyear"){
                let ly = milimeter2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
            // micrometer to other units
    
            else if(from === "micrometer" && to === "micrometer"){
                let mi2mi = micrometer2micrometer(fromvalue);
                document.getElementById("ov").value = mi2mi;
            }
           
            else if(from === "micrometer" && to === "meter"){
                let meter = micrometer2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "micrometer" && to === "kilometer"){
              let kilometer = micrometer2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
            
            else if(from === "micrometer" && to === "centimeter"){
                let centimeter = micrometer2centimeter(fromvalue);
                document.getElementById("ov").value = centimeter;
            }
            
          
            else if(from === "micrometer" && to === "milimeter"){
                let milimeter = micrometer2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "micrometer" && to === "nanometer"){
                let nanometer = micrometer2nanometer(fromvalue);
                document.getElementById("ov").value = nanometer;
            }
    
            else if ( from === "micrometer" && to === "mile"){
                let mile = micrometer2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
        
            else  if ( from === "micrometer" && to === "yard"){
                let yard = micrometer2yard ( fromvalue );
                document.getElementById("ov").value = yard;
            }
    
            else if ( from === "micrometer" && to === "foot"){
                let foot = micrometer2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "micrometer" && to === "inch"){
                let inch = micrometer2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "micrometer" && to === "lightyear"){
                let ly = micrometer2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
            // nanometer to converts units
    
            else if(from === "nanometer" && to === "nanometer"){
                let nano2nano = nanometer2nanometer(fromvalue);
                document.getElementById("ov").value = nano2nano ;
            }
           
            else if(from === "nanometer" && to === "meter"){
                let meter = nanometer2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "nanometer" && to === "kilometer"){
              let kilometer = nanometer2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
            
            else if(from === "nanometer" && to === "centimeter"){
                let centimeter = nanometer2centimeter(fromvalue);
                document.getElementById("ov").value = centimeter;
            }
            
          
            else if(from === "nanometer" && to === "milimeter"){
                let milimeter = nanometer2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "nanometer" && to === "micrometer"){
                let micrometer = nanometer2micrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
    
            else if ( from === "nanometer" && to === "mile"){
                let mile = nanometer2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
        
            else  if ( from === "nanometer" && to === "yard"){
                let yard = nanometer2yard ( fromvalue );
                document.getElementById("ov").value = yard;
            }
    
            else if ( from === "nanometer" && to === "foot"){
                let foot = nanometer2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "nanometer" && to === "inch"){
                let inch = nanometer2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "nanometer" && to === "lightyear"){
                let ly = nanometer2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
            // mile to converts units 
    
            else if(from === "mile" && to === "mile"){
                let mile2mile = mile2mile(fromvalue);
                document.getElementById("ov").value = mile2mile;
            }
           
            else if(from === "mile" && to === "meter"){
                let meter = mile2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "mile" && to === "kilometer"){
              let kilometer = mile2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
            
            else if(from === "mile" && to === "centimeter"){
                let centimeter = mile2centimeter(fromvalue);
                document.getElementById("ov").value = centimeter;
            }
            
            else if(from === "mile" && to === "milimeter"){
                let milimeter = mile2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "mile" && to === "micrometer"){
                let micrometer = mile2mircrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
    
            else if ( from === "mile" && to === "nanometer"){
                let nanometer = mile2nanometer( fromvalue );
                document.getElementById("ov").value = nanometer;
            }
        
            else  if ( from === "mile" && to === "yard"){
                let yard = mile2yard ( fromvalue );
                document.getElementById("ov").value = yard;
            }
    
            else if ( from === "mile" && to === "foot"){
                let foot = mile2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "mile" && to === "inch"){
                let inch = mile2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "mile" && to === "lightyear"){
                let ly = mile2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            } 
            // yard to converts other units
    
            else if(from === "yard" && to === "yard"){
                let y2y = yard2yard(fromvalue);
                document.getElementById("ov").value = y2y;
            }
           
            else if(from === "yard" && to === "meter"){
                let meter = yard2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "yard" && to === "kilometer"){
              let kilometer = yard2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
            
            else if(from === "yard" && to === "centimeter"){
                let centimeter = yard2centimeter(fromvalue);
                document.getElementById("ov").value = centimeter;
            }
            
            else if(from === "yard" && to === "milimeter"){
                let milimeter = yard2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "yard" && to === "micrometer"){
                let micrometer = yard2mircrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
    
            else if ( from === "yard" && to === "nanometer"){
                let nanometer = yard2nanometer( fromvalue );
                document.getElementById("ov").value = nanometer;
            }
        
            else  if ( from === "yard" && to === "mile"){
                let mile = yard2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
    
            else if ( from === "yard" && to === "foot"){
                let foot = yard2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "yard" && to === "inch"){
                let inch = yard2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "yard" && to === "lightyear"){
                let ly = yard2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }    
            // foot to converts other units
    
            else if(from === "foot" && to === "foot"){
                let f2f = foot2foot(fromvalue);
                document.getElementById("ov").value = f2f;
            }
           
            else if(from === "foot" && to === "meter"){
                let meter = foot2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "foot" && to === "kilometer"){
              let kilometer = foot2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
            
            else if(from === "foot" && to === "centimeter"){
                let centimeter = foot2centimeter(fromvalue);
                document.getElementById("ov").value = centimeter;
            }
            
            else if(from === "foot" && to === "milimeter"){
                let milimeter = foot2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "foot" && to === "micrometer"){
                let micrometer = foot2mircrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
    
            else if ( from === "foot" && to === "nanometer"){
                let nanometer = foot2nanometer( fromvalue );
                document.getElementById("ov").value = nanometer;
            }
        
            else  if ( from === "foot" && to === "mile"){
                let foot = foot2mile ( fromvalue );
                document.getElementById("ov").value = foot;
            }
    
            else if ( from === "foot" && to === "yard"){
                let yard = foot2yard (fromvalue);
                document.getElementById ("ov").value = yard;
            }
    
            else if ( from === "foot" && to === "inch"){
                let inch = foot2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "foot" && to === "lightyear"){
                let ly = foot2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
    
            // inch to other units
    
            else if(from === "inch" && to === "inch"){
                let in2in = inch2inch(fromvalue);
                document.getElementById("ov").value = in2in;
            }
           
            else if(from === "inch" && to === "meter"){
                let meter = inch2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "inch" && to === "kilometer"){
              let kilometer = inch2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
            
            else if(from === "inch" && to === "centimeter"){
                let centimeter = inch2centimeter(fromvalue);
                document.getElementById("ov").value = centimeter;
            }
            
            else if(from === "inch" && to === "milimeter"){
                let milimeter = inch2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "inch" && to === "micrometer"){
                let micrometer = inch2mircrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
    
            else if ( from === "inch" && to === "nanometer"){
                let nanometer = inch2nanometer( fromvalue );
                document.getElementById("ov").value = nanometer;
            }
        
            else  if ( from === "inch" && to === "mile"){
                let mile = inch2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
    
            else if ( from === "inch" && to === "yard"){
                let yard = inch2yard (fromvalue);
                document.getElementById ("ov").value = yard;
            }
    
            else if ( from === "inch" && to === "foot"){
                let foot = inch2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "inch" && to === "lightyear"){
                let ly = inch2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
    
            // lightyear to other units
           
            else if(from === "lightyear" && to === "meter"){
                let meter = lightyear2meter(fromvalue);
                document.getElementById("ov").value = meter;
            }
    
            else if(from === "lightyear" && to === "kilometer"){
              let kilometer = lightyear2kilometer (fromvalue);
              document.getElementById("ov").value = kilometer;
            }
            
            else if(from === "lightyear" && to === "centimeter"){
                let centimeter = lightyear2centimeter(fromvalue);
                document.getElementById("ov").value = centimeter;
            }
            
            else if(from === "lightyear" && to === "milimeter"){
                let milimeter = lightyear2milimeter(fromvalue);
                document.getElementById("ov").value = milimeter;
            }
            
            else if(from === "lightyear" && to === "micrometer"){
                let micrometer = lightyear2mircrometer(fromvalue);
                document.getElementById("ov").value = micrometer;
            }
    
            else if ( from === "lightyear" && to === "nanometer"){
                let nanometer = lightyear2nanometer( fromvalue );
                document.getElementById("ov").value = nanometer;
            }
        
            else  if ( from === "lightyear" && to === "mile"){
                let mile = lightyear2mile ( fromvalue );
                document.getElementById("ov").value = mile;
            }
    
            else if ( from === "lightyear" && to === "yard"){
                let yard = lightyear2yard (fromvalue);
                document.getElementById ("ov").value = yard;
            }
    
            else if ( from === "lightyear" && to === "foot"){
                let foot = lightyear2foot (fromvalue);
                document.getElementById ("ov").value = foot;
            }
    
            else if ( from === "lightyear" && to === "inch"){
                let inch = lightyear2inch (fromvalue);
                document.getElementById ("ov").value = inch;
            }
    
            else if ( from === "lightyear" && to === "lightyear"){
                let ly = lightyear2lightyear (fromvalue);
                document.getElementById ("ov").value = ly;
            }
        }
        else{
            error.innerText = ("Not a Number!");
            document.getElementById("ov").value = "";
        }

    }
    function len ( ){
        document.getElementById("fv").value ="";
        document.getElementById("ov").value ="";
        document.getElementById("error").value = "";
    }
               // TEMPRATURE
    
               
            function temprature() {
                let inputtemp =parseInt(document.getElementById("input").value) ;
                let from = document.getElementById("temp-select1").value;
                let to = document.getElementById("temp-select2").value;
                let error = document.getElementById ("error1");
    
                if ((!isNaN(inputtemp)) && (inputtemp)) {
                    error.innerText ="";
                    // Rest of your code...
            
                    if ( from === "Celsius" && to === "Celsius" ) {
                        let c2c = celsius2celsius(inputtemp);
                        document.getElementById("output").value = c2c;
                    } 
    
                    else if ( from === "Celsius" && to === "Fahrenheit"){
                        let c2f = celsius2ferhnite (inputtemp);
                        document.getElementById("output").value = c2f;
                    }
    
                    else if ( from === "Celsius" && to === "Kelvin"){
                        let c2k = celsius2kelvin(inputtemp);
                        document.getElementById("output").value = c2k;
                    }
    
                    else if ( from === "Celsius" && to === "Rankine"){
                        let c2r = celsius2rankine(inputtemp);
                        document.getElementById("output").value = c2r;
                    }
    
                    // ferhnite
    
                    else if ( from === "Fahrenheit" && to === "Fahrenheit" ) {
                        let f2f = ferhnite2ferhnite(inputtemp);
                        document.getElementById("output").value = f2f;
                    } 
    
                    else if ( from === "Fahrenheit" && to === "Celsius"){
                        let f2c = ferhnite2celsius (inputtemp);
                        document.getElementById("output").value = f2c;
                    }
    
                    else if ( from === "Fahrenheit" && to === "Kelvin"){
                        let f2k = ferhnite2kelvin(inputtemp);
                        document.getElementById("output").value = f2k;
                    }
    
                    else if ( from === "Fahrenheit" && to === "Rankine"){
                        let f2r = ferhnite2rankine(inputtemp);
                        document.getElementById("output").value = f2r;
                    }
    
                    // kelvin
    
                    else if ( from === "Kelvin" && to === "Kelvin" ) {
                        let k2k = kelvin2kelvin(inputtemp);
                        document.getElementById("output").value = k2k;
                    } 
    
                    else if ( from === "Kelvin" && to === "Celsius"){
                        let k2c = kelvin2celsius(inputtemp);
                        document.getElementById("output").value = k2c;
                    }
    
                    else if ( from === "Kelvin" && to === "Fahrenheit"){
                        let k2f = kelvin2ferhnite(inputtemp);
                        document.getElementById("output").value = k2f;
                    }
    
                    else if ( from === "Kelvin" && to === "Rankine"){
                        let k2r = kelvin2rankine(inputtemp);
                        document.getElementById("output").value = k2r;
                    }
    
                    // rankine 
    
                    else if ( from === "Rankine" && to === "Rankine" ) {
                        let r2r = rankine2rankine(inputtemp);
                        document.getElementById("output").value = r2r;
                    } 
    
                    else if ( from === "Rankine" && to === "Celsius"){
                        let r2c = rankine2celsius(inputtemp);
                        document.getElementById("output").value = r2c;
                    }
    
                    else if ( from === "Rankine" && to === "Kelvin"){
                        let r2k = rankine2kelvin(inputtemp);
                        document.getElementById("output").value = r2k;
                    }
    
                    else if ( from === "Rankine" && to === "Fahrenheit"){
                        let c2f = rankine2ferhnite(inputtemp);
                        document.getElementById("output").value = c2f;
                    }
    
                }
                else{
                error.innerText = ("Not a Number!");
                document.getElementById("output").value = "";
                }
        }
        function temp ( ){
            document.getElementById("input").value ="";
            document.getElementById("output").value ="";
            document.getElementById("error").value = "";
        }
    
    
    
                // AREA UNITS
    
    
            function area(){
    
                let inputarea =parseFloat(document.getElementById("areain").value) ;
                let from = document.getElementById("area-select1").value;
                let to = document.getElementById("area-select2").value;
                let error = document.getElementById ("error2");
    
    
                if ((inputarea != NaN) && (inputarea >= 0)){
                    error.innerText = "";
             
                    
                    if(from =="square-meter" && to == "square-meter"){
                        let sm2sm = squaremeter2squaremeter (inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }

                    else if( from =="square-meter" && to =="square-kilometer"){
                        let sm2sk = squaremeter2squarekilometer(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-meter" && to == "square-centimeter"){
                        let sm2scenti =squaremeter2squarecentimeter(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-meter" && to =="square-milimeter"){
                        let sm2smili = squaremeter2squaremilimeter(inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-meter" && to =="square-micrometer"){
                        let sm2micro = squaremeter2squaremicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-meter" && to == "hectare"){
                        let sm2hectare =squaremeter2hectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-meter" && to =="acre"){
                        let sm2acre = squaremeter2acre(inputarea);
                        document.getElementById("areaout").value = (sm2acre);
                    }
    
                    else if(from =="square-meter" && to =="square-mile"){
                        let sm2smile = squaremeter2squaremile(inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-meter" && to =="square-yard"){
                        let sm2syard = squaremeter2squareyard(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-meter" && to == "square-foot"){
                        let sm2sf = squaremeter2squarefoot (inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    else if(from =="square-meter" && to == "square-inch"){
                        let sm2sinch =squaremeter2squareinch(inputarea);
                        document.getElementById("areaout").value = sm2sinch;
                    }
    
                    // squaremeter to other units
    
                    else if(from =="square-kilometer" && to == "square-kilometer"){
                        let sm2sm = squarekilometer2squarekilometer (inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
                    else if( from =="square-kilometer" && to =="square-meter"){
                        let sm2sk = squarekilometer2squaremeter(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-kilometer" && to == "square-centimeter"){
                        let sm2scenti =squarekilometer2squarecentimeter(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-kilometer" && to =="square-milimeter"){
                        let sm2smili = squarekilometer2squaremilimeter(inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-kilometer" && to =="square-micrometer"){
                        let sm2micro =squarekilometer2squaremicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-kilometer" && to == "hectare"){
                        let sm2hectare = squarekilometer2hectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-kilometer" && to =="acre"){
                        let sm2acre = squarekilometer2acre(inputarea);
                        document.getElementById("areaout").value = (sm2acre);
                    }
    
                    else if(from =="square-kilometer" && to =="square-mile"){
                        let sm2smile = squarekilometer2squaremile(inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-kilometer" && to =="square-yard"){
                        let sm2syard = squarekilometer2squareyard(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-kilometer" && to == "square-foot"){
                        let sm2sf = squarekilometer2squarefoot(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    else if(from =="square-kilometer" && to == "square-inch"){
                        let sm2sinch = squarekilometer2squareinch(inputarea);
                        document.getElementById("areaout").value = sm2sinch;
                    }
    
                    // squarecentimeter to other units 
    
                    else if(from =="square-centimeter" && to == "square-centimeter"){
                        let sm2sm = squarecentimeter2squarecentimeter (inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
                    else if( from =="square-centimeter" && to =="square-meter"){
                        let sm2sk = squarecentimeter2squaremeter(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-centimeter" && to == "square-kilometer"){
                        let sm2scenti = squarecentimeter2squarekilometer(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-centimeter" && to =="square-milimeter"){
                        let sm2smili = squarecentimeter2squaremilimeter(inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-centimeter" && to =="square-micrometer"){
                        let sm2micro = squarecentimeter2squaremicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-centimeter" && to == "hectare"){
                        let sm2hectare = squarecentimeter2hectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-centimeter" && to =="acre"){
                        let sm2acre = squarecentimeter2acre(inputarea);
                        document.getElementById("areaout").value = (sm2acre);
                    }
    
                    else if(from =="square-centimeter" && to =="square-mile"){
                        let sm2smile = squarecentimeter2squaremile(inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-centimeter" && to =="square-yard"){
                        let sm2syard = squarecentimeter2squareyard(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-centimeter" && to == "square-foot"){
                        let sm2sf =squarecentimeter2squarefoot(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    else if(from =="square-centimeter" && to == "square-inch"){
                        let sm2sinch =squarecentimeter2squareinch(inputarea);
                        document.getElementById("areaout").value = sm2sinch;
                    }
    
                    //square milimeter
    
                    else if(from =="square-milimeter" && to == "square-milimeter"){
                        let sm2sm = squaremilimeter2squaremilimeter (inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
                    else if( from =="square-milimeter" && to =="square-meter"){
                        let sm2sk = squaremilimeter2squaremeter(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-milimeter" && to == "square-kilometer"){
                        let sm2scenti = squaremilimeter2squarekilometer(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-milimeter" && to =="square-centimeter"){
                        let sm2smili = squaremilimeter2squarecentimeter(inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-milimeter" && to =="square-micrometer"){
                        let sm2micro = squaremilimeter2squaremicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-milimeter" && to == "hectare"){
                        let sm2hectare = squaremilimeter2hectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-milimeter" && to =="acre"){
                        let sm2acre = squaremilimeter2acre(inputarea);
                        document.getElementById("areaout").value = (sm2acre);
                    }
    
                    else if(from =="square-milimeter" && to =="square-mile"){
                        let sm2smile = squaremilimeter2squaremile(inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-milimeter" && to =="square-yard"){
                        let sm2syard = squaremilimeter2squareyard(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-milimeter" && to == "square-foot"){
                        let sm2sf =squaremilimeter2squarefoot(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    else if(from =="square-milimeter" && to == "square-inch"){
                        let sm2sinch =squaremilimeter2squareinch(inputarea);
                        document.getElementById("areaout").value = sm2sinch;
                    }
    
                    // square micrometer


                    else if(from =="square-micrometer" && to == "square-micrometer"){
                        let sm2sm = inputarea ;
                        document.getElementById("areaout").value = (sm2sm);
                    }
                    else if( from =="square-micrometer" && to =="square-meter"){
                        let sm2sk = squareMicrometersToSquareMeters(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-micrometer" && to == "square-kilometer"){
                        let sm2scenti = squareMicrometersToSquareKilometers(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-micrometer" && to =="square-centimeter"){
                        let sm2smili = squareMicrometersToSquareCentimeters(inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-micrometer" && to =="square-milimeter"){
                        let sm2micro = squareMicrometersToSquareMillimeters(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-micrometer" && to == "hectare"){
                        let sm2hectare = squareMicrometersToHectares(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-micrometer" && to =="acre"){
                        let sm2acre = squareMicrometersToAcres(inputarea);
                        document.getElementById("areaout").value = (sm2acre);
                    }
    
                    else if(from =="square-micrometer" && to =="square-mile"){
                        let sm2smile = squareMicrometersToSquareMiles(inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-micrometer" && to =="square-yard"){
                        let sm2syard = squareMicrometersToSquareYards(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-micrometer" && to == "square-foot"){
                        let sm2sf =squareMicrometersToSquareFeet(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    else if(from =="square-micrometer" && to == "square-inch"){
                        let sm2sinch=squareMicrometersToSquareInches(inputarea);
                        document.getElementById("areaout").value = sm2sinch;
                    }

    
                    // Hectare
    
                    else if(from =="hectare" && to == "hectare"){
                        let sm2sm = hectare2hectare (inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
                    else if( from =="hectare" && to =="square-meter"){
                        let sm2sk = hectare2squaremeter(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="hectare" && to == "square-kilometer"){
                        let sm2scenti = hectare2squarekilometer(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="hectare" && to =="square-centimeter"){
                        let sm2smili = hectare2squarecentimeter(inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="hectare" && to =="square-micrometer"){
                        let sm2micro = hectare2squaremicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="hectare" && to == "square-milimeter"){
                        let sm2hectare = hectare2squaremilimeter(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="hectare" && to =="acre"){
                        let sm2acre =hectare2acre(inputarea);
                        document.getElementById("areaout").value = (sm2acre);
                    }
    
                    else if(from =="hectare" && to =="square-mile"){
                        let sm2smile = hectare2squaremile(inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="hectare" && to =="square-yard"){
                        let sm2syard = hectare2squareyard(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="hectare" && to == "square-foot"){
                        let sm2sf =hectare2squarefoot(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    else if(from =="hectare" && to == "square-inch"){
                        let sm2sinch =hectare2squareinch(inputarea);
                        document.getElementById("areaout").value = sm2sinch;
                    }
    
                    // Acre to converts other units
    
                    else if(from =="acre" && to == "acre"){
                        let sm2sm = acretoacre(inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
    
                    else if( from =="acre" && to =="square-meter"){
                        let sm2sk = acre2Sqm(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="acre" && to == "square-kilometer"){
                        let sm2scenti = acre2SqKm(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="acre" && to =="square-centimeter"){
                        let sm2sc = acreToSqCenti (inputarea);
                        document.getElementById("areaout").value = (sm2sc);
                    }
    
                    else if(from =="acre" && to =="square-milimeter"){
                        let sm2smili = acreToSqMili (inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="acre" && to =="square-micrometer"){
                        let sm2micro = acreToSqMicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="acre" && to == "hectare"){
                        let sm2hectare = acreToHectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="acre" && to =="sqaure-yard"){
                        let sm2acre = acreToSqYard(inputarea);
                        document.getElementById("areaout").value = (sm2acre);
                    }
    
                    else if(from =="acre" && to =="square-mile"){
                        let sm2smile = acreToSqMile (inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="acre" && to =="square-yard"){
                        let sm2syard = acreToSqYard(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="acre" && to == "square-foot"){
                        let sm2sf = acreToSqFoot(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    else if(from ==="acre" && to ==="square-inch"){
                        let sm2sinch = acreToSqInch(inputarea);
                        document.getElementById("areaout").value = sm2sinch;
                    }
                
                    // sq mile to other converters
    
                    else if(from =="square-mile" && to == "square-mile"){
                        let sm2sm = sqmiletomile(inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
    
                    else if( from =="square-mile" && to =="square-meter"){
                        let sm2sk = sqMileToSqMeter(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-mile" && to == "square-kilometer"){
                        let sm2scenti = sqMileToSqKilo(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-mile" && to =="square-centimeter"){
                        let sm2sc = sqMileToSqCentimeter (inputarea);
                        document.getElementById("areaout").value = (sm2sc);
                    }
    
                    else if(from =="square-mile" && to =="square-milimeter"){
                        let sm2smili = sqMileToSqMillimeter (inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-mile" && to =="square-micrometer"){
                        let sm2micro = sqMileToSqMicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-mile" && to == "hectare"){
                        let sm2hectare = sqMileToHectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-mile" && to =="sqaure-yard"){
                        let sm2square = sqMileToSqYard(inputarea);
                        document.getElementById("areaout").value = (sm2square);
                    }
    
                    else if(from =="square-mile" && to =="acre"){
                        let sm2smile = sqMileToAcre (inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-mile" && to =="square-foot"){
                        let sm2syard = sqMileToSqFeet(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-mile" && to == "square-inch"){
                        let sm2sf = sqMileToSqInch(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    // sq yard to other units
    
                    else if(from =="square-yard" && to == "square-yard"){
                        let sm2sm = sqyardtosqyard(inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
    
                    else if( from =="square-yard" && to =="square-meter"){
                        let sm2sk = sqYardToSqm(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-yard" && to == "square-kilometer"){
                        let sm2scenti = sqYardToSqKm(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-yard" && to =="square-centimeter"){
                        let sm2sc = sqYardToSqCenti (inputarea);
                        document.getElementById("areaout").value = (sm2sc);
                    }
    
                    else if(from =="square-yard" && to =="square-milimeter"){
                        let sm2smili =sqYardToSqMili (inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-yard" && to =="square-micrometer"){
                        let sm2micro = sqYardToSqMicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-yard" && to == "hectare"){
                        let sm2hectare = sqYardToHectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-yard" && to =="square-mile"){
                        let sm2square = sqYardToSqMile(inputarea);
                        document.getElementById("areaout").value = (sm2square);
                    }
    
                    else if(from =="square-yard" && to =="acre"){
                        let sm2smile = sqYardToAcre (inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-yard" && to =="square-foot"){
                        let sm2syard = sqYardToSqFoot(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-yard" && to == "square-inch"){
                        let sm2sf = sqYardToSqInch(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    // sq foot to all others
                    
                    else if(from =="square-foot" && to == "square-foot"){
                        let sm2sm = sqfoottosqfoot(inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
    
                    else if( from =="square-foot" && to =="square-meter"){
                        let sm2sk = sqFootToSqm(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-foot" && to == "square-kilometer"){
                        let sm2scenti = sqFootToSqKm(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-foot" && to =="square-centimeter"){
                        let sm2sc = sqFootToSqCenti(inputarea);
                        document.getElementById("areaout").value = (sm2sc);
                    }
    
                    else if(from =="square-foot" && to =="square-milimeter"){
                        let sm2smili = sqFootToSqMili (inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-foot" && to =="square-micrometer"){
                        let sm2micro = sqFootToSqMicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-foot" && to == "hectare"){
                        let sm2hectare = sqFootToHectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-foot" && to =="square-mile"){
                        let sm2square = sqFootToSqMile(inputarea);
                        document.getElementById("areaout").value = (sm2square);
                    }
    
                    else if(from =="square-foot" && to =="acre"){
                        let sm2smile = sqFootToAcre(inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-foot" && to =="square-yard"){
                        let sm2syard = sqFootToSqYard(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-foot" && to == "square-inch"){
                        let sm2sf = sqFootToSqInch(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                    // sqinch to all other units
    
                    else if(from =="square-inch" && to == "square-inch"){
                        let sm2sm = sqinchtosqinch(inputarea);
                        document.getElementById("areaout").value = (sm2sm);
                    }
    
                    else if( from =="square-inch" && to =="square-meter"){
                        let sm2sk = sqInchToSqm(inputarea);
                        document.getElementById("areaout").value = (sm2sk);
                    }
    
                    else if(from =="square-inch" && to == "square-kilometer"){
                        let sm2scenti = sqInchToSqKm(inputarea);
                        document.getElementById("areaout").value = (sm2scenti);
                    }
    
                    else if(from =="square-inch" && to =="square-centimeter"){
                        let sm2sc = sqInchToSqCenti(inputarea);
                        document.getElementById("areaout").value = (sm2sc);
                    }
    
                    else if(from =="square-inch" && to =="square-milimeter"){
                        let sm2smili = sqInchToSqMili (inputarea);
                        document.getElementById("areaout").value = (sm2smili);
                    }
    
                    else if( from =="square-inch" && to =="square-micrometer"){
                        let sm2micro = sqInchToSqMicrometer(inputarea);
                        document.getElementById("areaout").value = (sm2micro);
                    }
    
                    else if(from =="square-inch" && to == "hectare"){
                        let sm2hectare = sqInchToHectare(inputarea);
                        document.getElementById("areaout").value = (sm2hectare);
                    }
    
                    else if( from =="square-inch" && to =="square-mile"){
                        let sm2square =sqInchToSqMile (inputarea);
                        document.getElementById("areaout").value = (sm2square);
                    }
    
                    else if(from =="square-inch" && to =="acre"){
                        let sm2smile = sqInchToAcre(inputarea);
                        document.getElementById("areaout").value = (sm2smile);
                    }
    
                    else if(from =="square-inch" && to =="square-yard"){
                        let sm2syard = sqInchToSqYard(inputarea);
                        document.getElementById("areaout").value = sm2syard;
                    }
    
                    else if(from =="square-inch" && to == "square-foot"){
                        let sm2sf = sqInchToSqFoot(inputarea);
                        document.getElementById("areaout").value = (sm2sf);
                    }
    
                }
            else{
            error.innerHTML = ("Not a Number!");
            document.getElementById("areaout").value = "";
            }
                
            }
            function area1 ( ){
                document.getElementById("areain").value ="";
                document.getElementById("areaout").value ="";
                document.getElementById("error").value = "";
            }
    
            function volume(){
    
                let from = document.getElementById("from-volume").value;
                let to = document .getElementById("to-volume").value;
                let input = document.getElementById("input-volume").value;
                let error = document.getElementById("error3");
                let result;
                
                if ((input != NaN) && (input >= 0)){
                    error.innerText = "";
                
    
                // cubic meter to all others
                

                if (from === "cubic-meter"){
    
                if (to === "cubic-meter") {
                    result = cubicmetertocubicmeter(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "cubic-kilometer") {
                    result = cubicMeterToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "cubic-centimeter") {
                    result = cubicMeterToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                }
                
                else if (to === "cubic-milimeter") {
                    result = cubicMeterToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } 
    
                else if (to === "litter") {
                    result = cubicMeterToLiter(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "milimeter") {
                    result = cubicMeterToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                }
                
                else if (to === "us-gallon") {
                    result = cubicMeterToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "us-quart") {
                    result = cubicMeterToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "us-pint") {
                    result = cubicMeterToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "us-cup") {
                    result = cubicMeterToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                }
                
                else if (to === "us-fluidounce") {
                    result = cubicMeterToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } 
    
                else if (to === "us-tablespoon") {
                    result = cubicMeterToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "us-teaspoon") {
                    result = cubicMeterToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                }
                
                else if (to === "imperial-gallon") {
                    result = cubicMeterToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "imperial-quart") {
                    result = cubicMeterToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "imperial-pint") {
                    result = cubicMeterToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                }
                
                else if (to ==="imperial-fluidounce") {
                    result = cubicMeterToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } 
    
                else if (to === "imperial-tablespoon") {
                    result = cubicMeterToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "imperial-teaspoon") {
                    result = cubicMeterToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                }
                
                else if (to === "cubic-mile") {
                    result = cubicMeterToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "cubic-yard") {
                    result = cubicMeterToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "cubic-foot") {
                    result = cubicMeterToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                }
    
                else if (to === "cubic-inch") {
                    result = cubicMeterToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
        }       
    
    
        // cubic kilometer
    
        if (from === "cubic-kilometer") {
    
            if (to === "cubic-kilometer") {
                result = cubickilometertocubickilometer(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "cubic-meter") {
                result = cubicKilometerToCubicMeter(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "cubic-centimeter") {
                result = cubicKilometerToCubicCentimeter(input);
                document.getElementById("ov-volume").value = result;
            }
            
            else if (to === "cubic-milimeter") {
                result = cubicKilometerToCubicMillimeter(input);
                document.getElementById("ov-volume").value = result;
            } 
    
            else if (to === "liter") {
                result = cubicKilometerToLiter(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "milimeter") {
                result = cubicKilometerToMilliliter(input);
                document.getElementById("ov-volume").value = result;
            }
            
            else if (to === "us-gallon") {
                result = cubicKilometerToUSGallon(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "us-quart") {
                result =cubicKilometerToUSQuart(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "us-pint") {
                result = cubicKilometerToUSPint(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "us-cup") {
                result = cubicKilometerToUSCup(input);
                document.getElementById("ov-volume").value = result;
            }
            
            else if (to === "us-fluidounce") {
                result = cubicKilometerToUSFluidOunce(input);
                document.getElementById("ov-volume").value = result;
            } 
    
            else if (to === "us-tablespoon") {
                result = cubicKilometerToUSTablespoon(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "us-teaspoon") {
                result = cubicKilometerToUSTeaspoon(input);
                document.getElementById("ov-volume").value = result;
            }
            
            else if (to === "imperial-gallon") {
                result = cubicKilometerToImperialGallon(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "imperial-quart") {
                result = cubicKilometerToImperialQuart(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "imperial-pint") {
                result = cubicKilometerToImperialPint(input);
                document.getElementById("ov-volume").value = result;
            }
            
            else if (to === "imperial-fluidounce") {
                result = cubicKilometerToImperialFluidOunce(input);
                document.getElementById("ov-volume").value = result;
            } 
    
            else if (to === "imperial-tablespoon") {
                result = cubicKilometerToImperialTablespoon(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "imperial-teaspoon") {
                result = cubicKilometerToImperialTeaspoon(input);
                document.getElementById("ov-volume").value = result;
            }
            
            else if (to === "cubic-mile") {
                result = cubicKilometerToCubicMile(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "cubic-yard") {
                result = cubicKilometerToCubicYard(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "cubic-foot") {
                result = cubicKilometerToCubicFoot(input);
                document.getElementById("ov-volume").value = result;
            }
    
            else if (to === "cubic-inch") {
                result = cubicKilometerToCubicInch(input);
                document.getElementById("ov-volume").value = result;
            }
    }
    
            // cubic centimeter
    
            if (from === "cubic-centimeter") {
                if (to === "cubic-kilometer") {
                    result = cubicCentimeterToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = cubicCentimeterToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = input; // 1 cubic centimeter is 1 cubic centimeter
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = cubicCentimeterToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = cubicCentimeterToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = cubicCentimeterToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = cubicCentimeterToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = cubicCentimeterToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = cubicCentimeterToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = cubicCentimeterToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = cubicCentimeterToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = cubicCentimeterToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = cubicCentimeterToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = cubicCentimeterToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = cubicCentimeterToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = cubicCentimeterToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = cubicCentimeterToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = cubicCentimeterToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = cubicCentimeterToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = cubicCentimeterToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = cubicCentimeterToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = cubicCentimeterToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = cubicCentimeterToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                } 
            }
            
    
            // cubic milimeter 
    
            if (from ==="cubic-millimeter") {
                if (to ==="cubic-kilometer") {
                    result = cubicMillimeterToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-meter") {
                    result = cubicMillimeterToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-centimeter") {
                    result = cubicMillimeterToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-millimeter") {
                    result = input; // 1 cubic millimeter is 1 cubic millimeter
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="liter") {
                    result = cubicMillimeterToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="milliliter") {
                    result = cubicMillimeterToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-gallon") {
                    result = cubicMillimeterToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-quart") {
                    result = cubicMillimeterToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-pint") {
                    result = cubicMillimeterToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-cup") {
                    result = cubicMillimeterToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-fluidounce") {
                    result = cubicMillimeterToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-tablespoon") {
                    result = cubicMillimeterToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-teaspoon") {
                    result = cubicMillimeterToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="imperial-gallon") {
                    result = cubicMillimeterToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="imperial-quart") {
                    result = cubicMillimeterToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="imperial-pint") {
                    result = cubicMillimeterToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="imperial-fluidounce") {
                    result = cubicMillimeterToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="imperial-tablespoon") {
                    result = cubicMillimeterToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="imperial-teaspoon") {
                    result = cubicMillimeterToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-mile") {
                    result = cubicMillimeterToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-yard") {
                    result = cubicMillimeterToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-foot") {
                    result = cubicMillimeterToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-inch") {
                    result = cubicMillimeterToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // litter 
    
            if (from === "liter") {
                if (to === "cubic-kilometer") {
                    result = literToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = literToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = literToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = literToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = input; // 1 liter is 1 liter
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = literToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = literToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = literToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = literToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = literToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = literToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = literToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = literToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = literToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = literToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = literToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = literToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = literToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = literToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = literToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = literToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = literToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = literToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                } 
            }
    
            // mililitter
    
            if (from ==="milliliter") {
                if (to ==="cubic-kilometer") {
                    result = milliliterToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-meter") {
                    result = milliliterToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-centimeter") {
                    result = milliliterToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-millimeter") {
                    result = milliliterToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="liter") {
                    result = milliliterToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="milliliter") {
                    result = input; // 1 milliliter is 1 milliliter
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-gallon") {
                    result = milliliterToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="us-quart") {
                    result = milliliterToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = milliliterToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = milliliterToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = milliliterToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = milliliterToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = milliliterToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = milliliterToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = milliliterToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = milliliterToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = milliliterToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = milliliterToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;            
                } else if (to === "imperial-teaspoon") {
                    result = milliliterToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = milliliterToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = milliliterToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = milliliterToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = milliliterToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // us gallon 
            if (from ==="us-gallon") {
                if (to ==="cubic-kilometer") {
                    result = usGallonToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to ==="cubic-meter") {
                    result = usGallonToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = usGallonToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = usGallonToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = usGallonToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = usGallonToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = input; // 1 US gallon is 1 US gallon
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = usGallonToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = usGallonToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = usGallonToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = usGallonToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = usGallonToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = usGallonToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = usGallonToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = usGallonToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = usGallonToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = usGallonToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = usGallonToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = usGallonToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = usGallonToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = usGallonToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = usGallonToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = usGallonToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // us quart
    
            if (from === "us-quart") {
                if (to === "cubic-kilometer") {
                    result = usQuartToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = usQuartToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = usQuartToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = usQuartToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = usQuartToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = usQuartToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = usQuartToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = input; // 1 US quart is 1 US quart
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = usQuartToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = usQuartToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = usQuartToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = usQuartToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = usQuartToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = usQuartToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = usQuartToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = usQuartToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = usQuartToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = usQuartToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = usQuartToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = usQuartToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = usQuartToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = usQuartToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = usQuartToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                } 
            }
            
            // us pint 
    
            if (from === "us-pint") {
                if (to === "cubic-kilometer") {
                    result = usPintToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = usPintToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = usPintToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = usPintToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = usPintToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = usPintToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = usPintToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = usPintToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = input; // 1 US pint is 1 US pint
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = usPintToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = usPintToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = usPintToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = usPintToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = usPintToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = usPintToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = usPintToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } 
                else if (to === "imperial-fluidounce") {
                    result = usPintToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result; 
                } else if (to === "imperial-tablespoon"){
                    result = usPintToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = usPintToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = usPintToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = usPintToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = usPintToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = usPintToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                } 
            }
    
            // us cup 
    
            if (from === "us-cup") {
                if (to === "cubic-kilometer") {
                    result = usCupToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = usCupToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = usCupToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = usCupToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = usCupToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = usCupToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = usCupToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = usCupToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = usCupToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = input; // 1 US cup is 1 US cup
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = usCupToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = usCupToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = usCupToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = usCupToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = usCupToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = usCupToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = usCupToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = usCupToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = usCupToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = usCupToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = usCupToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = usCupToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = usCupToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // us fluidounce
    
            if (from === "us-fluidounce") {
                if (to === "cubic-kilometer") {
                    result = usFluidOunceToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = usFluidOunceToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = usFluidOunceToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = usFluidOunceToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = usFluidOunceToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = usFluidOunceToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = usFluidOunceToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = usFluidOunceToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = usFluidOunceToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = usFluidOunceToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = input; // 1 US fluid ounce is 1 US fluid ou
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = usFluidOunceToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = usFluidOunceToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = usFluidOunceToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = usFluidOunceToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = usFluidOunceToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = usFluidOunceToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = usFluidOunceToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = usFluidOunceToImperialTeaspoon(input);
                        document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = usFluidOunceToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = usFluidOunceToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = usFluidOunceToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = usFluidOunceToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // us table spoon
    
            if (from === "us-tablespoon") {
                if (to === "cubic-kilometer") {
                    result = usTablespoonToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = usTablespoonToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = usTablespoonToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = usTablespoonToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = usTablespoonToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = usTablespoonToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = usTablespoonToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = usTablespoonToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = usTablespoonToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = usTablespoonToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = usTablespoonToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = input; // 1 US tablespoon is 1 US tablespoon
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = usTablespoonToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = usTablespoonToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = usTablespoonToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = usTablespoonToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = usTablespoonToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = usTablespoonToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = usTablespoonToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = usTablespoonToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = usTablespoonToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = usTablespoonToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = usTablespoonToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
    
            // us tea spoon
    
            if (from === "us-teaspoon") {
                if (to === "cubic-kilometer") {
                    result = usTeaspoonToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = usTeaspoonToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = usTeaspoonToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = usTeaspoonToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = usTeaspoonToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = usTeaspoonToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = usTeaspoonToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = usTeaspoonToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = usTeaspoonToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = usTeaspoonToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = usTeaspoonToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = usTeaspoonToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = input; // 1 US teaspoon is 1 US teaspoon
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = usTeaspoonToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = usTeaspoonToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = usTeaspoonToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = usTeaspoonToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = usTeaspoonToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = usTeaspoonToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = usTeaspoonToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = usTeaspoonToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = usTeaspoonToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = usTeaspoonToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
    
            // imperail gallon
    
            if (from === "imperial-gallon") {
                if (to === "cubic-kilometer") {
                    result = imperialGallonToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = imperialGallonToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = imperialGallonToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = imperialGallonToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = imperialGallonToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = imperialGallonToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = imperialGallonToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = imperialGallonToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = imperialGallonToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = imperialGallonToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = imperialGallonToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = imperialGallonToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = imperialGallonToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = input; // 1 imperial gallon is 1 imperial g
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = imperialGallonToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = imperialGallonToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = imperialGallonToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = imperialGallonToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = imperialGallonToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = imperialGallonToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = imperialGallonToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = imperialGallonToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = imperialGallonToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                } 
            }
            
            // imperial quart 
    
            if (from === "imperial-quart") {
                if (to === "cubic-kilometer") {
                    result = imperialQuartToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = imperialQuartToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = imperialQuartToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = imperialQuartToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = imperialQuartToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = imperialQuartToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = imperialQuartToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = imperialQuartToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = imperialQuartToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = imperialQuartToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = imperialQuartToUSFluidOunce(input); 
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = imperialQuartToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = imperialQuartToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = imperialQuartToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = input; // 1 imperial quart is 1 imperial quart
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = imperialQuartToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = imperialQuartToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = imperialQuartToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = imperialQuartToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = imperialQuartToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = imperialQuartToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = imperialQuartToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = imperialQuartToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // imperial pint
    
            if (from === "imperial-pint") {
                if (to === "cubic-kilometer") {
                    result = imperialPintToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = imperialPintToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = imperialPintToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = imperialPintToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = imperialPintToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = imperialPintToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = imperialPintToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = imperialPintToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = imperialPintToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = imperialPintToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = imperialPintToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = imperialPintToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = imperialPintToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = imperialPintToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = imperialPintToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = input; // 1 imperial pint is 1 imperial pint
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = imperialPintToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = imperialPintToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = imperialPintToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = imperialPintToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = imperialPintToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = imperialPintToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = imperialPintToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // imperial fluid ounce
    
            if (from === "imperial-fluidounce") {
                if (to === "cubic-kilometer") {
                    result = imperialFluidOunceToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = imperialFluidOunceToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = imperialFluidOunceToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = imperialFluidOunceToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = imperialFluidOunceToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = imperialFluidOunceToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = imperialFluidOunceToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = imperialFluidOunceToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = imperialFluidOunceToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = imperialFluidOunceToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = input; // 1 imperial fluid ounce is 1 US fluid ounce
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = imperialFluidOunceToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = imperialFluidOunceToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = imperialFluidOunceToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = imperialFluidOunceToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = imperialFluidOunceToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = input; // 1 imperial fluid ounce is 1 imperial fluid ounce
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = imperialFluidOunceToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = imperialFluidOunceToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = imperialFluidOunceToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = imperialFluidOunceToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = imperialFluidOunceToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = imperialFluidOunceToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                } 
            }
            
            // imperail table spoon
    
            if (from === "imperial-tablespoon") {
                if (to === "cubic-kilometer") {
                    result = imperialTablespoonToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = imperialTablespoonToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = imperialTablespoonToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = imperialTablespoonToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = imperialTablespoonToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = imperialTablespoonToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = imperialTablespoonToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = imperialTablespoonToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = imperialTablespoonToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = imperialTablespoonToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = imperialTablespoonToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = input; // 1 imperial tablespoon is 1 US tablespoon
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = imperialTablespoonToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = imperialTablespoonToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = imperialTablespoonToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = imperialTablespoonToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = imperialTablespoonToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = input; // 1 imperial tablespoon is 1 imperial tablespoon
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = imperialTablespoonToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = imperialTablespoonToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = imperialTablespoonToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = imperialTablespoonToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = imperialTablespoonToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
    
            // imperial tea spoon
    
            if (from === "imperial-teaspoon") {
                if (to === "cubic-kilometer") {
                    result = imperialTeaspoonToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = imperialTeaspoonToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = imperialTeaspoonToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = imperialTeaspoonToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = imperialTeaspoonToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = imperialTeaspoonToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = imperialTeaspoonToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = imperialTeaspoonToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = imperialTeaspoonToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = imperialTeaspoonToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = imperialTeaspoonToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = imperialTeaspoonToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = input; // 1 imperial teaspoon is 1 US teaspoon
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = imperialTeaspoonToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = imperialTeaspoonToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = imperialTeaspoonToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = imperialTeaspoonToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = imperialTeaspoonToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = input; // 1 imperial teaspoon is 1 imperial teaspoon
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = imperialTeaspoonToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = imperialTeaspoonToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = imperialTeaspoonToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = imperialTeaspoonToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // cubic mile
    
            if (from === "cubic-mile") {
                if (to === "cubic-kilometer") {
                    result = cubicMileToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = cubicMileToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = cubicMileToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result; 
                } else if (to === "cubic-millimeter") {
                    result = cubicMileToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = cubicMileToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = cubicMileToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = cubicMileToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = cubicMileToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = cubicMileToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = cubicMileToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = cubicMileToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = cubicMileToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = cubicMileToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = cubicMileToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = cubicMileToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = cubicMileToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = cubicMileToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = cubicMileToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = cubicMileToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = input; // 1 cubic mile is 1 cubic mile
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = cubicMileToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = cubicMileToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = cubicMileToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                } 
            }
            
    
            // cubic yard
    
            if (from === "cubic-yard") {
                if (to === "cubic-kilometer") {
                    result = cubicYardToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = cubicYardToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = cubicYardToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = cubicYardToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = cubicYardToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = cubicYardToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = cubicYardToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = cubicYardToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = cubicYardToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = cubicYardToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = cubicYardToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = cubicYardToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = cubicYardToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = cubicYardToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = cubicYardToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = cubicYardToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = cubicYardToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = cubicYardToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = cubicYardToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = cubicYardToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = input; // 1 cubic yard is 1 cubic yard
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = cubicYardToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = cubicYardToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                }
            }
            
            // cubic foot
    
            if (from === "cubic-foot") {
                if (to === "cubic-kilometer") {
                    result = cubicFootToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = cubicFootToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = cubicFootToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = cubicFootToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = cubicFootToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = cubicFootToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = cubicFootToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = cubicFootToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = cubicFootToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = cubicFootToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = cubicFootToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = cubicFootToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = cubicFootToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = cubicFootToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = cubicFootToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = cubicFootToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = cubicFootToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = cubicFootToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = cubicFootToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = cubicFootToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = cubicFootToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = input; // 1 cubic foot is 1 cubic foot
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = cubicFootToCubicInch(input);
                    document.getElementById("ov-volume").value = result;
                } 
            }
            
            // cubic inch
    
            if (from === "cubic-inch") {
                if (to === "cubic-kilometer") {
                    result = cubicInchToCubicKilometer(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-meter") {
                    result = cubicInchToCubicMeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-centimeter") {
                    result = cubicInchToCubicCentimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-millimeter") {
                    result = cubicInchToCubicMillimeter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "liter") {
                    result = cubicInchToLiter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "milliliter") {
                    result = cubicInchToMilliliter(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-gallon") {
                    result = cubicInchToUSGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-quart") {
                    result = cubicInchToUSQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-pint") {
                    result = cubicInchToUSPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-cup") {
                    result = cubicInchToUSCup(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-fluidounce") {
                    result = cubicInchToUSFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-tablespoon") {
                    result = cubicInchToUSTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "us-teaspoon") {
                    result = cubicInchToUSTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-gallon") {
                    result = cubicInchToImperialGallon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-quart") {
                    result = cubicInchToImperialQuart(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-pint") {
                    result = cubicInchToImperialPint(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-fluidounce") {
                    result = cubicInchToImperialFluidOunce(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-tablespoon") {
                    result = cubicInchToImperialTablespoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "imperial-teaspoon") {
                    result = cubicInchToImperialTeaspoon(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-mile") {
                    result = cubicInchToCubicMile(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-yard") {
                    result = cubicInchToCubicYard(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-foot") {
                    result = cubicInchToCubicFoot(input);
                    document.getElementById("ov-volume").value = result;
                } else if (to === "cubic-inch") {
                    result = input; // 1 cubic inch is 1 cubic inch
                    document.getElementById("ov-volume").value = result;
                    }
                } 
     
        
    }
    else{
        error.innerHTML = ("Not a Number!");
        document.getElementById("ov-volume").value = "";
            }
}


 //   weight units 
        
function weight(){

    let from = document.getElementById("select1").value;
    let to = document.getElementById("select2").value;
    let input = document.getElementById("inputweight").value;
    let error = document.getElementById("error4");

    var result;


    //kilogrms converts to other

    
    if ((input != NaN) && (input >= 0)){
        error.innerText = "";


    if( from ==="kilogram"){
        if( to ==="gram"){
         result = kilogramsToGrams (input);
         document.getElementById("ov-weight").value = result;
        }

        else if (to ==="kilogram") {
            result = (input);
            document.getElementById("ov-weight").value = result;
        }

        else if (to ==="milgram"){
            result = kilogramsToMilligrams (input);
            document.getElementById("ov-weight").value = result;
        }

        else if (to ==="metric-ton"){
            result = kilogramsToMetricTons (input);
            document.getElementById("ov-weight").value = result;
        }

        else if (to ==="long-ton"){
            result =kilogramsToLongTons (input);
            document.getElementById("ov-weight").value = result;
        }

        else if (to ==="short-ton"){
            result = kilogramsToShortTons (input);
            document.getElementById("ov-weight").value = result;
        }

        else if (to ==="pound"){
            result = kilogramsToPounds(input);
            document.getElementById("ov-weight").value = result;
        }

        else if (to ==="ounce"){
            result = kilogramsToOunces(input);
            document.getElementById("ov-weight").value = result;
        }
        else if (to ==="carrat"){
            result = kilogramsToCarats(input);
            document.getElementById("ov-weight").value = result;
        }
        else if (to ==="amu"){
            result = kilogramsToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }



    // gram conversion 

         if (from === "gram") {
        // Conversion from grams to other units
        if (to === "kilogram") {
            result = gramsToKilograms(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "gram") {
            result = input;
            document.getElementById("ov-weight").value = result;
        } else if (to === "milgram") {
            result = gramsToMilligrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "metric-ton") {
            result = gramsToMetricTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "long-ton") {
            result = gramsToLongTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "short-ton") {
            result = gramsToShortTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "pound") {
            result = gramsToPounds(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "ounce") {
            result = gramsToOunces(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "carat") {
            result = gramsToCarats(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "amu") {
            result = gramsToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }


    // miligram to converts other units

        else if (from === "milligram") {
        // Conversion from milligrams to other units
        if (to === "kilogram") {
            result = milligramsToKilograms(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "gram") {
            result = milligramsToGrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "milligram") {
            result = input;
            document.getElementById("ov-weight").value = result;
        } else if (to === "metric-ton") {
            result = milligramsToMetricTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "long-ton") {
            result = milligramsToLongTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "short-ton") {
            result = milligramsToShortTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "pound") {
            result = milligramsToPounds(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "ounce") {
            result = milligramsToOunces(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "carat") {
            result = milligramsToCarats(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "amu") {
            result = milligramsToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }


    // metric ton converts units


    else if (from === "metric-ton") {
        // Conversion from metric tons to other units
        if (to === "kilogram") {
            result = metricTonsToKilograms(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "gram") {
            result = metricTonsToGrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "milligram") {
            result = metricTonsToMilligrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "metric-ton") {
            result = input;
            document.getElementById("ov-weight").value = result;
        } else if (to === "long-ton") {
            result = metricTonsToLongTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "short-ton") {
            result = metricTonsToShortTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "pound") {
            result = metricTonsToPounds(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "ounce") {
            result = metricTonsToOunces(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "carat") {
            result = metricTonsToCarats(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "amu") {
            result = metricTonsToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }


    // long ton to converts other units 

    else if (from === "long-ton") {
        // Conversion from long tons to other units
        if (to === "kilogram") {
            result = longTonsToKilograms(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "gram") {
            result = longTonsToGrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "milligram") {
            result = longTonsToMilligrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "metric-ton") {
            result = longTonsToMetricTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "long-ton") {
            result = input;
            document.getElementById("ov-weight").value = result;
        } else if (to === "short-ton") {
            result = longTonsToShortTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "pound") {
            result = longTonsToPounds(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "ounce") {
            result = longTonsToOunces(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "carrat") {
            result = longTonsToCarats(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "amu") {
            result = longTonsToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }

    

    // short ton converts to other units


    // Short ton converts to other
    else if (from === "short-ton") {
        // Conversion from short tons to other units
        if (to === "kilogram") {
            result = shortTonsToKilograms(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "gram") {
            result = shortTonsToGrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "milligram") {
            result = shortTonsToMilligrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "metric-ton") {
            result = shortTonsToMetricTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "long-ton") {
            result = shortTonsToLongTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "short-ton") {
            result = input;
            document.getElementById("ov-weight").value = result;
        } else if (to === "pound") {
            result = shortTonsToPounds(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "ounce") {
            result = shortTonsToOunces(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "carrat") {
            result = shortTonsToCarats(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "amu") {
            result = shortTonsToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }

    // pound to converts other units


    else if (from === "pound") {
        // Conversion from pounds to other units
        if (to === "kilogram") {
            result = poundsToKilograms(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "gram") {
            result = poundsToGrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "milligram") {
            result = poundsToMilligrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "metric-ton") {
            result = poundsToMetricTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "long-ton") {
            result = poundsToLongTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "short-ton") {
            result = poundsToShortTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "pound") {
            result = input;
            document.getElementById("ov-weight").value = result;
        } else if (to === "ounce") {
            result = poundsToOunces(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "carat") {
            result = poundsToCarats(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "amu") {
            result = poundsToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }


    // ounce to converts others units 

    else if (from === "ounce") {
        // Conversion from ounces to other units
        if (to === "kilogram") {
            result = ouncesToKilograms(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "gram") {
            result = ouncesToGrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "milligram") {
            result = ouncesToMilligrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "metric-ton") {
            result = ouncesToMetricTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "long-ton") {
            result = ouncesToLongTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "short-ton") {
            result = ouncesToShortTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "pound") {
            result = ouncesToPounds(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "ounce") {
            result = input;
            document.getElementById("ov-weight").value = result;
        } else if (to === "carat") {
            result = ouncesToCarats(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "amu") {
            result = ouncesToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }

    // carrat to others 

    else if (from === "carrat") {
        // Conversion from carats to other units
        if (to === "kilogram") {
            result = caratsToKilograms(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "gram") {
            result = caratsToGrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "milligram") {
            result = caratsToMilligrams(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "metric-ton") {
            result = caratsToMetricTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "long-ton") {
            result = caratsToLongTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "short-ton") {
            result = caratsToShortTons(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "pound") {
            result = caratsToPounds(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "ounce") {
            result = caratsToOunces(input);
            document.getElementById("ov-weight").value = result;
        } else if (to === "carrat") {
            result = input;
            document.getElementById("ov-weight").value = result;
        } else if (to === "amu") {
            result = caratsToAMU(input);
            document.getElementById("ov-weight").value = result;
        }
    }

}else{
        error.innerText = ("Not a Number!");
        document.getElementById("ov-weight").innerText = "";

    }

}


// time



//timeconvert

function time () {
    let timeSelect1 = document.getElementById('time1').value;
    let timeSelect2 = document.getElementById('time2').value;
    let timeValue = parseInt(document.getElementById('timev').value);
    let error = document.getElementById("error5");
 
    if ((timeValue !=NaN) && (timeValue >= 0)) {
       error.innerText = "";
 
       if (timeSelect1 == 'second' && timeSelect2 == 'second') {
          let second = scnd2scnd(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
      else if (timeSelect1 == 'second' && timeSelect2 == 'millisecond') {
          let millisecond = scnd2milliscnd(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
      else if (timeSelect1 == 'second' && timeSelect2 == 'microsecond') {
          let microsecond = scnd2microscnd(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
     else  if (timeSelect1 == 'second' && timeSelect2 == 'nanosecond') {
          let nanosecond = scnd2nanoscnd(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
     else  if (timeSelect1 == 'second' && timeSelect2 == 'picosecond') {
          let picosecond = scnd2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
      else if (timeSelect1 == 'second' && timeSelect2 == 'minute') {
          let mint = scnd2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
     else  if (timeSelect1 == 'second' && timeSelect2 == 'hour') {
          let hour = scnd2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
    else   if (timeSelect1 == 'second' && timeSelect2 == 'day') {
          let day = scnd2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
     else  if (timeSelect1 == 'second' && timeSelect2 == 'week') {
          let week = scnd2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
    else   if (timeSelect1 == 'second' && timeSelect2 == 'month') {
          let month = scnd2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
      else if (timeSelect1 == 'second' && timeSelect2 == 'year') {
          let year = scnd2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'millisecond') {
          let millisecond = millisecond2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'second') {
          let second = millisecond2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'microsecond') {
          let microsecond = millisecond2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'nanosecond') {
          let nanosecond = millisecond2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'picosecond') {
          let picosecond = millisecond2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'minute') {
          let mint = millisecond2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'hour') {
          let  hour = millisecond2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'day') {
          let day = millisecond2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'week') {
          let week = millisecond2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'month') {
          let month = millisecond2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'millisecond' && timeSelect2 == 'year') {
          let year = millisecond2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
       
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'microsecond') {
          let microsecond = microsecond2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'second') {
          let second = microsecond2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'millisecond') {
          let millisecond = microsecond2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'nanosecond') {
          let nanosecond = microsecond2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'picosecond') {
          let picosecond = microsecond2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'minute') {
          let mint = microsecond2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'hour') {
          let hour = microsecond2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'day') {
          let day = microsecond2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'week') {
          let week = microsecond2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'month') {
          let month = microsecond2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'microsecond' && timeSelect2 == 'year') {
          let year = microsecond2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'nanosecond') {
          let nanosecond = nanosecond2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'second') {
          let second = nanosecond2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'millisecond') {
          let millisecond = nanosecond2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'microsecond') {
          let microsecond = nanosecond2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'picosecond') {
          let picosecond = nanosecond2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'minute') {
          let mint = nanosecond2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'hour') {
          let hour = nanosecond2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'day') {
          let day = nanosecond2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'week') {
          let week = nanosecond2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'month') {
          let month = nanosecond2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'nanosecond' && timeSelect2 == 'year') {
          let year = nanosecond2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'picosecond') {
          let picosecond = picosecond2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'second') {
          let second = picosecond2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'microsecond') {
          let microsecond = picosecond2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'millisecond') {
          let millisecond = picosecond2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'nanosecond') {
          let nanosecond = picosecond2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'minute') {
          let mint = picosecond2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'hour') {
          let hour = picosecond2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'day') {
          let day = picosecond2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'week') {
          let week = picosecond2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'month') {
          let month = picosecond2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'picosecond' && timeSelect2 == 'year') {
          let year = picosecond2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'minute') {
          let mint = mint2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'second') {
          let second = mint2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'millisecond') {
          let millisecond = mint2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'microsecond') {
          let microsecond = mint2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'nanosecond') {
          let nanosecond = mint2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'picosecond') {
          let picosecond = mint2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'hour') {
          let hour = mint2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'day') {
          let day = mint2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'week') {
          let week = mint2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'month') {
          let month = mint2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'minute' && timeSelect2 == 'year') {
          let year = mint2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'hour') {
          let hour = hour2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'second') {
          let second = hour2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'millisecond') {
          let millisecond = hour2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'microsecond') {
          let microsecond = hour2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'picosecond') {
          let picosecond = hour2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'nanosecond') {
          let nanosecond = hour2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'minute') {
          let mint = hour2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'day') {
          let day = hour2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'week') {
          let week = hour2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'month') {
          let month = hour2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'hour' && timeSelect2 == 'year') {
          let year = hour2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'day') {
          let day = day2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'second') {
          let second = day2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'millisecond') {
          let millisecond = day2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'microsecond') {
          let microsecond = day2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'nanosecond') {
          let nanosecond = day2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'picosecond') {
          let picosecond = day2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'minute') {
          let mint = day2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'hour') {
          let hour = day2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'week') {
          let week = day2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'month') {
          let month = day2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'day' && timeSelect2 == 'year') {
          let year = day2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'week') {
          let week = week2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'second') {
          let second = week2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'millisecond') {
          let millisecond = week2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'microsecond') {
          let microsecond = week2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'nanosecond') {
          let nanosecond = week2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'picosecond') {
          let picosecond = week2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'minute') {
          let mint = week2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'hour') {
          let hour = week2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'day') {
          let day = week2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'month') {
          let month = week2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'week' && timeSelect2 == 'year') {
          let year = week2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'month') {
          let month = month2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'second') {
          let second = month2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'millisecond') {
          let millisecond = month2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'microsecond') {
          let microsecond = month2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'nanosecond') {
          let nanosecond = month2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'picosecond') {
          let picosecond = month2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'minute') {
          let mint = month2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'hour') {
          let hour = month2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'day') {
          let day = month2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'week') {
          let week = month2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'month' && timeSelect2 == 'year') {
          let year = month2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'year') {
          let year = year2year(timeValue);
 
          document.getElementById('timeout').value = year;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'second') {
          let second = year2second(timeValue);
 
          document.getElementById('timeout').value = second;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'millisecond') {
          let millisecond = year2millisecond(timeValue);
 
          document.getElementById('timeout').value = millisecond;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'microsecond') {
          let microsecond = year2microsecond(timeValue);
 
          document.getElementById('timeout').value = microsecond;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'nanosecond') {
          let nanosecond = year2nanosecond(timeValue);
 
          document.getElementById('timeout').value = nanosecond;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'picosecond') {
          let picosecond = year2picosecond(timeValue);
 
          document.getElementById('timeout').value = picosecond;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'minute') {
          let mint = year2mint(timeValue);
 
          document.getElementById('timeout').value = mint;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'hour') {
          let hour = year2hour(timeValue);
 
          document.getElementById('timeout').value = hour;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'day') {
          let day = year2day(timeValue);
 
          document.getElementById('timeout').value = day;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'week') {
          let week = year2week(timeValue);
 
          document.getElementById('timeout').value = week;
       }
 
       else if (timeSelect1 == 'year' && timeSelect2 == 'month') {
          let month = year2month(timeValue);
 
          document.getElementById('timeout').value = month;
       }
 
 
    } 
    else {
       error.innerText = ("Not a Number!");
       document.getElementById('timeout').value = "";
    }
 
 }

 function reset() {
    // time
    document.getElementById("timeout").value = "";
    document.getElementById("timev").value = "";
    document.getElementById(error).innerText = "";
}
    
            // meter to other units
    
            function meter2meter ( meter ) {
                let m = meter;
                return m;
            }
    
            function meter2kilometer ( meter ) {
                let kilometer = meter / 1000;
                return kilometer;
            }
    
            function meter2centimeter ( meter ) {
                CentiMeter = meter * 100;
                return CentiMeter;
            }
            
            function meter2milimeter ( milimeter ){
                meter = milimeter * 1000;
            return meter;
            }
    
            function meter2micrometer ( mirometer ) {
                meter = mirometer * 1000000;
                return meter;
            }
    
            function meter2nanometer ( nanometer ) {
                meter = nanometer * 1E+09;
                return meter;
            }
    
            function meter2mile (mile){
                meter = mile/1609.344;
                return meter;   
            }
            
            function meter2yard ( yard ){
                meter = yard*1.0936133;
                return meter;   
            }
    
            function meter2foot ( foot ){
                meter = foot*3.2808399;
                return meter;   
            }
            
            function meter2inch ( inch ){
                meter = inch*39.3700787;
                return meter;   
            }
    
            function meter2lightyear ( lightyear ){
                meter = lightyear/9.4607E+15
                return meter;   
            }
    
            // kilometer to other units 
    
            function kilometer2kilometer( kilometer){
                km = kilometer;
                return km;    
            }
               
            function kilometer2meter(meter){
                kilometer = meter*1000
                return kilometer;    
            }
    
            function kilometer2centimeter (centimeter){
                kilometer = centimeter*100000;
                return kilometer;   
            }
    
            function kilometer2milimeter(milimeter){
                kilometer = milimeter*1000000;   
                return kilometer;
            }
    
            function kilometer2micrometer(micrometer){
                kilometer = micrometer*1.0000E+9;
                return kilometer;   
            }
    
            function kilometer2nanometer ( nanometer ){
                kilometer = nanometer*1.0000E+12;
                return kilometer;   
            }
    
            function kilometer2mile ( mile ){
                kilometer = mile/1.609344;
                return kilometer;   
            }
    
            function kilometer2yard ( yard ){
                kilometer = yard*1093.6133;
                return kilometer;   
            }
    
            function kilometer2foot ( foot ){
                kilometer = foot*3280.8399;
                return kilometer;   
            }
    
            function kilometer2inch ( inch ){
                kilometer = inch*39370.0787
                return kilometer 
            }
    
            function kilometer2lightyear ( lightyear ){
                kilometer = lightyear/9.4607E+12;
                return kilometer;   
            }
    
            // centimeter to others units
    
            function centimeter2centimeter ( centimeter ){
                centi = centimeter;
                return centi;
            }
    
            function centimeter2meter ( meter ){
                centimeter = meter/100;
                return centimeter;
            }
    
            function centimeter2kilometer ( kilometer ){
                centimeter = kilometer/100000;
                return centimeter;
            }
    
            function centimeter2milimeter ( milimeter ){
                centimeter = milimeter*10;
                return centimeter;
            }
    
            function centimeter2micrometer ( micrometer ){
                centimeter = micrometer*10000;
                return centimeter;   
            }
    
            function centimeter2nanometer ( nanometer ){
                centimeter = nanometer*10000000
                return centimeter;   
            }
    
            function centimeter2mile ( mile ){
                centimeter = mile/160934.4;
                return centimeter   
            }
    
            function centimeter2yard ( yard ){
                centimeter = yard/91.44;
                return centimeter   
            }
    
            function centimeter2foot ( foot ){
                centimeter = foot/30.48;
                return centimeter;   
            }
    
            function centimeter2inch ( inch ){
                centimeter =inch/2.54;
                return centimeter;    
            }
    
            function centimeter2lightyear ( lightyear ){
                centimeter = lightyear/9.4607E+17;
                return centimeter;   
            }
    
            //Milimeter to units
       
            function milimeter2meter ( meter ){
                milimeter = meter/1000;
                return milimeter;
            }
    
            function milimeter2kilometer ( kilometer ){
                milimeter = kilometer/1000000;
                return milimeter   
            }
            
            function milimeter2centimeter ( centimeter ){
                milimeter = centimeter/10;
                return milimeter;
            }
                   
            function milimeter2micrometer ( micrometer ){
                milimeter = micrometer*1000;
                return milimeter
            }
    
            function milimeter2milimeter ( milimeter ){
                milimeter = milimeter;
                return milimeter
            }
    
            function milimeter2nanometer ( nanometer ){
                milimeter = nanometer*1000000;
                return milimeter;
            }    
       
            function milimeter2mile ( mile ){
                milimeter = mile/1.6093E+6;
                return milimeter;   
            }    
    
            function milimeter2yard ( yard ){
                milimeter = yard/ 914.4;
                return milimeter;   
            }  
    
            function milimeter2foot ( foot ){
                milimeter =foot/304.8;
                return milimeter ;
            }
    
            function milimeter2inch ( inch ){
                milimeter = inch/25.4;
                return milimeter;
            }
                
            function milimeter2lightyear ( lightyear ){
                milimeter = lightyear/9.4607E+18;
                return milimeter ;
            }
               
            //MICROMETER to other UNITS
    
            function micrometer2micrometer ( micrometer ){
                micrometer = micrometer;
                return micrometer;
            } 
    
            function micrometer2meter ( meter ){
                micrometer = meter/1000000;
                return micrometer;
            } 
    
            function micrometer2kilometer ( kilometer ){
                micrometer = kilometer/1.0000E+9;
                return micrometer;   
            }
     
            function micrometer2centimeter ( centimeter ){
                micrometer = centimeter/10000;
                return micrometer;
            }
    
            function micrometer2milimeter ( milimeter ){
                micrometer = milimeter/1000;         
                return micrometer ;          
            }
    
            function micrometer2nanometer ( nanometer ){
                micrometer = nanometer*1000;
                return micrometer ;
            }     
    
            function micrometer2mile ( mile ) {
                micrometer = mile/1.6093E+9; 
                return micrometer ;
            }
            
            function micrometer2yard ( yard ){
                micrometer = yard/914400;
                return micrometer; 
            }       
    
            function micrometer2foot ( foot ){
                micrometer = foot/304800;
                return micrometer;
            }
    
            function micrometer2inch ( inch ){
                micrometer = inch/25400;
                return micrometer ;
            }    
    
            function micrometer2lightyear ( lightyear ){
                micrometer = lightyear/9.4607E+21;
                return micrometer ;
            }  
    
                //Nanometer converts to units  
     
            function nanometer2nanometer ( nanometer ){
                nanometer = nanometer;
                return nanometer ;
            }    
            function nanometer2meter ( meter ){
                nanometer = meter/1.0000E+12;
                return nanometer ;
            }
            
            function nanometer2kilometer ( kilometer ){
                nanometer = kilometer/1.0000E+15;          
                return nanometer ;          
            }  
    
            function nanometer2centimeter ( centimeter ){
                nanometer = centimeter/1.0000E+10;
                return nanometer ;
            }
            
            function nanometer2milimeter ( milimeter ){
                nanometer = milimeter/1.0000E+9;  
                return nanometer;
            } 
            
            function nanometer2micrometer ( micrometer ){
                nanometer = micrometer/1000000;
                return nanometer;
            }
    
            function nanometer2mile ( mile ) {
                nanometer = mile/1.6093E+15;
                return nanometer ;
            }
        
            function nanometer2yard ( yard ){
                nanometer = yard/9.1440E+11;
                return nanometer;
            }    
    
            function nanometer2foot ( foot ){
                nanometer = foot/3.0480E+11;
                return nanometer;
            }
    
            function nanometer2inch ( inch ){   
                nanometer = inch/2.5400E+10;
                return nanometer;
            }
       
            function nanometer2lightyear ( lightyear ){
                nanometer = lightyear/9.4607E+27;
                return nanometer ;
            }
      
        // mile to other units
            
            function mile2mile ( mile ){
                mile = mile;
                return mile;
            }
    
            function mile2meter ( meter ){
                mile = meter*1609.344;
                return mile;
            }
       
            function mile2kilometer ( kilometer ){
                mile = kilometer*1.609344;
                return mile;
            }
      
            function mile2centimeter ( centimeter ){
                mile = centimeter*160934.4;
                return mile ;
            }
       
            function mile2milimeter ( milmeter ) {
                mile = milimeter*1.6093E+6;
                return mile ;
            } 
    
            function mile2mircrometer ( micrometer ){
                mile = micrometer*1.6093E+9;
                return mile 
            }
    
            function mile2nanometer ( nanometer ){
                mile = nanometer*1.6093E+12;
                return mile ;
            }
      
            function mile2yard ( yard ){
                mile = yard*1760;
                return mile ;
            }
       
            function mile2foot ( foot ){
                mile = foot*5280;
                return mile;
            }
    
            function mile2inch ( inch ){
                mile = inch*63360;
                return mile ;
            }
       
            function mile2lightyear ( lightyear ){
                mile = lightyear/5.8786E+12;
                return mile;
            }
       
            // yard units 
    
            function yard2yard ( yard ){
                yard = yard;
                return yard;
            }
    
            function yard2meter ( meter ){
                yard = meter/1.0936133;
                return yard;
            }
       
            function yard2kilometer ( kilometer ){
                yard = kilometer/ 1093.6133;
                return yard;
            }
       
            function yard2centimeter ( centimeter ){
                yard = centimeter*91.44;
                return yard;
            }
    
            function yard2milimeter ( milimeter ){
                yard = milimeter*914.4;
                return yard;
            }
        
            function yard2micrometer ( micrometer ){
                yard = micrometer*914400;
                return yard;
            }
    
            function yard2nanometer ( nanometer ){
                yard = nanometer* 9.1440E+8;
                return yard;
            }
    
            function yard2mile ( mile ){
                yard = mile/1760;
                return yard;
            }
        
            function yard2foot ( foot ){
                yard = foot*3;
                return yard;
            }
        
            function yard2inch ( inch ){
                yard = inch*36;
                return yard;
            }
    
            function yard2lightyear ( lightyear ){
                yard = lightyear/1.0346E+16;
                return yard;
            }
            
            // inch units 
            function inch2inch ( inch ){
                inch = inch;
                return inch;
            }
    
            function inch2meter ( meter ){
                inch = meter/39.3700787;
                return inch;
            }
    
            function inch2kilometer ( kilometer ){
                inch = kilometer/39370.0787;
                return inch;
            }
            function inch2centimeter ( centimeter ){
                inch = centimeter*2.54;
                return inch;
            }
        
            function inch2milimeter ( milimeter ){
                inch = milimeter* 25.4;
                return inch;
            }
    
            function inch2micrometer ( micrometer ){
                inch = micrometer*25400;
                return inch;
            }
    
            function inch2nanometer ( nanometer ){
                inch= nanometer*2.5400E+7;
                return inch;
            }
        
            function inch2mile ( mile ){
                inch = mile/ 63360;
                return inch;
            }
    
            function inch2yard ( yard ){
                inch = yard/36;
                return inch;
            }
    
            function inch2foot ( foot ){
                inch = foot/12;
                return inch;
            }
    
            function inch2lightyear ( lightyear ){
                inch = lightyear/ 3.7247E+17;
                return inch;
            }
        
            // lightyear units 
    
            function lightyear2lightyear ( lightyear ){
                lightyear = lightyear;
                return lightyear;
            }
    
            function lightyear2meter ( meter ){
                lightyear = meter*9.4607E+15;
                return lightyear;
            }
    
            function lightyear2kilometer ( kilometer ){
                lightyear = kilometer*9.4607E+12;
                return lightyear;
            }
        
            function lightyear2centimeter ( centimeter ){
                lightyear = centimeter* 9.4607E+17;  
                return lightyear;
            }
        
            function lightyear2milimeter ( milimeter ){
                lightyear = milimeter* 9.4607E+18;
                return lightyear;
            }
        
            // lightyear to micrometer
        
            function lightyear2micrometer ( micrometer ){
                lightyear = micrometer* 9.4607E+21;
                return lightyear;
            }
        
            function lightyear2nanometer ( nanometer ){
                lightyear= nanometer*9.4607E+24;
                return lightyear;
            }
        
            function lightyear2mile ( mile ){
                lightyear = mile*5.8786E+12;
                return lightyear;
            }
    
            function lightyear2yard ( yard ){
                lightyear = yard*1.0346E+16;
                return lightyear;
            }
        
            function lightyear2foot ( foot ){
                lightyear = foot*3.1039E+16;
                return lightyear;
            }
        
            function lightyear2inch ( inch ){
                lightyear = inch*3.7247E+17;
                return lightyear;
            }
    
            function lightyear2lightyear ( lightyear ){
                lightyear = lightyear;
                return lightyear;
            }
    
            // TEMPRATURE
    
    
            function celsius2ferhnite ( celsius ){
                farhnite = (9/5*celsius)+32;
                return farhnite;
            }
    
            function celsius2celsius ( celsius ){
                celsius = celsius ;
                return celsius ;
            }
    
            function celsius2kelvin ( celsius ){
                kelvin = celsius + 273.15;
                return kelvin ;
            }
            
            function celsius2rankine ( rankine ){
                celsius = (rankine + 273.15)*1.8;
                return celsius;
            }
    
            // ferhnite to convert other units
    
            function ferhnite2celsius ( ferhnite ){
                celsius =(ferhnite - 32) / 1.8;
                return celsius;
            }
    
            function ferhnite2ferhnite ( ferhnite ){
                ferhnite = ferhnite ;
                return ferhnite ;
            }
    
            function ferhnite2kelvin ( ferhnite ){
                kelvin = (ferhnite-32) / 1.8 + 273.15;
                return kelvin ;
            }
            
            function ferhnite2rankine ( ferhnite ){
                rankine = ferhnite + 459.67;
                return rankine ;
            }
    
            // kelvin to other units
    
            function kelvin2celsius ( kelvin ){
                celsius = kelvin - 273.15;
                return celsius;
            }
    
            function kelvin2kelvin ( kelvin ){
                kelvin = kelvin ;
                return kelvin ;
            }
    
            function kelvin2ferhnite ( kelvin ){
                ferhnite = kelvin * 1.8 - 459.67;
                return ferhnite ;
            }
            
            function kelvin2rankine ( kelvin ){
                rankine = kelvin * 1.8;
                return rankine ;
            }
            
            // rankine to others units
    
            function rankine2celsius ( rankine ){
                celsius = (rankine - 491.67) / 1.8;
                return celsius;
            }
    
            function rankine2rankine ( rankine ){
                rankine = rankine ;
                return rankine ;
            }
    
            function rankine2ferhnite ( rankine ){
                ferhnite = rankine - 459.67 ;
                return ferhnite ;
            }
            
            function rankine2kelvin ( rankine ){
                kelvin = rankine/1.8;
                return kelvin ;
            }
    
    
            // AREA UNITS
    
            // Square meter to units
    
            function squaremeter2squarekilometer(squaremeter){
                squarekilometer = squaremeter / 1000000;
                return squarekilometer;
            }
    
            function squaremeter2squaremeter ( squaremeter ){
                squaremeter = squaremeter ;
                return squaremeter;
            }
    
            function squaremeter2squarecentimeter (squaremeter){
                squarecentimeter = squaremeter * 10000;
                return squarecentimeter;
            }
    
            function squaremeter2squaremilimeter ( squaremeter ){
                squaremilimeter = squaremeter *1000000;
                return squaremilimeter;
            }
    
            function squaremeter2squaremicrometer ( squaremeter ){
                squaremicrometer = squaremeter*1000000000000;
                return squaremeter2squaremicrometer ;
            }
    
            function squaremeter2squaremile ( squaremeter ){
                squaremile = squaremeter /2.5900E+6;
                return squaremile; 
            }
    
            function squaremeter2acre ( squaremeter ){
                acre = squaremeter/4046.85642;
                return acre;
            }   
    
            function squaremeter2squareyard ( squaremeter ){
                squareyard = squaremeter*1.19599005;
                return squareyard;
            }
    
            function squaremeter2squarefoot ( squaremeter ){
                squarefoot = squaremeter*10.7639104;
                return squarefoot ;
            }
    
            function squaremeter2squareinch ( squaremeter ){
                squareinch = squaremeter*1550.0031;
                return squareinch;
            }
    
            function squaremeter2hectare ( squaremeter ){
                hectare = squaremeter/10000;
                return hectare ; 
            }
    
            // square kilometer
    
            function squarekilometer2squaremeter(squarekilometer){
                squarekilometer = squarekilometer * 1000000;
                return squarekilometer;
            }
    
            function squarekilometer2squarekilometer ( squarekilometer ){
                squarekilometer = squarekilometer ;
                return squarekilometer;
            }
    
            function squarekilometer2squarecentimeter (squarekilometer){
                squarecentimeter = squarekilometer*1.0000E+10;
                return squarecentimeter;
            }
    
            function squarekilometer2squaremilimeter ( squarekilometer ){
                squaremilimeter = squarekilometer*1.0000E+12;
                return squaremilimeter;
            }
    
            function squarekilometer2squaremicrometer ( squarekilometer ){
                squaremicrometer = squarekilometer*1.000000E+18;
                return squaremicrometer ;
            }
    
            function squarekilometer2squaremile ( squarekilometer ){
                squaremile = squarekilometer /2.58998811;
                return squaremile; 
            }
    
            function squarekilometer2acre ( squarekilometer ){
                acre = squarekilometer*247.105381;
                return acre;
            }   
    
            function squarekilometer2squareyard ( squarekilometer ){
                squareyard = squarekilometer*1.1960E+6;
                return squareyard;
            }
    
            function squarekilometer2squarefoot ( squarekilometer ){
                squarefoot = squarekilometer*1.0764E+7;
                return squarefoot ;
            }
    
            function squarekilometer2squareinch ( squarekilometer ){
                squareinch = squarekilometer*1.5500E+9;
                return squareinch;
            }
    
            function squarekilometer2hectare ( squarekilometer ){
                hectare = squarekilometer*100;
                return hectare ; 
            }
    
            // square centimeter
    
            function squarecentimeter2squaremeter(squarecentimeter){
                squaremeter = squarecentimeter/10000;
                return squaremeter;
            }
    
            function squarecentimeter2squarecentimeter ( squarecentimeter ){
                squarecentimeter = squarecentimeter ;
                return squarecentimeter;
            }
    
            function squarecentimeter2squarekilometer (squarecentimeter){
                squarekilometer = squarecentimeter/1.0000E+10;
                return squarekilometer;
            }
    
            function squarecentimeter2squaremilimeter ( squarecentimeter ){
                squaremilimeter = squarecentimeter*100000000;
                return squaremilimeter;
            }
    
            function squarecentimeter2squaremicrometer ( squarecentimeter ){
                squaremicrometer = squarecentimeter*1.000000E+18;
                return squaremicrometer ;
            }
    
            function squarecentimeter2squaremile ( squarecentimeter ){
                squaremile = squarecentimeter /2.5900E+10;
                return squaremile; 
            }
    
            function squarecentimeter2acre ( squarecentimeter ){
                acre = squarecentimeter/4.0469E+7;
                return acre;
            }   
    
            function squarecentimeter2squareyard ( squarecentimeter ){
                squareyard = squarecentimeter/8361.2736;
                return squareyard;
            }
    
            function squarecentimeter2squarefoot ( squarecentimeter ){
                squarefoot = squarecentimeter/929.0304;
                return squarefoot ;
            }
    
            function squarecentimeter2squareinch ( squarecentimeter ){
                squareinch = squarecentimeter/6.4516;
                return squareinch;
            }
    
            function squarecentimeter2hectare ( squarecentimeter ){
                hectare = squarecentimeter/100000000;
                return hectare ; 
            }
    
            // square milimeter
    
            function squaremilimeter2squaremeter(squaremilimeter){
                squaremeter = squaremilimeter/1000000;
                return squaremeter;
            }
    
            function squaremilimeter2squaremilimeter ( squaremilimeter ){
                squaremilimeter = squaremilimeter ;
                return squaremilimeter;
            }
    
            function squaremilimeter2squarekilometer (squaremilimeter){
                squarekilometer = squaremilimeter/1.0000E+12;
                return squarekilometer;
            }
    
            function squaremilimeter2squarecentimeter ( squaremilimeter ){
                squarecentimeter = squaremilimeter/100;
                return squarecentimeter;
            }
    
            function squaremilimeter2squaremicrometer ( squaremilimeter ){
                squaremicrometer = squaremilimeter*1000000;
                return squaremicrometer ;
            }
    
            function squaremilimeter2squaremile ( squaremilimeter ){
                squaremile = squaremilimeter /2.5900E+12;
                return squaremile; 
            }
    
            function squaremilimeter2acre ( squaremilimeter ){
                acre = squaremilimeter/4.0469E+9;
                return acre;
            }   
    
            function squaremilimeter2squareyard ( squaremilimeter ){
                squareyard = squaremilimeter/836127.36;
                return squareyard;
            }
    
            function squaremilimeter2squarefoot ( squaremilimeter ){
                squarefoot = squaremilimeter/92903.04;
                return squarefoot ;
            }
    
            function squaremilimeter2squareinch ( squaremilimeter ){
                squareinch = squaremilimeter/645.16;
                return squareinch;
            }
    
            function squaremilimeter2hectare ( squaremilimeter ){
                hectare = squaremilimeter/1.0000E+10;
                return hectare ; 
            }
    
            // square  micrometer
    
                    // Function to convert square micrometers to square meters
            function squareMicrometersToSquareMeters(sqMicrometers) {
                return sqMicrometers * 1.0e-12;
            }

            // Function to convert square micrometers to square centimeters
            function squareMicrometersToSquareCentimeters(sqMicrometers) {
                return sqMicrometers * 1.0e-8;
            }

            // Function to convert square micrometers to square kilometers
            function squareMicrometersToSquareKilometers(sqMicrometers) {
                return sqMicrometers * 1.0e-14;
            }

            // Function to convert square micrometers to square millimeters
            function squareMicrometersToSquareMillimeters(sqMicrometers) {
                return sqMicrometers * 1.0e6;
            }

                        // Function to convert square micrometers to hectares
            function squareMicrometersToHectares(sqMicrometers) {
                return sqMicrometers * 1.0e-16;
            }

            // Function to convert square micrometers to square yards
            function squareMicrometersToSquareYards(sqMicrometers) {
                return sqMicrometers * 1.19599e-12;
            }

            // Function to convert square micrometers to square miles
            function squareMicrometersToSquareMiles(sqMicrometers) {
                return sqMicrometers * 3.861e-19;
            }

            // Function to convert square micrometers to square feet
            function squareMicrometersToSquareFeet(sqMicrometers) {
                return sqMicrometers * 1.076e-5;
            }

            // Function to convert square micrometers to square inches
            function squareMicrometersToSquareInches(sqMicrometers) {
                return sqMicrometers * 1.55e-9;
            }

            // Function to convert square micrometers to acres
            function squareMicrometersToAcres(sqMicrometers) {
                return sqMicrometers * 2.471e-16;
            }
            
            function hectare2squaremeter(hectare){
                squaremeter = hectare*10000;
                return squaremeter;
            }
    
            function hectare2hectare ( hectare ){
                hectare = hectare ;
                return hectare;
            }
    
            function hectare2squarekilometer (hectare){
                squarekilometer = hectare/100;
                return squarekilometer;
            }
    
            function hectare2squarecentimeter ( hectare ){
                squarecentimeter = hectare*100000000;
                return squarecentimeter;
            }
    
            function hectare2squaremilimeter ( hectare ){
                squaremilimeter = hectare*1.0000E+10;
                return squaremilimeter ;
            }
    
            function hectare2squaremicrometer ( hectare ){
                squaremicrometer = hectare*1.0000E+10;
                return squaremicrometer ; 
            }
    
            function hectare2squaremile ( hectare ){
                squaremile = hectare /258.998811;
                return squaremile; 
            }
    
            function hectare2acre ( hectare ){
                acre = hectare*2.47105381;
                return acre;
            }   
    
            function hectare2squareyard ( hectare ){
                squareyard = hectare*11959.9005;
                return squareyard;
            }
    
            function hectare2squarefoot ( hectare ){
                squarefoot = hectare*107639.104;
                return squarefoot ;
            }
    
            function hectare2squareinch ( hectare ){
                squareinch = hectare*1.5500E+7;
                return squareinch;
            }
    
            // acre to other units
    
            function acre2Sqm(acre) {
                sqm = acre * 4046.86
                return sqm ; // 1 acre = 4046.86 square meters
            }
            
            function acre2SqKm(acre) {
                return acre * 0.00404686; // 1 square kilometer = 1000000 square meters
            }
            
            function acreToSqCenti(acre) {
                return acre * 4046.8564224 * 10000;
            }
            
            function acreToSqMili(acre) {
                sqmili = acre * 4046856422.4
                return sqmili ; 
            }
    
            function acreToSqMicrometer(acre) {
                return acre * 4046856422400; // 1 square meter = 1e12 square micrometers
            }
            
            function acreToHectare(acre) {
                return acre * 0.404686; // 1 hectare = 10000 square meters
            }
            function acretoacre (acre){
                return acre ;
            }
    
            function acreToSqMile(acre) {
                return acre * 0.0015625; // 1 square mile = 640 acres
            }        
    
            function acreToSqYard(acre) {
                return acre * 4840; // 1 square yard = 0.836127 square meters
            }
    
            function acreToSqFoot(acre) {
                return acre * 43560; // 1 square foot = 0.092903 square meters
            }
    
            function acreToSqInch(acre) {
                return acre * 6272640; // 1 square inch = 0.00064516 square meters
            }
    
            // mile to otherr all units
    
            function sqmiletomile (sqmile){
                return sqmile ;
            }
    
            function sqMileToSqMeter(sqMile) {
                // 1 square mile = 2.58999 square kilometers
                // 1 square kilometer = 1,000,000 square meters
                return sqMile * 2.58999 * 1000000;
            }
            
            function sqMileToSqCentimeter(sqMile) {
                // 1 square mile = 2.58999 square kilometers
                // 1 square kilometer = 10^10 square centimeters
                return sqMile * 2.58999 * Math.pow(10, 10);
            }
            
            function sqMileToSqMillimeter(sqMile) {
                // 1 square mile = 2.58999 square kilometers
                // 1 square kilometer = 10^12 square millimeters
                return sqMile * 2.58999 * Math.pow(10, 12);
            }
            
            function sqMileToSqMicrometer(sqMile) {
                // 1 square mile = 2.58999 square kilometers
                // 1 square kilometer = 10^15 square micrometers
                return sqMile * 2.58999 * Math.pow(10, 15);
            }
        
            function sqMileToSqKilo(sqMile) {
                // 1 square mile = 2.58999 square kilometers
                return sqMile * 2.58999;
            }
            
            function sqMileToHectare(sqMile) {
                // 1 square mile = 258.999 hectares
                return sqMile * 258.999;
            }
            
            function sqMileToAcre(sqMile) {
                // 1 square mile = 640 acres
                return sqMile * 640;
            }
            
            function sqMileToSqYard(sqMile) {
                // 1 square mile = 3,097,600 square yards
                return sqMile * 3097600;
            }
            
            function sqMileToSqFeet(sqMile) {
                // 1 square mile = 27,878,400 square feet
                return sqMile * 27878400;
            }
            function sqMileToSqInch(sqMile) {
                // 1 square mile = 4014489600 square inches
                return sqMile * 4014489600;
            }
            
        
            // yard to other units
    
            function sqYardToSqm(sqYard) {
                return sqYard * 0.836127; // 1 square yard = 0.836127 square meters
            }
    
            function sqYardToSqKm(sqYard) {
                return sqYard * 8.36127e-7; // 1 square kilometer = 1000000 square meters
            }
        
            function sqYardToSqCenti(sqYard) {
                return sqYard * 8361.27; // 1 square meter = 10000 square centimeters
            }
        
            function sqYardToSqMili(sqYard) {
                return sqYard * 836127; // 1 square meter = 1000000 square millimeters
            }
    
            function sqYardToSqMicrometer(sqYard) {
                return sqYard * 836127000000; // 1 square meter = 1e12 square micrometers
            }
    
            function sqYardToHectare(sqYard) {
                return sqYard * 8.36127e-5; // 1 hectare = 10000 square meters
            }   
    
            function sqYardToAcre(sqYard) {
                return sqYard * 0.000206612; // 1 acre = 4840 square yards
            }
    
            function sqYardToSqMile(sqYard) {
                // 1 square mile = 3,097,600 square yards
                return sqYard / 3097600;
            }
            
            function sqyardtosqyard(sqyard){
                return sqyard ;
            }
        
            function sqYardToSqFoot(sqYard) {
                return sqYard * 9; // 1 square foot = 0.092903 square meters
            }
        
            function sqYardToSqInch(sqYard) {
                return sqYard * 1296; // 1 square inch = 0.00064516 square meters
            }
    
            // foot to  other units
    
            function sqFootToSqm(sqFoot) {
                return sqFoot * 0.092903; // 1 square foot = 0.092903 square meters
            }
            
            function sqFootToSqKm(sqFoot) {
                return sqFoot * 9.2903e-8; // 1 square kilometer = 1000000 square meters
            }
    
            function sqFootToSqCenti(sqFoot) {
                return sqFoot * 929.03; // 1 square meter = 10000 square centimeters
            }
    
            function sqFootToSqMili(sqFoot) {
                return sqFoot * 92903; // 1 square meter = 1000000 square millimeters
            }
    
            function sqFootToSqMicrometer(sqFoot) {
                return sqFoot * 929030000; // 1 square meter = 1e12 square micrometers
            }
            
            function sqFootToHectare(sqFoot) {
                return sqFoot * 9.2903e-6; // 1 hectare = 10000 square meters
            }
    
            function sqFootToAcre(sqFoot) {
                return sqFoot * 0.0000229568; // 1 acre = 43560 square feet
            }
    
            function sqFootToSqYard(sqFoot) {
                return sqFoot * 0.111111; // 1 square yard = 9 square feet
            }
    
            function sqfoottosqfoot (sqfoot){
                return sqfoot ; 
            }
    
            function sqFootToSqMile(sqFoot) {
                // 1 square mile = 27,878,400 square feet
                return sqFoot / 27878400;
            }
            
            function sqFootToSqInch(sqFoot) {
                return sqFoot * 144; // 1 square inch = 0.00064516 square meters
            }
            
            // square inches to other units
    
            function sqInchToSqm(sqInch) {
                return sqInch * 0.00064516; // 1 square inch = 0.00064516 square meters
            }
            
            function sqInchToSqKm(sqInch) {
                return sqInch * 6.4516e-10; // 1 square kilometer = 1000000 square meters
            }
    
            function sqInchToSqCenti(sqInch) {
                return sqInch * 6.4516; // 1 square meter = 10000 square centimeters
            }
    
            function sqInchToSqMili(sqInch) {
                return sqInch * 645.16; // 1 square meter = 1000000 square millimeters
            }
    
            function sqInchToSqMicrometer(sqInch) {
                return sqInch * 645160000; // 1 square meter = 1e12 square micrometers
            }
    
            function sqInchToHectare(sqInch) {
                return sqInch * 6.4516e-8; // 1 hectare = 10000 square meters
            }
    
            function sqInchToAcre(sqInch){
                acre = sqInch * 1.59423e-7;
                return acre ; // 1 acre = 43560 square feet
            }
    
            function sqInchToSqYard(sqInch) {
                return sqInch * 0.000771605; // 1 square yard = 1296 square inches
            }
    
            function sqInchToSqMile(sqInch) {
                // 1 square mile = 2.58999 square kilometers
                // 1 square kilometer = 2.58999 × 10^12 square inches
                return sqInch * (2.58999 * Math.pow(10, -12));
            }
            
            function sqInchToSqFoot(sqInch) {
                return sqInch * 0.00694444; // 1 square foot = 144 square inches
            }
    
            function sqinchtosqinch(sqInch){
               return sqInch;
            }
            
    
            // volume units
    
            // subic meter to other units
    
                 // Cubic Meter to Cubic Kilometer
                function cubicMeterToCubicKilometer(cubicMeter) {
                    return cubicMeter * 1e-9;
                }
    
                function cubicmetertocubicmeter (cubicmeter){
                    return cubicmeter;
                }
    
                // Cubic Meter to Cubic Centimeter
                function cubicMeterToCubicCentimeter(cubicMeter) {
                    return cubicMeter * 1e6;
                }
    
                // Cubic Meter to Cubic Millimeter
                function cubicMeterToCubicMillimeter(cubicMeter) {
                    return cubicMeter * 1e9;
                }
    
                // Cubic Meter to Liter
                function cubicMeterToLiter(cubicMeter) {
                    return cubicMeter * 1000;
                }
    
                // Cubic Meter to Milliliter
                function cubicMeterToMilliliter(cubicMeter) {
                    return cubicMeter * 1e6;
                }
    
                // Cubic Meter to US Gallon
                function cubicMeterToUSGallon(cubicMeter) {
                    return cubicMeter * 264.172;
                }
    
                // Cubic Meter to US Quart
                function cubicMeterToUSQuart(cubicMeter) {
                    return cubicMeter * 1056.69;
                }
    
                // Cubic Meter to US Pint
                function cubicMeterToUSPint(cubicMeter) {
                    return cubicMeter * 2113.38;
                }
    
                // Cubic Meter to US Cup
                function cubicMeterToUSCup(cubicMeter) {
                    return cubicMeter * 4226.75;
                }
    
                // Cubic Meter to US Fluid Ounce
                function cubicMeterToUSFluidOunce(cubicMeter) {
                    return cubicMeter * 33814;
                }
    
                // Cubic Meter to US Tablespoon
                function cubicMeterToUSTablespoon(cubicMeter) {
                    return cubicMeter * 67628;
                }
    
                // Cubic Meter to US Teaspoon
                function cubicMeterToUSTeaspoon(cubicMeter) {
                    return cubicMeter * 202884;
                }
    
                // Cubic Meter to Imperial Gallon
                function cubicMeterToImperialGallon(cubicMeter) {
                    return cubicMeter * 219.969;
                }
    
                // Cubic Meter to Imperial Quart
                function cubicMeterToImperialQuart(cubicMeter) {
                    return cubicMeter * 879.877;
                }
    
                // Cubic Meter to Imperial Pint
                function cubicMeterToImperialPint(cubicMeter) {
                    return cubicMeter * 1759.75;
                }
    
                // Cubic Meter to Imperial Fluid Ounce
                function cubicMeterToImperialFluidOunce(cubicMeter) {
                    return cubicMeter * 35195.1;
                }
    
                // Cubic Meter to Imperial Tablespoon
                function cubicMeterToImperialTablespoon(cubicMeter) {
                    return cubicMeter * 70390.1;
                }
    
                // Cubic Meter to Imperial Teaspoon
                function cubicMeterToImperialTeaspoon(cubicMeter) {
                    return cubicMeter * 211170;
                }
    
                // Cubic Meter to Cubic Mile
                function cubicMeterToCubicMile(cubicMeter) {
                    return cubicMeter * 2.39913e-10;
                }
    
                // Cubic Meter to Cubic Yard
                function cubicMeterToCubicYard(cubicMeter) {
                    return cubicMeter * 1.30795;
                }
    
                // Cubic Meter to Cubic Foot
                function cubicMeterToCubicFoot(cubicMeter) {
                    return cubicMeter * 35.3147;
                }
    
                // Cubic Meter to Cubic Inch
                function cubicMeterToCubicInch(cubicMeter) {
                    return cubicMeter * 61023.7;
                }
    
    
                //cubic kilometer
    
                function cubickilometertocubickilometer (cubickilometer){
                    return cubickilometer;
                }
                
                 // Cubic Kilometer to Cubic Meter
                function cubicKilometerToCubicMeter(cubicKilometer) {
                    return cubicKilometer * 1e9;
                }
    
                // Cubic Kilometer to Cubic Centimeter
                function cubicKilometerToCubicCentimeter(cubicKilometer) {
                    return cubicKilometer * 1e15;
                }
    
                // Cubic Kilometer to Cubic Millimeter
                function cubicKilometerToCubicMillimeter(cubicKilometer) {
                    return cubicKilometer * 1e18;
                }
    
                // Cubic Kilometer to Liter
                function cubicKilometerToLiter(cubicKilometer) {
                    return cubicKilometer * 1e12;
                }
    
                // Cubic Kilometer to Milliliter
                function cubicKilometerToMilliliter(cubicKilometer) {
                    return cubicKilometer * 1e15;
                }
    
                // Cubic Kilometer to US Gallon
                function cubicKilometerToUSGallon(cubicKilometer) {
                    return cubicKilometer * 2.64172e11;
                }
    
                // Cubic Kilometer to US Quart
                function cubicKilometerToUSQuart(cubicKilometer) {
                    return cubicKilometer * 1.05669e12;
                }
    
                // Cubic Kilometer to US Pint
                function cubicKilometerToUSPint(cubicKilometer) {
                    return cubicKilometer * 2.11338e12;
                }
    
                // Cubic Kilometer to US Cup
                function cubicKilometerToUSCup(cubicKilometer) {
                    return cubicKilometer * 4.22675e12;
                }
    
                // Cubic Kilometer to US Fluid Ounce
                function cubicKilometerToUSFluidOunce(cubicKilometer) {
                    return cubicKilometer * 3.3814e13;
                }
    
                // Cubic Kilometer to US Tablespoon
                function cubicKilometerToUSTablespoon(cubicKilometer) {
                    return cubicKilometer * 6.7628e13;
                }
    
                // Cubic Kilometer to US Teaspoon
                function cubicKilometerToUSTeaspoon(cubicKilometer) {
                    return cubicKilometer * 2.02884e14;
                }
    
                // Cubic Kilometer to Imperial Gallon
                function cubicKilometerToImperialGallon(cubicKilometer) {
                    return cubicKilometer * 2.19969e11;
                }
    
                // Cubic Kilometer to Imperial Quart
                function cubicKilometerToImperialQuart(cubicKilometer) {
                    return cubicKilometer * 8.79877e11;
                }
    
                // Cubic Kilometer to Imperial Pint
                function cubicKilometerToImperialPint(cubicKilometer) {
                    return cubicKilometer * 1.75975e12;
                }
    
                // Cubic Kilometer to Imperial Fluid Ounce
                function cubicKilometerToImperialFluidOunce(cubicKilometer) {
                    return cubicKilometer * 3.51951e13;
                }
    
                // Cubic Kilometer to Imperial Tablespoon
                function cubicKilometerToImperialTablespoon(cubicKilometer) {
                    return cubicKilometer * 7.03901e13;
                }
    
                // Cubic Kilometer to Imperial Teaspoon
                function cubicKilometerToImperialTeaspoon(cubicKilometer) {
                    return cubicKilometer * 2.1117e14;
                }
    
                // Cubic Kilometer to Cubic Mile
                function cubicKilometerToCubicMile(cubicKilometer) {
                    return cubicKilometer * 0.239913;
                }
    
                // Cubic Kilometer to Cubic Yard
                function cubicKilometerToCubicYard(cubicKilometer) {
                    return cubicKilometer * 1307950610;
                }
    
                // Cubic Kilometer to Cubic Foot
                function cubicKilometerToCubicFoot(cubicKilometer) {
                    return cubicKilometer * 3.53147e10;
                }
    
                // Cubic Kilometer to Cubic Inch
                function cubicKilometerToCubicInch(cubicKilometer) {
                    return cubicKilometer * 6.10237e13;
                }
    
    
                // cubic centimeter to other units
    
                // Cubic Centimeter to Cubic Meter
                function cubicCentimeterToCubicMeter(cubicCentimeter) {
                    return cubicCentimeter / 1000000;
                }
    
                // Cubic Centimeter to Cubic Kilometer
                function cubicCentimeterToCubicKilometer(cubicCentimeter) {
                    return cubicCentimeter / 1e15;
                }
    
                // Cubic Centimeter to Liter
                function cubicCentimeterToLiter(cubicCentimeter) {
                    return cubicCentimeter / 1000;
                }
    
                // Cubic Centimeter to Milliliter
                function cubicCentimeterToMilliliter(cubicCentimeter) {
                    return cubicCentimeter;
                }
    
                // Cubic Centimeter to US Gallon
                function cubicCentimeterToUSGallon(cubicCentimeter) {
                    return cubicCentimeter / 3785.41;
                }
    
                // Cubic Centimeter to US Quart
                function cubicCentimeterToUSQuart(cubicCentimeter) {
                    return cubicCentimeter / 946.353;
                }
    
                // Cubic Centimeter to US Pint
                function cubicCentimeterToUSPint(cubicCentimeter) {
                    return cubicCentimeter / 473.176;
                }
    
                // Cubic Centimeter to US Cup
                function cubicCentimeterToUSCup(cubicCentimeter) {
                    return cubicCentimeter / 236.588;
                }
    
                // Cubic Centimeter to US Fluid Ounce
                function cubicCentimeterToUSFluidOunce(cubicCentimeter) {
                    return cubicCentimeter / 29.5735;
                }
    
                // Cubic Centimeter to US Tablespoon
                function cubicCentimeterToUSTablespoon(cubicCentimeter) {
                    return cubicCentimeter / 14.7868;
                }
    
                // Cubic Centimeter to US Teaspoon
                function cubicCentimeterToUSTeaspoon(cubicCentimeter) {
                    return cubicCentimeter / 4.92892;
                }
    
                // Cubic Centimeter to Imperial Gallon
                function cubicCentimeterToImperialGallon(cubicCentimeter) {
                    return cubicCentimeter / 4546.09;
                }
    
                // Cubic Centimeter to Imperial Quart
                function cubicCentimeterToImperialQuart(cubicCentimeter) {
                    return cubicCentimeter / 1136.52;
                }
    
                // Cubic Centimeter to Imperial Pint
                function cubicCentimeterToImperialPint(cubicCentimeter) {
                    return cubicCentimeter / 568.261;
                }
    
                // Cubic Centimeter to Imperial Fluid Ounce
                function cubicCentimeterToImperialFluidOunce(cubicCentimeter) {
                    return cubicCentimeter / 28.4131;
                }
    
                // Cubic Centimeter to Imperial Tablespoon
                function cubicCentimeterToImperialTablespoon(cubicCentimeter) {
                    return cubicCentimeter / 17.7582;
                }
    
                // Cubic Centimeter to Imperial Teaspoon
                function cubicCentimeterToImperialTeaspoon(cubicCentimeter) {
                    return cubicCentimeter / 5.91939;
                }
    
                // Cubic Centimeter to Cubic Mile
                function cubicCentimeterToCubicMile(cubicCentimeter) {
                    return cubicCentimeter * 2.3991e-19;
                }
    
                // Cubic Centimeter to Cubic Yard
                function cubicCentimeterToCubicYard(cubicCentimeter) {
                    return cubicCentimeter / 764554.858;
                }
    
                // Cubic Centimeter to Cubic Foot
                function cubicCentimeterToCubicFoot(cubicCentimeter) {
                    return cubicCentimeter / 28316.8;
                }
    
                // Cubic Centimeter to Cubic Inch
                function cubicCentimeterToCubicInch(cubicCentimeter) {
                    return cubicCentimeter / 16.3871;
                }
    
    
    
                // cubic milimeter to  other units
    
    
                            // Cubic Millimeter to Cubic Meter
                function cubicMillimeterToCubicMeter(cubicMillimeter) {
                    return cubicMillimeter / 1e9;
                }
    
                // Cubic Millimeter to Cubic Kilometer
                function cubicMillimeterToCubicKilometer(cubicMillimeter) {
                    return cubicMillimeter / 1e18;
                }
    
                // Cubic Millimeter to Cubic Centimeter
                function cubicMillimeterToCubicCentimeter(cubicMillimeter) {
                    return cubicMillimeter / 1000;
                }
    
                // Cubic Millimeter to Liter
                function cubicMillimeterToLiter(cubicMillimeter) {
                    return cubicMillimeter / 1000000;
                }
    
                // Cubic Millimeter to Milliliter
                function cubicMillimeterToMilliliter(cubicMillimeter) {
                    return cubicMillimeter / 1000;
                }
    
                // Cubic Millimeter to US Gallon
                function cubicMillimeterToUSGallon(cubicMillimeter) {
                    return cubicMillimeter / 3785411.78;
                }
    
                // Cubic Millimeter to US Quart
                function cubicMillimeterToUSQuart(cubicMillimeter) {
                    return cubicMillimeter / 946352.946;
                }
    
                // Cubic Millimeter to US Pint
                function cubicMillimeterToUSPint(cubicMillimeter) {
                    return cubicMillimeter / 473176.473;
                }
    
                // Cubic Millimeter to US Cup
                function cubicMillimeterToUSCup(cubicMillimeter) {
                    return cubicMillimeter / 240000;
                }
    
                // Cubic Millimeter to US Fluid Ounce
                function cubicMillimeterToUSFluidOunce(cubicMillimeter) {
                    return cubicMillimeter / 29573.5;
                }
    
                // Cubic Millimeter to US Tablespoon
                function cubicMillimeterToUSTablespoon(cubicMillimeter) {
                    return cubicMillimeter / 14786.8;
                }
    
                // Cubic Millimeter to US Teaspoon
                function cubicMillimeterToUSTeaspoon(cubicMillimeter) {
                    return cubicMillimeter / 4928.92;
                }
    
                // Cubic Millimeter to Imperial Gallon
                function cubicMillimeterToImperialGallon(cubicMillimeter) {
                    return cubicMillimeter / 4546090.45;
                }
    
                // Cubic Millimeter to Imperial Quart
                function cubicMillimeterToImperialQuart(cubicMillimeter) {
                    return cubicMillimeter / 1136523.4;
                }
    
                // Cubic Millimeter to Imperial Pint
                function cubicMillimeterToImperialPint(cubicMillimeter) {
                    return cubicMillimeter / 568261.717;
                }
    
                // Cubic Millimeter to Imperial Fluid Ounce
                function cubicMillimeterToImperialFluidOunce(cubicMillimeter) {
                    return cubicMillimeter / 28413.1;
                }
    
                // Cubic Millimeter to Imperial Tablespoon
                function cubicMillimeterToImperialTablespoon(cubicMillimeter) {
                    return cubicMillimeter / 17764.7;
                }
    
                // Cubic Millimeter to Imperial Teaspoon
                function cubicMillimeterToImperialTeaspoon(cubicMillimeter) {
                    return cubicMillimeter / 5915.45;
                }
    
                // Cubic Millimeter to Cubic Mile
                function cubicMillimeterToCubicMile(cubicMillimeter) {
                    return cubicMillimeter * 2.3991e-21;
                }
    
                // Cubic Millimeter to Cubic Yard
                function cubicMillimeterToCubicYard(cubicMillimeter) {
                    return cubicMillimeter / 764554857.983;
                }
    
                // Cubic Millimeter to Cubic Foot
                function cubicMillimeterToCubicFoot(cubicMillimeter) {
                    return cubicMillimeter / 28316846.6;
                }
    
                // Cubic Millimeter to Cubic Inch
                function cubicMillimeterToCubicInch(cubicMillimeter) {
                    return cubicMillimeter / 16387.1;
                }
    
    
                // Litter to other units
    
                            // Liter to Cubic Meter
                function literToCubicMeter(liter) {
                    return liter / 1000;
                }
    
                // Liter to Cubic Kilometer
                function literToCubicKilometer(liter) {
                    return liter / 1e6;
                }
    
                // Liter to Cubic Centimeter
                function literToCubicCentimeter(liter) {
                    return liter * 1000;
                }
    
                // Liter to Cubic Millimeter
                function literToCubicMillimeter(liter) {
                    return liter * 1e6;
                }
    
                // Liter to US Gallon
                function literToUSGallon(liter) {
                    return liter * 0.264172;
                }
    
                // Liter to US Quart
                function literToUSQuart(liter) {
                    return liter * 1.05669;
                }
    
                // Liter to US Pint
                function literToUSPint(liter) {
                    return liter * 2.11338;
                }
    
                // Liter to US Cup
                function literToUSCup(liter) {
                    return liter * 4.22675;
                }
    
                // Liter to US Fluid Ounce
                function literToUSFluidOunce(liter) {
                    return liter * 33.814;
                }
    
                // Liter to US Tablespoon
                function literToUSTablespoon(liter) {
                    return liter * 67.628;
                }
    
                // Liter to US Teaspoon
                function literToUSTeaspoon(liter) {
                    return liter * 202.884;
                }
    
                // Liter to Imperial Gallon
                function literToImperialGallon(liter) {
                    return liter * 0.219969;
                }
    
                // Liter to Imperial Quart
                function literToImperialQuart(liter) {
                    return liter * 1.75975;
                }
    
                // Liter to Imperial Pint
                function literToImperialPint(liter) {
                    return liter * 1.75975;
                }
    
                // Liter to Imperial Fluid Ounce
                function literToImperialFluidOunce(liter) {
                    return liter * 35.1951;
                }
    
                // Liter to Imperial Tablespoon
                function literToImperialTablespoon(liter) {
                    return liter * 56.3121;
                }
    
                // Liter to Imperial Teaspoon
                function literToImperialTeaspoon(liter) {
                    return liter * 168.936;
                }
    
                // Liter to Cubic Mile
                function literToCubicMile(liter) {
                    return liter * 2.3991e-10;
                }
    
                // Liter to Cubic Yard
                function literToCubicYard(liter) {
                    return liter * 0.00130795;
                }
    
                // Liter to Cubic Foot
                function literToCubicFoot(liter) {
                    return liter * 0.0353147;
                }
    
                // Liter to Cubic Inch
                function literToCubicInch(liter) {
                    return liter * 61.0237;
                }
    
                
    
                // mililitter to all other units
    
    
                                // Milliliter to Cubic Meter
                    function milliliterToCubicMeter(milliliter) {
                        return milliliter / 1000000;
                    }
    
                    // Milliliter to Cubic Kilometer
                    function milliliterToCubicKilometer(milliliter) {
                        return milliliter / 1e12;
                    }
    
                    // Milliliter to Cubic Centimeter
                    function milliliterToCubicCentimeter(milliliter) {
                        return milliliter;
                    }
    
                    // Milliliter to Cubic Millimeter
                    function milliliterToCubicMillimeter(milliliter) {
                        return milliliter * 1000;
                    }
    
                    // Milliliter to Liter
                    function milliliterToLiter(milliliter) {
                        return milliliter / 1000;
                    }
    
                    // Milliliter to US Gallon
                    function milliliterToUSGallon(milliliter) {
                        return milliliter / 3785.41;
                    }
    
                    // Milliliter to US Quart
                    function milliliterToUSQuart(milliliter) {
                        return milliliter / 946.353;
                    }
    
                    // Milliliter to US Pint
                    function milliliterToUSPint(milliliter) {
                        return milliliter / 473.176;
                    }
    
                    // Milliliter to US Cup
                    function milliliterToUSCup(milliliter) {
                        return milliliter / 236.588;
                    }
    
                    // Milliliter to US Fluid Ounce
                    function milliliterToUSFluidOunce(milliliter) {
                        return milliliter / 29.5735;
                    }
    
                    // Milliliter to US Tablespoon
                    function milliliterToUSTablespoon(milliliter) {
                        return milliliter / 14.7868;
                    }
    
                    // Milliliter to US Teaspoon
                    function milliliterToUSTeaspoon(milliliter) {
                        return milliliter / 4.92892;
                    }
    
                    // Milliliter to Imperial Gallon
                    function milliliterToImperialGallon(milliliter) {
                        return milliliter / 4546.09;
                    }
    
                    // Milliliter to Imperial Quart
                    function milliliterToImperialQuart(milliliter) {
                        return milliliter / 1136.52;
                    }
    
                    // Milliliter to Imperial Pint
                    function milliliterToImperialPint(milliliter) {
                        return milliliter / 568.261;
                    }
    
                    // Milliliter to Imperial Fluid Ounce
                    function milliliterToImperialFluidOunce(milliliter) {
                        return milliliter / 28.4131;
                    }
    
                    // Milliliter to Imperial Tablespoon
                    function milliliterToImperialTablespoon(milliliter) {
                        return milliliter / 17.7582;
                    }
    
                    // Milliliter to Imperial Teaspoon
                    function milliliterToImperialTeaspoon(milliliter) {
                        return milliliter / 5.91939;
                    }
    
                    // Milliliter to Cubic Mile
                    function milliliterToCubicMile(milliliter) {
                        return milliliter * 2.3991e-16;
                    }
    
                    // Milliliter to Cubic Yard
                    function milliliterToCubicYard(milliliter) {
                        return milliliter / 764554.858;
                    }
    
                    // Milliliter to Cubic Foot
                    function milliliterToCubicFoot(milliliter) {
                        return milliliter / 28316.8;
                    }
    
                    // Milliliter to Cubic Inch
                    function milliliterToCubicInch(milliliter) {
                        return milliliter / 16.3871;
                    }
    
    
    
                    // us gallon to all other units
    
    
                    // US Gallon to Cubic Meter
                    function usGallonToCubicMeter(usGallon) {
                    return usGallon * 0.00378541;
                    }
    
                    // US Gallon to Cubic Kilometer
                    function usGallonToCubicKilometer(usGallon) {
                    return usGallon * 3.78541e-12;
                    }
    
                    // US Gallon to Cubic Centimeter
                    function usGallonToCubicCentimeter(usGallon) {
                    return usGallon * 3785.41;
                    }
    
                    // US Gallon to Cubic Millimeter
                    function usGallonToCubicMillimeter(usGallon) {
                    return usGallon * 3.78541e6;
                    }
    
                    // US Gallon to Liter
                    function usGallonToLiter(usGallon) {
                    return usGallon * 3.78541;
                    }
    
                    // US Gallon to Milliliter
                    function usGallonToMilliliter(usGallon) {
                    return usGallon * 3785.41;
                    }
    
                    // US Gallon to US Quart
                    function usGallonToUSQuart(usGallon) {
                    return usGallon * 4;
                    }
    
                    // US Gallon to US Pint
                    function usGallonToUSPint(usGallon) {
                    return usGallon * 8;
                    }
    
                    // US Gallon to US Cup
                    function usGallonToUSCup(usGallon) {
                    return usGallon * 16;
                    }
    
                    // US Gallon to US Fluid Ounce
                    function usGallonToUSFluidOunce(usGallon) {
                    return usGallon * 128;
                    }
    
                    // US Gallon to US Tablespoon
                    function usGallonToUSTablespoon(usGallon) {
                    return usGallon * 256;
                    }
    
                    // US Gallon to US Teaspoon
                    function usGallonToUSTeaspoon(usGallon) {
                    return usGallon * 768;
                    }
    
                    // US Gallon to Imperial Gallon
                    function usGallonToImperialGallon(usGallon) {
                    return usGallon / 1.20095;
                    }
    
                    // US Gallon to Imperial Quart
                    function usGallonToImperialQuart(usGallon) {
                    return usGallon / 1.20095;
                    }
    
                    // US Gallon to Imperial Pint
                    function usGallonToImperialPint(usGallon) {
                    return usGallon / 1.20095;
                    }
    
                    // US Gallon to Imperial Fluid Ounce
                    function usGallonToImperialFluidOunce(usGallon) {
                    return usGallon / 0.96076;
                    }
    
                    // US Gallon to Imperial Tablespoon
                    function usGallonToImperialTablespoon(usGallon) {
                    return usGallon / 0.600475;
                    }
    
                    // US Gallon to Imperial Teaspoon
                    function usGallonToImperialTeaspoon(usGallon) {
                    return usGallon / 0.200158;
                    }
    
                    // US Gallon to Cubic Mile
                    function usGallonToCubicMile(usGallon) {
                    return usGallon * 9.08171e-13;
                    }
    
                    // US Gallon to Cubic Yard
                    function usGallonToCubicYard(usGallon) {
                    return usGallon * 0.00495113;
                    }
    
                    // US Gallon to Cubic Foot
                    function usGallonToCubicFoot(usGallon) {
                    return usGallon * 0.133681;
                    }
    
                    // US Gallon to Cubic Inch
                    function usGallonToCubicInch(usGallon) {
                    return usGallon * 231;
                    }
    
    
                    //  us quart
    
    
                    // US Quart to Cubic Meter
                    function usQuartToCubicMeter(usQuart) {
                        return usQuart * 0.000946353;
                    }
    
                    // US Quart to Cubic Kilometer
                    function usQuartToCubicKilometer(usQuart) {
                        return usQuart * 9.46353e-13;
                    }
    
                    // US Quart to Cubic Centimeter
                    function usQuartToCubicCentimeter(usQuart) {
                        return usQuart * 946.353;
                    }
    
                    // US Quart to Cubic Millimeter
                    function usQuartToCubicMillimeter(usQuart) {
                        return usQuart * 946353.0;
                    }
    
                    // US Quart to Liter
                    function usQuartToLiter(usQuart) {
                        return usQuart * 0.946353;
                    }
    
                    // US Quart to Milliliter
                    function usQuartToMilliliter(usQuart) {
                        return usQuart * 946.353;
                    }
    
                    // US Quart to US Gallon
                    function usQuartToUSGallon(usQuart) {
                        return usQuart / 4;
                    }
    
                    // US Quart to US Pint
                    function usQuartToUSPint(usQuart) {
                        return usQuart * 2;
                    }
    
                    // US Quart to US Cup
                    function usQuartToUSCup(usQuart) {
                        return usQuart * 4;
                    }
    
                    // US Quart to US Fluid Ounce
                    function usQuartToUSFluidOunce(usQuart) {
                        return usQuart * 32;
                    }
    
                    // US Quart to US Tablespoon
                    function usQuartToUSTablespoon(usQuart) {
                        return usQuart * 64;
                    }
    
                    // US Quart to US Teaspoon
                    function usQuartToUSTeaspoon(usQuart) {
                        return usQuart * 192;
                    }
    
                    // US Quart to Imperial Gallon
                    function usQuartToImperialGallon(usQuart) {
                        return usQuart / 4.8038;
                    }
    
                    // US Quart to Imperial Quart
                    function usQuartToImperialQuart(usQuart) {
                        return usQuart / 4.8038;
                    }
    
                    // US Quart to Imperial Pint
                    function usQuartToImperialPint(usQuart) {
                        return usQuart / 2.4019;
                    }
    
                    // US Quart to Imperial Fluid Ounce
                    function usQuartToImperialFluidOunce(usQuart) {
                        return usQuart / 1.20095;
                    }
    
                    // US Quart to Imperial Tablespoon
                    function usQuartToImperialTablespoon(usQuart) {
                        return usQuart / 0.960759;
                    }
    
                    // US Quart to Imperial Teaspoon
                    function usQuartToImperialTeaspoon(usQuart) {
                        return usQuart / 0.320253;
                    }
    
                    // US Quart to Cubic Mile
                    function usQuartToCubicMile(usQuart) {
                        return usQuart * 2.27043e-13;
                    }
    
                    // US Quart to Cubic Yard
                    function usQuartToCubicYard(usQuart) {
                        return usQuart * 0.00123781;
                    }
    
                    // US Quart to Cubic Foot
                    function usQuartToCubicFoot(usQuart) {
                        return usQuart * 0.0334201;
                    }
    
                    // US Quart to Cubic Inch
                    function usQuartToCubicInch(usQuart) {
                        return usQuart * 57.75;
                    }
    
                    
                    // us pint
    
    
                    // US Pint to Cubic Meter
                    function usPintToCubicMeter(usPint) {
                        return usPint * 0.000473176;
                    }
    
                    // US Pint to Cubic Kilometer
                    function usPintToCubicKilometer(usPint) {
                        return usPint * 4.73176e-13;
                    }
    
                    // US Pint to Cubic Centimeter
                    function usPintToCubicCentimeter(usPint) {
                        return usPint * 473.176;
                    }
    
                    // US Pint to Cubic Millimeter
                    function usPintToCubicMillimeter(usPint) {
                        return usPint * 473176;
                    }
    
                    // US Pint to Liter
                    function usPintToLiter(usPint) {
                        return usPint * 0.473176;
                    }
    
                    // US Pint to Milliliter
                    function usPintToMilliliter(usPint) {
                        return usPint * 473.176;
                    }
    
                    // US Pint to US Gallon
                    function usPintToUSGallon(usPint) {
                        return usPint * 0.125;
                    }
    
                    // US Pint to US Quart
                    function usPintToUSQuart(usPint) {
                        return usPint * 0.5;
                    }
    
                    // US Pint to US Fluid Ounce
                    function usPintToUSFluidOunce(usPint) {
                        return usPint * 16;
                    }
    
                    // US Pint to US Cup
                    function usPintToUSCup(usPint) {
                        return usPint * 2;
                    }
    
                    // US Pint to US Tablespoon
                    function usPintToUSTablespoon(usPint) {
                        return usPint * 32;
                    }
    
                    // US Pint to US Teaspoon
                    function usPintToUSTeaspoon(usPint) {
                        return usPint * 96;
                    }
    
                    // US Pint to Cubic Mile
                    function usPintToCubicMile(usPint) {
                        return usPint * 1.108e-13;
                    }
    
                    // US Pint to Cubic Yard
                    function usPintToCubicYard(usPint) {
                        return usPint * 0.000580247;
                    }
    
                    // US Pint to Cubic Foot
                    function usPintToCubicFoot(usPint) {
                        return usPint * 0.0163871;
                    }
    
                    // US Pint to Cubic Inch
                    function usPintToCubicInch(usPint) {
                        return usPint * 28.875;
                    }
    
    
    
                    // us cup 
    
    
                    // US Cup to Cubic Meter
                    function usCupToCubicMeter(usCup) {
                        return usCup * 0.000236588;
                    }
    
                    // US Cup to Cubic Kilometer
                    function usCupToCubicKilometer(usCup) {
                        return usCup * 2.36588e-13;
                    }
    
                    // US Cup to Cubic Centimeter
                    function usCupToCubicCentimeter(usCup) {
                        return usCup * 236.588;
                    }
    
                    // US Cup to Cubic Millimeter
                    function usCupToCubicMillimeter(usCup) {
                        return usCup * 236588.0;
                    }
    
                    // US Cup to Liter
                    function usCupToLiter(usCup) {
                        return usCup * 0.236588;
                    }
    
                    // US Cup to Milliliter
                    function usCupToMilliliter(usCup) {
                        return usCup * 236.588;
                    }
    
                    // US Cup to US Gallon
                    function usCupToUSGallon(usCup) {
                        return usCup / 16;
                    }
    
                    // US Cup to US Quart
                    function usCupToUSQuart(usCup) {
                        return usCup / 4;
                    }
    
                    // US Cup to US Pint
                    function usCupToUSPint(usCup) {
                        return usCup / 2;
                    }
    
                    // US Cup to US Fluid Ounce
                    function usCupToUSFluidOunce(usCup) {
                        return usCup * 8;
                    }
    
                    // US Cup to US Tablespoon
                    function usCupToUSTablespoon(usCup) {
                        return usCup * 16;
                    }
    
                    // US Cup to US Teaspoon
                    function usCupToUSTeaspoon(usCup) {
                        return usCup * 48;
                    }
    
                    // US Cup to Imperial Gallon
                    function usCupToImperialGallon(usCup) {
                        return usCup / 6.40084;
                    }
    
                    // US Cup to Imperial Quart
                    function usCupToImperialQuart(usCup) {
                        return usCup / 1.60021;
                    }
    
                    // US Cup to Imperial Pint
                    function usCupToImperialPint(usCup) {
                        return usCup / 0.800423;
                    }
    
                    // US Cup to Imperial Fluid Ounce
                    function usCupToImperialFluidOunce(usCup) {
                        return usCup * 10.8333;
                    }
    
                    // US Cup to Imperial Tablespoon
                    function usCupToImperialTablespoon(usCup) {
                        return usCup * 17.324;
                    }
    
                    // US Cup to Imperial Teaspoon
                    function usCupToImperialTeaspoon(usCup) {
                        return usCup * 51.972;
                    }
    
                    // US Cup to Cubic Mile
                    function usCupToCubicMile(usCup) {
                        return usCup * 1.4251e-13;
                    }
    
                    // US Cup to Cubic Yard
                    function usCupToCubicYard(usCup) {
                        return usCup * 0.000307605;
                    }
    
                    // US Cup to Cubic Foot
                    function usCupToCubicFoot(usCup) {
                        return usCup * 0.00835503;
                    }
    
                    // US Cup to Cubic Inch
                    function usCupToCubicInch(usCup) {
                        return usCup * 14.4375;
                    }
    
    
                    //  us fluid once 
    
                    // US Fluid Ounce to Cubic Meter
                    function usFluidOunceToCubicMeter(usFluidOunce) {
                        return usFluidOunce * 2.95735e-5;
                    }
    
                    // US Fluid Ounce to Cubic Kilometer
                    function usFluidOunceToCubicKilometer(usFluidOunce) {
                        return usFluidOunce * 2.95735e-17;
                    }
    
                    // US Fluid Ounce to Cubic Centimeter
                    function usFluidOunceToCubicCentimeter(usFluidOunce) {
                        return usFluidOunce * 29.5735;
                    }
    
                    // US Fluid Ounce to Cubic Millimeter
                    function usFluidOunceToCubicMillimeter(usFluidOunce) {
                        return usFluidOunce * 29573.5;
                    }
    
                    // US Fluid Ounce to Liter
                    function usFluidOunceToLiter(usFluidOunce) {
                        return usFluidOunce * 0.0295735;
                    }
    
                    // US Fluid Ounce to Milliliter
                    function usFluidOunceToMilliliter(usFluidOunce) {
                        return usFluidOunce * 29.5735;
                    }
    
                    // US Fluid Ounce to US Gallon
                    function usFluidOunceToUSGallon(usFluidOunce) {
                        return usFluidOunce * 0.0078125;
                    }
    
                    // US Fluid Ounce to US Quart
                    function usFluidOunceToUSQuart(usFluidOunce) {
                        return usFluidOunce * 0.03125;
                    }
    
                    // US Fluid Ounce to US Pint
                    function usFluidOunceToUSPint(usFluidOunce) {
                        return usFluidOunce * 0.0625;
                    }
    
                    // US Fluid Ounce to US Cup
                    function usFluidOunceToUSCup(usFluidOunce) {
                        return usFluidOunce * 0.125;
                    }
    
                    // US Fluid Ounce to US Tablespoon
                    function usFluidOunceToUSTablespoon(usFluidOunce) {
                        return usFluidOunce * 2;
                    }
    
                    // US Fluid Ounce to US Teaspoon
                    function usFluidOunceToUSTeaspoon(usFluidOunce) {
                        return usFluidOunce * 6;
                    }
    
                    // US Fluid Ounce to Imperial Gallon
                    function usFluidOunceToImperialGallon(usFluidOunce) {
                        return usFluidOunce * 0.00625;
                    }
    
                    // US Fluid Ounce to Imperial Quart
                    function usFluidOunceToImperialQuart(usFluidOunce) {
                        return usFluidOunce * 0.025;
                    }
    
                    // US Fluid Ounce to Imperial Pint
                    function usFluidOunceToImperialPint(usFluidOunce) {
                        return usFluidOunce * 0.05;
                    }
    
                    // US Fluid Ounce to Imperial Fluid Ounce
                    function usFluidOunceToImperialFluidOunce(usFluidOunce) {
                        return usFluidOunce * 1.6;
                    }
    
                    // US Fluid Ounce to Imperial Tablespoon
                    function usFluidOunceToImperialTablespoon(usFluidOunce) {
                        return usFluidOunce * 3.2;
                    }
    
                    // US Fluid Ounce to Imperial Teaspoon
                    function usFluidOunceToImperialTeaspoon(usFluidOunce) {
                        return usFluidOunce * 9.6;
                    }
    
                    // US Fluid Ounce to Cubic Mile
                    function usFluidOunceToCubicMile(usFluidOunce) {
                        return usFluidOunce * 7.03902e-15;
                    }
    
                    // US Fluid Ounce to Cubic Yard
                    function usFluidOunceToCubicYard(usFluidOunce) {
                        return usFluidOunce * 8.68105e-5;
                    }
    
                    // US Fluid Ounce to Cubic Foot
                    function usFluidOunceToCubicFoot(usFluidOunce) {
                        return usFluidOunce * 0.000578704;
                    }
    
                    // US Fluid Ounce to Cubic Inch
                    function usFluidOunceToCubicInch(usFluidOunce) {
                        return usFluidOunce * 1.80469;
                    }
    
    
    
                    // us table spoon
    
    
    
                    // US Tablespoon to Cubic Meter
                    function usTablespoonToCubicMeter(usTablespoon) {
                        return usTablespoon * 1.47868e-5;
                    }
    
                    // US Tablespoon to Cubic Kilometer
                    function usTablespoonToCubicKilometer(usTablespoon) {
                        return usTablespoon * 1.47868e-17;
                    }
    
                    // US Tablespoon to Cubic Centimeter
                    function usTablespoonToCubicCentimeter(usTablespoon) {
                        return usTablespoon * 14.7868;
                    }
    
                    // US Tablespoon to Cubic Millimeter
                    function usTablespoonToCubicMillimeter(usTablespoon) {
                        return usTablespoon * 14786.8;
                    }
    
                    // US Tablespoon to Liter
                    function usTablespoonToLiter(usTablespoon) {
                        return usTablespoon * 0.0147868;
                    }
    
                    // US Tablespoon to Milliliter
                    function usTablespoonToMilliliter(usTablespoon) {
                        return usTablespoon * 14.7868;
                    }
    
                    // US Tablespoon to US Gallon
                    function usTablespoonToUSGallon(usTablespoon) {
                        return usTablespoon * 0.00390625;
                    }
    
                    // US Tablespoon to US Quart
                    function usTablespoonToUSQuart(usTablespoon) {
                        return usTablespoon * 0.015625;
                    }
    
                    // US Tablespoon to US Pint
                    function usTablespoonToUSPint(usTablespoon) {
                        return usTablespoon * 0.03125;
                    }
    
                    // US Tablespoon to US Cup
                    function usTablespoonToUSCup(usTablespoon) {
                        return usTablespoon * 0.0625;
                    }
    
                    // US Tablespoon to US Fluid Ounce
                    function usTablespoonToUSFluidOunce(usTablespoon) {
                        return usTablespoon * 0.5;
                    }
    
                    // US Tablespoon to US Teaspoon
                    function usTablespoonToUSTeaspoon(usTablespoon) {
                        return usTablespoon * 3;
                    }
    
                    // US Tablespoon to Imperial Gallon
                    function usTablespoonToImperialGallon(usTablespoon) {
                        return usTablespoon * 0.00390625;
                    }
    
                    // US Tablespoon to Imperial Quart
                    function usTablespoonToImperialQuart(usTablespoon) {
                        return usTablespoon * 0.015625;
                    }
    
                    // US Tablespoon to Imperial Pint
                    function usTablespoonToImperialPint(usTablespoon) {
                        return usTablespoon * 0.03125;
                    }
    
                    // US Tablespoon to Imperial Fluid Ounce
                    function usTablespoonToImperialFluidOunce(usTablespoon) {
                        return usTablespoon * 0.625;
                    }
    
                    // US Tablespoon to Imperial Tablespoon
                    function usTablespoonToImperialTablespoon(usTablespoon) {
                        return usTablespoon;
                    }
    
                    // US Tablespoon to Imperial Teaspoon
                    function usTablespoonToImperialTeaspoon(usTablespoon) {
                        return usTablespoon * 3;
                    }
    
                    // US Tablespoon to Cubic Mile
                    function usTablespoonToCubicMile(usTablespoon) {
                        return usTablespoon * 3.52288e-15;
                    }
    
                    // US Tablespoon to Cubic Yard
                    function usTablespoonToCubicYard(usTablespoon) {
                        return usTablespoon * 4.33681e-5;
                    }
    
                    // US Tablespoon to Cubic Foot
                    function usTablespoonToCubicFoot(usTablespoon) {
                        return usTablespoon * 0.000292977;
                    }
    
                    // US Tablespoon to Cubic Inch
                    function usTablespoonToCubicInch(usTablespoon) {
                        return usTablespoon * 0.902344;
                    }
    
    
                    // us tea spoon
    
                    // US Teaspoon to Cubic Meter
                    function usTeaspoonToCubicMeter(usTeaspoon) {
                        return usTeaspoon * 4.92892e-6;
                    }
    
                    // US Teaspoon to Cubic Kilometer
                    function usTeaspoonToCubicKilometer(usTeaspoon) {
                        return usTeaspoon * 4.92892e-18;
                    }
    
                    // US Teaspoon to Cubic Centimeter
                    function usTeaspoonToCubicCentimeter(usTeaspoon) {
                        return usTeaspoon * 4.92892;
                    }
    
                    // US Teaspoon to Cubic Millimeter
                    function usTeaspoonToCubicMillimeter(usTeaspoon) {
                        return usTeaspoon * 4928.92;
                    }
    
                    // US Teaspoon to Liter
                    function usTeaspoonToLiter(usTeaspoon) {
                        return usTeaspoon * 0.00492892;
                    }
    
                    // US Teaspoon to Milliliter
                    function usTeaspoonToMilliliter(usTeaspoon) {
                        return usTeaspoon * 4.92892;
                    }
    
                    // US Teaspoon to US Gallon
                    function usTeaspoonToUSGallon(usTeaspoon) {
                        return usTeaspoon * 0.00130208;
                    }
    
                    // US Teaspoon to US Quart
                    function usTeaspoonToUSQuart(usTeaspoon) {
                        return usTeaspoon * 0.00520833;
                    }
    
                    // US Teaspoon to US Pint
                    function usTeaspoonToUSPint(usTeaspoon) {
                        return usTeaspoon * 0.0104167;
                    }
    
                    // US Teaspoon to US Cup
                    function usTeaspoonToUSCup(usTeaspoon) {
                        return usTeaspoon * 0.0208333;
                    }
    
                    // US Teaspoon to US Fluid Ounce
                    function usTeaspoonToUSFluidOunce(usTeaspoon) {
                        return usTeaspoon * 0.166667;
                    }
    
                    // US Teaspoon to US Tablespoon
                    function usTeaspoonToUSTablespoon(usTeaspoon) {
                        return usTeaspoon * 0.333333;
                    }
    
                    // US Teaspoon to Imperial Gallon
                    function usTeaspoonToImperialGallon(usTeaspoon) {
                        return usTeaspoon * 0.00130208;
                    }
    
                    // US Teaspoon to Imperial Quart
                    function usTeaspoonToImperialQuart(usTeaspoon) {
                        return usTeaspoon * 0.00520833;
                    }
    
                    // US Teaspoon to Imperial Pint
                    function usTeaspoonToImperialPint(usTeaspoon) {
                        return usTeaspoon * 0.0104167;
                    }
    
                    // US Teaspoon to Imperial Fluid Ounce
                    function usTeaspoonToImperialFluidOunce(usTeaspoon) {
                        return usTeaspoon * 0.208333;
                    }
    
                    // US Teaspoon to Imperial Tablespoon
                    function usTeaspoonToImperialTablespoon(usTeaspoon) {
                        return usTeaspoon * 0.333333;
                    }
    
                    // US Teaspoon to Imperial Teaspoon
                    function usTeaspoonToImperialTeaspoon(usTeaspoon) {
                        return usTeaspoon;
                    }
    
                    // US Teaspoon to Cubic Mile
                    function usTeaspoonToCubicMile(usTeaspoon) {
                        return usTeaspoon * 1.16896e-15;
                    }
    
                    // US Teaspoon to Cubic Yard
                    function usTeaspoonToCubicYard(usTeaspoon) {
                        return usTeaspoon * 1.44083e-5;
                    }
    
                    // US Teaspoon to Cubic Foot
                    function usTeaspoonToCubicFoot(usTeaspoon) {
                        return usTeaspoon * 9.6875e-5;
                    }
    
                    // US Teaspoon to Cubic Inch
                    function usTeaspoonToCubicInch(usTeaspoon) {
                        return usTeaspoon * 0.300781;
                    }
    
    
    
                    // imperial gallon
    
    
                    // Imperial Gallon to Cubic Meter
                    function imperialGallonToCubicMeter(imperialGallon) {
                        return imperialGallon * 0.00454609;
                    }
    
                    // Imperial Gallon to Cubic Kilometer
                    function imperialGallonToCubicKilometer(imperialGallon) {
                        return imperialGallon * 4.54609e-12;
                    }
    
                    // Imperial Gallon to Cubic Centimeter
                    function imperialGallonToCubicCentimeter(imperialGallon) {
                        return imperialGallon * 4546.09;
                    }
    
                    // Imperial Gallon to Cubic Millimeter
                    function imperialGallonToCubicMillimeter(imperialGallon) {
                        return imperialGallon * 4546090;
                    }
    
                    // Imperial Gallon to Liter
                    function imperialGallonToLiter(imperialGallon) {
                        return imperialGallon * 4.54609;
                    }
    
                    // Imperial Gallon to Milliliter
                    function imperialGallonToMilliliter(imperialGallon) {
                        return imperialGallon * 4546.09;
                    }
    
                    // Imperial Gallon to US Gallon
                    function imperialGallonToUSGallon(imperialGallon) {
                        return imperialGallon * 1.20095;
                    }
    
                    // Imperial Gallon to US Quart
                    function imperialGallonToUSQuart(imperialGallon) {
                        return imperialGallon * 4.8038;
                    }
    
                    // Imperial Gallon to US Pint
                    function imperialGallonToUSPint(imperialGallon) {
                        return imperialGallon * 9.6076;
                    }
    
                    // Imperial Gallon to US Cup
                    function imperialGallonToUSCup(imperialGallon) {
                        return imperialGallon * 19.2152;
                    }
    
                    // Imperial Gallon to US Fluid Ounce
                    function imperialGallonToUSFluidOunce(imperialGallon) {
                        return imperialGallon * 153.722;
                    }
    
                    // Imperial Gallon to US Tablespoon
                    function imperialGallonToUSTablespoon(imperialGallon) {
                        return imperialGallon * 307.443;
                    }
    
                    // Imperial Gallon to US Teaspoon
                    function imperialGallonToUSTeaspoon(imperialGallon) {
                        return imperialGallon * 922.33;
                    }
    
                    // Imperial Gallon to Imperial Quart
                    function imperialGallonToImperialQuart(imperialGallon) {
                        return imperialGallon * 4;
                    }
    
                    // Imperial Gallon to Imperial Pint
                    function imperialGallonToImperialPint(imperialGallon) {
                        return imperialGallon * 8;
                    }
    
                    // Imperial Gallon to Imperial Fluid Ounce
                    function imperialGallonToImperialFluidOunce(imperialGallon) {
                        return imperialGallon * 160;
                    }
    
                    // Imperial Gallon to Imperial Tablespoon
                    function imperialGallonToImperialTablespoon(imperialGallon) {
                        return imperialGallon * 320;
                    }
    
                    // Imperial Gallon to Imperial Teaspoon
                    function imperialGallonToImperialTeaspoon(imperialGallon) {
                        return imperialGallon * 960;
                    }
    
                    // Imperial Gallon to Cubic Mile
                    function imperialGallonToCubicMile(imperialGallon) {
                        return imperialGallon * 1.10231e-12;
                    }
    
                    // Imperial Gallon to Cubic Yard
                    function imperialGallonToCubicYard(imperialGallon) {
                        return imperialGallon * 0.00594606;
                    }
    
                    // Imperial Gallon to Cubic Foot
                    function imperialGallonToCubicFoot(imperialGallon) {
                        return imperialGallon * 0.160544;
                    }
    
                    // Imperial Gallon to Cubic Inch
                    function imperialGallonToCubicInch(imperialGallon) {
                        return imperialGallon * 277.419;
                    }
    
    
                    // imperial quart
    
                    // Imperial Quart to Cubic Meter
                    function imperialQuartToCubicMeter(imperialQuart) {
                        return imperialQuart * 0.00113652;
                    }
    
                    // Imperial Quart to Cubic Kilometer
                    function imperialQuartToCubicKilometer(imperialQuart) {
                        return imperialQuart * 1.13652e-12;
                    }
    
                    // Imperial Quart to Cubic Centimeter
                    function imperialQuartToCubicCentimeter(imperialQuart) {
                        return imperialQuart * 1136.52;
                    }
    
                    // Imperial Quart to Cubic Millimeter
                    function imperialQuartToCubicMillimeter(imperialQuart) {
                        return imperialQuart * 1136520;
                    }
    
                    // Imperial Quart to Liter
                    function imperialQuartToLiter(imperialQuart) {
                        return imperialQuart * 1.13652;
                    }
    
                    // Imperial Quart to Milliliter
                    function imperialQuartToMilliliter(imperialQuart) {
                        return imperialQuart * 1136.52;
                    }
    
                    // Imperial Quart to US Gallon
                    function imperialQuartToUSGallon(imperialQuart) {
                        return imperialQuart * 0.300238;
                    }
    
                    // Imperial Quart to US Quart
                    function imperialQuartToUSQuart(imperialQuart) {
                        return imperialQuart * 1.20095;
                    }
    
                    // Imperial Quart to US Pint
                    function imperialQuartToUSPint(imperialQuart) {
                        return imperialQuart * 2.4019;
                    }
    
                    // Imperial Quart to US Cup
                    function imperialQuartToUSCup(imperialQuart) {
                        return imperialQuart * 4.8038;
                    }
    
                    // Imperial Quart to US Fluid Ounce
                    function imperialQuartToUSFluidOunce(imperialQuart) {
                        return imperialQuart * 38.4304;
                    }
    
                    // Imperial Quart to US Tablespoon
                    function imperialQuartToUSTablespoon(imperialQuart) {
                        return imperialQuart * 76.8608;
                    }
    
                    // Imperial Quart to US Teaspoon
                    function imperialQuartToUSTeaspoon(imperialQuart) {
                        return imperialQuart * 230.582;
                    }
    
                    // Imperial Quart to Imperial Gallon
                    function imperialQuartToImperialGallon(imperialQuart) {
                        return imperialQuart * 0.25;
                    }
    
                    // Imperial Quart to Imperial Pint
                    function imperialQuartToImperialPint(imperialQuart) {
                        return imperialQuart * 2;
                    }
    
                    // Imperial Quart to Imperial Fluid Ounce
                    function imperialQuartToImperialFluidOunce(imperialQuart) {
                        return imperialQuart * 40;
                    }
    
                    // Imperial Quart to Imperial Tablespoon
                    function imperialQuartToImperialTablespoon(imperialQuart) {
                        return imperialQuart * 80;
                    }
    
                    // Imperial Quart to Imperial Teaspoon
                    function imperialQuartToImperialTeaspoon(imperialQuart) {
                        return imperialQuart * 240;
                    }
    
                    // Imperial Quart to Cubic Mile
                    function imperialQuartToCubicMile(imperialQuart) {
                        return imperialQuart * 2.75577e-13;
                    }
    
                    // Imperial Quart to Cubic Yard
                    function imperialQuartToCubicYard(imperialQuart) {
                        return imperialQuart * 0.00148652;
                    }
    
                    // Imperial Quart to Cubic Foot
                    function imperialQuartToCubicFoot(imperialQuart) {
                        return imperialQuart * 0.040135;
                    }
    
                    // Imperial Quart to Cubic Inch
                    function imperialQuartToCubicInch(imperialQuart) {
                        return imperialQuart * 69.3549;
                    }
    
    
    
                    // imperial pint 
    
                    // Imperial Pint to Cubic Meter
                    function imperialPintToCubicMeter(imperialPint) {
                        return imperialPint * 0.000568261;
                    }
    
                    // Imperial Pint to Cubic Kilometer
                    function imperialPintToCubicKilometer(imperialPint) {
                        return imperialPint * 5.68261e-13;
                    }
    
                    // Imperial Pint to Cubic Centimeter
                    function imperialPintToCubicCentimeter(imperialPint) {
                        return imperialPint * 568.261;
                    }
    
                    // Imperial Pint to Cubic Millimeter
                    function imperialPintToCubicMillimeter(imperialPint) {
                        return imperialPint * 568261;
                    }
    
                    // Imperial Pint to Liter
                    function imperialPintToLiter(imperialPint) {
                        return imperialPint * 0.568261;
                    }
    
                    // Imperial Pint to Milliliter
                    function imperialPintToMilliliter(imperialPint) {
                        return imperialPint * 568.261;
                    }
    
                    // Imperial Pint to US Gallon
                    function imperialPintToUSGallon(imperialPint) {
                        return imperialPint * 0.150119;
                    }
    
                    // Imperial Pint to US Quart
                    function imperialPintToUSQuart(imperialPint) {
                        return imperialPint * 0.600475;
                    }
    
                    // Imperial Pint to US Pint
                    function imperialPintToUSPint(imperialPint) {
                        return imperialPint * 1.20095;
                    }
    
                    // Imperial Pint to US Cup
                    function imperialPintToUSCup(imperialPint) {
                        return imperialPint * 2.4019;
                    }
    
                    // Imperial Pint to US Fluid Ounce
                    function imperialPintToUSFluidOunce(imperialPint) {
                        return imperialPint * 19.2152;
                    }
    
                    // Imperial Pint to US Tablespoon
                    function imperialPintToUSTablespoon(imperialPint) {
                        return imperialPint * 38.4304;
                    }
    
                    // Imperial Pint to US Teaspoon
                    function imperialPintToUSTeaspoon(imperialPint) {
                        return imperialPint * 115.292;
                    }
    
                    // Imperial Pint to Imperial Gallon
                    function imperialPintToImperialGallon(imperialPint) {
                        return imperialPint * 0.125;
                    }
    
                    // Imperial Pint to Imperial Quart
                    function imperialPintToImperialQuart(imperialPint) {
                        return imperialPint * 0.5;
                    }
    
                    // Imperial Pint to Imperial Fluid Ounce
                    function imperialPintToImperialFluidOunce(imperialPint) {
                        return imperialPint * 20;
                    }
    
                    // Imperial Pint to Imperial Tablespoon
                    function imperialPintToImperialTablespoon(imperialPint) {
                        return imperialPint * 40;
                    }
    
                    // Imperial Pint to Imperial Teaspoon
                    function imperialPintToImperialTeaspoon(imperialPint) {
                        return imperialPint * 120;
                    }
    
                    // Imperial Pint to Cubic Mile
                    function imperialPintToCubicMile(imperialPint) {
                        return imperialPint * 1.37789e-13;
                    }
    
                    // Imperial Pint to Cubic Yard
                    function imperialPintToCubicYard(imperialPint) {
                        return imperialPint * 0.000743043;
                    }
    
                    // Imperial Pint to Cubic Foot
                    function imperialPintToCubicFoot(imperialPint) {
                        return imperialPint * 0.020067;
                    }
    
                    // Imperial Pint to Cubic Inch
                    function imperialPintToCubicInch(imperialPint) {
                        return imperialPint * 34.6774;
                    }
    
    
                    // imperial fuild once 
    
                    // Imperial Fluid Ounce to Cubic Meter
                    function imperialFluidOunceToCubicMeter(imperialFluidOunce) {
                        return imperialFluidOunce * 2.84131e-5;
                    }
    
                    // Imperial Fluid Ounce to Cubic Kilometer
                    function imperialFluidOunceToCubicKilometer(imperialFluidOunce) {
                        return imperialFluidOunce * 2.84131e-17;
                    }
    
                    // Imperial Fluid Ounce to Cubic Centimeter
                    function imperialFluidOunceToCubicCentimeter(imperialFluidOunce) {
                        return imperialFluidOunce * 28.4131;
                    }
    
                    // Imperial Fluid Ounce to Cubic Millimeter
                    function imperialFluidOunceToCubicMillimeter(imperialFluidOunce) {
                        return imperialFluidOunce * 28413.1;
                    }
    
                    // Imperial Fluid Ounce to Liter
                    function imperialFluidOunceToLiter(imperialFluidOunce) {
                        return imperialFluidOunce * 0.0284131;
                    }
    
                    // Imperial Fluid Ounce to Milliliter
                    function imperialFluidOunceToMilliliter(imperialFluidOunce) {
                        return imperialFluidOunce * 28.4131;
                    }
    
                    // Imperial Fluid Ounce to US Gallon
                    function imperialFluidOunceToUSGallon(imperialFluidOunce) {
                        return imperialFluidOunce * 0.00750552;
                    }
    
                    // Imperial Fluid Ounce to US Quart
                    function imperialFluidOunceToUSQuart(imperialFluidOunce) {
                        return imperialFluidOunce * 0.0300221;
                    }
    
                    // Imperial Fluid Ounce to US Pint
                    function imperialFluidOunceToUSPint(imperialFluidOunce) {
                        return imperialFluidOunce * 0.0600442;
                    }
    
                    // Imperial Fluid Ounce to US Cup
                    function imperialFluidOunceToUSCup(imperialFluidOunce) {
                        return imperialFluidOunce * 0.120088;
                    }
    
                    // Imperial Fluid Ounce to US Fluid Ounce
                    function imperialFluidOunceToUSFluidOunce(imperialFluidOunce) {
                        return imperialFluidOunce * 0.96076;
                    }
    
                    // Imperial Fluid Ounce to US Tablespoon
                    function imperialFluidOunceToUSTablespoon(imperialFluidOunce) {
                        return imperialFluidOunce * 1.92076;
                    }
    
                    // Imperial Fluid Ounce to US Teaspoon
                    function imperialFluidOunceToUSTeaspoon(imperialFluidOunce) {
                        return imperialFluidOunce * 5.76228;
                    }
    
                    // Imperial Fluid Ounce to Imperial Gallon
                    function imperialFluidOunceToImperialGallon(imperialFluidOunce) {
                        return imperialFluidOunce * 0.00625;
                    }
    
                    // Imperial Fluid Ounce to Imperial Quart
                    function imperialFluidOunceToImperialQuart(imperialFluidOunce) {
                        return imperialFluidOunce * 0.025;
                    }
    
                    // Imperial Fluid Ounce to Imperial Pint
                    function imperialFluidOunceToImperialPint(imperialFluidOunce) {
                        return imperialFluidOunce * 0.05;
                    }
    
                    // Imperial Fluid Ounce to Imperial Tablespoon
                    function imperialFluidOunceToImperialTablespoon(imperialFluidOunce) {
                        return imperialFluidOunce * 1.6;
                    }
    
                    // Imperial Fluid Ounce to Imperial Teaspoon
                    function imperialFluidOunceToImperialTeaspoon(imperialFluidOunce) {
                        return imperialFluidOunce * 4.8;
                    }
    
                    // Imperial Fluid Ounce to Cubic Mile
                    function imperialFluidOunceToCubicMile(imperialFluidOunce) {
                        return imperialFluidOunce * 5.54719e-15;
                    }
    
                    // Imperial Fluid Ounce to Cubic Yard
                    function imperialFluidOunceToCubicYard(imperialFluidOunce) {
                        return imperialFluidOunce * 0.0000305671;
                    }
    
                    // Imperial Fluid Ounce to Cubic Foot
                    function imperialFluidOunceToCubicFoot(imperialFluidOunce) {
                        return imperialFluidOunce * 0.000858273;
                    }
    
                    // Imperial Fluid Ounce to Cubic Inch
                    function imperialFluidOunceToCubicInch(imperialFluidOunce) {
                        return imperialFluidOunce * 1.73387;
                    }
    
    
                    // imperial table spoon
    
                    // Imperial Tablespoon to Cubic Meter
                    function imperialTablespoonToCubicMeter(imperialTablespoon) {
                        return imperialTablespoon * 0.0000177582;
                    }
    
                    // Imperial Tablespoon to Cubic Kilometer
                    function imperialTablespoonToCubicKilometer(imperialTablespoon) {
                        return imperialTablespoon * 1.77582e-14;
                    }
    
                    // Imperial Tablespoon to Cubic Centimeter
                    function imperialTablespoonToCubicCentimeter(imperialTablespoon) {
                        return imperialTablespoon * 17.7582;
                    }
    
                    // Imperial Tablespoon to Cubic Millimeter
                    function imperialTablespoonToCubicMillimeter(imperialTablespoon) {
                        return imperialTablespoon * 17758.2;
                    }
    
                    // Imperial Tablespoon to Liter
                    function imperialTablespoonToLiter(imperialTablespoon) {
                        return imperialTablespoon * 0.0177582;
                    }
    
                    // Imperial Tablespoon to Milliliter
                    function imperialTablespoonToMilliliter(imperialTablespoon) {
                        return imperialTablespoon * 17.7582;
                    }
    
                    // Imperial Tablespoon to US Gallon
                    function imperialTablespoonToUSGallon(imperialTablespoon) {
                        return imperialTablespoon * 0.00469121;
                    }
    
                    // Imperial Tablespoon to US Quart
                    function imperialTablespoonToUSQuart(imperialTablespoon) {
                        return imperialTablespoon * 0.0187648;
                    }
    
                    // Imperial Tablespoon to US Pint
                    function imperialTablespoonToUSPint(imperialTablespoon) {
                        return imperialTablespoon * 0.0375296;
                    }
    
                    // Imperial Tablespoon to US Cup
                    function imperialTablespoonToUSCup(imperialTablespoon) {
                        return imperialTablespoon * 0.0750592;
                    }
    
                    // Imperial Tablespoon to US Fluid Ounce
                    function imperialTablespoonToUSFluidOunce(imperialTablespoon) {
                        return imperialTablespoon * 0.600474;
                    }
    
                    // Imperial Tablespoon to US Tablespoon
                    function imperialTablespoonToUSTablespoon(imperialTablespoon) {
                        return imperialTablespoon * 1.20095;
                    }
    
                    // Imperial Tablespoon to US Teaspoon
                    function imperialTablespoonToUSTeaspoon(imperialTablespoon) {
                        return imperialTablespoon * 3.60286;
                    }
    
                    // Imperial Tablespoon to Imperial Gallon
                    function imperialTablespoonToImperialGallon(imperialTablespoon) {
                        return imperialTablespoon * 0.00390625;
                    }
    
                    // Imperial Tablespoon to Imperial Quart
                    function imperialTablespoonToImperialQuart(imperialTablespoon) {
                        return imperialTablespoon * 0.015625;
                    }
    
                    // Imperial Tablespoon to Imperial Pint
                    function imperialTablespoonToImperialPint(imperialTablespoon) {
                        return imperialTablespoon * 0.03125;
                    }
    
                    // Imperial Tablespoon to Imperial Fluid Ounce
                    function imperialTablespoonToImperialFluidOunce(imperialTablespoon) {
                        return imperialTablespoon * 0.625;
                    }
    
                    // Imperial Tablespoon to Imperial Teaspoon
                    function imperialTablespoonToImperialTeaspoon(imperialTablespoon) {
                        return imperialTablespoon * 3;
                    }
    
                    // Imperial Tablespoon to Cubic Mile
                    function imperialTablespoonToCubicMile(imperialTablespoon) {
                        return imperialTablespoon * 3.47086e-15;
                    }
    
                    // Imperial Tablespoon to Cubic Yard
                    function imperialTablespoonToCubicYard(imperialTablespoon) {
                        return imperialTablespoon * 0.0000180331;
                    }
    
                    // Imperial Tablespoon to Cubic Foot
                    function imperialTablespoonToCubicFoot(imperialTablespoon) {
                        return imperialTablespoon * 0.00050721;
                    }
    
                    // Imperial Tablespoon to Cubic Inch
                    function imperialTablespoonToCubicInch(imperialTablespoon) {
                        return imperialTablespoon * 0.879877;
                    }
    
                    
    
                    // imperial tea spoon
    
    
                    // Imperial Teaspoon to Cubic Meter
                    function imperialTeaspoonToCubicMeter(imperialTeaspoon) {
                        return imperialTeaspoon * 0.00000591939;
                    }
    
                    // Imperial Teaspoon to Cubic Kilometer
                    function imperialTeaspoonToCubicKilometer(imperialTeaspoon) {
                        return imperialTeaspoon * 5.91939e-15;
                    }
    
                    // Imperial Teaspoon to Cubic Centimeter
                    function imperialTeaspoonToCubicCentimeter(imperialTeaspoon) {
                        return imperialTeaspoon * 5.91939;
                    }
    
                    // Imperial Teaspoon to Cubic Millimeter
                    function imperialTeaspoonToCubicMillimeter(imperialTeaspoon) {
                        return imperialTeaspoon * 5919.39;
                    }
    
                    // Imperial Teaspoon to Liter
                    function imperialTeaspoonToLiter(imperialTeaspoon) {
                        return imperialTeaspoon * 0.00591939;
                    }
    
                    // Imperial Teaspoon to Milliliter
                    function imperialTeaspoonToMilliliter(imperialTeaspoon) {
                        return imperialTeaspoon * 5.91939;
                    }
    
                    // Imperial Teaspoon to US Gallon
                    function imperialTeaspoonToUSGallon(imperialTeaspoon) {
                        return imperialTeaspoon * 0.00156357;
                    }
    
                    // Imperial Teaspoon to US Quart
                    function imperialTeaspoonToUSQuart(imperialTeaspoon) {
                        return imperialTeaspoon * 0.00625429;
                    }
    
                    // Imperial Teaspoon to US Pint
                    function imperialTeaspoonToUSPint(imperialTeaspoon) {
                        return imperialTeaspoon * 0.0125086;
                    }
    
                    // Imperial Teaspoon to US Cup
                    function imperialTeaspoonToUSCup(imperialTeaspoon) {
                        return imperialTeaspoon * 0.0250171;
                    }
    
                    // Imperial Teaspoon to US Fluid Ounce
                    function imperialTeaspoonToUSFluidOunce(imperialTeaspoon) {
                        return imperialTeaspoon * 0.200137;
                    }
    
                    // Imperial Teaspoon to US Tablespoon
                    function imperialTeaspoonToUSTablespoon(imperialTeaspoon) {
                        return imperialTeaspoon * 0.400274;
                    }
    
                    // Imperial Teaspoon to US Teaspoon
                    function imperialTeaspoonToUSTeaspoon(imperialTeaspoon) {
                        return imperialTeaspoon * 1.20082;
                    }
    
                    // Imperial Teaspoon to Imperial Gallon
                    function imperialTeaspoonToImperialGallon(imperialTeaspoon) {
                        return imperialTeaspoon * 0.00130208;
                    }
    
                    // Imperial Teaspoon to Imperial Quart
                    function imperialTeaspoonToImperialQuart(imperialTeaspoon) {
                        return imperialTeaspoon * 0.00520833;
                    }
    
                    // Imperial Teaspoon to Imperial Pint
                    function imperialTeaspoonToImperialPint(imperialTeaspoon) {
                        return imperialTeaspoon * 0.0104167;
                    }
    
                    // Imperial Teaspoon to Imperial Tablespoon
                    function imperialTeaspoonToImperialTablespoon(imperialTeaspoon) {
                        return imperialTeaspoon * 0.333333;
                    }
    
                    // Imperial Teaspoon to Imperial Teaspoon
                    function imperialTeaspoonToImperialTeaspoon(imperialTeaspoon) {
                        return imperialTeaspoon;
                    }
    
                    // Imperial Teaspoon to Cubic Mile
                    function imperialTeaspoonToCubicMile(imperialTeaspoon) {
                        return imperialTeaspoon * 2.27329e-15;
                    }
    
                    // Imperial Teaspoon to Cubic Yard
                    function imperialTeaspoonToCubicYard(imperialTeaspoon) {
                        return imperialTeaspoon * 0.0000117977;
                    }
    
                    // Imperial Teaspoon to Cubic Foot
                    function imperialTeaspoonToCubicFoot(imperialTeaspoon) {
                        return imperialTeaspoon * 0.000329625;
                    }
    
                    // Imperial Teaspoon to Cubic Inch
                    function imperialTeaspoonToCubicInch(imperialTeaspoon) {
                        return imperialTeaspoon * 0.57052;
                    }
    
    
                    // cubic mile 
    
                    // Cubic Mile to Cubic Meter
    function cubicMileToCubicMeter(cubicMile) {
        return cubicMile * 4168181825.4405;
    }
    
    // Cubic Mile to Cubic Kilometer
    function cubicMileToCubicKilometer(cubicMile) {
        return cubicMile * 4.1681818254405;
    }
    
    // Cubic Mile to Cubic Centimeter
    function cubicMileToCubicCentimeter(cubicMile) {
        return cubicMile * 4.1681818254405e+15;
    }
    
    // Cubic Mile to Cubic Millimeter
    function cubicMileToCubicMillimeter(cubicMile) {
        return cubicMile * 4.1681818254405e+21;
    }
    
    // Cubic Mile to Liter
    function cubicMileToLiter(cubicMile) {
        return cubicMile * 4.1681818254405e+12;
    }
    
    // Cubic Mile to Milliliter
    function cubicMileToMilliliter(cubicMile) {
        return cubicMile * 4.1681818254405e+15;
    }
    
    // Cubic Mile to US Gallon
    function cubicMileToUSGallon(cubicMile) {
        return cubicMile * 1.101325e+12;
    }
    
    // Cubic Mile to US Quart
    function cubicMileToUSQuart(cubicMile) {
        return cubicMile * 4.4053e+12;
    }
    
    // Cubic Mile to US Pint
    function cubicMileToUSPint(cubicMile) {
        return cubicMile * 8.8106e+12;
    }
    
    // Cubic Mile to US Cup
    function cubicMileToUSCup(cubicMile) {
        return cubicMile * 1.76212e+13;
    }
    
    // Cubic Mile to US Fluid Ounce
    function cubicMileToUSFluidOunce(cubicMile) {
        return cubicMile * 1.4097e+14;
    }
    
    // Cubic Mile to US Tablespoon
    function cubicMileToUSTablespoon(cubicMile) {
        return cubicMile * 2.8194e+15;
    }
    
    // Cubic Mile to US Teaspoon
    function cubicMileToUSTeaspoon(cubicMile) {
        return cubicMile * 8.4582e+15;
    }
    
    // Cubic Mile to Imperial Gallon
    function cubicMileToImperialGallon(cubicMile) {
        return cubicMile * 9.21959e+11;
    }
    
    // Cubic Mile to Imperial Quart
    function cubicMileToImperialQuart(cubicMile) {
        return cubicMile * 3.68784e+12;
    }
    
    // Cubic Mile to Imperial Pint
    function cubicMileToImperialPint(cubicMile) {
        return cubicMile * 7.37568e+12;
    }
    
    // Cubic Mile to Imperial Fluid Ounce
    function cubicMileToImperialFluidOunce(cubicMile) {
        return cubicMile * 1.48114e+14;
    }
    
    // Cubic Mile to Imperial Tablespoon
    function cubicMileToImperialTablespoon(cubicMile) {
        return cubicMile * 2.96228e+15;
    }
    
    // Cubic Mile to Imperial Teaspoon
    function cubicMileToImperialTeaspoon(cubicMile) {
        return cubicMile * 8.88684e+15;
    }
    
    // Cubic Mile to Cubic Mile
    function cubicMileToCubicMile(cubicMile) {
        return cubicMile;
    }
    
    // Cubic Mile to Cubic Yard
    function cubicMileToCubicYard(cubicMile) {
        return cubicMile * 5451776000;
    }
    
    // Cubic Mile to Cubic Foot
    function cubicMileToCubicFoot(cubicMile) {
        return cubicMile * 147197952000;
    }
    
    // Cubic Mile to Cubic Inch
    function cubicMileToCubicInch(cubicMile) {
        return cubicMile * 25435794990080;
    }
    
    
    
    //  cubic yard
    
    // Cubic Yard to Cubic Meter
    function cubicYardToCubicMeter(cubicYard) {
        return cubicYard * 0.764554857984;
    }
    
    // Cubic Yard to Cubic Kilometer
    function cubicYardToCubicKilometer(cubicYard) {
        return cubicYard * 7.64554857984e-10;
    }
    
    // Cubic Yard to Cubic Centimeter
    function cubicYardToCubicCentimeter(cubicYard) {
        return cubicYard * 764554.857984;
    }
    
    // Cubic Yard to Cubic Millimeter
    function cubicYardToCubicMillimeter(cubicYard) {
        return cubicYard * 7.64554857984e+8;
    }
    
    // Cubic Yard to Liter
    function cubicYardToLiter(cubicYard) {
        return cubicYard * 764.554857984;
    }
    
    // Cubic Yard to Milliliter
    function cubicYardToMilliliter(cubicYard) {
        return cubicYard * 764554.857984;
    }
    
    // Cubic Yard to US Gallon
    function cubicYardToUSGallon(cubicYard) {
        return cubicYard * 201.974026;
    }
    
    // Cubic Yard to US Quart
    function cubicYardToUSQuart(cubicYard) {
        return cubicYard * 807.896106;
    }
    
    // Cubic Yard to US Pint
    function cubicYardToUSPint(cubicYard) {
        return cubicYard * 1615.79221;
    }
    
    // Cubic Yard to US Cup
    function cubicYardToUSCup(cubicYard) {
        return cubicYard * 3231.58441;
    }
    
    // Cubic Yard to US Fluid Ounce
    function cubicYardToUSFluidOunce(cubicYard) {
        return cubicYard * 25852.6753;
    }
    
    // Cubic Yard to US Tablespoon
    function cubicYardToUSTablespoon(cubicYard) {
        return cubicYard * 51705.3505;
    }
    
    // Cubic Yard to US Teaspoon
    function cubicYardToUSTeaspoon(cubicYard) {
        return cubicYard * 155116.051;
    }
    
    // Cubic Yard to Imperial Gallon
    function cubicYardToImperialGallon(cubicYard) {
        return cubicYard * 168.178557;
    }
    
    // Cubic Yard to Imperial Quart
    function cubicYardToImperialQuart(cubicYard) {
        return cubicYard * 672.714229;
    }
    
    // Cubic Yard to Imperial Pint
    function cubicYardToImperialPint(cubicYard) {
        return cubicYard * 1345.42846;
    }
    
    // Cubic Yard to Imperial Fluid Ounce
    function cubicYardToImperialFluidOunce(cubicYard) {
        return cubicYard * 26908.5691;
    }
    
    // Cubic Yard to Imperial Tablespoon
    function cubicYardToImperialTablespoon(cubicYard) {
        return cubicYard * 53817.1382;
    }
    
    // Cubic Yard to Imperial Teaspoon
    function cubicYardToImperialTeaspoon(cubicYard) {
        return cubicYard * 161451.415;
    }
    
    // Cubic Yard to Cubic Mile
    function cubicYardToCubicMile(cubicYard) {
        return cubicYard * 1.83426465e-10;
    }
    
    // Cubic Yard to Cubic Yard
    function cubicYardToCubicYard(cubicYard) {
        return cubicYard;
    }
    
    // Cubic Yard to Cubic Foot
    function cubicYardToCubicFoot(cubicYard) {
        return cubicYard * 27;
    }
    
    // Cubic Yard to Cubic Inch
    function cubicYardToCubicInch(cubicYard) {
        return cubicYard * 46656;
    }
    
    
    
    // cubic foot
    
    // Cubic Foot to Cubic Meter
    function cubicFootToCubicMeter(cubicFoot) {
        return cubicFoot * 0.028316846592;
    }
    
    // Cubic Foot to Cubic Kilometer
    function cubicFootToCubicKilometer(cubicFoot) {
        return cubicFoot * 2.8316846592e-11;
    }
    
    // Cubic Foot to Cubic Centimeter
    function cubicFootToCubicCentimeter(cubicFoot) {
        return cubicFoot * 28316.846592;
    }
    
    // Cubic Foot to Cubic Millimeter
    function cubicFootToCubicMillimeter(cubicFoot) {
        return cubicFoot * 2.8316846592e+7;
    }
    
    // Cubic Foot to Liter
    function cubicFootToLiter(cubicFoot) {
        return cubicFoot * 28.316846592;
    }
    
    // Cubic Foot to Milliliter
    function cubicFootToMilliliter(cubicFoot) {
        return cubicFoot * 28316.846592;
    }
    
    // Cubic Foot to US Gallon
    function cubicFootToUSGallon(cubicFoot) {
        return cubicFoot * 7.48051948052;
    }
    
    // Cubic Foot to US Quart
    function cubicFootToUSQuart(cubicFoot) {
        return cubicFoot * 29.9220779221;
    }
    
    // Cubic Foot to US Pint
    function cubicFootToUSPint(cubicFoot) {
        return cubicFoot * 59.8441558442;
    }
    
    // Cubic Foot to US Cup
    function cubicFootToUSCup(cubicFoot) {
        return cubicFoot * 119.688311688;
    }
    
    // Cubic Foot to US Fluid Ounce
    function cubicFootToUSFluidOunce(cubicFoot) {
        return cubicFoot * 957.506493506;
    }
    
    // Cubic Foot to US Tablespoon
    function cubicFootToUSTablespoon(cubicFoot) {
        return cubicFoot * 1915.01298701;
    }
    
    // Cubic Foot to US Teaspoon
    function cubicFootToUSTeaspoon(cubicFoot) {
        return cubicFoot * 5745.03896104;
    }
    
    // Cubic Foot to Imperial Gallon
    function cubicFootToImperialGallon(cubicFoot) {
        return cubicFoot * 6.22883545904;
    }
    
    // Cubic Foot to Imperial Quart
    function cubicFootToImperialQuart(cubicFoot) {
        return cubicFoot * 24.9153418362;
    }
    
    // Cubic Foot to Imperial Pint
    function cubicFootToImperialPint(cubicFoot) {
        return cubicFoot * 49.8306836724;
    }
    
    // Cubic Foot to Imperial Fluid Ounce
    function cubicFootToImperialFluidOunce(cubicFoot) {
        return cubicFoot * 996.613673447;
    }
    
    // Cubic Foot to Imperial Tablespoon
    function cubicFootToImperialTablespoon(cubicFoot) {
        return cubicFoot * 1993.22734689;
    }
    
    // Cubic Foot to Imperial Teaspoon
    function cubicFootToImperialTeaspoon(cubicFoot) {
        return cubicFoot * 5979.68204068;
    }
    
    // Cubic Foot to Cubic Mile
    function cubicFootToCubicMile(cubicFoot) {
        return cubicFoot * 6.79357e-12;
    }
    
    // Cubic Foot to Cubic Yard
    function cubicFootToCubicYard(cubicFoot) {
        return cubicFoot * 0.037037037;
    }
    
    // Cubic Foot to Cubic Foot
    function cubicFootToCubicFoot(cubicFoot) {
        return cubicFoot;
    }
    
    // Cubic Foot to Cubic Inch
    function cubicFootToCubicInch(cubicFoot) {
        return cubicFoot * 1728;
    }
    
    
    
    // cubic inch 
    
    
    // Cubic Inch to Cubic Meter
    function cubicInchToCubicMeter(cubicInch) {
        return cubicInch * 0.000016387064;
    }
    
    // Cubic Inch to Cubic Kilometer
    function cubicInchToCubicKilometer(cubicInch) {
        return cubicInch * 1.6387064e-14;
    }
    
    // Cubic Inch to Cubic Centimeter
    function cubicInchToCubicCentimeter(cubicInch) {
        return cubicInch * 16.387064;
    }
    
    // Cubic Inch to Cubic Millimeter
    function cubicInchToCubicMillimeter(cubicInch) {
        return cubicInch * 16387.064;
    }
    
    // Cubic Inch to Liter
    function cubicInchToLiter(cubicInch) {
        return cubicInch * 0.016387064;
    }
    
    // Cubic Inch to Milliliter
    function cubicInchToMilliliter(cubicInch) {
        return cubicInch * 16.387064;
    }
    
    // Cubic Inch to US Gallon
    function cubicInchToUSGallon(cubicInch) {
        return cubicInch * 0.00432900433;
    }
    
    // Cubic Inch to US Quart
    function cubicInchToUSQuart(cubicInch) {
        return cubicInch * 0.0173160173;
    }
    
    // Cubic Inch to US Pint
    function cubicInchToUSPint(cubicInch) {
        return cubicInch * 0.0346320346;
    }
    
    // Cubic Inch to US Cup
    function cubicInchToUSCup(cubicInch) {
        return cubicInch * 0.0692640693;
    }
    
    // Cubic Inch to US Fluid Ounce
    function cubicInchToUSFluidOunce(cubicInch) {
        return cubicInch * 0.554112554;
    }
    
    // Cubic Inch to US Tablespoon
    function cubicInchToUSTablespoon(cubicInch) {
        return cubicInch * 1.10822511;
    }
    
    // Cubic Inch to US Teaspoon
    function cubicInchToUSTeaspoon(cubicInch) {
        return cubicInch * 3.32467533;
    }
    
    // Cubic Inch to Imperial Gallon
    function cubicInchToImperialGallon(cubicInch) {
        return cubicInch * 0.00360465014;
    }
    
    // Cubic Inch to Imperial Quart
    function cubicInchToImperialQuart(cubicInch) {
        return cubicInch * 0.0144186006;
    }
    
    // Cubic Inch to Imperial Pint
    function cubicInchToImperialPint(cubicInch) {
        return cubicInch * 0.0288372013;
    }
    
    // Cubic Inch to Imperial Fluid Ounce
    function cubicInchToImperialFluidOunce(cubicInch) {
        return cubicInch * 0.576744026;
    }
    
    // Cubic Inch to Imperial Tablespoon
    function cubicInchToImperialTablespoon(cubicInch) {
        return cubicInch * 1.15348805;
    }
    
    // Cubic Inch to Imperial Teaspoon
    function cubicInchToImperialTeaspoon(cubicInch) {
        return cubicInch * 3.46046415;
    }
    
    // Cubic Inch to Cubic Mile
    function cubicInchToCubicMile(cubicInch) {
        return cubicInch * 1.8401307288e-15;
    }
    
    // Cubic Inch to Cubic Yard
    function cubicInchToCubicYard(cubicInch) {
        return cubicInch * 0.0000214335;
    }
    
    // Cubic Inch to Cubic Foot
    function cubicInchToCubicFoot(cubicInch) {
        return cubicInch * 0.0005787037;
    }
    
    // Cubic Inch to Cubic Inch
    function cubicInchToCubicInch(cubicInch) {
        return cubicInch;
    }
    


    // wights functions


    // kilogram to other units

    // Function to convert kilograms to kilograms
function kilogramsToKilograms(kilograms) {
    return kilograms;
}

// Function to convert kilograms to grams
function kilogramsToGrams(kilograms) {
    return kilograms * 1000;
}

// Function to convert kilograms to milligrams
function kilogramsToMilligrams(kilograms) {
    return kilograms * 1e+6;
}

// Function to convert kilograms to metric tons
function kilogramsToMetricTons(kilograms) {
    return kilograms * 0.001;
}

// Function to convert kilograms to long tons
function kilogramsToLongTons(kilograms) {
    return kilograms * 0.000984207;
}

// Function to convert kilograms to short tons
function kilogramsToShortTons(kilograms) {
    return kilograms * 0.00110231;
}

// Function to convert kilograms to pounds
function kilogramsToPounds(kilograms) {
    return kilograms * 2.20462;
}

// Function to convert kilograms to ounces
function kilogramsToOunces(kilograms) {
    return kilograms * 35.274;
}

// Function to convert kilograms to carats
function kilogramsToCarats(kilograms) {
    return kilograms * 5000;
}

// Function to convert kilograms to atomic mass units
function kilogramsToAMU(kilograms) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-27 kilograms
    return kilograms / (1.66053906660 * Math.pow(10, -27));
}




// gram to all other units 


// Function to convert grams to kilograms
function gramsToKilograms(grams) {
    return grams / 1000;
}

// Function to convert grams to milligrams
function gramsToMilligrams(grams) {
    return grams * 1000;
}

// Function to convert grams to metric tons
function gramsToMetricTons(grams) {
    return grams * 1e-6;
}

// Function to convert grams to long tons
function gramsToLongTons(grams) {
    return grams * 9.8421e-7;
}

// Function to convert grams to short tons
function gramsToShortTons(grams) {
    return grams * 1.1023e-6;
}

// Function to convert grams to pounds
function gramsToPounds(grams) {
    return grams * 0.00220462;
}

// Function to convert grams to ounces
function gramsToOunces(grams) {
    return grams * 0.035274;
}

// Function to convert grams to carats
function gramsToCarats(grams) {
    return grams * 5;
}

// Function to convert grams to atomic mass units
function gramsToAMU(grams) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-24 grams
    return grams / (1.66053906660 * Math.pow(10, -24));
}




//miligram  to converts other units


// Function to convert milligrams to grams
function milligramsToGrams(milligrams) {
    return milligrams / 1000;
}

// Function to convert milligrams to kilograms
function milligramsToKilograms(milligrams) {
    return milligrams / 1e+6;
}

// Function to convert milligrams to metric tons
function milligramsToMetricTons(milligrams) {
    return milligrams * 1e-9;
}

// Function to convert milligrams to long tons
function milligramsToLongTons(milligrams) {
    return milligrams * 9.8421e-10;
}

// Function to convert milligrams to short tons
function milligramsToShortTons(milligrams) {
    return milligrams * 1.1023e-9;
}

// Function to convert milligrams to pounds
function milligramsToPounds(milligrams) {
    return milligrams * 0.00000220462;
}

// Function to convert milligrams to ounces
function milligramsToOunces(milligrams) {
    return milligrams * 0.000035274;
}

// Function to convert milligrams to carats
function milligramsToCarats(milligrams) {
    return milligrams * 0.005;
}

// Function to convert milligrams to atomic mass units
function milligramsToAMU(milligrams) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-21 milligrams
    return milligrams / (1.66053906660 * Math.pow(10, -21));
}



// mertic ton to all other units


// Function to convert metric tons to grams
function metricTonsToGrams(metricTons) {
    return metricTons * 1e+6;
}

// Function to convert metric tons to kilograms
function metricTonsToKilograms(metricTons) {
    return metricTons * 1000;
}

// Function to convert metric tons to milligrams
function metricTonsToMilligrams(metricTons) {
    return metricTons * 1e+9;
}

// Function to convert metric tons to long tons
function metricTonsToLongTons(metricTons) {
    return metricTons * 0.984207;
}

// Function to convert metric tons to short tons
function metricTonsToShortTons(metricTons) {
    return metricTons * 1.10231;
}

// Function to convert metric tons to pounds
function metricTonsToPounds(metricTons) {
    return metricTons * 2204.62;
}

// Function to convert metric tons to ounces
function metricTonsToOunces(metricTons) {
    return metricTons * 35274;
}

// Function to convert metric tons to carats
function metricTonsToCarats(metricTons) {
    return metricTons * 5e+6;
}

// Function to convert metric tons to atomic mass units
function metricTonsToAMU(metricTons) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-21 metric tons
    return metricTons / (1.66053906660 * Math.pow(10, -21));
}




// long ton to all other units


// Function to convert long tons to grams
function longTonsToGrams(longTons) {
    return longTons * 1016046.91;
}

// Function to convert long tons to kilograms
function longTonsToKilograms(longTons) {
    return longTons * 1016.04691;
}

// Function to convert long tons to milligrams
function longTonsToMilligrams(longTons) {
    return longTons * 1.01604691e+9;
}

// Function to convert long tons to metric tons
function longTonsToMetricTons(longTons) {
    return longTons * 1.01605;
}

// Function to convert long tons to short tons
function longTonsToShortTons(longTons) {
    return longTons * 1.12;
}

// Function to convert long tons to pounds
function longTonsToPounds(longTons) {
    return longTons * 2240;
}

// Function to convert long tons to ounces
function longTonsToOunces(longTons) {
    return longTons * 35840;
}

// Function to convert long tons to carats
function longTonsToCarats(longTons) {
    return longTons * 5.08022e+6;
}

// Function to convert long tons to atomic mass units
function longTonsToAMU(longTons) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-21 long tons
    return longTons / (1.66053906660 * Math.pow(10, -21));
}




// short ton to others units 



// Function to convert short tons to grams
function shortTonsToGrams(shortTons) {
    return shortTons * 907184.74;
}

// Function to convert short tons to kilograms
function shortTonsToKilograms(shortTons) {
    return shortTons * 907.18474;
}

// Function to convert short tons to milligrams
function shortTonsToMilligrams(shortTons) {
    return shortTons * 9.0718474e+8;
}

// Function to convert short tons to metric tons
function shortTonsToMetricTons(shortTons) {
    return shortTons * 0.907185;
}

// Function to convert short tons to long tons
function shortTonsToLongTons(shortTons) {
    return shortTons * 0.892857;
}

// Function to convert short tons to pounds
function shortTonsToPounds(shortTons) {
    return shortTons * 2000;
}

// Function to convert short tons to ounces
function shortTonsToOunces(shortTons) {
    return shortTons * 32000;
}

// Function to convert short tons to carats
function shortTonsToCarats(shortTons) {
    return shortTons * 4.53592e+6;
}

// Function to convert short tons to atomic mass units
function shortTonsToAMU(shortTons) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-21 short tons
    return shortTons / (1.66053906660 * Math.pow(10, -21));
}




// pound to all others units 

// Function to convert pounds to grams
function poundsToGrams(pounds) {
    return pounds * 453.592;
}

// Function to convert pounds to kilograms
function poundsToKilograms(pounds) {
    return pounds * 0.453592;
}

// Function to convert pounds to milligrams
function poundsToMilligrams(pounds) {
    return pounds * 453592.37;
}

// Function to convert pounds to metric tons
function poundsToMetricTons(pounds) {
    return pounds * 0.000453592;
}

// Function to convert pounds to long tons
function poundsToLongTons(pounds) {
    return pounds * 0.000446429;
}

// Function to convert pounds to short tons
function poundsToShortTons(pounds) {
    return pounds * 0.0005;
}

// Function to convert pounds to ounces
function poundsToOunces(pounds) {
    return pounds * 16;
}

// Function to convert pounds to carats
function poundsToCarats(pounds) {
    return pounds * 2267.96;
}

// Function to convert pounds to atomic mass units
function poundsToAMU(pounds) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-24 pounds
    return pounds / (1.66053906660 * Math.pow(10, -24));
}



// ounce  to other units 


// Function to convert ounces to grams
function ouncesToGrams(ounces) {
    return ounces * 28.3495;
}

// Function to convert ounces to kilograms
function ouncesToKilograms(ounces) {
    return ounces * 0.0283495;
}

// Function to convert ounces to milligrams
function ouncesToMilligrams(ounces) {
    return ounces * 28349.5;
}

// Function to convert ounces to metric tons
function ouncesToMetricTons(ounces) {
    return ounces * 2.83495e-5;
}

// Function to convert ounces to long tons
function ouncesToLongTons(ounces) {
    return ounces * 2.7902e-5;
}

// Function to convert ounces to short tons
function ouncesToShortTons(ounces) {
    return ounces * 3.125e-5;
}

// Function to convert ounces to pounds
function ouncesToPounds(ounces) {
    return ounces * 0.0625;
}

// Function to convert ounces to carats
function ouncesToCarats(ounces) {
    return ounces * 141.748;
}

// Function to convert ounces to atomic mass units
function ouncesToAMU(ounces) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-27 ounces
    return ounces / (1.66053906660 * Math.pow(10, -27));
}



//  carrat to all other units


// Function to convert carats to grams
function caratsToGrams(carats) {
    return carats * 0.2;
}

// Function to convert carats to kilograms
function caratsToKilograms(carats) {
    return carats * 0.0002;
}

// Function to convert carats to milligrams
function caratsToMilligrams(carats) {
    return carats * 200;
}

// Function to convert carats to metric tons
function caratsToMetricTons(carats) {
    return carats * 2e-7;
}

// Function to convert carats to long tons
function caratsToLongTons(carats) {
    return carats * 1.9684e-7;
}

// Function to convert carats to short tons
function caratsToShortTons(carats) {
    return carats * 2.2046e-7;
}

// Function to convert carats to pounds
function caratsToPounds(carats) {
    return carats * 0.000440925;
}

// Function to convert carats to ounces
function caratsToOunces(carats) {
    return carats * 0.00705479;
}

// Function to convert carats to atomic mass units
function caratsToAMU(carats) {
    // 1 atomic mass unit (AMU) is approximately 1.66053906660 × 10^-24 carats
    return carats / (1.66053906660 * Math.pow(10, -24));
}







//time

//scnd2scnd

function scnd2scnd (second) {
    second = second
    return second;
 }
 
 //scnd2milliscnd
 
 function scnd2milliscnd (second) {
    millisecond = second * 1000
    return millisecond;
 }
 
 //scnd2nanoscnd
 
 function scnd2nanoscnd (second) {
    nanosecond = second * 1e+9
    return nanosecond;
 }
 
 //scnd2microscnd
 
 function scnd2microscnd (second) {
    microsecond = second * 1e+6
    return microsecond;
 }
 
 //scnd2picosecond
 
 function scnd2picosecond (second) {
    picosecond = second * 1e+12
    return picosecond;
 }
 
 //scnd2mint
 
 function scnd2mint (second) {
    mint = second / 60
    return mint;
 }
 
 //scnd2hour
 
 function scnd2hour (second) {
    hour = second / 3600
    return hour;
 }
 
 //scnd2day
 
 function scnd2day (second) {
    day = second / 86400
    return day;
 }
 
 //scnd2week
 
 function scnd2week (second) {
    week = second / 604800
    return week;
 }
 
 //scnd2month
 
 function scnd2month (second) {
     month = second / 2.628e+6
    return month;
 }
 
 //scnd2year
 
 function scnd2year (second) {
    year = second / 3.154e+7
    return year;
 }
 
 //millisecond2second
 
 function millisecond2second (millisecond) {
    second = millisecond / 1000
    return second;
 }
 
 //millisecond2microsecond
 
 function millisecond2microsecond (millisecond) {
    microsecond = millisecond * 1000
    return microsecond;
 }
 
 //millisecond2nanosecond
 
 function millisecond2nanosecond (millisecond) {
    nanosecond = millisecond * 1e+6
    return nanosecond;
 }
 
 //millisecond2picosecond
 
 function millisecond2picosecond (millisecond) {
    picosecond = millisecond * 1e+9
    return picosecond;
 }
 
 //millisecond2mint
 
 function millisecond2mint (millisecond) {
    mint = millisecond / 60000
    return mint;
 }
 
 //millisecond2hour
 
 function millisecond2hour (millisecond) {
    hour = millisecond / 3.6e+6
    return hour;
 }
 
 //millisecond2day
 
 function millisecond2day (millisecond) {
    day = millisecond / 8.64e+7
    return day;
 }
 
 //millisecond2week
 
 function millisecond2week (millisecond) {
    week = millisecond / 6.048e+8
    return week;
 }
 
 //millisecond2month
 
 function millisecond2month (millisecond) {
    month = millisecond / 2.628e+9
    return month;
 }
 
 //millisecond2year
 
 function millisecond2year (millisecond) {
    year = millisecond / 3.154e+10
    return year;
 }
 
 //millisecond2millisecond
 
 function millisecond2millisecond (millisecond) {
    millisecond = millisecond
    return millisecond;
 }
 
 //microsecond2second
 
 function microsecond2second (microsecond) {
    second = microsecond / 1e+6
    return second;
  }
 
  //microsecond2millisecond
 
 function microsecond2millisecond (microsecond) {
    millisecond = microsecond / 1000
    return millisecond;
  }
 
  //microsecond2nanosecond
 
 function microsecond2nanosecond (microsecond) {
    nanosecond = microsecond * 1000
    return nanosecond;
  }
 
  //microsecond2picosecond
 
 function microsecond2picosecond (microsecond) {
    picosecond = microsecond * 1e+6
    return picosecond;
  }
 
  //microsecond2mint
 
 function microsecond2mint (microsecond) {
    mint = microsecond / 6e+7
    return mint;
  }
 
  //microsecond2hour
 
 function microsecond2hour (microsecond) {
    hour = microsecond / 3.6e+9
    return hour;
  }
 
  //microsecond2day 
 
 function microsecond2day (microsecond) {
    day = microsecond / 8.64e+10
    return  day;
  }
 
  //microsecond2week
 
 function microsecond2week (microsecond) {
    week = microsecond / 6.048e+11
    return week;
  }
 
  //microsecond2month
 
 function microsecond2month (microsecond) {
    month = microsecond / 2.628e+12
    return month;
  }
 
  //microsecond2year
 
 function microsecond2year (microsecond) {
    year = microsecond / 3.154e+13
    return year;
  }
 
  //microsecond2microsecond
 
 function microsecond2microsecond (microsecond) {
    microsecond = microsecond
    return microsecond;
  }
 
 //nanosecond2nanosecond
 
 function nanosecond2nanosecond (nanosecond) {
    nanosecond = nanosecond
    return nanosecond;
 }
 
 //nanosecond2second
 
 function nanosecond2second (nanosecond) {
    second = nanosecond / 1e+9
    return second;
 }
 
 //nanosecond2millisecond
 
 function nanosecond2millisecond (nanosecond) {
    millisecond = nanosecond / 1e+6
    return millisecond;
 }
 
 //nanosecond2microsecond
 
 function nanosecond2microsecond (nanosecond) {
    microsecond = nanosecond / 1000
    return microsecond;
 }
 
 //nanosecond2picosecond
 
 function nanosecond2picosecond (nanosecond) {
    picosecond = nanosecond * 1000
    return picosecond;
 }
 
 //nanosecond2mint
 
 function nanosecond2mint (nanosecond) {
    mint = nanosecond / 6e+10
    return mint;
 }
 
 //nanosecond2hour
 
 function nanosecond2hour (nanosecond) {
    hour = nanosecond / 3.6e+15
    return hour;
 }
 
 //nanosecond2day
 
 function nanosecond2day (nanosecond) {
    day = nanosecond / 8.64e+13
    return day;
 }
 
 //nanosecond2week
 
 function nanosecond2week (nanosecond) {
    week = nanosecond / 6.048e+14
    return week;
 }
 
 //nanosecond2month
 
 function nanosecond2month (nanosecond) {
    month = nanosecond / 2.628e+15
    return month;
 }
 
 //nanosecond2year
 
 function nanosecond2year (nanosecond) {
    year = nanosecond / 3.154e+16
    return year;
 }
 
 //picosecond2picosecond
 
 function picosecond2picosecond (picosecond) {
    picosecond = picosecond
    return picosecond;
 }
 
 //picosecond2second
 
 function picosecond2second (picosecond) {
    second = picosecond / 1e+12
    return second;
 }
 
 //picosecond2millisecond
 
 function picosecond2millisecond (picosecond) {
    millisecond = picosecond / 1e+9
    return millisecond;
 }
 
 //picosecond2microsecond
 
 function picosecond2microsecond (picosecond) {
    microsecond = picosecond / 1e+6
    return microsecond;
 }
 
 //picosecond2nanosecond
 
 function picosecond2nanosecond (picosecond) {
    nanosecond = picosecond / 1000
    return nanosecond;
 }
 
 //picosecond2mint
 
 function picosecond2mint (picosecond) {
    mint = picosecond / 6e+13
    return mint;
 }
 
 //picosecond2hour
 
 function picosecond2hour (picosecond) {
    hour = picosecond / 3.6e+15
    return hour;
 }
 
 //picosecond2day
 
 function picosecond2day (picosecond) {
    day = picosecond / 8.64e+16
    return day;
 }
 
 //picosecond2week
 
 function picosecond2week (picosecond) {
    week = picosecond / 6.048e+17
    return week;
 }
 
 //picosecond2month
 
 function picosecond2month (picosecond) {
    month = picosecond / 2.628e+18
    return month;
 }
 
 //picosecond2year
 
 function picosecond2year (picosecond) {
    year = picosecond / 3.154e+19
    return year;
 }
 
 //mint2mint
 
 function mint2mint (mint) {
    mint = mint
    return mint;
 }
 
 //mint2second
 
 function mint2second (mint) {
    second = mint * 60
    return second;
 }
 
 //mint2millisecond
 
 function mint2millisecond (mint) {
    millisecond = mint * 60000
    return millisecond;
 }
 
 //mint2microsecond
 
 function mint2microsecond (mint) {
    microsecond = mint * 6e+7
    return microsecond;
 }
 
 //mint2nanosecond
 
 function mint2nanosecond (mint) {
    nanosecond = mint * 6e+10
    return nanosecond;
 }
 
 //mint2picosecond
 
 function mint2picosecond (mint) {
    picosecond = mint * 6e+15
    return picosecond;
 }
 
 //mint2hour
 
 function mint2hour (mint) {
    hour = mint / 60
    return hour;
 }
 
 //mint2day
 
 function mint2day (mint) {
    day = mint / 1440
    return day;
 }
 
 //mint2week
 
 function mint2week (mint) {
    week = mint / 10080
    return week;
 }
 
 //mint2month
 
 function mint2month (mint) {
    month = mint / 43800
    return month;
 }
 
 //mint2year
 
 function mint2year (mint) {
    year = mint / 525600
    return year;
 }
 
 //hour2hour
 
 function hour2hour (hour) {
    hour = hour 
    return hour;
 }
 
 //hour2second
 
 function hour2second (hour) {
    second = hour * 3600
    return second;
 }
 
 //hour2millisecond
 
 function hour2millisecond (hour) {
    millisecond = hour * 3.6e+6
    return millisecond;
 }
 
 //hour2microsecond
 
 function hour2microsecond (hour) {
    microsecond = hour * 3.6e+9
    return microsecond;
 }
 
 //hour2nanosecond
 
 function hour2nanosecond (hour) {
    nanosecond = hour * 3.6e+12
    return nanosecond;
 }
 
 //hour2picosecond
 
 function hour2picosecond (hour) {
    picosecond = hour * 3.6e+15
    return picosecond;
 }
 
 //hour2mint
 
 function hour2mint (hour) {
    mint = hour * 60
    return mint;
 }
 
 //hour2day
 
 function hour2day (hour) {
    day = hour / 24
    return day;
 }
 
 //hour2week
 
 function hour2week (hour) {
    week = hour / 168
    return week;
 }
 
 //hour2month
 
 function hour2month (hour) {
    month = hour / 730
    return month;
 }
 
 //hour2year
 
 function hour2year (hour) {
    year = hour / 8760
    return year;
 }
 
 //day2day
 
 function day2day (day) {
    day = day
    return day;
 }
 
 //day2second
 
 function day2second (day) {
    second = day * 86400
    return second;
 }
 
 //day2millisecond
 
 function day2millisecond (day) {
    millisecond = day * 8.64e+7
    return millisecond;
 }
 
 //day2microsecond
 
 function day2microsecond (day) {
    microsecond = day * 8.64e+10
    return microsecond;
 }
 
 //day2nanosecond
 
 function day2nanosecond (day) {
    nanosecond = day * 8.64e+13
    return nanosecond;
 }
 
 //day2picosecond
 
 function day2picosecond (day) {
    picosecond = day * 8.64e+16
    return picosecond;
 }
 
 //day2mint
 
 function day2mint (day) {
    mint = day * 1440
    return mint;
 }
 
 //day2hour
 
 function day2hour (day) {
    hour = day * 24
    return hour;
 }
 
 //day2week
 
 function day2week (day) {
    week = day / 7
    return week;
 }
 
 //day2month
 
 function day2month (day) {
    month = day / 30.417
    return month;
 }
 
 //day2year
 
 function day2year (day) {
    year = day / 365
    return year;
 }
 
 //week2week
 
 function week2week (week) {
    week = week
    return week;
 }
 
 //week2second
 
 function week2second (week) {
    second = week * 604800
    return second;
 }
 
 //week2millisecond
 
 function week2millisecond (week) {
    millisecond = week * 6.048e+8
    return millisecond;
 }
 
 //week2microsecond
 
 function week2microsecond (week) {
    microsecond = week * 6.048e+11
    return microsecond;
 }
 
 //week2nanosecond
 
 function week2nanosecond (week) {
    nanosecond = week * 6.048e+14
    return nanosecond;
 }
 
 //week2picosecond
 
 function week2picosecond (week) {
    picosecond = week * 6.048e+17
    return picosecond;
 }
 
 //week2mint
 
 function week2mint (week) {
    mint = week * 10080
    return mint;
 }
 
 //week2hour
 
 function week2hour (week) {
    hour = week * 168
    return hour;
 }
 
 //week2day
 
 function week2day (week) {
    day = week * 7
    return day;
 }
 
 //week2month
 
 function week2month (week) {
    month = week / 4.345
    return month;
 }
 
 //week2year
 
 function week2year (week) {
    year = week / 52.143
    return year;
 }
 
 //month2month
 
 function month2month (month) {
    month = month
    return month;
 }
 
 //month2second
 
 function month2second (month) {
    second = month * 2.628e+6
    return second;
 }
 
 //month2millisecond
 
 function month2millisecond (month) {
    millisecond = month * 2.628e+9
    return millisecond;
 }
 
 //month2microsecond
 
 function month2microsecond (month) {
    microsecond = month * 2.628e+15
    return microsecond;
 }
 
 //month2nanosecond
 
 function month2nanosecond (month) {
    nanosecond = month * 2.628e+15
    return nanosecond;
 }
 
 //month2picosecond
 
 function month2picosecond (month) {
    picosecond = month * 2.628e+18
    return picosecond;
 }
 
 //month2mint
 
 function month2mint (month) {
    mint = month * 43800
    return mint;
 }
 
 //month2hour
 
 function month2hour (month) {
    hour = month * 730
    return hour;
 }
 
 //month2day
 
 function month2day (month) {
    day = month * 30.417
    return day;
 }
 
 //month2week
 
 function month2week (month) {
    week = month * 4.345
    return week;
 }
 
 //month2year
 
 function month2year (month) {
    year = month / 12
    return year;
 }
 
 //year2year
 
 function year2year (year) {
    year = year
    return year;
 }
 
 //year2second
 
 function year2second (year) {
    second = year * 3.154e+7
    return second;
 }
 
 //year2millisecond
 
 function year2millisecond (year) {
    millisecond = year * 3.154e+10
    return millisecond;
 }
 
 //year2microsecond
 
 function year2microsecond (year) {
    microsecond = year * 3.154e+13
    return microsecond;
 }
 
 //year2nanosecond
 
 function year2nanosecond (year) {
    nanosecond = year * 3.154e+16
    return nanosecond;
 }
 
 //year2picosecond
 
 function year2picosecond (year) {
    picosecond = year * 3.154e+19
    return picosecond;
 }
 
 //year2mint
 
 function year2mint (year) {
    mint = year * 525600
    return mint;
 }
 
 //year2hour
 
 function year2hour (year) {
    hour = year * 6760
    return hour;
 }
 
 //year2day
 
 function year2day (year) {
    day = year * 365
    return day;
 }
 
 //year2week
 
 function year2week (year) {
    week = year * 52.143
    return week;
 }
 
 //year2month
 
 function year2month (year) {
    month = year * 12
    return month;
 }




// 




