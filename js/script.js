document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userPrefersDark) {
        document.body.classList.add('dark-theme');
        themeIcon.className = 'fa fa-moon-o';
    } else {
        document.body.classList.add('light-theme');
        themeIcon.className = 'fa fa-sun-o';
    }

    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        if (document.body.classList.contains('dark-theme')) {
            themeIcon.className = 'fa fa-moon-o';
        } else {
            themeIcon.className = 'fa fa-sun-o';
        }
    });
});
