var util = (function () {
	
	var _clone,
		_copy,
		_copyValueArray,
		_guid;
	
	_clone = function (obj) {
		
		if (obj === null || typeof(obj) !== 'object')
		{
			return obj;
		}
		
		var copy = obj.constructor();
		
		for (var attr in obj)
		{
			if (obj.hasOwnProperty(attr)) {
				copy[attr]	= _clone(obj[attr]);
			}
		}
		
		return copy;
	};
	
	_copy = function (dest, src)
	{
	    if (null == src || "object" != typeof src) 
			return;

	    // Handle Date
	    if (src instanceof Date) 
		{
			throw new Error("[copy] failed [Date]");
	    }

	    // Handle Array
	    if (src instanceof Array) 
		{
			if (!(dest instanceof Array))
			{
				throw new Error("[copy]  failed [dest not Array]");
			}

	        for (var i = 0, len = src.length; i < len; i++) 
	            dest[i] = _clone(src[i]);

			return;
	    }

	    // Handle Object
	    if (src instanceof Object || "object" == typeof src) 
		{
	        for (var attr in src) 
			{
	            if (dest.hasOwnProperty(attr) && src.hasOwnProperty(attr)) 
					dest[attr] = _clone(src[attr]);
	        }
	        return;
	    }

	    throw new Error("[copy] Unable to copy obj! Its type isn't supported.");
	}

	
	_guid = function () {
		
		function s4 () {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		
		return s4() + s4() +  s4() + s4() + s4() + s4() + s4() + s4();
	};
	
	return {
		clone : _clone,
		copy : _copy,
		copyValueArray : _copyValueArray,
		guid : _guid
	}
	
})();