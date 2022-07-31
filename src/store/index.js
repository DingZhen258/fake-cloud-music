import { createStore } from 'vuex'
import { getLyric } from '@/network/musicItem'
import { getPhoneLogin } from '@/network/login'
export default createStore({
  state: {
    musicList: [{ //播放列表
      al: {
        id: 19237,
        name: "等你等到我心痛 张学友精选",
        pic: 109951166860255520,
        picUrl: "https://p1.music.126.net/Frx9MSEa-t_QtBLNy2GDew==/109951166860255517.jpg",
        pic_str: "109951166860255517"
      },
      id: 190360,
      name: "等你等到我心痛",
      ar: [{ name: "张学友" }]
    }],
    lyricList: {},//储存歌词
    musicSheetId: null,
    musicListIndex: 0,//歌曲下标
    isPlay: true,//播放图标的显示
    isShowDetailPage: false,//详情页显示
    currentTime: 0,//audio的当前时间
    currentLyricIndex: 0,//当前具体歌词的下标
    duration: 0,//歌曲总时长
    isLogin: false,//判断登录情况
    isShowPlayer: true,
    playingIndex: -1,
    isShowSmallSongList: false//小歌单列表
    // datePageFlag: false
  },
  getters: {

  },
  mutations: {
    updatePageId(state, payload) {
      state.musicSheetId = payload
    },
    // 更新歌曲列表
    updateMusicList(state, payload) {
      state.musicList = payload
    },
    // 更新当前选中歌曲索引
    updateMusicListIndex(state, payload) {
      state.musicListIndex = payload
    },
    // 判断图标暂停播放图标 
    updateIsPlay(state, payload) {
      state.isPlay = payload
    },
    // 详情页的开关
    updateIsShowDetailPage(state) {
      state.isShowDetailPage = !state.isShowDetailPage
    },
    // 更新歌词
    updateLyric(state, payload) {
      state.lyricList = payload
    },
    // 更新歌曲当前时段
    updateCurrentTime(state, payload) {
      state.currentTime = payload
    },
    updateCurrentLyricIndex(state, payload) {
      state.currentLyricIndex = payload
    },
    updateduration(state, payload) {
      state.duration = payload
    },
    pushMusicList(state, payload) {
      state.musicList.push(payload)
    },
    updateIsLogin(state, payload) {
      state.isLogin = payload
    },
    updateIsShowPlayer(state, payload) {
      state.isShowPlayer = payload
    },
    updatePlayingIndex(state, payload) {
      state.playingIndex = payload
    },
    udateIsShowSmallSongList(state) {
      state.isShowSmallSongList = !state.isShowSmallSongList
    }
    // 判断歌曲详情页弹出
    // updatePageFlag(state, payload) {
    //   state.datePageFlag = payload
    // }
  },
  actions: {
    // 请求歌词列表
    async getCurrentLyric(context, id) {
      let res = await getLyric(id)
      context.commit('updateLyric', res.data.lrc)
    },
    // 请求登录信息
    async getLogin(context) {
      let res = await getPhoneLogin()
      console.log(res);
      return res
    }
  },
  modules: {
  }
})
