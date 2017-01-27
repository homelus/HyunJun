var score = (function () {
	
	var _blockScore,
		_runningScore;
	
	var _showOccupyScore,
		_showRunningTime,
		_showTotalScore;
	
	_showOccupyScore = function () {
		
		var occpyBlockCount			= backGround.getOccupyBlockNumber();
		var allBlockCount			= backGround.getAllBlockNumber();
		var unOccupyBlockCount		= allBlockCount - occpyBlockCount;
		
		console.log(unOccupyBlockCount);
		
		var occupyBlockDom			= document.getElementById('occupyBlockNumberScore');
		
		_blockScore					= unOccupyBlockCount * 200;
		
		occupyBlockDom.innerText 	= _blockScore;
		
	};
	
	_showRunningTime = function () {
		
		var startTime 				= upTris.getStartTime();
		var endTime					= new Date().getTime();
		var runningTime				= (endTime - startTime)/1000;
		var runningTimeDom			= document.getElementById('runningTimeScore');

		_runningScore				= runningTime * 1000
		runningTimeDom.innerText 	= _runningScore;
		
	};
	
	_showTotalScore = function () {
		
		var totalScore				= _blockScore + _runningScore;
		var runningTimeDom			= document.getElementById('totalScore');
		
		runningTimeDom.innerText 	= totalScore;
		
	};
	
	return {
		showOccupyScore 	: _showOccupyScore,
		showRunningTime 	: _showRunningTime,
		showTotalScore		: _showTotalScore
	}
	
})();