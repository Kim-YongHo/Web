/* subMenu.js */

$(function(){
$('#showAllMenu').on('click', function(){
    if($(this).text()=='전체보기 ▼'){

        $('.subMenuItem').slideDown(1);
        $('#subMenuBox').css('visibility', 'visible')

        //$('#subMenuItem').css('visibility', 'visible') //자체 영역이 없이 생성
        //전체보기는 숨겨있는 상태이므로 메뉴를 visible로 변경
        //메뉴 text를 메뉴닫기 ▲로 변경
        $(this).text('메뉴닫기 ▲').css('color','blue')

    }
    else {
        //메뉴닥기 이므로 메뉴 속성을 hidden으로 변경
        $('.subMenuItem').slideUp(1);
         $('#subMenuBox').css('visibility', 'hidden')
         $(this).text('전체보기 ▼').css('color','black')

        //메뉴 text를 전체보기로 변경
    }
});
});