function tab(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.js-tab')
        let b = p.querySelectorAll('.js-tab-block')

        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active-profil')
            });
            t[index].classList.add('active-profil')
            b.forEach(item => {
                item.classList.remove('active')
            });
            b[index].classList.add('active')
        }

        tabActive(i)

        t.forEach((element, index) => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                tabActive(index)
            })
        });
    } catch {
        console.log('tabs error')
    }
}

if (document.querySelector('.js-tab-wrapper')) {
    let myTabs = document.querySelectorAll('.js-tab-wrapper')
    myTabs.forEach(element => {
        tab(element)
    });
}




// табуляция чекпоинтов

function menu(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.js-check')
        let b = p.querySelectorAll('.js-block')

        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('baground')
            });
            t[index].classList.add('baground')
            b.forEach(item => {
                item.classList.remove('active')
            });
            b[index].classList.add('active')
        }

        tabActive(i)

        t.forEach((element, index) => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                tabActive(index)
            })
        });
    } catch {
        console.log('tabs error')
    }
}

if (document.querySelector('.admin-wrapper')) {
    let myTabs = document.querySelectorAll('.admin-wrapper')
    myTabs.forEach(element => {
        menu(element)
    });
}


// табуляция в лотах

function lot(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.js-lot')
        let b = p.querySelectorAll('.js-tables')

        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active-lots')
            });
            t[index].classList.add('active-lots')
            b.forEach(item => {
                item.classList.remove('active')
            });
            b[index].classList.add('active')
        }

        tabActive(i)

        t.forEach((element, index) => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                tabActive(index)
            })
        });
    } catch {
        console.log('tabs error')
    }
}

if (document.querySelector('.lots')) {
    let myTabs = document.querySelectorAll('.lots')
    myTabs.forEach(element => {
        lot(element)
    });
}






// табуляция в вопросах


function faq(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.js-play')
        let b = p.querySelectorAll('.js-faq')

        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active')
            });
            t[index].classList.add('active')
            b.forEach(item => {
                item.classList.remove('active')
            });
            b[index].classList.add('active')
        }



        t.forEach((element, index) => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                tabActive(index)
            })
        });
    } catch {
        console.log('tabs error')
    }
}

if (document.querySelector('.question__tables')) {
    let myTabs = document.querySelectorAll('.question__tables')
    myTabs.forEach(element => {
        faq(element)
    });
}



// табуляция в document


function Table(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.document-js')
        let b = p.querySelectorAll('.document-tables')

        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active')
            });
            t[index].classList.add('active')
            b.forEach(item => {
                item.classList.remove('active')
            });
            b[index].classList.add('active')
        }

        tabActive(i)

        t.forEach((element, index) => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                tabActive(index)
            })
        });
    } catch {
        console.log('tabs error')
    }
}

if (document.querySelector('.document__wrapper')) {
    let myTabs = document.querySelectorAll('.document__wrapper')
    myTabs.forEach(element => {
        Table(element)
    });
}