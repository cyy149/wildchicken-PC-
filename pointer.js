var pointer = {
	ele:document.createElement("div"),
	init:function(){
		this.ele.style.position = "fixed";
		this.ele.style.top = "20px";
		this.ele.style.left = "20px";
		this.ele.style.fontFamily = "雅黑";
		this.ele.style.fontSize = "30px";
		this.ele.style.width = "250px"
		this.ele.style.height = "50px";
		this.ele.style.border = "2px dashed Blue";
		this.ele.style.borderRadius = "25px";
		this.ele.style.padding= "10px 5px 0px";
		this.ele.innerHTML = "你的得分："
		document.body.appendChild(this.ele);
	},
	addMark:function(n){
		game.score += n;
		this.ele.innerHTML = "你的得分：" + game.score;

	}

}
