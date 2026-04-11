console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	const themeStyle = document.getElementById('theme-style')
	const themeBase = themeStyle?.dataset.themeBase || './'

	if(mode == 'light'){
		themeStyle.href = themeBase + 'default.css'
	}

	if(mode == 'blue'){
		themeStyle.href = themeBase + 'blue.css'
	}

	if(mode == 'green'){
		themeStyle.href = themeBase + 'green.css'
	}

	if(mode == 'purple'){
		themeStyle.href = themeBase + 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

function openFileInNewTab(filePath) {
	window.open(filePath, '_blank', 'noopener,noreferrer')
}

function downloadCV() {
	const basePath = document.getElementById('theme-style')?.dataset.themeBase || './assets/css/'
	openFileInNewTab(basePath.replace('css/', 'documents/') + 'CV - Siddharth Patel.pdf')
}

function downloadQR() {
	const basePath = document.getElementById('theme-style')?.dataset.themeBase || './assets/css/'
	openFileInNewTab(basePath.replace('css/', 'documents/') + 'Website_QR_latex.pdf')
}

document.addEventListener('scroll', function() {
	const backToTimelineButton = document.getElementById('back-to-timeline')
	const trainFutureSection = document.getElementById('train-future')
	const htwBerlinSection = document.getElementById('htw-berlin')

	if (!backToTimelineButton || !trainFutureSection || !htwBerlinSection) {
		return
	}

	const trainFutureTop = trainFutureSection.getBoundingClientRect().top
	const htwBerlinTop = htwBerlinSection.getBoundingClientRect().top
	const isTrainFutureVisible = trainFutureTop < window.innerHeight && trainFutureTop > 0
	const isHtwBerlinVisible = htwBerlinTop < window.innerHeight && htwBerlinTop > 0

	backToTimelineButton.style.display = isTrainFutureVisible || isHtwBerlinVisible ? 'block' : 'none'
})

