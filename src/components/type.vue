<template>
  <div id="type">
    <div id="type-box" style="width:374px;height: 500px;overflow: hidden;"></div>
  </div>
</template>

<script>
import '../assets/js/jquery.type.min.js' 

export default {
  name: 'Type',
  data() {
    return {
        valueRate: null
    }
  },
  mounted() {
		this.onloadType();
	},
	methods: {
		onloadType(){
      var titles = ['JavaScript', 'CSS', 'HTML', 'HTML5', 'JQuery', 'Vue', 'Angular', 'NodeJs', 'Mysql', 'Git'];
      var words = [];
      for(var i = 0; i < titles.length; i++) {
          words[i] = {
              'title' : titles[i],
              'url' : ''
          }
      };  
      var colors3 = ['#49B4E0', '#FCBDA2', '#EBADBD', '#D5C2AF', '#C0BDE5', '#CBCC7F', '#FFDA7F', '#8dd0c3', '#bbbfc6', '#a4d9ef', '#bbdb98'];

      $('#type-box').wordbox({
          isLead: false,    
          leadWord: null,
          words: words,
          colors: colors3,
          borderWidth: 2,
          isFixedWidth: true,
          width: '100%',
          height: 500
      });


      // 鼠标浮动加下划线
      $('#type-box .box a').hover(function(event) {            
          $(this).css({'text-decoration': 'underline'});
          event.stopPropagation();
      }, function(event) {
          $(this).css({'text-decoration': 'none'});
          event.stopPropagation();
      });
      // 鼠标浮动字体变大
      var fontSize = $('#box-responsive').css('font-size');
      $('#type-box .box a').hover(function(event) {  
          $(this).css({'font-size': '18px'});
          event.stopPropagation();
      }, function(event) {
          $(this).css({'font-size': fontSize});
          event.stopPropagation();
      });
		}
  }
}
</script>

<style>
#type-box{position:relative;}
.box{position:absolute;text-align:center;word-wrap:break-word;/*注意设置word-wrap属性*/overflow:hidden;border:2px solid #fff;}
.box a{color:#fff;text-decoration:none;display:inline-block;width:100%;height:100%; }
</style>
