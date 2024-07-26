<template>
    <div class='box_right'>
            <div class='box_border'>
                <div class='div_show'>
                    <!-- 按钮 -->
                    <div class='music_button'>
                        <div class='button_outside'>
                            <img @click='musicLast' src='@/assets/Art/image/音乐播放器/上一曲.png' alt='' width='120px' height='120px'>
                        </div>
                        <div class='button_outside' style='flex:1'>
                            <div class='image_border' id='musicAlbum'>
                                <img id='albumImage' @click='musicPlay' :src='currentImage' width='300px' height='300px'>
                            </div>
                        </div>
                        <div class='button_outside'>
                            <img @click='musicNext' src='@/assets/Art/image/音乐播放器/下一曲.png' alt='' width='120px' height='120px'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'MusicPage',
    props: ['musicList', 'musicCurrentIndex'],
    methods: {
        musicPlay() {
            var recordDiv = document.getElementById('musicAlbum')
            var record = recordDiv.querySelector('#albumImage')
            var BGaudio = document.getElementById('BGaudio')
            if (recordDiv.style.animationPlayState === 'paused') {
                recordDiv.style.animationPlayState = 'running'
                record.style.animationPlayState = 'running'
                BGaudio.play()
            } else {
                recordDiv.style.animationPlayState = 'paused'
                record.style.animationPlayState = 'paused'
                BGaudio.pause()
            }
        },
        musicNext() {
            var recordDiv = document.getElementById('musicAlbum')
            recordDiv.classList.add('slide')
            this.$emit('musicindex', true)// 触发数据更新
            setTimeout(() => {
                recordDiv.classList.remove('slide')
            }, 200)
        },
        musicLast() {
            var recordDiv = document.getElementById('musicAlbum')
            recordDiv.classList.add('slide')
            this.$emit('musicindex', false)// 触发数据更新
            setTimeout(() => {
                recordDiv.classList.remove('slide')
            }, 200)
        }
    },
    computed: {
        currentImage() {
            var album = this.musicList[this.musicCurrentIndex].album
            return album ? require(`@/assets/Art/image/${album}`) : require(`@/assets/Art/image/图标3.png`)
        }
    }
}
</script>
