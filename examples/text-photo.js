window.addEventListener('load', function() {
    var
        fac = new FastAverageColor({defaultColor: [0, 0, 0, 0]}),
        image = document.querySelector('.big-photo'),
        text = document.querySelector('.text-photo'),
        x0 = image.width / 2,
        y0 = image.height / 2,
        step = 0.1,
        n = 30,
        a = 13,
        r,
        fs = 10,
        pi = Math.PI;

    for (var angle = 0; angle < 2 * pi * n; angle += step) {
        r = a * angle / 2 / pi;
        var
            x = x0 + r * Math.cos(angle),
            y = y0 + r * Math.sin(angle),
            sym = document.createElement('div');

        sym.innerHTML = '0123456789'[Math.floor(Math.random() * 10)];
        
        var style = sym.style;
        style.position = 'absolute';
        style.left = x + 'px';
        style.fontSize = fs + 'px';
        style.top = y + 'px';
        style.transform = 'rotate(' + angle + 'deg)';
        text.appendChild(sym);

        var color = fac.getColor(image, {
            left: x,
            top: y,
            width: sym.offsetWidth,
            height: sym.offsetHeight
        });

        style.color = color.rgb;

        fs += 0.005;
    }

    image.classList.add('big-photo_fade');
}, false);
