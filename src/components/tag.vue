<template>
	<div class="zzsc-container">
		<div id='tag-cloud'></div>
	</div>
</template>

<script>
import '../assets/js/jquery.svg3dtagcloud.min.js' 

export default {
	name: 'Tag',
	data() {
		return {
			valueRate: null
		}
	},
  	mounted() {
		this.onload();
	},
	methods: {
		onload(){
      var entries = [ 
        { label: 'HTML', url: '#', target: '_top' },
        { label: 'HTML5', url: '#', target: '_top' },
		{ label: 'CSS', url: '#', target: '_top' },
		{ label: 'CSS3', url: '#', target: '_top' },
        { label: 'JavaScript', url: '#', target: '_top' },
        { label: 'Bootstrap', url: '#', target: '_top' },
        { label: 'JQuery', url: '#', target: '_top' },
		{ label: 'Vue', url: '#', target: '_top' },
		{ label: 'Vue-Router', url: '#', target: '_top' },
		{ label: 'Vue-cli', url: '#', target: '_top' },
        { label: 'Angular', url: '#', target: '_top' },
		{ label: 'NodeJs', url: '#', target: '_top' },
        { label: 'Express', url: '#', target: '_top' },
        { label: 'Mysql', url: '#', target: '_top' },
        { label: 'GitHub', url: '#', target: '_top' },
        { label: 'Bmap', url: '#', target: '_top' },
        { label: 'Echarts', url: '#', target: '_top' },
        { label: 'highcharts', url: '#', target: '_top' },
        { label: 'Axios', url: '#', target: '_top' },
        { label: 'Ajax', url: '#', target: '_top' },
        { label: 'Webpack', url: '#', target: '_top' },
        { label: 'Nginx', url: '#', target: '_top' },
        { label: 'ElementUI', url: '#', target: '_top' },
        { label: 'ES6', url: '#', target: '_top' },
        { label: 'Hexo', url: '#', target: '_top' },
        { label: '微信小程序', url: '#', target: '_top' },
        { label: '移动端Web', url: '#', target: '_top' },
        { label: 'WebAPP', url: '#', target: '_top' },
        { label: 'Other', url: '#', target: '_top' }
      ];

      var settings = {

        entries: entries,
        width: 640,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#fff',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#666',
        fontWeight: 'bold',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true

      };

      // var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
      $('#tag-cloud').svg3DTagCloud( settings );
	}
  }
}
</script>

<style>
.zzsc-container .clearfix:before,
.zzsc-container .clearfix:after {
	content: " ";
	display: table;
}

.zzsc-container .clearfix:after {
	clear: both;
}

