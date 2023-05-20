let next = 0, next2 = 0;


function next_2()
{
	next++;
	if(next == 3) next = 0;
	
	switch(next)
	{
		case 0: 
			document.getElementById("rectangleImg").src="Image/Rectangle_19.jpg";
			break;
		case 1:
			document.getElementById("rectangleImg").src="Image/s_1_im_2.png";
			break;
		case 2:
			document.getElementById("rectangleImg").src="Image/s_1_im_3.png";
			break;
	}
	// console.log(next);
}

function back_2()
{
	next--;
	if(next == -1) next = 2;
	
	switch(next)
	{
		case 0: 
			document.getElementById("rectangleImg").src="Image/Rectangle_19.jpg";
			break;
		case 1:
			document.getElementById("rectangleImg").src="Image/s_1_im_2.png";
			break;
		case 2:
			document.getElementById("rectangleImg").src="Image/s_1_im_3.png";
			break;
	}
	// console.log(next);
}

function next_3()
{
	next2++;
	if(next2 == 3) next2 = 0;
	
	switch(next2)
	{
		case 0: 
			document.getElementById("s_2Img").src="Image/s_2_im_1.png";
			break;
		case 1:
			document.getElementById("s_2Img").src="Image/s_2_im_2.png";
			break;
		case 2:
			document.getElementById("s_2Img").src="Image/s_2_im_3.png";
			break;
	}
}

function back_3()
{
	next2--;
	if(next2 == -1) next2 = 2;
	
	switch(next2)
	{
		case 0: 
			document.getElementById("s_2Img").src="Image/s_2_im_1.png";
			break;
		case 1:
			document.getElementById("s_2Img").src="Image/s_2_im_2.png";
			break;
		case 2:
			document.getElementById("s_2Img").src="Image/s_2_im_3.png";
			break;
	}
}

let x = 1, y = 1;

function forMedia()
{
	if(window.matchMedia('(min-width: 375px) and (max-width: 1500px)').matches)
	{
		function rectangle()
		{
			if(x == 3)
			{
				document.getElementById("rectangleImg").src="Image/Rectangle_19.jpg";
				x = 1;
			}
			else 
			if(x == 1)
			{
				document.getElementById("rectangleImg").src="Image/s_1_im_2.png";
				x = 2;
			}
			else
			if(x == 2)
			{
				document.getElementById("rectangleImg").src="Image/s_1_im_3.png";
				x = 3;
			}
		}
		
		setInterval(rectangle, 5000); 
		
		function s_2()
		{
			if(y == 3)
			{
				document.getElementById("s_2Img").src="Image/s_2_im_1.png";
				y = 1;
			}
			else 
			if(y == 1)
			{
				document.getElementById("s_2Img").src="Image/s_2_im_2.png";
				y = 2;
			}
			else
			if(y == 2)
			{
				document.getElementById("s_2Img").src="Image/s_2_im_3.png";
				y = 3;
			}
		}
		
		setInterval(s_2, 5000);
	}
}
setTimeout(forMedia, 10);