demo.CatchBugPage.bugdex = {
    GoldenBug:0,
    IceBug:0,
    FireBug:0,
    complete:false,
    completeCheck:function(){
        console.log('completeCheck');
        if( this.FireBug != 0 && this.GoldenBug != 0 && this.IceBug != 0 ){
            this.complete = true;
            demo.CatchBugPage.task.completeTask();
        }
    }
    
};

