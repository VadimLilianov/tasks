function fib(n){
	var first = 1, second = 1, i=1;
	for(i; i<=n; i++)
	{
		next = first + second;
		first = second;
		second = next;
	}
	return second;
}

alert( fib(10));
alert( fib(5));