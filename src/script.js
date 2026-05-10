document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerMenu');
    const navigation = document.getElementById('navigation');
    const overlay = document.getElementById('overlay');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        
        if (navigation.classList.contains('translate-x-full')) {
            navigation.classList.remove('translate-x-full');
            navigation.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        } else {
            navigation.classList.add('translate-x-full');
            navigation.classList.remove('translate-x-0');
            overlay.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
    });
    
    const navLinks = navigation.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                hamburger.classList.remove('open');
                navigation.classList.add('translate-x-full');
                navigation.classList.remove('translate-x-0');
                overlay.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    });
    
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('open');
        navigation.classList.add('translate-x-full');
        navigation.classList.remove('translate-x-0');
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    });
});