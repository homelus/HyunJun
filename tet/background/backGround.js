var backGround = (function () {
	
	var _content,
		_width,
		_height,
		_widthCount,
		_heightCount,
		_fullHeightCount,
		_endLineCount,
		_cellList,
		_areaBorderColor,
		_backGroundColor;
	
	var _empty,
		_init,
		_draw,
		_drawRow,
		_appendCell,
		_makeRow,
		_makeCell,
		_getCellList,
		_inBlockList,
		_outBlockList,
		_putBlock,
		_isExit,
		_isEndBlockList,
		_isOccupySideBlock,
		_isOccupyAllBlock,
		_testCase,
		_getEndSpace,
		_getAllBlockNumber,
		_getOccupyBlockNumber;
	
	_empty = function () {
		
		
	};
	
	_init = function (id, config) {
		
		_content 			= document.getElementById(id);
		_width				= config.width;
		_height				= config.height;
		_widthCount			= config.widthCount;
		_heightCount		= config.heightCount;
		_extraHeightCount	= option.getExtraArea();
		_endLineCount		= option.getEndCount();
		_fullHeightCount	= config.heightCount + _extraHeightCount;
		_cellList 			= new Array(this.heightCount);
		_areaBorderColor	= option.getAreaBorderColor();
		_backGroundColor	= option.getBackGroundColor();
		
		for (var i = 0 ; i < _fullHeightCount ; i++) {
			_cellList[i] = new Array(_widthCount);
		};
		
	};
	
	_testCase = function () {
		
		var occupyArea = document.getElementById('occupyArea');
		occupyArea.innerHTML = '';
		
		for (var i = 0 ; i < _cellList.length ; i++)
		{
			var row = document.createElement('div');
			
			for (j = 0 ; j < _cellList[i].length ; j++)
			{
				var cell = document.createElement('span');
				cell.style.float = 'left';
				cell.style.display = 'inline-block';
				cell.style.width = '40px';
				cell.style.height = '20px';
				cell.style.fontSize = '5px';
				cell.style.textAlign = 'center';
				
				if (_cellList[i][j].isOccupy)
				{
					cell.innerText = '점유';
					cell.style.color = 'blue';
				}
				else
				{
					cell.innerText = '미점유';
					cell.style.color = 'red';
					
				}
				row.appendChild(cell);
			}
			
			occupyArea.appendChild(row);
		}
		
	};
	
	_isExit = function () {
		
		var endRow = option.getEndCount() -  1;
		
		for (var i = 0 ; i < _cellList[endRow].length ; i++)
		{
			if (_cellList[endRow][i].isOccupy)
				return true;
		}
		
		return false;
		
	};
	
	_draw = function () {
	
		// 블럭 생성
		for (var i = 0 ; i < _fullHeightCount; i++)
		{
			var row 	= _makeRow(i);
			
			for (var j = 0 ; j < _widthCount ; j++)
			{
				var cell;
				
				if (i < _extraHeightCount)
				{
					cell 		= _makeCell(-1);
				}
				else
				{
					cell 		= _makeCell((i - _extraHeightCount) * 10 + j);
					row.appendChild(cell);
				}
				_appendCell(cell, i , j);
			}
			_drawRow(row);
		}
	};
	
	_appendCell = function (cell, first, second) {
		_cellList[first][second] = cell;
	};
	
	_drawRow = function (row)	{
		_content.appendChild(row);
	};
	
	_makeRow = function (index) {
		
		var row = document.createElement('div');
		
		row.id		= 'row_' + index;
		
		if (index === _endLineCount)
		{
			row.style.borderTop = '4px solid ' + _areaBorderColor;
			row.style.borderLeft = '4px solid ' + _areaBorderColor;
			row.style.borderRight = '4px solid ' + _areaBorderColor;
		}
		else if (index === (_fullHeightCount - 1))
		{
			row.style.borderBottom = '4px solid ' + _areaBorderColor;
			row.style.borderLeft = '4px solid ' + _areaBorderColor;
			row.style.borderRight = '4px solid ' + _areaBorderColor;	
		}
		else if (index > _endLineCount && index < _fullHeightCount)
		{
			row.style.borderLeft = '4px solid ' + _areaBorderColor;
			row.style.borderRight = '4px solid ' + _areaBorderColor;
		}
		else
		{
			row.style.borderLeft = '4px solid ' + _backGroundColor;
			row.style.borderRight = '4px solid ' + _backGroundColor;
		}
		
		return row;
		
	};
	
	_makeCell = function (index) {
		
		var cell = document.createElement('span');
		
		cell.style.display 		= 'inline-block';
		cell.style.width 		= _width + 'px';
		cell.style.height 		= _height + 'px';
		cell.style.margin 		= 0 + 'px';
		cell.style.padding 		= 0 + 'px';
		cell.style.backgroundColor = _backGroundColor;
		
		cell.id					= 'cell_' + index;
		cell.isOccupy			= false;
		
		return cell;
	};
	
	_getCellList = function () {
		return _cellList;
	};
	
	_putBlock = function (blockList) {
		
		for (var i = 0 ; i < blockList.length ; i++)
		{
			var cell 		= _cellList[blockList[i].column][blockList[i].row];

			cell.isOccupy 				= true;
			cell.style.backgroundColor	= 'grey';
		}
		
	};
	
	_inBlockList = function (blockList) {
		
		for (var i = 0 ; i < blockList.length ; i++)
		{
			var cell 		= _cellList[blockList[i].column][blockList[i].row];

			cell.style.backgroundColor 	= 'blue';
		}
	};
	
	_outBlockList = function (blockList, type) {
		
		for (var i = 0 ; i < blockList.length ; i++)
		{
			var cell 		= _cellList[blockList[i].column][blockList[i].row];
			
			cell.style.backgroundColor 	= _backGroundColor;
		}
	};
	
	_isEndBlockList = function (blockList) {
		
		for (var i = 0 ; i < blockList.length ; i++)
		{
			var block = blockList[i];
			
			// 바닥에 블럭이 닿는 경우
			if (block.column + 1 === _fullHeightCount)
			{
				console.log('블럭이 바닥에 닿았음.');
				return true;
			}	// 오른쪽벽에 블럭이 닿은 경우
			
			// 블럭의 아래쪽을 다른 블록이 점유할 경우
			if (_cellList[block.column + 1][block.row].isOccupy)
			{
				console.log('블럭 아래쪽을 다른 블럭이 점유함.');
				return true;
			}	// 블럭의 오른쪽을 다른 블록이 점유할 경우
			
		}
		
		return false;
	};
	
	_isOccupySideBlock = function (blockList, type) {

		for (var i = 0 ; i < blockList.length ; i++)
		{
			var block 	= blockList[i];
			
			if (type === blockDefine.BLOCK_RIGHT && block.row + 1 === _widthCount)
			{
				console.log('블럭이 오른쪽 벽에 닿았음.');
				return true;
			}	// 왼쪽벽에 블럭이 닿은 경우
			else if (type === blockDefine.BLOCK_LEFT && block.row - 1 < 0)
			{
				console.log('블럭이 왼쪽벽에 닿았음.');
				return true;
			}
			
			if (_cellList[block.column][block.row + 1] != null && _cellList[block.column][block.row + 1].isOccupy)
			{
				console.log('블럭 오른쪽을 다른 블럭이 점유함.');
				return true;
			}
			else if (_cellList[block.column][block.row - 1] != null && _cellList[block.column][block.row - 1].isOccupy)
			{
				console.log('블럭 왼쪽을 다른 블럭이 점유함.');
				return true;
			}
		}
		
		return false;
	};
	
	_isOccupyAllBlock = function (blockList) {
		
		for ( var i = 0 ; i < blockList.length ; i++ )
		{
			var block 	= blockList[i];
			
			if (block.row >= _widthCount)
			{
				console.log('회전 중 오른쪽 벽에 블럭이 닿음.');
				return true;
			}
			else if (block.row < 0)
			{
				console.log('회전 중 왼쪽 벽에 블럭이 닿음.');
				return true;
			}
			else if (block.column + 1 >= _fullHeightCount)
			{
				console.log('회전 중 바닥에 블럭이 닿음');
				return true;
			}
			
			if (_cellList[block.column][block.row] != null && _cellList[block.column][block.row].isOccupy)
			{
				console.log('회전하는 곳의 블럭이 점유됨.');
				return true;
			}
		}
		
		return false;
	};
	
	_getEndSpace = function (blockList) {
		
		var result 			= 0;
		var isEnd			= false;
		
		while (true)
		{
			for (var i = 0; i < blockList.length ; i++)
			{
				blockList[i].column 	+= 1;
				
				if (blockList[i].column >= _fullHeightCount)
				{
					isEnd = true;
				}
				else if (_cellList[blockList[i].column][blockList[i].row].isOccupy)
				{
					isEnd = true;
				}
			}
			
			if (isEnd)
			{
				for (var i = 0; i < blockList.length ; i++)
				{
					blockList[i].column 	-= 1;
				}
				break;
			}
			result++;
		}
		
		return result;
	};
	
	_getAllBlockNumber = function () 
	{
		return _widthCount * (_fullHeightCount - option.getEndCount());
	};
	
	_getOccupyBlockNumber = function () 
	{
		var endRow 	= option.getEndCount();
		var count	= 0;
		
		for (var i = endRow ; i < _fullHeightCount ; i++)
		{
			for (var j = 0 ; j < _widthCount ; j++)
			{
				if (_cellList[i][j].isOccupy)
					count++;
			};
		};
		
		return count;
	};
	
	return {
		empty 					: _empty,
		init					: _init,
		draw					: _draw,
		appendCell				: _appendCell,
		makeCell				: _makeCell,
		getCellList				: _getCellList,
		inBlockList				: _inBlockList,
		outBlockList			: _outBlockList,
		isExit					: _isExit,
		isOccupySideBlock		: _isOccupySideBlock,
		isOccupyAllBlock		: _isOccupyAllBlock,
		isEndBlockList			: _isEndBlockList,
		putBlock				: _putBlock,
		testCase				: _testCase,
		getEndSpace				: _getEndSpace,
		getAllBlockNumber		: _getAllBlockNumber,
		getOccupyBlockNumber	: _getOccupyBlockNumber,
		
	};
	
})();