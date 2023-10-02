//your JS code here. If required.
		function secondHighest(arr) {
			//Write your code here
			/*const allEqual = (arr) => arr.every(v => v === arr[0]); 
			if(arr.length==0 || arr.length==1 || allEqual(arr) == true){
				return -Infinity;
			}
			arr.sort();  
			return arr[arr.length-2];  */
			// let max = -Infinity;
			// let maxIndex = 0;
			// for(let i=0;i<arr.length;i++){
			// 	if(arr[i] > max){
			// 		max = arr[i];
			// 		maxIndex = i;
			// 	}
			// }
			// let res= 0;
			// for(let i=0;i<arr.length;i++){
			// 	if(i!= maxIndex && arr[i]!=max){
					
			// 	}
			// }
			const sortedArray = arr.sort((v1, v2)=> v2 - v1);
  return sortedArray[1];
		}   

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();
