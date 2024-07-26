<template>
  <div class="box_right">
    <div class="box_border">
      <div class="home_block">
        <!-- 格言 -->
        <p class="Awords"><b>叫醒你的是闹钟,还是梦想？</b></p>
        <p style="text-align: right;color: #fff">——每日赠言</p>
        <hr style="color:#fff;margin-bottom: 0;">
        <!-- 更新日志 -->
        <div class="updatas col-12 col-md-8">
          <p style="background-color: #161616;color: #fff;margin: 0;line-height: 40px;font-size: 22px;"><b>更新日志</b></p>
          <ul>
            <li v-for="item in logs" :key="item.date">
            <table style="width: 100%;">
                <thead style="background-color: #666">
                    <tr><th>{{ item.date }}</th></tr>
                </thead>
                <tbody>
                    <tr v-for="(logs,index) in item.imformation" :key="index"><th style="color:#ebebeb;padding-left: 20px;">·&nbsp;{{ logs }}</th></tr>
                </tbody>
            </table>
            </li>
          </ul>
          <div class="inpt_box" type="text">
            <div class="time-now">
              <div>{{ currentDate }}</div>
              <div>{{ currentTime }}</div>
            </div>
            <input id="updateText" type="text" class="text_box" placeholder="非管理者日志不会被保存">
            <a class="btn text_button" @click="updateLogs">上传</a>
          </div>
        </div>
        <!-- 页面反馈 -->
        <div class="feedback-operator col-md-4">
            <div class="questions"><p style="text-align: center;">我的个人网页可还美观？</p></div>
            <div class="answers">
                <button class="yes">尚可入眼<br>（num）</button>
                <button class="no">完全不行<br>（num）</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      logs: [{
        date: '2023.11.30',
        imformation: ['编写“首页”结构', '添加“每日赠言”,每天随机一条，JS方法待完善', '添加“日志内容”记录历程', '添加反馈窗,记录访客情况，长期保存数据方法待查，JS方法待完善', '添加简历链接：为避免花哨，由GPT直接生成，之后视情况更改']
      }, {
        date: '2023.11.29',
        imformation: ['更新“音乐”界面呈现方式', '按钮排布在下方时手机端呈现级差，且浏览器比例较扁时按不到', '改成和唱碟登高且取消Play按钮，将方法安排在唱碟上', '添加唱碟在音乐播放时的动画效果']
      }, {
        date: '2023.11.28',
        imformation: ['“音乐”界面按钮功能实现：上一首、下一首、Play/Pause', '给遥控窗添加按钮效果：关闭背景和声音的功能', '设置遥控窗手机端隐藏，实在太挡屏幕、占镜头']
      }, {
        date: '2023.11.27',
        imformation: ['版权声明孤零零太单调，添加godot游戏项目选项', '调整颜色强调', '游戏项目采用超链接页面跳转', '项目页有点多余，但暂不做考虑']
      }, {
        date: '2023.11.26',
        imformation: ['编辑背景', '使用vedio视频背景', '设置手机端和电脑端两个背景，手机端考虑到性能不加视频', '调整css样式让视频铺满背景', '添加左侧遥控窗并初定尺寸和颜色', '遥控窗分区并缩小上半区，使用绝对定位把头像突出去', '按钮部分分为两块，页面设置和版权声明']
      }, {
        date: '2023.11.25',
        imformation: ['梦开始的地方，创建工程文件', '架构top-nav(顶部导航)', '采用bootstrap实现手机端收起到按钮', '采用Vue的组件替换实现三个(暂时先三个)页面的跳转', '导入化名的LOGO', '调整配色']
      }
      ],
      currentDate: '',
      currentTime: ''
    }
  },
  methods: {
    formattedDate () {
      const date = new Date()
      const year = date.getFullYear()
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const day = date.getDate().toString().padStart(2, '0')

      // 格式化日期为yyyy.MM.dd的格式
      const formattedDate = `${year}.${month}.${day}`

      return formattedDate
    },
    formattedTime () {
      const date = new Date()
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')
      const seconds = date.getSeconds().toString().padStart(2, '0')

      // 格式化时间为hh.mm.ss的格式
      const formattedTime = `${hours}:${minutes}:${seconds}`

      return formattedTime
    },
    updateLogs () {
      var date = this.currentDate
      var texts = document.getElementById('updateText').value
      var hasdate = this.logs.some(item => item.date === date)
      if (hasdate) {
        var changeitem = this.logs.find(item => item.date === date)
        changeitem.imformation.push(texts)
      } else {
        var newitem = { date: date, imformation: [texts] }
        this.logs.unshift(newitem)
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.currentDate = this.formattedDate()
      this.currentTime = this.formattedTime()
    }, 500)
  }
}
</script>

