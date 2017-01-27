var upTris = (function () {
	
	var onBlock,
		preBlock,
		startTime;
	
	var _init,
		_run,
		_putBlock,
		_getOnBlock,
		_getStartTime,
		_exit;
	
	_init = function (id) {
		
		blockType.init();
		backGround.init(id, option.getConfig());
		backGround.draw();
		backGround.testCase();
	
	};
	
	_run = function () {
		
		startTime	= new Date().getTime();
		preBlock	= blockImpl.make(blockType.getBlockType());
		_putBlock();
		eventHandler.startEvent();
		
	};
	
	_exit = function () {
		
		console.log('게임이 종료되었습니다.');
		score.showOccupyScore();
		score.showRunningTime();
		score.showTotalScore();
		
	};
	
	_putBlock = function () {
		
		backGround.testCase();
		
		var block 					= preBlock;
		preBlock 					= blockImpl.make(blockType.getBlockType());
		
		if (block)
		{
			block.init();
			onBlock 				= block;
		}
		
	};
	
	_getOnBlock = function () {
		
		return onBlock;
		
	};
	
	_setOnBlock = function (block) {
		
		onBlock = block; 
		
	};
	
	_getStartTime = function () {
		
		return startTime;
		
	};
	
	return {
		init 			: _init,
		run 			: _run,
		putBlock 		: _putBlock,
		getOnBlock		: _getOnBlock,
		setOnBlock		: _setOnBlock,
		getStartTime	: _getStartTime, 
		exit			: _exit
	}
	
})();