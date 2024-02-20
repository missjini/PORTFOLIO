$(function() {
	
	/* .mySwiper */
    let swiper = new Swiper(".mySwiper", {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
        el: ".swiper-pagination",
		clickable: true,
        }
      });
	  
	/* 모달창 */  
		const openModalButton = document.getElementById("openModal");
        const modal = document.getElementById("myModal");
        const closeModalButton = document.getElementById("closeModal");

        openModalButton.addEventListener("click", function() {
            modal.style.display = "block";
        });

        closeModalButton.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }); 
});