.zzsc-container a{color: #2fa0ec;text-decoration: none;outline: none;}
.zzsc-container a:hover,a:focus{color:#74777b;}

.zzsc-container{
	width: auto;
	margin: 0 auto;
	overflow: hidden;
	background: #fff;
	color: #D5D6E2;
	font-weight: 500;
	font-size: 1.05em;
	font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;
}

.zzsc-container .bgcolor-1 { background: #f0efee; }
.zzsc-container .bgcolor-2 { background: #f9f9f9; }
.zzsc-container .bgcolor-3 { background: #e8e8e8; }/*light grey*/
.zzsc-container .bgcolor-4 { background: #2f3238; color: #fff; }/*Dark grey*/
.zzsc-container .bgcolor-5 { background: #df6659; color: #521e18; }/*pink1*/
.zzsc-container .bgcolor-6 { background: #2fa8ec; }/*sky blue*/
.zzsc-container .bgcolor-7 { background: #d0d6d6; }/*White tea*/
.zzsc-container .bgcolor-8 { background: #3d4444; color: #fff; }/*Dark grey2*/
.zzsc-container .bgcolor-9 { background: #ef3f52; color: #fff;}/*pink2*/
.zzsc-container .bgcolor-10{ background: #64448f; color: #fff;}/*Violet*/
.zzsc-container .bgcolor-11{ background: #3755ad; color: #fff;}/*dark blue*/
.zzsc-container .bgcolor-12{ background: #3498DB; color: #fff;}/*light blue*/
.zzsc-container .bgcolor-20{ background: #494A5F;color: #D5D6E2;}
/* Header */
.zzsc-header{
	padding: 1em 190px 1em;
	letter-spacing: -1px;
	text-align: center;
	background: #66677c;
}
.zzsc-header h1 {
	color: #D5D6E2;
	font-weight: 600;
	font-size: 2em;
	line-height: 1;
	margin-bottom: 0;
	font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;
}
.zzsc-header h1 span {
	font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;
	display: block;
	font-size: 60%;
	font-weight: 400;
	padding: 0.8em 0 0.5em 0;
	color: #c3c8cd;
}
/*nav*/
.zzsc-demo a{color: #fff;text-decoration: none;}
.zzsc-demo{width: 100%;padding-bottom: 1.2em;}
.zzsc-demo a{display: inline-block;margin: 0.5em;padding: 0.6em 1em;border: 3px solid #fff;font-weight: 700;}
.zzsc-demo a:hover{opacity: 0.6;}
.zzsc-demo a.current{background:#1d7db1;color: #fff; }
/* Top Navigation Style */
.zzsc-links {
	position: relative;
	display: inline-block;
	white-space: nowrap;
	font-size: 1.5em;
	text-align: center;
}

.zzsc-links::after {
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -1px;
	width: 2px;
	height: 100%;
	background: #dbdbdb;
	content: '';
	-webkit-transform: rotate3d(0,0,1,22.5deg);
	transform: rotate3d(0,0,1,22.5deg);
}

.zzsc-icon {
	display: inline-block;
	margin: 0.5em;
	padding: 0em 0;
	width: 1.5em;
	text-decoration: none;
}

.zzsc-icon span {
	display: none;
}

.zzsc-icon:before {
	margin: 0 5px;
	text-transform: none;
	font-weight: normal;
	font-style: normal;
	font-variant: normal;
	font-family: 'icomoon';
	line-height: 1;
	speak: none;
	-webkit-font-smoothing: antialiased;
}
/* footer */
.zzsc-footer{width: 100%;padding-top: 10px;}
.zzsc-small{font-size: 0.8em;}
.center{text-align: center;}
/****/
.zzsc-container .related {
	color: #fff;
	background: #494A5F;
	text-align: center;
	font-size: 1.25em;
	padding: 0.5em 0;
	overflow: hidden;
}

.zzsc-container .related > a {
	vertical-align: top;
	width: calc(100% - 20px);
	max-width: 340px;
	display: inline-block;
	text-align: center;
	margin: 20px 10px;
	padding: 25px;
	font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;
}
.zzsc-container .related a {
	display: inline-block;
	text-align: left;
	margin: 20px auto;
	padding: 10px 20px;
	opacity: 0.8;
	-webkit-transition: opacity 0.3s;
	transition: opacity 0.3s;
	-webkit-backface-visibility: hidden;
}

.zzsc-container .related a:hover,
.zzsc-container .related a:active {
	opacity: 1;
}

.zzsc-container .related a img {
	max-width: 100%;
	opacity: 0.8;
	border-radius: 4px;
}
.zzsc-container .related a:hover img,
.zzsc-container .related a:active img {
	opacity: 1;
}
.zzsc-container .related h3{font-family: "Microsoft YaHei", sans-serif;}
.zzsc-container .related a h3 {
	font-weight: 300;
	margin-top: 0.15em;
	color: #fff;
}
/* icomoon */
.icon-zzsc-home-outline:before {
	content: "\e5000";
}

.icon-zzsc-arrow-forward-outline:before {
	content: "\e5001";
}

@media screen and (max-width: 50em) {
	.zzsc-header {
		padding: 3em 10% 4em;
	}
	.zzsc-header h1 {
        font-size:2em;
    }
}


@media screen and (max-width: 40em) {
	.zzsc-header h1 {
		font-size: 1.5em;
	}
}

@media screen and (max-width: 30em) {
    .zzsc-header h1 {
        font-size:1.2em;
    }
}


</style>