alert("Խնդրում եմ խիստ չ՛դատել, քանի որ առաջին աշխատանքս է")
const lBracket = document.getElementById("lBracket");
const rBracket = document.getElementById("rBracket");
const percent = document.getElementById("percent");
const destroy = document.getElementById("destroy");
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");
const devide = document.getElementById("devide");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const calculate = document.getElementById("calculate");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const minus = document.getElementById("minus");
const zero = document.getElementById("zero");
const point = document.getElementById("point");
const total = document.getElementById("total");
const sum = document.getElementById("sum");
 let dashboard = document.getElementById("dashboard");
 let consol = document.getElementById("consol");
 let valueDashboard = " ";
 let value1 = "";
     eight.addEventListener( "click", ()=>{
   valueDashboard = valueDashboard.concat(8);  
   dashboard.innerHTML = valueDashboard;
     });
    seven.addEventListener( "click", ()=>{
  valueDashboard = valueDashboard.concat(7);  
  dashboard.innerHTML = valueDashboard;
     });                 
    six.addEventListener( "click", ()=>{
  valueDashboard = valueDashboard.concat(6);  
  dashboard.innerHTML = valueDashboard;
     });             
    five.addEventListener( "click", ()=>{
  valueDashboard = valueDashboard.concat(5);  
  dashboard.innerHTML = valueDashboard;
     });                   
    four.addEventListener( "click",()=>{
  valueDashboard = valueDashboard.concat(4);  
  dashboard.innerHTML = valueDashboard;
    });                                        
    three.addEventListener( "click",()=>{
  valueDashboard = valueDashboard.concat(3);  
  dashboard.innerHTML = valueDashboard;
    });           
    two.addEventListener( "click",()=>{
  valueDashboard = valueDashboard.concat(2);  
  dashboard.innerHTML = valueDashboard;
    });                  
    one.addEventListener( "click",()=>{
  valueDashboard = valueDashboard.concat(1);   
  dashboard.innerHTML = valueDashboard;
    });                   
    nine.addEventListener( "click",()=>{
  valueDashboard = valueDashboard.concat(9);  
  dashboard.innerHTML = valueDashboard;
    });              
          sum.addEventListener( "click",()=>{
    value1 += valueDashboard;
    valueDashboard = "";
    valueDashboard = valueDashboard.concat( "+");  
    dashboard.innerHTML = valueDashboard ;
    consol.innerHTML = value1 +valueDashboard;
       });
          point.addEventListener( "click",()=>{
    if(! (valueDashboard.includes(".")) ){
      if(valueDashboard.length !== 0){
         valueDashboard = valueDashboard.concat(".");   
         dashboard.innerHTML = valueDashboard;
       }
    }
       });
          destroy.addEventListener( "click",()=>{
      dashboard.innerHTML = 0;
      valueDashboard = "";
      value1 = "";
      consol.innerHTML = value1 + valueDashboard;
       });   
          zero.addEventListener("click",()=>{
    if(valueDashboard[0] == 0){
       if(valueDashboard[1] === "."){
          valueDashboard = valueDashboard.concat(0);  
          dashboard.innerHTML = valueDashboard;
      }
    }
        else {
          valueDashboard = valueDashboard.concat(0);  
          dashboard.innerHTML = valueDashboard;
       }
      });  
          total.addEventListener("click",()=>{
    if((value1+valueDashboard).includes("(")== true  && (value1+valueDashboard).includes(")")!==true ){
         valueDashboard ="";
        valueDashboard = valueDashboard.concat( "Error please complaete ()");  
        dashboard.innerHTML = valueDashboard;
      }
    if((value1+valueDashboard).includes(")")==true  && (value1+valueDashboard).includes("(")!==true ){
        valueDashboard ="";
       valueDashboard = valueDashboard.concat( "Error please complaete ()");  
       dashboard.innerHTML = valueDashboard;
     };
         consol.innerHTML = value1 + valueDashboard;
         let total = eval(value1 + valueDashboard);
         dashboard.innerHTML = "=" + total

     });
         minus.addEventListener("click",()=>{
         value1 = value1 - valueDashboard;
         valueDashboard="";
         valueDashboard = valueDashboard.concat( "-");  
        dashboard.innerHTML = valueDashboard ;
        consol.innerHTML = value1 +valueDashboard
     }); 
        lBracket.addEventListener("click",()=>{
         value1 += valueDashboard;
         valueDashboard="";
         valueDashboard = valueDashboard.concat( "(");  
        dashboard.innerHTML = valueDashboard ;
        consol.innerHTML = value1 +valueDashboard;
     });
        rBracket.addEventListener("click",()=>{
        value1 += valueDashboard;
        valueDashboard="";
        valueDashboard = valueDashboard.concat( ")");  
       dashboard.innerHTML = valueDashboard;
       consol.innerHTML = value1 +valueDashboard;

    });
       devide.addEventListener("click",()=>{
        value1 += valueDashboard;
        valueDashboard="";
        valueDashboard = valueDashboard.concat( "/");  
       dashboard.innerHTML = valueDashboard ;
       consol.innerHTML = value1 +valueDashboard
    });
      calculate.addEventListener("click",()=>{
       value1 += valueDashboard;
       valueDashboard="";
       valueDashboard = valueDashboard.concat( "*");  
      dashboard.innerHTML = valueDashboard ;
      consol.innerHTML = value1 +valueDashboard
    }); 
      percent.addEventListener("click",()=>{
       value1 += valueDashboard;
       valueDashboard="";
       valueDashboard = valueDashboard.concat( "%");  
       dashboard.innerHTML = valueDashboard ;
       consol.innerHTML = value1 +valueDashboard
   });

   //Thanks ("Calculator by Robert")