

var game = new Phaser.Game(1600, 800, Phaser.AUTO,"phaser-canvas");

game.state.add("GameBootPage", demo.GameBootPage);
game.state.add("Login", demo.Login);
game.state.add("state5", demo.state5);
game.state.add("state6", demo.state6);
game.state.add("state7", demo.state7);
game.state.add("state8", demo.state8);
game.state.add("state9", demo.state9);

game.state.add("Tutorial", demo.Tutorial);

game.state.add("loadingpage", demo.loadingpage);

game.state.add("LoadingHomeMenu", demo.LoadingHomeMenu);
game.state.add("HomeMenu", demo.HomeMenu);

game.state.add("BootFishingPage", demo.BootFishingPage);
game.state.add("LoadingFishingPage", demo.LoadingFishingPage);
game.state.add("FishingPage", demo.FishingPage);

game.state.add("BootAxPage", demo.BootAxPage);
game.state.add("LoadingAxPage", demo.LoadingAxPage);
game.state.add("AxPage", demo.AxPage);

game.state.add("BootLoggingPage", demo.BootLoggingPage);
game.state.add("LoadingLoggingPage", demo.LoadingLoggingPage);
game.state.add("LoggingPage", demo.LoggingPage);

game.state.add("BootCatchBugPage", demo.BootCatchBugPage);
game.state.add("LoadingCatchBugPage", demo.LoadingCatchBugPage);
game.state.add("CatchBugPage", demo.CatchBugPage);

game.state.add("HomeInsidePage", demo.HomeInsidePage);

game.state.add("BootLevelMap", demo.BootLevelMap);
game.state.add("LoadingLevelMap", demo.LoadingLevelMap);
game.state.add("LevelMap", demo.LevelMap);

game.state.add("MixingPage", demo.MixingPage);



game.state.start("GameBootPage");
//game.state.start("BootFishingPage");
//game.state.start("BootLevelMap");
//game.state.start("BootAxPage");
//game.state.start("BootLoggingPage");
//game.state.start("BootCatchBugPage");

//game.state.start("MixingPage");
//game.state.start("state9");
//game.state.start("Login");