import { createStore } from 'vuex'
// 모든 Vue 화면에서 공유되어질 state(데이터) 관리 목적
import axios from 'axios';


export default createStore({

  // state : 데이터를 모아서 관리하는 객체
  state: {
    menuData: []
  },

  // actions: 서버 및 파일연동, 성공/실패 체크후 mutation 실행
  actions: {
    // 메뉴 데이터 json 로딩
    fetchMenudata({commit}){
      axios.get('/data/menu.json')
        .then(response => {
          // console.log("axios:", response.data);
          commit('MENU_DATA_INIT', response.data);
        })
      .catch(err => console.log(err));
    }
  },
  
  // mutations :  state(데이터) 업데이트 자리
  mutations: {
    MENU_DATA_INIT(state, payload){
      state.menuData = payload          
    }
  },
  
  // getters : state 를 컴포넌트에 전달, 컴포넌트의 computed 처리
  getters: {
    getMenuData(state){
      // console.log("step4: getters",state.menuData)
      return state.menuData;
    }
  }
})