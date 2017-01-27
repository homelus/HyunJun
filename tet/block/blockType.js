var blockType = (function () {
	
	var _blockList;
	var _blockTypeList = {
			TWO_STRAIGHT_LINE 		: 20,
			THREE_STRAIGHT_LINE 	: 30,
			FOUR_STRAIGHT_LINE 		: 40,
			FOUR_RIGHT_ANGLE 		: 41,
			FOUR_LEFT_ANGLE 		: 42,
			FOUR_QUADRANGLE 		: 43,
			FOUR_TWIST 				: 44
	};
	
	var _init,
		_getBlockType,
		_getAllBlockType;
	
	_init = function () {
		
		_blockList = [];
		
		for (var i in _blockTypeList)
		{
			_blockList.push(_blockTypeList[i]);	 
		}
			
	};
	
	_getBlockType = function () {
		
		return _blockList[Math.floor(Math.random() * _blockList.length)];
		
	};
	
	_getAllBlockType = function () {
		
		return _blockTypeList;
		
	};
	
	return {
		init			: _init,
		getBlockType 	: _getBlockType,
		getAllBlockType : _getAllBlockType
	};
	
})();