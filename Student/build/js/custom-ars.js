// filter
const filterTabsLabel = document.querySelectorAll('.filter__list .filter__label')
const filterTabs = document.querySelector('.filter__list--all .filter__label input')

filterTabsLabel.forEach(element => {
    element.addEventListener('click', function(e) {
        let input = element.querySelector('input')
        let id = input.getAttribute('data-id')
        let clones = document.querySelectorAll(`.filter__list .filter__label input[data-id="${id}"]`)
        if (input.checked) {
            clones.forEach(item => {
                item.checked = false
            });
        } else {
            clones.forEach(item => {
                item.checked = true
            });
        }
    })
});

// tabs
function tab(parent, i = 0) {
    let breakpoint = window.matchMedia('(max-width: 768px)').matches;
    let p = document.querySelector(parent)
    let t = p.querySelectorAll('.js-tab')
    let b = p.querySelectorAll('.js-tab-block')

    function tabActive(index) {
        if (t[index].classList.contains('active')) {
            t[index].classList.remove('active')
            b[index].classList.remove('active')
            b[index].classList.add('hide')
            return;
        }
        t.forEach(item => {
            item.classList.remove('active')
        });
        t[index].classList.add('active')
        b.forEach(item => {
            item.classList.remove('active')
            item.classList.add('hide')
        });
        b[index].classList.add('active')
        b[index].classList.remove('hide')
    }

    tabActive(i)

    if (breakpoint) {
        t[i].classList.remove('active')
        b[i].classList.remove('active')
        b[i].classList.add('hide')
    }
    t.forEach((element, index) => {
        element.addEventListener('click', function(e) {
            tabActive(index)
        })
    });

    return true;
}

if (document.querySelector('.filter__tab-wrapper')) {
    tab('.filter__tab-wrapper')
}