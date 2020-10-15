// 웹 페이지로부터 두 수가 오기를 기다린다.
onmessage = function (e) {
	var result;
	// Lab13-2 에서 메세지로 전달한 op1 받아오기
	var op1 = parseInt(e.data.op1);
	// Lab13-2 에서 메세지로 전달한 op1 받아오기
	var op2 = parseInt(e.data.op2);
	// 곱셈하기
	result = op1*op2;
	// 결과 메세지 이벤트를 사용하여 전달
	postMessage(result);
}
