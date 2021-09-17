let blocks = document.querySelectorAll(".top-footer__block");

for (let block of blocks) {
	if(!block.classList.contains("top-footer__block_last"))
	block.addEventListener("click", openBlock);
	function openBlock(e) {
		alert(1);
		if(window.innerWidth < 768) {
			block.classList.toggle("open");
		}
	}
}