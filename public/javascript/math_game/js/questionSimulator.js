
 
demo.questionSimulator = (function(){
    let equationList = [];
    let checkReapet = function(level,Range,equation){
                
        console.log(equationList);
        let index = equationList.length - 1;
        
        if( equationList.length >= 1 ){
        
            while( equation[0] == equationList[index][0] && equation[1] == equationList[index][1] ){
                equation = levelEquation(level,Range);          
            }
            equationList.push(equation);
        }else{
            equationList.push(equation);
        }
        return equation;
         

    };
    let levelEquation = function(level,Range){
        //Range[0] = 下限,Range[1] = 上限 
        //ex:  1,5   6,10 
        let range = Range;
        let equation = [];
        let numberA;
        let numberB = -100;
        let numberSum = 100;
    
        //AxPage Question---------------------------------------------------
        if( level == 1 ){
            while (numberSum > range[1] || numberSum < range[0]) {
                numberA = Math.floor(Math.random() * 9) + 1;
                numberB = Math.floor(Math.random() * 2) + 1;
                numberSum = numberA + numberB;

            }
        }    
        if( level == 2 ){
            while (numberB > range[1] || numberB < range[0] ) {

                numberSum = Math.floor(Math.random() * 9) + 1; 
                numberA = Math.floor(Math.random() * 2) + 1;
                numberB = numberSum - numberA;       
            }    
        }
        //LoggingPage Question-------------------------------------------------------------------
        if( level == 3 ){
             while (numberB > range[1] || numberB < range[0] ) {
                numberA = Math.floor(Math.random() * 9) + 1;
                numberB = Math.floor(Math.random() * 9) + 1;
                numberSum = numberA + numberB;
            }          
        }
        if( level == 4 ){
             while ( numberB > range[1] || numberB < range[0] ) {
                numberSum = Math.floor(Math.random() * 9) + 1;
                numberA = Math.floor(Math.random() * 8) + 1;
                numberB = numberSum - numberA;
            }           
        }
        //Catch Bug Page Question----------------------------------------------------------------------
        if( level == 5 ){
            this.rand = Math.floor(Math.random()*2)+1;
            switch(this.rand)
            {
                case 1:
                    numberA = Math.floor(Math.random() * 5) + range[0];
                    numberB = 10;
                    break;
                case 2:
                    numberA = 10;
                    numberB = Math.floor(Math.random() * 5) + range[0];
                    break;  
            }
            numberSum = numberA + numberB;
        }
        if( Level == 6 ){
            while( numberB > range[1] || numberB < range[0] ){
                numberSum = Math.floor(Math.random() * 9) + 11;
                numberA = Math.floor(Math.random() * 10) + 1;                   
                numberB = numberSum - numberA;
            }
        }
        
        equation = [numberA, numberB, numberSum];
        return equation;
    };
    return{
        createEquation:function(level,range){
            let equation = levelEquation(level,range);
            return checkReapet(level,range,equation);
        }
    };

}());
    
