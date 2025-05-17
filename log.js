<script>
(async function() {
    'use strict';
const initCss = () => {
let xcss = `
<style>
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
:root {
/*  --black: #090300;
  --red: #db2d20;
  --green: #01a252;
  --yellow: #fded02;
  --blue: #01a0e4;
  --purple: #a16a94;
  --cyan: #b5e4f4;
  --white: #a5a2a2;
  --brightBlack: #5c5855;
  --brightRed: #e8bbd0;
  --brightGreen: #3a3432;
  --brightYellow: #4a4543;
  --brightBlue: #807d7c;
  --brightPurple: #d6d5d4;
  --brightCyan: #cdab53;
  --brightWhite: #f7f7f7;*/
  --bg-h:20;
  --bg-s:100%;
  --bg-l:1.76%;
  --background: hsl(var(--bg-h), var(--bg-s), var(--bg-l));
  --background-01:hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) + 10%));
  --background-02:hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) + 20%));
  --background-03:hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) + 30%));
  --background-001:hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) + 1%));
  --background-002:hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) + 2%));
  --background-003:hsl(var(--bg-h), var(--bg-s), calc(var(--bg-l) + 3%));
  --fg-h:0;
  --fg-s:0%;
  --fg-l:0%;
  --foreground: hsl(var(--fg-h), var(--fg-s), var(--fg-l));
  --cursorColor: #a5a2a2;
  --selectionBackground: #4a4543;
}

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: var(--background-003);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--background-01);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--foreground);
}

::-webkit-scrollbar-corner {
  background: var(--background);
}

* {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    color: var(--foreground);
    width: 100vw;
    height: 100vh;
    font-family: 'Fira Code', monospace;
    overflow: hidden;
    background-image: radial-gradient( circle, var(--background-01) 0, var(--background-001) 100% );
  }

  #root {
    width: 100%;
    height: 100%;
  }

#digitalClock {
    position: fixed;
    top: 10px;
    right: 30px;
    font-size: 5em;
}
#digitalClock .slash {
    animation: blink 1s infinite;
}
#digitalClock .date {
    font-size: 0.4em;
    position: absolute;
    top: 45px;
    left: 17px;
}
#loading {
    display:none;
    width: 100%;
    height: 100%;
    position: fixed;
    background: url(https://upload.wikimedia.org/wikipedia/commons/7/7a/Ajax_loader_metal_512.gif);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60px;
    z-index: 1;
    backdrop-filter: brightness(0.5);
}
#wallpaper {
width: 100%; height: 100%; position: absolute; top: 0; left: 0;display: none;
}
.dragContainer {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  position: relative;
}

.desktopIconsContainer {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  padding: 2rem;

  position: absolute;
  top: 0;
  left: 0;

  display: grid;
  grid-template-rows: repeat(auto-fill, 7rem);
  grid-template-columns: repeat(auto-fill, 7rem);
  gap: 10px;
  grid-auto-flow: column;
}

.iconContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.iconContainer:focus {
  outline: none;
}

.iconContainer  > span {
  font-size: 3em;
  padding: 3px;
}
.iconContainer:focus  > svg,
.iconContainer:focus  > span {
  border: 2px solid var(--background-03);
  border-radius: 0.8rem;
}

.iconContainer > div {
  margin-top: 0.4rem;
  font-size: 1.2rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
  max-width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.iconContainer:focus > div {
  background: var(--foreground);
  color: var(--background);
}

.windowContainer {
  position: absolute;
  background: var(--background);
  border: 1px solid var(--background-02);
  border-radius: 7px;
  overflow: hidden;

  display: grid;
  grid-template-rows: min-content calc(100% - 3rem);
  grid-template-columns: 100%;

  z-index: 0;
  transition: box-shadow 0.15s;
  max-height: 100vh;
  max-width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.windowBar {
  width: 100%;
  height: 3rem;
  position: relative;
  background: var(--background-01);
  cursor: grab;
}

.windowBar:active {
  cursor: grabbing;
}

.windowBarButtonContainer {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}

.windowBarButtonContainer > div {
  margin-right: 0.8rem;
  position: relative;
}

.windowBarButton {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
}

.windowBarButton:hover {
    cursor: pointer;
}

.windowBarButton:nth-child(1) {
  margin-left: 1rem;
  background: #ff605c;
}

.windowBarButton:nth-child(2) {
  background: #ffbd44;
}

.windowBarButton:nth-child(3) {
  background: #00ca4e;
}

.windowBarButton.disable{
  filter: grayscale(1);
  cursor: not-allowed !important;
}

.windowName {
  color: var(--foreground);
  /*font-family: 'Roboto', sans-serif;*/
  font-size: 1.6rem;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
}

.resizeHandle {
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: red;
  cursor: nwse-resize;
  opacity: 0;
}

/*App Setting*/
.windowBodyContainer {
  display: grid;
  grid-template-columns: minmax(20rem, 1fr) 3fr;
  grid-template-rows: 100%;
  max-height: 100%;
  padding: 2rem;
  gap: 2rem;
}

.settingsTabsWrapper {
  padding: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  align-items: flex-start;
  background: var(--background-003);
  border-radius: 0.8rem;
  border: 1px solid var(--background-003);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.settingTab {
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  padding: 0.6rem 1rem;
  cursor: pointer;
  border-radius: 0.8rem;
  width: 100%;
}

.settingTab.selected {
  outline: none;
  background: var(--foreground);
  color: var(--background);
}

.settingTab.selected > span {
  color: var(--background);
}

.tabContentWrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  overflow:auto;
}

.tabContentWrapper > h2 {
  font-size: 2rem;
  font-weight: 700;
}

.separator {
  height: 1px;
  width: 100%;
  background: var(--foreground);
  opacity: 0.2;
  margin: 1rem 0;
}

.settingsRow {
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-radius: 0.4rem;
}

.settingsRow > span {
  width: 70px
}

.sliderColor {
  background: linear-gradient(to right,
    hsl(0, 100%, 50%), hsl(60, 100%, 50%),
    hsl(120, 100%, 50%), hsl(180, 100%, 50%),
    hsl(240, 100%, 50%), hsl(300, 100%, 50%),
    hsl(360, 100%, 50%));
  -webkit-appearance: none;
  appearance: none;
  border-radius: 7.5px;
  cursor: pointer;
  height: 10px;
}
.sliderColor.light {
  background: linear-gradient(to right, hsl(0, 0%, 0%), hsl(0, 0%, 100%));
}

.sliderColor::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #eee;
  border: 1px solid #aaa;
  border-radius: 50%;
  cursor: pointer;
}

.sliderColor::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #eee;
  border: 1px solid #aaa;
  border-radius: 50%;
  cursor: pointer;
}

input.url-wallpaper {
  background: var(--foreground);
  color: var(--background);
  outline: 0;
  padding: 0;
  height: 20px;
  width: 100%;
  border-radius: 5px;
}

img.thumb-wallpaper {
  height: auto;
  width: 220px;
  border: 1px solid var(--foreground);
  border-radius: 5px;
}
</style>
`
$('head').append(xcss)
}
const initElement = () => {
let element = `
    <div id="root">
	  <img id="wallpaper" src="https://w0.peakpx.com/wallpaper/155/553/HD-wallpaper-need-more-coffee-programmer-story-coffee-funny.jpg">
      <div id="digitalClock"><span id="jam">00</span><span class="slash">:</span><span id="menit">00</span><span class="date">initial...</span></div>
      <div id="loading"></div>
      <div class="context-menu"></div>
      <div class="dragContainer">
        <div id="desktop-icons-container" class="desktopIconsContainer">
          <div tabindex="0" class="iconContainer dbclick" flag="bo">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
	          <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="currentColor" fill="currentColor" stroke-width="0">
		        <path d="M970 2516 l-525 -333 0 -338 0 -339 215 -137 c118 -75 357 -227 530 -336 l315 -200 3 -342 2 -341 78 48 c42 27 142 90 222 140 80 51 287 182 460 291 l315 198 3 334 2 334 -182 116 c-101 64 -344 219 -540 344 l-358 227 0 334 c0 184 -3 334 -7 333 -5 0 -244 -150 -533 -333z m540 -677 l0 -331 -22 14 c-13 8 -130 81 -261 163 -130 83 -236 153 -235 157 3 8 500 327 511 328 4 0 7 -149 7 -331z m265 -502 c142 -89 258 -167 258 -172 -1 -10 -500 -324 -515 -325 -5 0 -8 149 -8 330 0 182 2 330 4 330 2 0 119 -73 261 -163z"></path>
	          </g>
            </svg>
            <div>Back Office</div>
          </div>
          <div tabindex="0" class="iconContainer dbclick" flag="finance">
            <span class="glyphicon glyphicon-briefcase"></span>
            <div>Finance</div>
          </div>
          <div tabindex="0" class="iconContainer dbclick" flag="armada">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.14" width="40px" height="40px" stroke="currentColor" fill="currentColor" stroke-width="0">
	<path d="M41.63,58.19a12.9,12.9,0,1,0,25.64,2,13.7,13.7,0,0,0-.16-2H89.28a14.22,14.22,0,0,0-.12,1.87,13.08,13.08,0,0,0,26.16,0,12.7,12.7,0,0,0-.21-2.33,8,8,0,0,0,7.77-7.93V24.14L106.61,6.64H84.32V45.51h-80A3.27,3.27,0,0,0,1,48.68V55A3.27,3.27,0,0,0,4.31,58.2H7.94a12.48,12.48,0,0,0-.16,2,12.9,12.9,0,1,0,25.79,0,13.7,13.7,0,0,0-.16-2h8.22ZM76.48,0H4.1A4.12,4.12,0,0,0,0,4.1V42.27H80.58V4.1A4.11,4.11,0,0,0,76.48,0ZM15.71,60.26c0,6.53,9.92,6.53,9.92,0,0-7-9.92-6.27-9.92,0Zm81.49-.21c0,6.61,10.06,6.61,10.06,0s-10.06-6.65-10.06,0Zm9.33-45.85L114.74,24v3.56H92.49V14.2ZM49.42,60.26c0,6.53,9.92,6.53,9.92,0s-9.92-6.52-9.92,0Z"></path>
</svg>
            <div>Armada</div>
          </div>
          <div tabindex="0" class="iconContainer dbclick" flag="setting">
            <span class="glyphicon glyphicon-cog"></span>
            <div>Settings</div>
          </div>
          <div tabindex="0" class="iconContainer ">
            <span class="glyphicon glyphicon-console"></span>
            <div>Terminal</div>
          </div>
          <div tabindex="0" class="iconContainer">
            <span class="glyphicon glyphicon-cloud"></span>
            <div>Drive</div>
          </div>
          <div tabindex="0" class="iconContainer dbclick" flag="donate">
            <span class="glyphicon glyphicon-qrcode"></span>
            <div>Donate</div>
          </div>
        </div>
		<div id="mask" style="display:none;position:absolute;top:0;left:0;z-index:999;cursor:grabbing;border: 2px dotted silver;"></div>
      </div>
    </div>
`
$('body').append(element)
let n = new Date()
$('#digitalClock .date').text(`${n.getDate().toString().padStart(2, '0')} ${(n.getMonth() + 1).toString().padStart(2, '0')} ${n.getFullYear()}`)
}
const tunggu = (detik) => {
  return new Promise(resolve => setTimeout(resolve, detik * 1000));
}

//Fitur Drag n Drop
const matrixTranslate =(matrixString) => {
  let matrixValues = matrixString.substring(7, matrixString.length - 1).split(', ');
  let x = parseFloat(matrixValues[4]);
  let y = parseFloat(matrixValues[5]);
  return { x,y };
}
const dragObject = {
	name:'',
	win:null,
	isDrag:false,
	isMove:false,
	startX : 0,
	startY:0,
	initialX:0,
	initialY:0
}
const mousedownHandler =(base, e) => {
	if(dragObject.name == '.table'){
		dragObject.isDrag = true
		dragObject.startX = e.clientX;
		let w = base.closest('table')
		w.css('cursor','col-resize')
		dragObject.win = w
		dragObject.th = w.css('grid-template-columns').split(' ')
		dragObject.index = base.closest('th').index()
		dragObject.init = dragObject.th[dragObject.index]
	}
	else{
		let w = base.closest('.windowContainer')
		let point = matrixTranslate(w.css('transform'))
		$('#mask').css({
			display:'block',
			transform:`translate(${point.x}px, ${point.y}px)`,
			height:w.css('height'),
			width:w.css('width'),
		})
		dragObject.win = w
		dragObject.isDrag = true
		dragObject.startX = e.clientX;
		dragObject.startY = e.clientY;
		dragObject.initialX = (dragObject.name == '.drag') ? point.x : w.width()
		dragObject.initialY = (dragObject.name == '.drag') ? point.y : w.height()
	}
	$(document).on('mousemove' + dragObject.name, mousemoveHandler)
	.on('mouseup' + dragObject.name, mouseupHandler)
}
const mousemoveHandler =(e) => {
  if (!dragObject.isDrag) return;
  if(dragObject.name == '.table'){
	let newX = parseFloat(dragObject.init)
	newX += e.clientX - dragObject.startX
	dragObject.th[dragObject.index] = newX + 'px'
	dragObject.win.css('grid-template-columns', dragObject.th.join(' '))
  }
  else{
	dragObject.isMove = true
	const deltaX = e.clientX - dragObject.startX;
	const deltaY = e.clientY - dragObject.startY;
	dragObject.currentX = dragObject.initialX + deltaX;
	dragObject.currentY = dragObject.initialY + deltaY;
	if(dragObject.name == '.drag'){
		$('#mask').css('transform', `translate(${dragObject.currentX}px, ${dragObject.currentY}px)`);
	}else{
		$('#mask').css({width:dragObject.currentX+'px', height:dragObject.currentY+'px'});
	}
  }
}
const mouseupHandler =(e) => {
	if (!dragObject.isDrag) return;
	if(dragObject.name == '.table'){
		dragObject.win.css('cursor','auto')
	}else {
		if (dragObject.isMove){
			dragObject.isMove = false
			if(dragObject.name == '.drag'){
				dragObject.win.css({
					transition: 'transform 0.3s ease-in-out',
					transform:`translate(${dragObject.currentX}px, ${dragObject.currentY}px)`,
					});
			}else{
				dragObject.win.css({
					width:dragObject.currentX+'px',
					height:dragObject.currentY+'px',
					transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out',
					});
			}
		}
		$('#mask').hide()
	}
	$(document).off('mousemove' + dragObject.name)
	.off('mouseup' + dragObject.name)
	clearDragObject();
}
const clearDragObject = () => {
	dragObject.name = '';
	dragObject.win = null
	dragObject.isDrag = false
	dragObject.startX = 0;
	dragObject.startY = 0;
	dragObject.initialX = 0;
	dragObject.initialY = 0;
	dragObject.currentX = 0;
	dragObject.currentY = 0;
	dragObject.th = {};
	dragObject.index = null;
	dragObject.init = null;

}

//window
let winCount = 1
const winOnTop = (index, close = false) => {
	if(index == winCount - 1) return
	$('.windowContainer').each(function(i){
		let base = $(this)
		let z = Number(base.css('z-index'))
        if(z == index ) {
            close ? '' : base.css('z-index',winCount - 1)
        }
		if(z > index) base.css('z-index',z - 1)
	})
}
const newWindow = (title, width, height, body = '') => {
	let temp = $( `
<div class="windowContainer" style="display:none;width:${width}px; height:${height}px;top:0; left:0; transform: translate(calc((100vw / 2) - ${width / 2}px), calc((100vh / 2) - ${height / 2}px));z-index:${winCount};">
	<div class="windowBar">
		<div class="windowBarButtonContainer">
		  <div class="windowBarButton xclose onclickapp" flag="window" action="close" title="Close"></div>
		  <div class="windowBarButton xmin disable"></div>
		  <div class="windowBarButton xmax" title="Maximize"></div>
		</div>
		<div class="windowName">${title}</div>
	</div>
	${body}
	<div class="resizeHandle" style="user-select: none; touch-action: none;"></div>
</div>`)
	$('.dragContainer').append(temp)
    temp.fadeIn()
	winCount++
}
const closeWindow = ($el) => {
  $el.closest('.windowContainer').remove()
  winCount--
  //winOnTop(Number(action), 'close')
}
const windowHandler = ($el) => {
    let action = $el.attr('action')
    if(action == 'close'){
      closeWindow($el)
    }
}

const settingHandler = ($el) => {
	$('.settingTab').removeClass('selected')
	$el.addClass('selected')
    let action = $el.attr('action')
    tabSelected(action)
}

const flagHandler = {
	window:windowHandler,
	setting:settingHandler
}

const pasringHtml = (o) => {
  let h = `<${o.el}`;
  h += o.id ? ` id="${o.id}"` : '';
  h += o.class ? ` class="${o.class}"` : '';
  h += o.attr ? ` ${o.attr}` : '';
  h += o.style ? ` style="${o.style}"` : '';
  h += `>${o.value || ''}</${o.el}>`;
  return h;
};
const toHtml = (obj) => {
	if(!obj) return
	let rsp = '';
	if(!obj.length){
		if(obj.value == '' || typeof(obj.value) == 'string'){
			rsp += pasringHtml(obj)
		}else{
			rsp += pasringHtml({...obj, value:toHtml(obj.value)})
		}
	}
	else{
		for(let i = 0; i< obj.length; i++){
			if(obj[i].value == '' || typeof(obj[i].value) == 'string'){
				rsp += pasringHtml(obj[i])
			}else{
				rsp += pasringHtml({...obj[i], value:toHtml(obj[i].value)})
			}
		}
	}

	return rsp
}

const Container = {
	el:'div',
	class:'windowBodyContainer'
}
const SettingsTabsWrapper = {
	el:'div',
	class: 'settingsTabsWrapper'
};
const SettingsTab = {
	el:'div',
	class: 'settingTab onclickapp'
}
const TabContentWrapper = {
	el:'div',
	class:'tabContentWrapper'
}
const appSetting = () => {
	const settingsTabs = [
	  { name: 'Device info', icon: '<span class="glyphicon glyphicon-tags"></span>' },
	  { name: 'Account', icon: '<span class="glyphicon glyphicon-user"></span>' },
	  { name: 'Theme', icon:  '<span class="glyphicon glyphicon-picture"></span>'},
	  { name: 'Memory', icon:  '<span class="glyphicon glyphicon-hdd"></span>'},
	];

	let tabObj = settingsTabs.map(item => {
		return {
			...SettingsTab,
			attr: `flag="setting" action="${item.name}"`,
			value:`${item.icon}<div>${item.name}</div>` }
	})
	return toHtml({
		...Container,
		value:[
			{...SettingsTabsWrapper, value:tabObj},
			{...TabContentWrapper, value:[
				{el:'h2', attr:'id="settingName"', value:'Setting App'},
				{el:'div', class:'separator'}]}
			]
	})
}
const stateSetting = {
	theme: 'dark'
}
const tabSelected = (key) => {
	$('#settingName').text(key);
	if(key == 'Theme'){
		let cfg = localConfig.theme
		$('.tabContentWrapper').append(`
<div class="settingsRow">
	<span style="font-weight:600">WALLPAPER</span>
</div>
<div class="settingsRow">
	<span>Available</span>
	<input type="checkbox" ${cfg.wall.use ? 'checked' : ''} style="accent-color: var(--foreground);" class="onchangeapp" flag="setting" action="wallpaper" option="use"/>
</div>
<div class="settingsRow">
	<span>URL :</span>
	<input class="url-wallpaper onchangeapp" flag="setting" action="wallpaper" option="url" type="text" value="${cfg.wall.url || 'https://'}" />
</div>
<div class="settingsRow">
	<span>Tumb</span>
	<img class="thumb-wallpaper" src="${cfg.wall.url || ''}" alt="No-pict"/>
</div>
<div class="separator"></div>
<div class="settingsRow">
	<span style="font-weight:600">BACKGROUND</span>
</div>
<div class="settingsRow">
	<span>Hue</span>
	<input type="range" min="0" max="360" value="${cfg.bg.h || 0}" class="sliderColor onchangeapp" flag="setting" action="background" option="color"/>
</div>
<div class="settingsRow">
	<span>Satur</span>
	<input type="range" min="0" max="100" value="${cfg.bg.s || 0}" class="sliderColor light onchangeapp" flag="setting" action="background" option="saturation"/>
</div>
<div class="settingsRow">
	<span>Light</span>
	<input type="range" min="0" max="100" value="${cfg.bg.l || 0}" class="sliderColor light onchangeapp" flag="setting" action="background" option="light"/>
</div>
<div class="separator"></div>
<div class="settingsRow">
	<span style="font-weight:600">FOREGROUND</span>
</div>
<div class="settingsRow">
	<span>Hue</span>
	<input type="range" min="0" max="360" value="${cfg.fg.h || 0}" class="sliderColor onchangeapp" flag="setting" action="foreground" option="color"/>
</div>
<div class="settingsRow">
	<span>Satur</span>
	<input type="range" min="0" max="100" value="${cfg.fg.s || 0}" class="sliderColor light onchangeapp" flag="setting" action="foreground" option="saturation"/>
</div>
<div class="settingsRow">
	<span>Light</span>
	<input type="range" min="0" max="100" value="${cfg.fg.l || 0}" class="sliderColor light onchangeapp" flag="setting" action="foreground" option="light"/>
</div>
		`)
	}
}






    initCss()
    await tunggu(1)
let localConfig = {
        theme: localStorage.getItem('theme')
        ? JSON.parse(localStorage.getItem('theme'))
        : {bg:{h:20, s:100,l:1.76},fg:{h:0, s:100, l:100},wall:{use:false, url:'https://w0.peakpx.com/wallpaper/155/553/HD-wallpaper-need-more-coffee-programmer-story-coffee-funny.jpg'}}
    }

const root = $(':root')[0]
const body = $('body')
    root.style.setProperty('--bg-h', localConfig.theme.bg.h);
    root.style.setProperty('--bg-s', localConfig.theme.bg.s + '%');
    root.style.setProperty('--bg-l', localConfig.theme.bg.l + '%');
    root.style.setProperty('--fg-h', localConfig.theme.fg.h);
    root.style.setProperty('--fg-s', localConfig.theme.fg.s + '%');
    root.style.setProperty('--fg-l', localConfig.theme.fg.l + '%');
    $('form').hide()
    initElement()
const jam = $('#jam')
const menit = $('#menit')
    function waktu() {
        let t = new Date();
        jam.text( t.getHours().toString().padStart(2, '0') )
        menit.text( t.getMinutes().toString().padStart(2, '0') )
    }
    setInterval(waktu, 1000);
    waktu()
const loading = $('#loading')
    loading.fadeIn()
    await tunggu(2)
    if(localConfig.theme.wall.use){
        $('#wallpaper').attr('src',localConfig.theme.wall.url)
        $('#wallpaper').show()
    }
    else{
        $('#wallpaper').hide()
    }
    loading.fadeOut()
//EVENT
body.on('mousedown', '.resizer', function(e){
	if(dragObject.isDrag) return
	let base = $(this)
	dragObject.name = '.table';
	mousedownHandler(base, e)
})
body.on('mousedown', '.windowContainer', function(e){
	let base = $(this)
	winOnTop(Number(base.css('z-index')))
	if(!$(e.target).hasClass('windowBarButtonContainer')) return
	if(dragObject.isDrag) return
	dragObject.name = '.drag';
	mousedownHandler(base, e)
})
body.on('mousedown', '.resizeHandle', function(e){
	if(dragObject.isDrag) return
	dragObject.name = '.resize';
	let base = $(this)
	mousedownHandler(base, e)
})
body.on('click', '.onclickapp', function(){
  let $el = $(this)
  let flag = $el.attr('flag')
  if(flagHandler[flag]){
  	flagHandler[flag]($el)
  }
  else{
  	alert('flag not found !')
  }
})
body.on('dblclick', '.dbclick', function(){
	let $el = $(this)
	let flag = $el.attr('flag')
	if(flag == 'setting') return newWindow('Setting', 600, 600, appSetting())
    if(flag == 'bo') return newWindow('Back Office', 600, 400, )
    if(flag == 'donate') return newWindow('Donate', 600, 400, )
    return alert('Not found !. Flag: ' + flag)
})
body.on('change', '.onchangeapp', function(){
  let $el = $(this)
  let action = $el.attr('action')
  let option = $el.attr('option')
  let val = parseFloat($el.val())
  	if(action == 'wallpaper') {
		if(option == 'use') {
			let use = $el.prop('checked')
			if(use){
				$('#wallpaper').show()
			} else {
				$('#wallpaper').hide()
			}
			localConfig.theme.wall.use = use
			localStorage.setItem('theme', JSON.stringify(localConfig.theme))
			return
		}
		if(option == 'url') {
			let val = $el.val()
			console.log(val)
			$('#wallpaper').attr('src', val)
			$('img.thumb-wallpaper').attr('src', val)
			localConfig.theme.wall.url = val
			localStorage.setItem('theme', JSON.stringify(localConfig.theme))
			return
		}
	}
  	if(action == 'background') {
		if(option == 'color') {
            root.style.setProperty('--bg-h', val)
			localConfig.theme.bg.h = val
			localStorage.setItem('theme', JSON.stringify(localConfig.theme))
			return
		}
		if(option == 'saturation') {
            root.style.setProperty('--bg-s', val + '%')
			localConfig.theme.bg.s = val
			localStorage.setItem('theme', JSON.stringify(localConfig.theme))
			return
		}
		if(option == 'light') {
            root.style.setProperty('--bg-l', val + '%')
			localConfig.theme.bg.l = val
			localStorage.setItem('theme', JSON.stringify(localConfig.theme))
			return
		}
	}
  	if(action == 'foreground') {
		if(option == 'color') {
            root.style.setProperty('--fg-h', val)
			localConfig.theme.fg.h = val
			localStorage.setItem('theme', JSON.stringify(localConfig.theme))
			return
		}
		if(option == 'saturation') {
            root.style.setProperty('--fg-s', val + '%')
			localConfig.theme.fg.s = val
			localStorage.setItem('theme', JSON.stringify(localConfig.theme))
			return
		}
		if(option == 'light') {
            root.style.setProperty('--fg-l', val + '%')
			localConfig.theme.fg.l = val
			localStorage.setItem('theme', JSON.stringify(localConfig.theme))
			return
		}
	}
})

})();
</script>
