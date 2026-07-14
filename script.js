document.addEventListener("DOMContentLoaded", () => {
    const homeLinks = document.querySelectorAll('a[href="index.html"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const isIndexPage = window.location.pathname === '/' || 
                                window.location.pathname.endsWith('index.html') || 
                                window.location.pathname.endsWith('/');
            if (isIndexPage) {
                e.preventDefault(); 
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                history.pushState("", document.title, window.location.pathname);
            }
        });
    });
    if (window.location.hash) {
        const hash = window.location.hash;
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 400);
        }
    }
    document.addEventListener("DOMContentLoaded", function() {
        const mailLink = document.getElementById("smart-mail-link");
        
        if (mailLink) {
            mailLink.addEventListener("click", function(event) {
                event.preventDefault(); 
                
                const emailAddress = "anzhela.fursina@mail.ru";
                
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                
                if (isMobile) {
                    window.location.href = "mailto:" + emailAddress;
                } else {
                    window.open("https://e.mail.ru/compose/?to=" + emailAddress, "_blank");
                }
            });
        }
    });
});