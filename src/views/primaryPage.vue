<template>
    <div>
        <!-- 背景 -->
        <div class="main_background">
            <video class="d-none d-md-block" id="main_background" autoplay loop muted poster="../assets/Art/image/元气-唯美科幻宇宙星球星空.jpg">
                <source src="../assets/Art/video/元气-唯美科幻宇宙星球星空.mp4">
            </video>
        </div>

        <!-- 顶导航栏 -->
        <nav class="navbar fixed-top navbar-expand-md top_nav">
            <div class="container-fluid">
                <img class="navbar-brand" src="../assets/Art/image/顾霖轩.png" alt="LOGO">
                <button style="background-color: #c6baa9;" class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">导航栏</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1">
                            <li class="nav-item" v-for="page in pageArray" :key="page.name">
                                <router-link class="nav-link" aria-current="page" :to="page.router">{{ page.name }}</router-link>
                            </li>
                            <!-- 隔断 -->
                            <li class="nav-item" style="flex: 1;"></li>
                            <!-- 跳转链接独自设计样式 -->
                            <li class="nav-item" style="border-left: 1px solid #fff;">
                                <a class="nav-link" aria-current="page" href="../peosonalResum" target="_blank" style="color: #fff;font-weight: 100;cursor: alias;">个人简历↗</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 左侧导航栏 -->
        <div class="box_left">
            <div class="my-profile-photo text-center"><img width="100px" height="100px" src="../assets/Art/image/图标3.png" alt="0.0"></div>
            <div class="list-group-group mt-2 mb-2">
            <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" @click="background_click(true)">背景: <span :style="background_button_span_style">{{ background ? "开" : "关" }}</span></button>
                <button type="button" class="list-group-item list-group-item-action" @click="background_click(false)">背景音乐: <span :style="background_music_button_span_style">{{ background_music ? "开" : "关" }}</span></button>
            </div>
            <hr style="margin: 1px;">
            <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" style="color: #990000;">Godot 游戏项目</button>
                <button type="button" class="list-group-item list-group-item-action" disabled style="flex-direction: column">所有内容均不参与盈利，若有侵权请联系我删除<span style="font-size: 9px;cursor: text;">邮箱：2495802072@qq.com</span></button>
            </div>
            </div>
        </div>

        <audio autoplay :src='currentAudio' id="BGaudio" ref="audioRef"></audio>

        <!-- 右侧主页面 -->
        <transition name="page-fade">
            <router-view :music-list="musicList" :music-current-index="musicCurrentIndex" @musicindex="ichange"></router-view>
            <!-- <router-view></router-view> -->
        </transition>

        <!-- 页脚 -->
        <footer><span>2023-11-25<br> &copy; 秦彦悦 All rights reserved.</span></footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            background: true,
            background_music: false,
            background_button_span_style: {
                color: '#b9b900'
            },
            background_music_button_span_style: {
                color: '#a5a5a5'
            },
            pageArray: [
                {
                    name: '首页',
                    router: '/primaryPage/home'
                }, {
                    name: '背景音乐',
                    router: '/primaryPage/music'
                }, {
                    name: '项目列表',
                    router: '/primaryPage/project'
                }],
            musicList: [{
                name: '碎镜',
                link: '碎镜.mp3',
                album: '歌曲专辑图像/碎镜.jpg'
            }, {
                name: 'Stuttering',
                link: 'Stuttering.mp3'
            }, {
                name: '原点',
                link: '原点.mp3'
            }],
            musicCurrentIndex: 0,
            uesrs: [{
                userName: '顾霖轩',
                passwords: 'qyy20021207qq',
                manager: true
            }]
        }
    },
    methods: {
        background_click: function (flag) {
            if (flag) { // 按钮“背景”
                this.background = !this.background
                if (this.background) {
                    this.background_button_span_style = { color: '#b9b900' }
                    console.log(this.background)
                    document.getElementById('main_background').style.visibility = 'visible'
                } else {
                    this.background_button_span_style = { color: '#a5a5a5' }
                    console.log(this.background)
                    document.getElementById('main_background').style.visibility = 'hidden'
                }
            } else { // 按钮“BGM”
                var BGaudio = document.getElementById('BGaudio')
                this.background_music = !this.background_music
                if (this.background_music) {
                    this.background_music_button_span_style = { color: '#b9b900' }
                    // 打开声音
                    BGaudio.muted = false
                } else {
                    this.background_music_button_span_style = { color: '#a5a5a5' }
                    // 关闭声音
                    BGaudio.muted = true
                }
            }
        },
        ichange(flag) {
            if (flag) {
                this.musicCurrentIndex = (this.musicCurrentIndex + 1) % this.musicList.length
            } else {
                this.musicCurrentIndex = (this.musicCurrentIndex + this.musicList.length - 1) % this.musicList.length
            }
        },
        handleAudioLoaded() {
            this.$refs.audioRef.muted = true;
        }
    },
    computed: {
        currentAudio() {
            return require(`@/assets/Art/audio/${this.musicList[this.musicCurrentIndex].link}`)
        }
    },
    mounted() {
        document.addEventListener('DOMContentLoaded', () => {
            this.$refs.audioRef.muted = true;
        });
    }
}
</script>