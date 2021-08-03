/* slideShow.js */

$(function(){
    // 이동한 이미지의 index 값 저장 (현재 화면에서 보여지는 이미지의 index)
    var movedIndex = 0 ;

    //슬라이드 패널을 움직여주는 함수

    function moveSlide(index){
        //전달받은 index값을 moveIndex에 저장
        movedIndex = index;

        //슬라이드 이동
        var moveLeft = -(index * 1280) //인데스에 가로 길일을 곱해서 그림을 이동 (첫번째 그림 기준으로 왼쪽이동을 index로)
        $('#slidePanel').animate({'left':moveLeft},'slow')
    }
        //prev 버튼 클릭하면 앞으로 이동
		$('#prevButton').on('click', function(){
				if(movedIndex != 0) //첫번째가 아니라면
					movedIndex = movedIndex - 1; //인덱스 값 -1

				moveSlide(movedIndex); //인덱스값 전달
		});

		//next 버튼 클릭하면 뒤로 이동
		$('#nextButton').on('click', function(){
				if(movedIndex != 4) //마지막이 아니라면
					movedIndex = movedIndex + 1; //인덱스 값 +1

				moveSlide(movedIndex); //인덱스값 전달
		});

        $('.controlButton').each(function(index){ //사용하고 있는 인덱스 값이 넘어옴
            $(this).hover( //마우스 들어갈 떄 나올 때
                function(){ //들어갈 때
                    $(this).attr('src','image/controlButton2.png');
                },
                function(){ //나올때
                    $(this).attr('src','image/controlButton1.png');
                }
            ); // hover 끝

         //클릭하면 현재 인덱스 값을 moveSlide() 함수에 전달
         $(this).on('click',function(){
            moveSlide(index);
         });

        }); //each 끝



});