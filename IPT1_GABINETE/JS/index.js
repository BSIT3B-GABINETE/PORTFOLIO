  document.addEventListener("DOMContentLoaded", function() {
      
            document.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function(e) {
                    if (link.hostname === window.location.hostname) {
                        e.preventDefault(); 
                        const wipe = document.getElementById('wipe-effect');
                        wipe.classList.add('wipe-active');

l
                        setTimeout(function() {
                            window.location.href = link.href;
                        }, 700);
                    }
                });
            });
        });