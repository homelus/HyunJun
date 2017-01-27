var blockEvent = (function () {
	
	var _keyEvent,
	_moveEvent;
	
	_keyEvent = function (event) {
		
		if (event.which === blockDefine.BLOCK_LEFT || 
				event.which === blockDefine.BLOCK_RIGHT || 
				event.which === blockDefine.BLOCK_ROTATION ||
				event.which === blockDefine.BLOCK_END_SPACE)
			_moveEvent(event.which);
	};
		
	_moveEvent = function (eventWhich) {
		
		var block = upTris.getOnBlock();
		
		if (block == null)
			return;
		
		if (backGround.isOccupySideBlock(block.getCurCellList(), eventWhich))
			return;
		
		if (eventWhich === blockDefine.BLOCK_LEFT)
		{
			block.moveLeft();
		}
		else if (eventWhich === blockDefine.BLOCK_RIGHT)
		{
			block.moveRight();
		}
		else if (eventWhich === blockDefine.BLOCK_ROTATION)
		{
			block.moveRotation();
		}
		else if (eventWhich === blockDefine.BLOCK_END_SPACE)
		{
			block.moveEndDown();
		}
		
	}
	
	return {
		moveEvent : _moveEvent,
		keyEvent : _keyEvent
	}
	
})();