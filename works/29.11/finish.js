(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"finish_atlas_", frames: [[0,0,240,400],[0,402,240,400],[242,0,240,400],[242,402,240,400],[484,0,240,400]]}
];


// symbols:



(lib.заглушка = function() {
	this.initialize(ss["finish_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.пульс_текст2 = function() {
	this.initialize(ss["finish_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.пульс_фон1 = function() {
	this.initialize(ss["finish_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.background2jpgкопия = function() {
	this.initialize(ss["finish_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.initialize(ss["finish_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ_7_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.заглушка();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_7_Слой_1, null, null);


(lib.Символ_5_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.пульс_фон1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_5_Слой_1, null, null);


(lib.Символ_3_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.пульс_текст2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_3_Слой_1, null, null);


(lib.Символ_1_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ_1_Слой_1, null, null);


(lib.Монтажный_кадр_1_product = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// product
	this.instance = new lib.background2jpgкопия();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175));

}).prototype = p = new cjs.MovieClip();


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_7_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(120,200,1,1,0,0,0,120,200);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_5_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(120,200,1,1,0,0,0,120,200);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_3_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(120,200,1,1,0,0,0,120,200);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Символ_1_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(120,200,1,1,0,0,0,120,200);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,240,400), null);


(lib.Монтажный_кадр_1_text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_2
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(119.9,-141.1,1,1,0,0,0,119.9,199.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).wait(1).to({regX:120,regY:200,x:120,y:-127.35,alpha:0.009},0).wait(1).to({y:-114,alpha:0.018},0).wait(1).to({y:-100.85,alpha:0.027},0).wait(1).to({y:-87.95,alpha:0.036},0).wait(1).to({y:-75.25,alpha:0.045},0).wait(1).to({y:-62.85,alpha:0.0541},0).wait(1).to({y:-50.65,alpha:0.0631},0).wait(1).to({x:119.95,y:-38.7,alpha:0.0721},0).wait(1).to({y:-27,alpha:0.0811},0).wait(1).to({y:-15.5,alpha:0.0901},0).wait(1).to({y:-4.25,alpha:0.0991},0).wait(1).to({y:6.8,alpha:0.1081},0).wait(1).to({y:17.65,alpha:0.1171},0).wait(1).to({y:28.25,alpha:0.1261},0).wait(1).to({y:38.65,alpha:0.1351},0).wait(1).to({y:48.85,alpha:0.1441},0).wait(1).to({y:58.8,alpha:0.1532},0).wait(1).to({y:68.55,alpha:0.1622},0).wait(1).to({y:78.1,alpha:0.1712},0).wait(1).to({y:87.45,alpha:0.1802},0).wait(1).to({y:96.6,alpha:0.1892},0).wait(1).to({y:105.55,alpha:0.1982},0).wait(1).to({y:114.3,alpha:0.2072},0).wait(1).to({y:122.85,alpha:0.2162},0).wait(1).to({y:131.15,alpha:0.2252},0).wait(1).to({y:139.35,alpha:0.2342},0).wait(1).to({y:147.3,alpha:0.2432},0).wait(1).to({y:155.1,alpha:0.2523},0).wait(1).to({y:162.7,alpha:0.2613},0).wait(1).to({x:120,y:170.1,alpha:0.2703},0).wait(1).to({y:177.35,alpha:0.2793},0).wait(1).to({y:184.35,alpha:0.2883},0).wait(1).to({y:191.3,alpha:0.2973},0).wait(1).to({y:197.95,alpha:0.3063},0).wait(1).to({y:204.5,alpha:0.3153},0).wait(1).to({y:210.85,alpha:0.3243},0).wait(1).to({x:120.05,y:217.05,alpha:0.3333},0).wait(1).to({y:223.2,alpha:0.3423},0).wait(1).to({x:120.15,y:229.8,alpha:0.3514},0).wait(1).to({x:120.3,y:225.25,alpha:0.3604},0).wait(1).to({x:120.35,y:219.65,alpha:0.3694},0).wait(1).to({x:120.4,y:214.25,alpha:0.3784},0).wait(1).to({y:209,alpha:0.3874},0).wait(1).to({x:120.45,y:203.9,alpha:0.3964},0).wait(1).to({x:120.5,y:199,alpha:0.4054},0).wait(1).to({y:194.25,alpha:0.4144},0).wait(1).to({x:120.55,y:189.6,alpha:0.4234},0).wait(1).to({y:185.1,alpha:0.4324},0).wait(1).to({x:120.6,y:180.75,alpha:0.4414},0).wait(1).to({y:176.5,alpha:0.4505},0).wait(1).to({x:120.65,y:172.4,alpha:0.4595},0).wait(1).to({y:168.45,alpha:0.4685},0).wait(1).to({y:164.65,alpha:0.4775},0).wait(1).to({x:120.7,y:160.95,alpha:0.4865},0).wait(1).to({y:157.4,alpha:0.4955},0).wait(1).to({y:153.95,alpha:0.5045},0).wait(1).to({x:120.75,y:150.65,alpha:0.5135},0).wait(1).to({y:147.45,alpha:0.5225},0).wait(1).to({y:144.35,alpha:0.5315},0).wait(1).to({y:141.4,alpha:0.5405},0).wait(1).to({x:120.8,y:138.55,alpha:0.5495},0).wait(1).to({y:135.8,alpha:0.5586},0).wait(1).to({y:133.2,alpha:0.5676},0).wait(1).to({y:130.65,alpha:0.5766},0).wait(1).to({x:120.85,y:128.25,alpha:0.5856},0).wait(1).to({y:125.95,alpha:0.5946},0).wait(1).to({y:123.75,alpha:0.6036},0).wait(1).to({y:121.65,alpha:0.6126},0).wait(1).to({y:119.6,alpha:0.6216},0).wait(1).to({y:117.7,alpha:0.6306},0).wait(1).to({x:120.9,y:115.85,alpha:0.6396},0).wait(1).to({y:114.1,alpha:0.6486},0).wait(1).to({y:112.45,alpha:0.6577},0).wait(1).to({y:110.9,alpha:0.6667},0).wait(1).to({y:109.4,alpha:0.6757},0).wait(1).to({y:108,alpha:0.6847},0).wait(1).to({y:106.65,alpha:0.6937},0).wait(1).to({y:105.4,alpha:0.7027},0).wait(1).to({x:120.95,y:104.2,alpha:0.7117},0).wait(1).to({y:103.1,alpha:0.7207},0).wait(1).to({y:102.1,alpha:0.7297},0).wait(1).to({y:101.1,alpha:0.7387},0).wait(1).to({y:100.2,alpha:0.7477},0).wait(1).to({y:99.35,alpha:0.7568},0).wait(1).to({y:98.6,alpha:0.7658},0).wait(1).to({y:97.85,alpha:0.7748},0).wait(1).to({y:97.15,alpha:0.7838},0).wait(1).to({y:96.55,alpha:0.7928},0).wait(1).to({y:96,alpha:0.8018},0).wait(1).to({y:95.5,alpha:0.8108},0).wait(1).to({y:95,alpha:0.8198},0).wait(1).to({y:94.6,alpha:0.8288},0).wait(1).to({y:94.2,alpha:0.8378},0).wait(1).to({y:93.85,alpha:0.8468},0).wait(1).to({y:93.55,alpha:0.8559},0).wait(1).to({y:93.3,alpha:0.8649},0).wait(1).to({y:93.05,alpha:0.8739},0).wait(1).to({y:92.85,alpha:0.8829},0).wait(1).to({y:92.7,alpha:0.8919},0).wait(1).to({y:92.55,alpha:0.9009},0).wait(1).to({y:92.4,alpha:0.9099},0).wait(1).to({y:92.3,alpha:0.9189},0).wait(1).to({y:92.2,alpha:0.9279},0).wait(1).to({y:92.15,alpha:0.9369},0).wait(1).to({y:92.1,alpha:0.9459},0).wait(1).to({x:121,y:92,alpha:0.955},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-8.8},0).wait(1).to({x:-6.15},0).wait(1).to({x:-3.5},0).wait(1).to({x:-0.9},0).wait(1).to({x:1.75},0).wait(1).to({x:4.4},0).wait(1).to({x:7.05},0).wait(1).to({x:9.7},0).wait(1).to({x:12.3},0).wait(1).to({x:14.95},0).wait(1).to({x:17.55},0).wait(1).to({x:20.2},0).wait(1).to({x:22.8},0).wait(1).to({x:25.4},0).wait(1).to({x:28.05},0).wait(1).to({x:30.65},0).wait(1).to({x:33.25},0).wait(1).to({x:35.85},0).wait(1).to({x:38.8},0).wait(1).to({x:41.85},0).wait(1).to({x:44.9},0).wait(1).to({x:47.95},0).wait(1).to({x:51},0).wait(1).to({x:54.05},0).wait(1).to({x:57.1},0).wait(1).to({x:60.15},0).wait(1).to({x:63.15},0).wait(1).to({x:66.2},0).wait(1).to({x:69.25},0).wait(1).to({x:72.25},0).wait(1).to({x:75.3},0).wait(1).to({x:78.3},0).wait(1).to({x:81.3},0).wait(1).to({x:84.3},0).wait(1).to({x:87.35},0).wait(1).to({x:90.35},0).wait(1).to({x:93.35},0).wait(1).to({x:96.2},0).wait(1).to({x:97.75},0).wait(1).to({x:99.3},0).wait(1).to({x:100.8},0).wait(1).to({x:102.35},0).wait(1).to({x:103.85},0).wait(1).to({x:105.4},0).wait(1).to({x:106.9},0).wait(1).to({x:108.45},0).wait(1).to({x:109.95},0).wait(1).to({x:111.5},0).wait(1).to({x:113},0).wait(1).to({x:114.5},0).wait(1).to({x:116.05},0).wait(1).to({x:117.55},0).wait(1).to({x:119.05},0).wait(1).to({x:120.5},0).wait(1).to({x:122.05},0).wait(1).to({x:123.55},0).wait(1).to({x:125.05},0).wait(1).to({x:126.6},0).wait(1).to({x:134.25},0).wait(1).to({x:141.9},0).wait(1).to({x:149.55},0).wait(1).to({x:157.2},0).wait(1).to({x:164.8},0).wait(1).to({x:172.4},0).wait(1).to({x:180.05},0).wait(1).to({x:187.65},0).wait(1).to({x:195.2},0).wait(1).to({x:202.8},0).wait(1).to({x:210.35},0).wait(1).to({x:217.95},0).wait(1).to({x:225.5},0).wait(1).to({x:233.05},0).wait(1).to({x:240.55},0).wait(1).to({x:248.1},0).wait(1).to({x:255.6},0).wait(1).to({x:263.15},0).wait(1).to({x:270.65},0).wait(1).to({x:278.15},0).wait(1).to({x:285.6},0).wait(1).to({x:293.1},0).wait(1).to({x:300.55},0).wait(1).to({x:308},0).wait(1).to({x:315.45},0).wait(1).to({x:322.9},0).wait(1).to({x:330.35},0).wait(1).to({x:337.75},0).wait(1).to({x:345.15},0).wait(1).to({x:352.55},0).wait(1).to({x:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back_1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({x:128},0).wait(1).to({x:136},0).wait(1).to({x:144},0).wait(1).to({x:152},0).wait(1).to({x:160},0).wait(1).to({x:168},0).wait(1).to({x:176},0).wait(1).to({x:184},0).wait(1).to({x:192},0).wait(1).to({x:200},0).wait(1).to({x:208},0).wait(1).to({x:216},0).wait(1).to({x:224},0).wait(1).to({x:232},0).wait(1).to({x:240},0).wait(1).to({x:248},0).wait(1).to({x:256},0).wait(1).to({x:264},0).wait(1).to({x:272},0).wait(1).to({x:280},0).wait(1).to({x:288},0).wait(1).to({x:296},0).wait(1).to({x:304},0).wait(1).to({x:312},0).wait(1).to({x:320},0).wait(1).to({x:328},0).wait(1).to({x:336},0).wait(1).to({x:344},0).wait(1).to({x:352},0).wait(1).to({x:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Слой_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_16
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.9333},0).wait(1).to({alpha:1},0).wait(40));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.finish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_213 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(213).call(this.frame_213).wait(1));

	// Слой_16_obj_
	this.Слой_16 = new lib.Монтажный_кадр_1_Слой_16();
	this.Слой_16.name = "Слой_16";
	this.Слой_16.parent = this;
	this.Слой_16.depth = 0;
	this.Слой_16.isAttachedToCamera = 0
	this.Слой_16.isAttachedToMask = 0
	this.Слой_16.layerDepth = 0
	this.Слой_16.layerIndex = 0
	this.Слой_16.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_16).wait(160).to({regX:120,regY:200,x:120,y:200},0).wait(54));

	// text_1_obj_
	this.text_1 = new lib.Монтажный_кадр_1_text_1();
	this.text_1.name = "text_1";
	this.text_1.parent = this;
	this.text_1.setTransform(-11.5,200,1,1,0,0,0,-11.5,200);
	this.text_1.depth = 0;
	this.text_1.isAttachedToCamera = 0
	this.text_1.isAttachedToMask = 0
	this.text_1.layerDepth = 0
	this.text_1.layerIndex = 1
	this.text_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({regX:174.3,x:174.3},0).wait(88).to({_off:true},1).wait(124));

	// back_1_obj_
	this.back_1 = new lib.Монтажный_кадр_1_back_1();
	this.back_1.name = "back_1";
	this.back_1.parent = this;
	this.back_1.setTransform(120,200,1,1,0,0,0,120,200);
	this.back_1.depth = 0;
	this.back_1.isAttachedToCamera = 0
	this.back_1.isAttachedToMask = 0
	this.back_1.layerDepth = 0
	this.back_1.layerIndex = 2
	this.back_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back_1).wait(1).to({regX:240,x:240},0).wait(88).to({_off:true},1).wait(124));

	// text_2_obj_
	this.text_2 = new lib.Монтажный_кадр_1_text_2();
	this.text_2.name = "text_2";
	this.text_2.parent = this;
	this.text_2.depth = 0;
	this.text_2.isAttachedToCamera = 0
	this.text_2.isAttachedToMask = 0
	this.text_2.layerDepth = 0
	this.text_2.layerIndex = 3
	this.text_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(62).to({regX:120.5,regY:44.4,x:120.5,y:44.4},0).wait(111).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},12).wait(29));

	// product_obj_
	this.product = new lib.Монтажный_кадр_1_product();
	this.product.name = "product";
	this.product.parent = this;
	this.product.setTransform(120,200,1,1,0,0,0,120,200);
	this.product.depth = 0;
	this.product.isAttachedToCamera = 0
	this.product.isAttachedToMask = 0
	this.product.layerDepth = 0
	this.product.layerIndex = 4
	this.product.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.product).to({_off:true},175).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-141,491.5,570.8);
// library properties:
lib.properties = {
	id: '209A6DD22EE14F4DBCE4CC249DA572F2',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/finish_atlas_.png", id:"finish_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['209A6DD22EE14F4DBCE4CC249DA572F2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;