

function EhasanSlider() {
	if (document.getElementsByClassName("slider_img_inner")[0] .classList.contains("active")){
	
	document.getElementsByClassName("slider_img_inner")[1] .classList.add("active")
	document.getElementsByClassName("slider_img_inner")[0] .classList.remove("active")
}
else if (document.getElementsByClassName("slider_img_inner")[1] .classList.contains("active")){
	
	document.getElementsByClassName("slider_img_inner")[2] .classList.add("active")
	document.getElementsByClassName("slider_img_inner")[1] .classList.remove("active")
}
else if (document.getElementsByClassName("slider_img_inner")[2] .classList.contains("active")){
	
	document.getElementsByClassName("slider_img_inner")[3] .classList.add("active")
	document.getElementsByClassName("slider_img_inner")[2] .classList.remove("active")
}

else if (document.getElementsByClassName("slider_img_inner")[3] .classList.contains("active")){
	
	document.getElementsByClassName("slider_img_inner")[4] .classList.add("active")
	document.getElementsByClassName("slider_img_inner")[3] .classList.remove("active")
}
else if (document.getElementsByClassName("slider_img_inner")[4] .classList.contains("active")){
	
	document.getElementsByClassName("slider_img_inner")[0] .classList.add("active")
	document.getElementsByClassName("slider_img_inner")[4] .classList.remove("active")
}};

setInterval(EhasanSlider,3000);
