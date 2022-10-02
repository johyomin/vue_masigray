<template>
    <section class="bevarage">
        <div class="inner">

            <div class="bevarage-top">
                <h2>MASIGRAY <b>MENU</b></h2>
                <span>마시그래이의 다양한 메뉴를 맛보세요</span>
            </div>

            <Swiper class="sw-bevarage" :modules="modules" :autoplay="{
            delay: 1000,
            speed: 1000,
            disableOnInteraction: false,
            }" :loop="true" :navigation="{
            prevEl: '.sw-bevarage-prev',
            nextEl: '.sw-bevarage-next'
            }" :pagination="{
            el: '.sw-bevarage-pg',
            type: 'fraction'
            }">
                <SwiperSlide> <a href="#">
                        <img src="@/assets/images/menu_slide01.png" alt="">
                    </a>
                </SwiperSlide>
                <SwiperSlide> <a href="#">
                        <img src="@/assets/images/menu_slide02.png" alt="">
                    </a>
                </SwiperSlide>
                <SwiperSlide> <a href="#">
                        <img src="@/assets/images/menu_slide03.png" alt="">
                    </a>
                </SwiperSlide>

                <!-- 좌우 버튼 -->
                <button class="sw-bevarage-prev"></button>
                <button class="sw-bevarage-next"></button>
                <!-- 콘트롤 -->
                <div class="sw-bevarage-cotrol">
                    <div class="sw-bevarage-pg"></div>
                </div>
            </Swiper>

        </div>
    </section>
</template>

<script>
    import {
        Autoplay,
        Navigation,
        Pagination
    } from 'swiper';
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        setup() {
            return {
                modules: [Autoplay, Navigation, Pagination]
            }
        }

    }
</script>

<style>
    .bevarage {
        position: relative;
        display: block;
        background: url('@/assets/images/main-menu-cover.jpg') no-repeat center;
        background-size: cover;

        padding: 100px 0;
    }

    .bevarage-top {
        position: relative;
        display: block;
    }

    .bevarage-top h2 {
        font-size: 40px;
        color: #000;
        text-align: center;
        font-weight: 400;
    }

    .bevarage-top h2 b {
        font-weight: 500;
    }

    .bevarage-top span {
        position: relative;
        display: block;
        text-align: center;
        font-size: 20px;
        color: #666;
        margin-top: 10px;
    }

    /* Bevarage 슬라이드 */
    .sw-bevarage {
        width: 100%;
        height: 560px;
    }

    .sw-bevarage a {
        position: relative;
        display: block;
    }

    .sw-bevarage a img {
        width: 100%;
        height: auto;
    }

    .sw-bevarage-prev {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 55px;
        height: 98px;
        background: url('@/assets/images/btn_arrow3.png') no-repeat 0 0;
        background-size: cover;

        cursor: pointer;
        border: 0;
        z-index: 9;
    }

    .sw-bevarage-next {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 55px;
        height: 98px;
        background: url('@/assets/images/btn_arrow3.png') no-repeat 100% 0;
        background-size: cover;

        cursor: pointer;
        border: 0;
        z-index: 9;
    }

    .sw-bevarage-cotrol {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        display: block;
        z-index: 9;
    }

    .sw-bevarage-pg {
        font-size: 12px;
        color: #000;
    }

    .sw-bevarage-pg .swiper-pagination-current {
        font-weight: 600;
    }

    @media all and (max-width:1000px) {
        .bevarage {
            padding: 10vw 0;
        }

        .bevarage-top h2 {
            font-size: 30px;
        }

        .bevarage-top span {
            font-size: 15px;
        }

        .sw-bevarage {
            height: 56vw;
        }

        .sw-bevarage-prev,
        .sw-bevarage-next {
            width: 5.5vw;
            height: 9.8vw;
        }
    }
</style>