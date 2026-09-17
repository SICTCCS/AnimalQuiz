const dropdowns = document.querySelectorAll(".dropdown");

//Loop through all the dropdown elements
    dropdowns.forEach(dropdown => {
        //Get inner elemeents from each dropdown
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');
        
        //Add a click event to the select element
        select.addEventListener('click', () => {
            select.class.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });


        //Loop through all the options elements
        options.forEach(options => { 
            option.addEventListener('click', () => { 
                selected.innerText = options.innerText;
                select.classList.remove('select-clicked');
                caret.classlist.remove('caret-rotate');
                menu.classlist.remove('menu-open');
                options.forEach(option => {
                    option.classlist.remove('active');
                });
                //Add active class to clicked option element
                option.classList.add('activate');
            });
        });
    });
            