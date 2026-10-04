const navbar = document.getElementById('navbar');
const edge_controller = document.getElementById('edge-controller');
const dframe = document.getElementById('display_frame');
const lframe = document.getElementById('loading_frame');
const controller = document.getElementById('burger-input');
const controller_body = document.getElementsByClassName('burger-btn-body')[0];
const textBox = document.getElementsByTagName('input')[0];
const buttonList = document.getElementsByTagName('button')


dframe.loadURL = (url) => {
    url = url.startsWith('http://')? url.replace('http://', ''): url;
    url = url.startsWith('https://') || url.startsWith('./') ? url: "https://" + url;
    dframe.setAttribute('src', url)
};

textBox.setValue = (url) => {
    url = url.startsWith('http://')? url.replace('http://', ''): url;
    url = url.startsWith('https://')? url.replace('https://', ''): url;
    textBox.setAttribute('value', url);
}

buttonList.enableAll = () => {
    Array.from(buttonList).forEach((button)=>{button.disabled = false})
}

Array.from(buttonList).forEach((button) => {
    button.addEventListener('click', (event) => {
        lframe.style.display = "block";
        dframe.style.display = "none";
        buttonList.enableAll()
        button.disabled = true
        if (mobileCheck() && event.isTrusted && !navbar.classList.contains('hide')) {
            controller.click()
        }
        // navbar.classList.length ? navbar.classList.remove(navbar.classList): null;
        navbar.curTheme = button.id
        textBox.setValue(button.title)
        dframe.loadURL(button.dataset.value || button.title)
    });
});

dframe.addEventListener('load', (event)=>{
    // navbar.classList.add(navbar.curTheme)
    lframe.style.display = "none";
    dframe.style.display = "block";
})

controller.addEventListener('click',(e)=>{
    if (navbar.classList.contains('hide')){
        navbar.classList.remove('hide');
        navbar.classList.add('show');
    } else{
        navbar.classList.add('hide');
        navbar.classList.remove('show');
    }
    if (controller_body.classList.contains('hide')){
        controller_body.classList.remove('hide');
        controller_body.classList.add('show');
    } else{
        controller_body.classList.add('hide');
        controller_body.classList.remove('show');
    }
})

controller.addEventListener("animationend", (event) => {
    if(navbar.classList.contains('hide')){
        navbar.style.display='none'
    }
});

controller.addEventListener("animationstart", (event) => {
    if(navbar.classList.contains('show')){
        navbar.style.display='flex'
    }
});


const mobileLayout = window.matchMedia('(max-width: 700px)');
const mobileCheck = () => mobileLayout.matches;

function updateLayout(event) {
    const isMobile = event.matches;
    navbar.classList.toggle('hide', isMobile);
    navbar.classList.toggle('show', !isMobile);
    controller_body.classList.toggle('hide', isMobile);
    controller_body.classList.toggle('show', !isMobile);
    controller.checked = !isMobile;
}

mobileLayout.addEventListener('change', updateLayout);
updateLayout(mobileLayout);


buttonList[0].click()



dframe.addEventListener('mouseover', function() {
    if (navbar.classList.contains('show')) {
        hideTimer = setTimeout(()=>{controller.click()}, 500)
    }
});

dframe.addEventListener('mouseout', function() {
    clearTimeout(hideTimer);
});


edge_controller.addEventListener('mouseenter', function(event) {
    if (navbar.classList.contains('hide')) {
        if (event.clientX < 10){
            showTimer = setTimeout(()=>{controller.click()}, 100)
        }
        else {
            clearTimeout(showTimer);
        }
    }
})

edge_controller.addEventListener('mouseleave', function() {
    clearTimeout(showTimer)
})
