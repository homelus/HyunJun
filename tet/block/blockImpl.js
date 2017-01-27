blockImpl = (function () {
	
	var _make,
		_getTwoStraightLineBlock,
		_getThreeStraightLineBlock,
		_getFourStraightLineBlock,
		_getFourQuardAngleBlock,
		_getFourRightAngleBlock,
		_getFourLeftAngleBlock,
		_getFourTwistBlock;
	
	_make = function (type)	{
		
		var blockTypeList = blockType.getAllBlockType();
		
		switch (type) {
			case blockTypeList.TWO_STRAIGHT_LINE:		// 2개 직선 블럭
				return _getTwoStraightLineBlock();
				
			case blockTypeList.THREE_STRAIGHT_LINE:		// 3개 직선 블럭
				return _getThreeStraightLineBlock();
				
			case blockTypeList.FOUR_STRAIGHT_LINE:		// 4개 직선 블럭
				return _getFourStraightLineBlock();
				
			case blockTypeList.FOUR_RIGHT_ANGLE:		// 4개 우측 직각 블럭
				return _getFourRightAngleBlock();		
				
			case blockTypeList.FOUR_LEFT_ANGLE:			// 4개 좌측 직각 블럭
				return _getFourRightAngleBlock();
				
			case blockTypeList.FOUR_QUADRANGLE:			// 4개 사각형 블럭
				return _getFourQuardAngleBlock();
				
			case blockTypeList.FOUR_TWIST:				// 4개 꼬임 블럭
				return _getFourTwistBlock();
				
			default:
				break;
		};
		
	}
	
	/* 2개 직선 블럭 */
	_getTwoStraightLineBlock = function () {
		
		var tslBlock 				= Object.create(Block.prototype);
		
		var MAX_WIDTH 				= 2;
		var MAX_HEIGHT				= 2;
		var width					= option.getWidthCount();
		var curCellList				= [];
		var preCellList				= [];
		var startLoc 				= {
				x : width/2 - MAX_WIDTH/2,
				y : option.getExtraArea() - 1
		};
			
		var curCell2_1		= new Cell(startLoc.x, startLoc.y);
		var curCell2_2		= new Cell(startLoc.x + 1, startLoc.y);
		
		var preCell2_1		= new Cell(startLoc.x, startLoc.y);
		var preCell2_2		= new Cell(startLoc.x + 1, startLoc.y);
		
		var centerCell		= new Cell(startLoc.x , startLoc.y);
		
		curCellList.push(curCell2_1);
		curCellList.push(curCell2_2);
		
		preCellList.push(preCell2_1);
		preCellList.push(preCell2_2);
		
		tslBlock.setCurCellList(curCellList);
		tslBlock.setPreCellList(preCellList);
		tslBlock.setCenterCell(centerCell);
		
		return tslBlock;
		
	};
	
	/* 3개 직선 블럭 */
	_getThreeStraightLineBlock = function () {
		
		var tslBlock 				= Object.create(Block.prototype);
		
		var MAX_WIDTH 				= 3;
		var MAX_HEIGHT				= 3;
		var width					= option.getWidthCount();
		var curCellList				= [];
		var preCellList				= [];
		var startLoc = {
				x : Math.ceil(width/2 - MAX_WIDTH/2),
				y : option.getExtraArea() - 1
		};
			
		var curCell3_1		= new Cell(startLoc.x - 1, startLoc.y);
		var curCell3_2		= new Cell(startLoc.x , startLoc.y);
		var curCell3_3		= new Cell(startLoc.x + 1, startLoc.y);
		
		var preCell3_1		= new Cell(startLoc.x - 1, startLoc.y);
		var preCell3_2		= new Cell(startLoc.x, startLoc.y);
		var preCell3_3		= new Cell(startLoc.x + 1, startLoc.y);
		
		var centerCell		= new Cell(startLoc.x , startLoc.y);
		
		curCellList.push(curCell3_1);
		curCellList.push(curCell3_2);
		curCellList.push(curCell3_3)
		
		preCellList.push(preCell3_1);
		preCellList.push(preCell3_2);
		preCellList.push(preCell3_3);
		
		tslBlock.setCurCellList(curCellList);
		tslBlock.setPreCellList(preCellList);
		tslBlock.setCenterCell(centerCell);
		
		return tslBlock;
		
	};
	
	/* 4개 직선 블럭 */
	_getFourStraightLineBlock  = function () {
		
		var tslBlock 				= Object.create(Block.prototype);
		
		var MAX_WIDTH 				= 4;
		var MAX_HEIGHT				= 1;
		var width					= option.getWidthCount();
		var curCellList				= [];
		var preCellList				= [];
		var startLoc = {
				x : Math.ceil(width/2 - MAX_WIDTH/2),
				y : option.getExtraArea() - 1
		};
			
		var curCell4_1		= new Cell(startLoc.x - 1, startLoc.y);
		var curCell4_2		= new Cell(startLoc.x , startLoc.y);
		var curCell4_3		= new Cell(startLoc.x + 1, startLoc.y);
		var curCell4_4		= new Cell(startLoc.x + 2, startLoc.y);
		
		var preCell4_1		= new Cell(startLoc.x - 1, startLoc.y);
		var preCell4_2		= new Cell(startLoc.x , startLoc.y);
		var preCell4_3		= new Cell(startLoc.x + 1, startLoc.y);
		var preCell4_4		= new Cell(startLoc.x + 2, startLoc.y);
		
		var centerCell		= new Cell(startLoc.x , startLoc.y);
		
		curCellList.push(curCell4_1);
		curCellList.push(curCell4_2);
		curCellList.push(curCell4_3)
		curCellList.push(curCell4_4)
		
		preCellList.push(preCell4_1);
		preCellList.push(preCell4_2);
		preCellList.push(preCell4_3);
		preCellList.push(preCell4_4);
		
		tslBlock.setCurCellList(curCellList);
		tslBlock.setPreCellList(preCellList);
		tslBlock.setCenterCell(centerCell);
		
		return tslBlock;
		
	};
	
	/* 4개 사각형 블럭 */
	_getFourQuardAngleBlock = function () {
		
		var tslBlock 				= Object.create(Block.prototype);
		
		var MAX_WIDTH 				= 2;
		var MAX_HEIGHT				= 2;
		var width					= option.getWidthCount();
		var curCellList				= [];
		var preCellList				= [];
		var startLoc = {
				x : Math.ceil(width/2 - MAX_WIDTH/2),
				y : option.getExtraArea() - 1
		};
			
		var curCell4_1		= new Cell(startLoc.x, startLoc.y);
		var curCell4_2		= new Cell(startLoc.x + 1, startLoc.y);
		var curCell4_3		= new Cell(startLoc.x, startLoc.y + 1);
		var curCell4_4		= new Cell(startLoc.x + 1, startLoc.y + 1);
		
		var preCell4_1		= new Cell(startLoc.x, startLoc.y);
		var preCell4_2		= new Cell(startLoc.x + 1, startLoc.y);
		var preCell4_3		= new Cell(startLoc.x, startLoc.y + 1);
		var preCell4_4		= new Cell(startLoc.x + 1, startLoc.y + 1);
		
		var centerCell		= new Cell(startLoc.x + 0.5, startLoc.y + 0.5);
		
		curCellList.push(curCell4_1);
		curCellList.push(curCell4_2);
		curCellList.push(curCell4_3)
		curCellList.push(curCell4_4)
		
		preCellList.push(preCell4_1);
		preCellList.push(preCell4_2);
		preCellList.push(preCell4_3);
		preCellList.push(preCell4_4);
		
		tslBlock.setCurCellList(curCellList);
		tslBlock.setPreCellList(preCellList);
		tslBlock.setCenterCell(centerCell);
		
		return tslBlock;
		
	};
	
	_getFourRightAngleBlock = function () {
		
		var tslBlock 				= Object.create(Block.prototype);
		
		var MAX_WIDTH 				= 2;
		var MAX_HEIGHT				= 2;
		var width					= option.getWidthCount();
		var curCellList				= [];
		var preCellList				= [];
		var startLoc = {
				x : Math.ceil(width/2 - MAX_WIDTH/2),
				y : option.getExtraArea() - 1
		};
			
		var curCell4_1		= new Cell(startLoc.x, startLoc.y);
		var curCell4_2		= new Cell(startLoc.x + 1, startLoc.y);
		var curCell4_3		= new Cell(startLoc.x - 1, startLoc.y);
		var curCell4_4		= new Cell(startLoc.x + 1, startLoc.y + 1);
		
		var preCell4_1		= new Cell(startLoc.x, startLoc.y);
		var preCell4_2		= new Cell(startLoc.x + 1, startLoc.y);
		var preCell4_3		= new Cell(startLoc.x - 1, startLoc.y);
		var preCell4_4		= new Cell(startLoc.x + 1, startLoc.y + 1);
		
		var centerCell		= new Cell(startLoc.x + 0.5, startLoc.y + 0.5);
		
		curCellList.push(curCell4_1);
		curCellList.push(curCell4_2);
		curCellList.push(curCell4_3)
		curCellList.push(curCell4_4)
		
		preCellList.push(preCell4_1);
		preCellList.push(preCell4_2);
		preCellList.push(preCell4_3);
		preCellList.push(preCell4_4);
		
		tslBlock.setCurCellList(curCellList);
		tslBlock.setPreCellList(preCellList);
		tslBlock.setCenterCell(centerCell);
		
		return tslBlock;
		
	};
	
	_getFourLeftAngleBlock = function () 
	{
		var tslBlock 				= Object.create(Block.prototype);
		
		var MAX_WIDTH 				= 3;
		var MAX_HEIGHT				= 2;
		var width					= option.getWidthCount();
		var curCellList				= [];
		var preCellList				= [];
		var startLoc = {
				x : Math.ceil(width/2 - MAX_WIDTH/2),
				y : option.getExtraArea() - 1
		};
			
		var curCell4_1		= new Cell(startLoc.x, startLoc.y);
		var curCell4_2		= new Cell(startLoc.x + 1, startLoc.y);
		var curCell4_3		= new Cell(startLoc.x - 1, startLoc.y + 1);
		var curCell4_4		= new Cell(startLoc.x + 1, startLoc.y);
		
		var preCell4_1		= new Cell(startLoc.x, startLoc.y);
		var preCell4_2		= new Cell(startLoc.x + 1, startLoc.y);
		var preCell4_3		= new Cell(startLoc.x - 1, startLoc.y + 1);
		var preCell4_4		= new Cell(startLoc.x + 1, startLoc.y);
		
		var centerCell		= new Cell(startLoc.x + 0.5, startLoc.y + 0.5);
		
		curCellList.push(curCell4_1);
		curCellList.push(curCell4_2);
		curCellList.push(curCell4_3)
		curCellList.push(curCell4_4)
		
		preCellList.push(preCell4_1);
		preCellList.push(preCell4_2);
		preCellList.push(preCell4_3);
		preCellList.push(preCell4_4);
		
		tslBlock.setCurCellList(curCellList);
		tslBlock.setPreCellList(preCellList);
		tslBlock.setCenterCell(centerCell);
		
		return tslBlock;
	};
	
	_getFourTwistBlock = function () {
		var tslBlock 				= Object.create(Block.prototype);
		
		var MAX_WIDTH 				= 2;
		var MAX_HEIGHT				= 3;
		var width					= option.getWidthCount();
		var curCellList				= [];
		var preCellList				= [];
		var startLoc = {
				x : Math.ceil(width/2 - MAX_WIDTH/2),
				y : option.getExtraArea() - 1
		};
			
		var curCell4_1		= new Cell(startLoc.x, startLoc.y);
		var curCell4_2		= new Cell(startLoc.x + 1, startLoc.y);
		var curCell4_3		= new Cell(startLoc.x, startLoc.y - 1);
		var curCell4_4		= new Cell(startLoc.x + 1, startLoc.y + 1);
		
		var preCell4_1		= new Cell(startLoc.x, startLoc.y);
		var preCell4_2		= new Cell(startLoc.x + 1, startLoc.y);
		var preCell4_3		= new Cell(startLoc.x, startLoc.y + 1);
		var preCell4_4		= new Cell(startLoc.x + 1, startLoc.y + 1);
		
		var centerCell		= new Cell(startLoc.x + 0.5, startLoc.y + 0.5);
		
		curCellList.push(curCell4_1);
		curCellList.push(curCell4_2);
		curCellList.push(curCell4_3)
		curCellList.push(curCell4_4)
		
		preCellList.push(preCell4_1);
		preCellList.push(preCell4_2);
		preCellList.push(preCell4_3);
		preCellList.push(preCell4_4);
		
		tslBlock.setCurCellList(curCellList);
		tslBlock.setPreCellList(preCellList);
		tslBlock.setCenterCell(centerCell);
		
		return tslBlock;
	};
	
	return {
		make : _make
	}
	
})();