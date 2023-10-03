document.addEventListener("DOMContentLoaded", function () {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // Show navbar
                nav.classList.toggle('show');
                // Change icon
                toggle.classList.toggle('bx-x');
                // Add padding to body
                bodypd.classList.toggle('body-pd');
                // Add padding to header
                headerpd.classList.toggle('body-pd');
            });
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
        linkColor.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink));

    // Prevent default for anchor links with href="#"
    const myLinks = document.querySelectorAll('a[href="#"]');
    myLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
});
