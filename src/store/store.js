import { createStore } from 'vuex'
// 모든 Vue 화면에서 공유되어질 state(데이터) 관리 목적

export default createStore({

  // state : 데이터를 모아서 관리하는 객체
  state: {
    menuData: [
      {
        mainstr: '마시그래이',
        mainlink: '#',
        sub:[
          {substr:'회사소개', sublink:'#'},
          {substr:'연혁', sublink:'#'},
          {substr:'CEO인사말', sublink:'#'},
          {substr:'BI / 비전', sublink:'#'},
          {substr:'오시는길', sublink:'#'}
        ]
      },
      {
        mainstr: '메뉴',
        mainlink: '#',
        sub:[
          {substr:'신메뉴', sublink:'#'},
          {substr:'커피', sublink:'#'},
          {substr:'음료', sublink:'#'},
          {substr:'디저트', sublink:'#'},
          {substr:'MD상품', sublink:'#'}
        ]
      },
      {        
        mainstr: '프랜차이즈',
        mainlink: '#',
        sub:[
          {substr: '가맹안내', sublink:'#'},
          {substr: '가맹절차', sublink:'#'},
          {substr: '매장인테리어', sublink:'#'},
          {substr: '커피 아카데미', sublink:'#'},
          {substr: '가맹상담신청', sublink:'#'}
        ]
      },
      {       
        mainstr: '매장안내',
        mainlink: '#',
        sub:[
          {substr: '매장안내', sublink:'#'}
        ]
      },
      {       
        mainstr: '공지사항',
        mainlink: '#',
        sub:[
          {substr: '공지사항', sublink:'#'},
          {substr: '이벤트', sublink:'#'}
        ]
      },
      {               
        mainstr: '고객의 소리',
        mainlink: '#',
        sub:[
          {substr: 'FAQ', sublink:'#'},
          {substr: 'Q&amp;A', sublink:'#'},
          {substr: '케이터링', sublink:'#'}
        ]
      }
    ]
  },

  // actions: 서버 및 파일연동, 성공/실패 체크후 mutation 실행
  actions: {},
  
  // mutations :  state(데이터) 업데이트 자리
  mutations: {},
  
  // getters : state 를 컴포넌트에 전달, 컴포넌트의 computed 처리
  getters: {
    getMenuData(state){
      return state.menuData;
    }
  }
})