function Block (type) {
	this.preCellList 	= {};		// 이전의 셀 리스트
	this.curCellList 	= {};		// 현재 셀 리스트
	this.centerCell 	= {};
	this.space 			= false;
};

Block.prototype.init = function () {
	
	if (backGround.isExit())
	{
		upTris.exit();
		return;
	}
		
	this.moveDown();
	
};

/* 블록 프로토타입 선언 */
Block.prototype.getCurCellList = function () {
	return this.curCellList;
}

Block.prototype.setCurCellList = function (cellList) {
	this.curCellList = cellList;
}

Block.prototype.setPreCellList = function (cellList) {
	this.preCellList = cellList;
}

Block.prototype.setCenterCell = function (cell) {
	this.centerCell	= cell
}

Block.prototype.move = function () {
	
	backGround.outBlockList(this.preCellList);
	backGround.inBlockList(this.curCellList);
	
	if (this.space)
		return false;
	
	return true;
};

Block.prototype.rollBack = function () {
	// 초기화
	for (var i = 0 ; i < this.preCellList.length ; i++)
	{
		this.curCellList[i].row		= this.preCellList[i].row;
		this.curCellList[i].column	= this.preCellList[i].column;
	}
	
};

Block.prototype.moveDown = function (isEnd) {

	if (this.space)
		return;
	
	if (backGround.isEndBlockList(this.curCellList))
	{	
		if (isEnd)
		{
			console.log('다음 블럭 전환');
			upTris.setOnBlock(null);
			backGround.putBlock(this.curCellList);
			setTimeout(upTris.putBlock, option.getIntervalSpeed());
		}
		else
			setTimeout(this.moveDown.bind(this), 500, true);
			
		return;
	}
	
	for (var i = 0 ; i < this.curCellList.length ; i++)
	{ 
		this.preCellList[i].row		= this.curCellList[i].row;
		this.preCellList[i].column	= this.curCellList[i].column;
		this.curCellList[i].column	+= 1; 
	}
	
	this.centerCell.column 		+= 1;
	
	if (this.move())
		setTimeout(this.moveDown.bind(this), option.getSpeed());
		
	
};
 
Block.prototype.moveEndDown = function () {
	
	for (var i = 0 ; i < this.curCellList.length ; i++)
	{ 
		this.preCellList[i].row		= this.curCellList[i].row;
		this.preCellList[i].column	= this.curCellList[i].column;
	}
	
	backGround.getEndSpace(this.curCellList);
	this.move();
	
};

Block.prototype.moveLeft = function () {
	
	for (var i = 0 ; i < this.curCellList.length ; i++)
	{
		this.preCellList[i].row		= this.curCellList[i].row;
		this.preCellList[i].column	= this.curCellList[i].column;
		this.curCellList[i].row		-= 1; 
	}
	
	this.centerCell.row 			-= 1;
	
	this.move();
};

Block.prototype.moveRight = function () {
	
	for (var i = 0 ; i < this.curCellList.length ; i++)
	{
		this.preCellList[i].row		= this.curCellList[i].row;
		this.preCellList[i].column	= this.curCellList[i].column;
		this.curCellList[i].row		+= 1; 
	}
	
	this.centerCell.row	 		+= 1;
	
	this.move();
	
};

Block.prototype.moveRotation = function () {
	
	var _centerCell	 	= this.centerCell;
	var _curCellList 	= this.curCellList;
	
	for (var i = 0 ; i < _curCellList.length ; i++)
	{
		var rowSpace 		= Math.abs(_centerCell.row - _curCellList[i].row);
		var columnSpace 	= Math.abs(_centerCell.column - _curCellList[i].column);
		
		this.preCellList[i].row		= this.curCellList[i].row;
		this.preCellList[i].column	= this.curCellList[i].column;

		if (_curCellList[i].row <= _centerCell.row && _curCellList[i].column > _centerCell.column) // 1사분면 
		{
			_curCellList[i].row 	= _centerCell.row + columnSpace;
			_curCellList[i].column 	= _centerCell.column + rowSpace;
		}
		else if (_curCellList[i].row > _centerCell.row && _curCellList[i].column >= _centerCell.column)	// 2사분면
		{
			_curCellList[i].row 	= _centerCell.row + columnSpace;
			_curCellList[i].column 	= _centerCell.column - rowSpace;
		}
		else if (_curCellList[i].row >= _centerCell.row && _curCellList[i].column < _centerCell.column) // 3사분면
		{
			_curCellList[i].row 	= _centerCell.row - columnSpace;
			_curCellList[i].column 	= _centerCell.column - rowSpace;
		}
		else if (_curCellList[i].row < _centerCell.row && _curCellList[i].column <= _centerCell.column) // 4사분면
		{
			_curCellList[i].row 	= _centerCell.row - columnSpace;
			_curCellList[i].column 	= _centerCell.column + rowSpace;
		}
	}
	
	// 회전 한 곳이 점유된 경우
	if (backGround.isOccupyAllBlock(_curCellList))
	{
		this.rollBack();
		return;
	}
	
	this.move();
};