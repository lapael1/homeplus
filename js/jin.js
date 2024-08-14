window.addEventListener("load", function () {
  document.getElementById("footer_button").addEventListener("click", function () {
    const footerCompany = document.querySelector(".footer_company_info");
    const footerImg = document.querySelector(".footer_img");
    if (footerCompany.style.display === "none" || footerCompany.style.display === "") {
      footerCompany.style.display = "block";
      footerImg.style.transform = "scaleY(-1)";
    } else {
      footerCompany.style.display = "none";
      footerImg.style.transform = "none";
    }
  });
  const body = document.querySelector("body")
const modal = document.querySelector(".modal-wrap")
const modalClose = document.querySelector(".modal-close")
// isOpen 값에 따라 스크롤을 제어하는 함수
function controlScroll(isOpen){
if(isOpen){
    body.style.overflow = "hidden";
}else{
    body.style.overflow = "auto";
}
}
// 초기 모달창 상태 설정
const isOpen = true
controlScroll(isOpen)
modalClose.addEventListener("click",function(){
    modal.style.display = "none"
    // 모달창이 닫힐 때는 스크롤을 다시 활성화
    controlScroll(false)
})
});
