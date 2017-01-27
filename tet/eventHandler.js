var eventHandler = (function () {
	
	var _content,
		_context;
	
	var _init,
		_startEvent,
		_endEvent;
	
	_init = function (id) {
		
		_content 	= document.getElementById(id);
		_context	= document.getElementsByTagName('body')[0];
	};
	
	_startEvent = function () {
		
		_content.addEventListener('keydown', blockEvent.keyEvent);
		_content.focus();
		
	};
	
	_endEvent = function () {
		
		
		
	};
	
	return {
		init 		: _init,
		startEvent 	: _startEvent,
		endEvent 	: _endEvent
	}
	
})();