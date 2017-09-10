demo.questionGenerator = {
    createNum:function(page,level){
      
        if( page == 'AxPage' ){
            var style = { font: "60px Arial", fill: "#3a311f", align: "center" };      
            this.NumSum = game.add.text(centerX+462,centerY-178,'', style);
            this.NumSum.anchor.set(0.5);

            this.NumAdd1 = game.add.text(centerX+462-106,centerY-71,'', style);
            this.NumAdd1.anchor.set(0.5);    

            this.NumAdd2 = game.add.text(centerX+462+106,centerY-71,'', style);
            this.NumAdd2.anchor.set(0.5);      
           

        }
        this.showQuestionNum(level);
    },
    showQuestionNum:function(level){
        if( level%2 == 1 ){        
            this.NumSum.setText('?');
            this.NumAdd1.setText(equation[0]);
            this.NumAdd2.setText(equation[1]);
        }
        if( level%2 == 0 ){
            this.NumSum.setText(equation[2]);
            this.NumAdd1.setText(equation[0]);
            this.NumAdd2.setText('?');
        }        
    }
}
