//your code here
let arr =  ['Tajmahal',
			'Victoria Memorial',
			'The Virupaksha Temple'
		   ];
let arrless =[];
let mp = {};


for(let i=0; i<arr.length; i++)
{

	let articlelessitem = arr[i].replace(regex,"").trim();
	arrless.push(articlelessitem);
	mp[articlelessitem] = arr[i];
}
arrless.sort();
let ans = []

for(let i of arrless)
	{
		ans.push(mp[i]);
	}

console.log(ans);


