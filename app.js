$(() => {

    // ==== MODAL ====
    const $openBtn = $('#open')
    const $modal = $('#modal')
    const $closeBtn = $('#close')

    const openModal = () => {
        $modal.css('display', 'block')
    }

    $openBtn.on('click', openModal)

    const closeModal = () => {
        $modal.css('display', 'none')
    }

    $closeBtn.on('click', closeModal)
    // ==== MODAL ====

    const $body = $('body')
    const darkMode = () => {
        console.log(typeof $body.css('background-color'));
        if ('rgb(245, 245, 245)' == $body.css('background-color')){
        $body.css('background-color', '#000000');
        $body.css('color', '#f5f5f5')
        } else {
            $body.css('background-color', '#f5f5f5');
            $body.css('color', '#000000')
        }
    }

    $('.dark-mode').on('click', darkMode)


    const $homeBtn = $('#home')
    const $homeDiv = $('.home')
    
    const displayHome = () => {
        $homeDiv.css('display', 'block')
    }


    const hideHome = () => {
        $homeDiv.css('display', 'none')
    }

    const $bioBtn = $('#bio')
    const $bioDiv = $('<div>').addClass('bio')
    const $bioH2 = $('<h2>').attr('id', 'bio-h2').text('Biography').appendTo($bioDiv)
    const $bioTxt = $('<p>').attr('id', 'bio-txt').text('I am Hany Elnasharty, a tech enthusiast who\’s recently started professionally developing my programming skills. However, this isn\’t my first encounter with tech; I have been on and off with it through self study. Having attended business school and coming from a finance background, my mind has always been analytical and very detail-oriented, which was reflected on my academic and professional life. During college, I studied and worked and successfully maintained a good work-life balance. I always look for new challenges and consistently try to explore new opportunities in order to advance my status. Tech was my recent endeavor that started by joining Code Academy and learning some basics. After a short while I learned about coding bootcamps and what they can offer me in terms of practical knowledge and career coaching and decided to enroll full-time at General Assembly to maximize the benefits that come from the intensity of their training and to start -what I hope to be- a new, long and successful chapter in my life.').appendTo($bioDiv)

    const displayBio = () => {  
        $('body').append($bioDiv)
    }
    const hideBio = () => {
        $bioDiv.remove()
    }


    $bioBtn.on('click', () => {
        displayBio();
        hideHome();
        hideResume();
    })

    $homeBtn.on('click', () => {
        displayHome();
        hideBio();
        hideResume()
    })

    const $resumeBtn = $('#resume')
    const $resumeDiv = $('<div>').addClass('resume')
    const $resumeH2 = $('<h2>').attr('id', 'resume-h2').text('Resume :').appendTo($resumeDiv)
    const $resumeImage = $('<img>').attr('src', 'imgs/resume.png').addClass('resume-img').appendTo($resumeDiv)

    const displayResume = () => {
        $('body').append($resumeDiv)
    }

    const hideResume = () => {
        $resumeDiv.remove()
    }

    $resumeBtn.on('click', () => {
        displayResume();
        hideBio();
        hideHome();
    })

    const $projectsBtn = $('#projects')
    const $projectsDiv = $('<div>').addClass('projects') // appendTo('body')
    const $projectsH2 = $('<h2>').text('Projects :').attr('id', 'projects-h2').appendTo($projectsDiv)

    


})