/**
 *  @Description : Pong-Game 
 *  @Author : Luis DS 
 *  @Version : V1  
 *  @Date : 05.04.2023 
*/

// NAVBAR
const toggle_btn = document.querySelector('.toggle_btn');
const toggle_btn_icon = document.querySelector('.toggle_btn i');
const dropdown_menu = document.querySelector('.dropdown_menu');

toggle_btn.addEventListener('click', event => 
{
    dropdown_menu.classList.toggle('open');
    const isOpen = dropdown_menu.classList.contains('open');

    toggle_btn_icon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

    if (dropdown_menu.classList.contains('open')) 
    {
        document.querySelector('#home').style.marginTop = '-240px';        
    }
    else 
    {
        document.querySelector('#home').style.marginTop = '0px';        
    }
});

// TEXTAREA
document.querySelector('#message').addEventListener('keyup', event => textAreaAdjust(event))

function textAreaAdjust(event) 
{
    let element = event.target;
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

// SCROLL
let scroll = 0;

window.addEventListener('scroll', getScrollPos);

function getScrollPos() 
{
    scroll = window.scrollY;
    bcgHeader();
}

function bcgHeader() 
{
    if (scroll > 400)
    {
        document.querySelector('header').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        document.querySelector('header').style.backdropFilter =  'blur(20px)';
    }
    else
    {
        document.querySelector('header').style.backgroundColor = 'transparent';   
    }
}

const observer = new IntersectionObserver((entries) => 
{
    entries.forEach((entry) => 
    {
        if (entry.isIntersecting)
        {            
            if (entry.target.classList.contains('form')) 
            {
                entry.target.classList.add('show-form');    
            }
            else 
            {
                entry.target.classList.add('show');
            }
        }
        else 
        {
            if (entry.target.classList.contains('form')) 
            {
                entry.target.classList.remove('show-form');    
            }
            else 
            {
                entry.target.classList.remove('show');
            }
        }
    });
});

const header = document.querySelector('header');
const hiddenElements = document.querySelectorAll('.hidden, .hidden-form');
hiddenElements.forEach((element) => observer.observe(element));

// FORM
document.querySelector('form').addEventListener('submit', event => traiterForm(event));

function traiterForm(event) 
{
    event.preventDefault();

    const data = new FormData(event.target);

    const btn = event.submitter;
    
    if (btn.value == 'send') 
    {
        console.log(data)
        let message = document.querySelector('.message-confirm')
        if (data.get('email') == null && data.get('title') != null && data.get('message') != null)
        {
            message.innerHTML = '• rechack the email •';
            message.style.color = 'red';
            return false;            
        }
        else if (data.get('title') == null && data.get('email') != null && data.get('message') != null)
        {
            message.innerHTML = '• rechack the title •';
            message.style.color = 'red';
            return false;
        }
        else if (data.get('message') == null && data.get('title') != null && data.get('email') != null)
        {
            message.innerHTML = '• rechack the message •';
            message.style.color = 'red';
            return false;
        }
        else if (data.get('email') == null && data.get('title') == null && data.get('message') != null) 
        {
            message.innerHTML = '• rechack the email and the title •';
            message.style.color = 'red';
            return false; 
        }
        else if (data.get('email') == null && data.get('title') == null && data.get('message') == null) 
        {
            message.innerHTML = '• rechack all content •';
            message.style.color = 'red';
            return false; 
        }
        else if (data.get('email') == null && data.get('title') != null && data.get('message') == null) 
        {
            message.innerHTML = '• rechack the email and the message •';
            message.style.color = 'red';
            return false; 
        }
        else if (data.get('email') != null && data.get('title') == null && data.get('message') == null) 
        {
            message.innerHTML = '• rechack the title and the message •';
            message.style.color = 'red';
            return false; 
        }
        else
        {
            message.innerHTML = '• your message has been send •';
            message.style.color = 'green';
            sendMessage(data);
        }
    }
}

const messages = [];

function sendMessage(data)
{
    const message = new Map();

    message.set('email', data.get('email'));
    message.set('title', data.get('title'));
    message.set('message', data.get('message'));

    messages.push(message)

    let jsonMessage = JSON.stringify(messages);

    localStorage.setItem('messages', jsonMessage)

    console.log(message);        
}

// about
let text = document.querySelector('.next-text');
let display = 'none'

text.style.display = 'block';

document.querySelector('.points').addEventListener('click', (event) => {

    if (display == 'none')
    {
        text.style.display = 'block';
        display = 'block';
    }
    else if (display == 'block')
    {
        text.style.display = 'none';   
        display = 'none';
    }
});