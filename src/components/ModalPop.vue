<template>
      <div class="modal-wrap">
        <div class="modal-main">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <h1>마시그래이 클론코딩</h1>
            <p>
                &middot; 이 사이트는 <b>스터디용</b>으로 제작되었으며 리소스는 <b>원저작자</b>에게 있습니다.<br>
                &middot; 해당 사이트 관련 문제사항 발생시 즉시 삭제하겠습니다.<br>
                &middot; 문의 사항이 있으실 경우
                <strong><a href="mailto:scnly222@naver.com">[scnly222@naver.com]</a></strong> 으로 연락부탁드립니다.<br>
                &middot; 본 사이트는 Chrome 에 최적화되어 있습니다.
            </p>
            <button class="modal-close"></button>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import {
        onMounted
    } from 'vue';
    export default {
        setup() {
            onMounted(() => {
                // 안내창 기능
                // 추가기능 : 스크롤바 없애기
                $('html').css('overflow', 'hidden');

                let modalWrap = $('.modal-wrap');
                let modalClose = $('.modal-close');
                modalClose.click(function () {
                    modalWrap.stop().fadeOut(100);
                    // 추가기능 : 스크롤바 살리기
                    $('html').css('overflow', 'auto');
                });

                let modalMain = $('.modal-main');
                // 내용 배경 클릭
                modalMain.click(function (event) {
                    // 클릭 정보 전달 막기
                    event.stopPropagation();
                });
                // 전체 배경 클릭
                modalWrap.click(function () {
                    modalWrap.stop().fadeOut(100);
                    // 추가기능 : 스크롤바 살리기
                    $('html').css('overflow', 'auto');
                });

            });
            return {}
        }
    }
</script>

<style>
.modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99999;
}

.fa {
    position: absolute;
    display: block;
    top: 24%;
    right: 37%;
    font-size: 130px;
    color: rgba(250, 19, 19, 0.1);
    z-index: -9;
}

.modal-main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 220px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 15px 0px rgba(207, 174, 197, 0.212);
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.modal-main h1 {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    color: #555;
    padding-top: 10px;
}

.modal-main p {
    text-align: left;
    font-size: 16px;
    font-weight: 300;
    color: #333;
    line-height: 1.8;
    padding: 20px;
}

.modal-main b {
    font-weight: 600;
    color: #ff4a50;
}

.modal-main strong {
    font-weight: 500;
    font-size: 17px;
    padding: 2px;
    line-height: 16px;
}

.modal-close {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 16px;
    top: 16px;
    border: 0;
    cursor: pointer;
    background: url('@/assets/images/cancel.png') no-repeat center;
    background-size: cover;
    transition: transform 0.5s;
}

.modal-close:hover {
    transform: rotate(90deg);
}
</style>