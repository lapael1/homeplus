window.addEventListener("load", function () {
    document.getElementById("footer_button").addEventListener("click", function() {
      
      const footerCompany = document.querySelector(".footer_company_info");
      const footerImg = document.querySelector(".footer_img");
      if(footerCompany.style.display === "none" || footerCompany.style.display === '' ){
          footerCompany.style.display = "block";
          footerImg.style.transform = "scaleY(-1)";
      }else{
          footerCompany.style.display = "none";
          footerImg.style.transform = "none"
      }
    });
    
    
  
  });
  