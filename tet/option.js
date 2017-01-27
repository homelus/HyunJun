var option = (function () {
	
	var 	width 			= 20,
			height 			= 20,
			widthCount 		= 10,
			heightCount 	= 20,
			EXTRA_AREA  	= 3,			// 블록 준비 구간
			speed			= 100,			// 블록이 내려오는 속도
			intervalSpeed 	= 500,			// 블록이 새로 생성되는 속도
			endLine			= 5;			// 블록 점령 구간 설정
			
	var 	areaBorderColor = 'blue',
			backGroundColor = 'white';
	
	var 	_getConfig,
			_getWidthCount,
			_getHeightCount,
			_getSpeed,
			_getExtraArea,
			_getIntervalSpeed,
			_getEndCount,
			_getAreaBorderColor,
			_getBackGroundColor;
			
	_getWidthCount = function () {
		
		return widthCount;
		
	};
	
	_getHeightCount = function () {
		
		return heightCount;
		
	};
	
	_getSpeed = function () {
		
		return speed;
		
	};
	
	_getExtraArea = function () {
		
		return EXTRA_AREA;
		
	};
	
	_getIntervalSpeed = function () {
		return intervalSpeed;
		
	}
	
	_getConfig = function () {
		return {
			width 			: width,
			height 			: height,
			widthCount 		: widthCount,
			heightCount 	: heightCount
		}
	}
	
	_getEndCount = function () {
		return endLine + EXTRA_AREA;
	};
	
	_getAreaBorderColor = function () {
		return areaBorderColor;
	};
	
	_getBackGroundColor = function () {
		return backGroundColor;
	};
	
	return {
		getConfig 			: _getConfig,
		getWidthCount		: _getWidthCount,
		getHeightCount		: _getHeightCount,
		getSpeed			: _getSpeed,
		getExtraArea		: _getExtraArea,
		getIntervalSpeed	: _getIntervalSpeed,
		getEndCount			: _getEndCount,
		getAreaBorderColor	: _getAreaBorderColor,
		getBackGroundColor	: _getBackGroundColor
	}
	
})();
	
