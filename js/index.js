
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
