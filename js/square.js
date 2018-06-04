window.onload = function() {
	//开始闪，结束闪
	var start = document.getElementById("start-light");
	var end = document.getElementById("end-light");
	var gridArray = document.getElementsByClassName("grid-item");
	var gridSelected = new Array(3);
	var changeTime;
	var clearTime;
	//重置格子颜色
	function reset() {
		//在每次点击时，将已改变颜色的方块还原
		for(var a = 0; a < 9; a++) {
			if(gridArray[a].style.backgroundColor != "#FFA600") {
				gridArray[a].style.backgroundColor = "#FFA600";
			}
		}
	}
	//“开始闪”被点击时触发的事件
	start.onclick = function() {
		reset();
		start.style.backgroundColor = "#FFA600";
		start.style.color = "#ffffff";
		//end.style.backgroundColor = "#ffffff";
		//end.style.color = "#FFA600";
		changeTime = setInterval(function change() {
			reset(); //保证每次只有三个格子颜色变化，在每次变化前重置格子颜色
			//随机生成颜色
			//十六进制颜色组成
			var colorValue = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F";
			var colorArray = colorValue.split(',');
			var colorArr = new Array(3);
			//六位数的颜色值
			for(var n = 0; n < 3; n++) {
				var colorVal = "#"; //此变量声明在for循环内部
				for(var i = 0; i < 6; i++) {
					//Math.floor() 下舍入；math.random()返回值【0，1），随机选中十六个颜色组成数值中的6个
					colorVal += colorArray[Math.floor(Math.random() * 16)];

				}
				colorArr[n] = colorVal;
			}
			//随机选中三个格子
			for(var m = 0; m < 3; m++) {
				for(var j = 0; j < 3; j++) {
					gridSelected[j] = gridArray[Math.floor(Math.random() * 9)];
				}
				gridSelected[m].style.backgroundColor = colorArr[m];
			}
		}, 1000);

	}
	//“结束闪”被点击时触发的事件
	end.onclick = function() {
		reset();
		end.style.backgroundColor = "#FFA600";
		end.style.color = "#ffffff";
		start.style.backgroundColor = "#ffffff";
		start.style.color = "#FFA600";
		clearTime = clearInterval(changeTime);
	}
}

function mouseOut() {
	//鼠标离开“结束闪”时，按钮变为白色
	var end = document.getElementById("end-light");
	end.style.backgroundColor = "#ffffff";
	end.style.color = "#FFA600";
}