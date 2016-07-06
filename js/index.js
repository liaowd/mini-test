
// 匿名函数与非匿名函数的不同？
var nimingzidiao=(function(){
	function nei(){
		console.log("匿名自调函数内的普通函数")
		console.log(this)
	}
	return nei;
})()
nimingzidiao()     //this指window
new nimingzidiao()  //返回的函数内的this指函数本身

var niming=function(){
	function nei(){
		console.log("匿名函数内的普通函数")
		console.log(this)
	}
	return nei;
}
niming().call()

// 以上两个函数执行效果一样。


// 回调函数
function hd(callback){
	console.log("do something here !");
	setTimeout(function(){
		console.log("这里是一个耗时的函数，或者需要等待的函数？")
		callback();
	},2000)
}

hd(function(){
	console.log("这是别的事情做完后，回调的函数")
});

