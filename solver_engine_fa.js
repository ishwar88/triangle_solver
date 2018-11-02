var a = 0,
    b = 0,
    c = 0,
    p = 0,
    t = 0,
    g = 0,
    s = 0,
    ar = 0,
    pr = 0,
    h = 0,
    l = 0,
    r = 0,
    h2 = 0,
    l2 = 0,
    r2 = 0,
    ra = 0,
    ra2 = 0,
    a2 = 0,
    b2 = 0,
    c2 = 0,
    p2 = 0,
    t2 = 0,
    g2 = 0,
    s2 = 0,
    ar2 = 0,
    pr2 = 0;

function ssaalert() {
    'use strict';
    alert(
        "Les valeurs que vous avez soumis ont 2 réponses. Les deux réponses vont être affichées et les deux triangles seront dessinés."
    );
}

function rtd(x) {
    'use strict';
    return x * 57.2957795;
}

function dtr(x) {
    'use strict';
    return x / 57.2957795;
}

function rd(x) {
    'use strict';
    return (Math.round(x * 100000)) / 100000;
}

function sval(x, y, z) {
    'use strict';
    return (x + y + z) / 2;
}

function area(x, y, z, q) {
    'use strict';
    return Math.sqrt(x * (x - y) * (x - z) * (x - q));
}

function per(x, y, z) {
    'use strict';
    return x + y + z;
}

function showval() {
    'use strict';
    a = rd(a);
    b = rd(b);
    c = rd(c);
    p = rd(p);
    g = rd(g);
    t = rd(t);
    ar = rd(ar);
    pr = rd(pr);
    document.getElementById('pinput').value = p;
    document.getElementById('ginput').value = g;
    document.getElementById('tinput').value = t;
    document.getElementById('arinput').value = ar;
    document.getElementById('prinput').value = pr;
    document.getElementById('ainput').value = a;
    document.getElementById('binput').value = b;
    document.getElementById('cinput').value = c;
}

function showval2() {
    'use strict';
    a = rd(a);
    b = rd(b);
    c = rd(c);
    p = rd(p);
    g = rd(g);
    t = rd(t);
    a2 = rd(a2);
    b2 = rd(b2);
    c2 = rd(c2);
    p2 = rd(p2);
    g2 = rd(g2);
    t2 = rd(t2);
    ar = rd(ar);
    pr = rd(pr);
    pr2 = rd(pr2);
    ar2 = rd(ar2);
    a = a.toString();
    b = b.toString();
    c = c.toString();
    p = p.toString();
    t = t.toString();
    g = g.toString();
    ar = ar.toString();
    pr = pr.toString();
    a2 = a2.toString();
    b2 = b2.toString();
    c2 = c2.toString();
    p2 = p2.toString();
    t2 = t2.toString();
    g2 = g2.toString();
    ar2 = ar2.toString();
    pr2 = pr2.toString();
    document.getElementById('pinput').value = p + " | " + p2;
    document.getElementById('ginput').value = g + " | " + g2;
    document.getElementById('tinput').value = t + " | " + t2;
    document.getElementById('arinput').value = ar + " | " + ar2;
    document.getElementById('prinput').value = pr + " | " + pr2;
    document.getElementById('ainput').value = a + " | " + a2;
    document.getElementById('binput').value = b + " | " + b2;
    document.getElementById('cinput').value = c + " | " + c2;
}

function drawobta() {
    'use strict';
    h = (Math.sin(t)) * c;
    ra = 1.57079632679 - t;
    r = (h * (Math.sin(ra))) / (Math.sin(t));
    l = a - r;
    g = rd(rtd(g));
    t = rd(rtd(t));
    p = rd(rtd(p));
    if ((h >= r) && (h >= l)) {
        r = r * (250 / h);
        l = l * (250 / h);
        h = 250;
    } else if ((r > h) && (r > l)) {
        l = l * (350 / r);
        h = h * (350 / r);
        r = 350;
    } else {
        r = r * (350 / l);
        h = h * (350 / l);
        l = 350;
    }
    r = rd(r);
    l = rd(l);
    h = rd(h);
    if (a2 !== 0) {
        if ((Math.pow(c2, 2)) + (Math.pow(b2, 2)) < (Math.pow(a2, 2))) {
            alert(
                "Le deuxième triangle va être pivoté dans le sens antihoraire."
            );
            h2 = (Math.sin(t2)) * c2;
            ra2 = 1.57079632679 - t2;
            r2 = (h2 * (Math.sin(ra2))) / (Math.sin(t2));
            l2 = a2 - r2;
            g2 = rd(rtd(g2));
            t2 = rd(rtd(t2));
            p2 = rd(rtd(p2));
            if ((h2 >= r2) && (h2 >= l2)) {
                r2 = r2 * (250 / h2);
                l2 = l2 * (250 / h2);
                h2 = 250;
            } else if ((r2 > h2) && (r2 > l2)) {
                l2 = l2 * (350 / r2);
                h2 = h2 * (350 / r2);
                r2 = 350;
            } else {
                r2 = r2 * (350 / l2);
                h2 = h2 * (350 / l2);
                l2 = 350;
            }
            r2 = rd(r2);
            l2 = rd(l2);
            h2 = rd(h2);
        } else if ((Math.pow(c2, 2)) + (Math.pow(a2, 2)) < (Math.pow(b2, 2))) {
            alert(
                "Le deuxième triangle va être pivoté dans le sens horaire."
            );
            h2 = (Math.sin(g2)) * a2;
            ra2 = 1.57079632679 - g2;
            r2 = (h2 * (Math.sin(ra2))) / (Math.sin(g2));
            l2 = b2 - r2;
            g2 = rd(rtd(g2));
            t2 = rd(rtd(t2));
            p2 = rd(rtd(p2));
            if ((h2 >= r2) && (h2 >= l2)) {
                r2 = r2 * (250 / h2);
                l2 = l2 * (250 / h2);
                h2 = 250;
            } else if ((r2 > h2) && (r2 > l2)) {
                l2 = l2 * (350 / r2);
                h2 = h2 * (350 / r2);
                r2 = 350;
            } else {
                r2 = r2 * (350 / l2);
                h2 = h2 * (350 / l2);
                l2 = 350;
            }
            r2 = rd(r2);
            l2 = rd(l2);
            h2 = rd(h2);
        }
    }
    document.getElementById("trianglegen").style.borderRightWidth = r +
        "px";
    document.getElementById("trianglegen").style.borderBottomWidth = h +
        "px";
    document.getElementById("trianglegen").style.borderLeftWidth = l + "px";
    document.getElementById("trianglegen2").style.borderRightWidth = r2 +
        "px";
    document.getElementById("trianglegen2").style.borderBottomWidth = h2 +
        "px";
    document.getElementById("trianglegen2").style.borderLeftWidth = l2 +
        "px";
}

function drawobtb() {
    'use strict';
    h = (Math.sin(g)) * a;
    ra = 1.57079632679 - g;
    r = (h * (Math.sin(ra))) / (Math.sin(g));
    l = b - r;
    g = rd(rtd(g));
    t = rd(rtd(t));
    p = rd(rtd(p));
    if ((h >= r) && (h >= l)) {
        r = r * (250 / h);
        l = l * (250 / h);
        h = 250;
    } else if ((r > h) && (r > l)) {
        l = l * (350 / r);
        h = h * (350 / r);
        r = 350;
    } else {
        r = r * (350 / l);
        h = h * (350 / l);
        l = 350;
    }
    r = rd(r);
    l = rd(l);
    h = rd(h);
    if (a2 !== 0) {
        if ((Math.pow(c2, 2)) + (Math.pow(b2, 2)) < (Math.pow(a2, 2))) {
            alert(
                "Le deuxième triangle va être pivoté dans le sens antihoraire."
            );
            h2 = (Math.sin(t2)) * c2;
            ra2 = 1.57079632679 - t2;
            r2 = (h2 * (Math.sin(ra2))) / (Math.sin(t2));
            l2 = a2 - r2;
            g2 = rd(rtd(g2));
            t2 = rd(rtd(t2));
            p2 = rd(rtd(p2));
            if ((h2 >= r2) && (h2 >= l2)) {
                r2 = r2 * (250 / h2);
                l2 = l2 * (250 / h2);
                h2 = 250;
            } else if ((r2 > h2) && (r2 > l2)) {
                l2 = l2 * (350 / r2);
                h2 = h2 * (350 / r2);
                r2 = 350;
            } else {
                r2 = r2 * (350 / l2);
                h2 = h2 * (350 / l2);
                l2 = 350;
            }
        }
        r2 = rd(r2);
        l2 = rd(l2);
        h2 = rd(h2);
    } else if ((Math.pow(c2, 2)) + (Math.pow(a2, 2)) < (Math.pow(b2, 2))) {
        alert("Le deuxième triangle va être pivoté dans le sens horaire.");
        h2 = (Math.sin(g2)) * a2;
        ra2 = 1.57079632679 - g2;
        r2 = (h2 * (Math.sin(ra2))) / (Math.sin(g2));
        l2 = b2 - r2;
        g2 = rd(rtd(g2));
        t2 = rd(rtd(t2));
        p2 = rd(rtd(p2));
        if ((h2 >= r2) && (h2 >= l2)) {
            r2 = r2 * (250 / h2);
            l2 = l2 * (250 / h2);
            h2 = 250;
        } else if ((r2 > h) && (r2 > l2)) {
            l2 = l2 * (350 / r2);
            h2 = h2 * (350 / r2);
            r2 = 350;
        } else {
            r2 = r2 * (350 / l2);
            h2 = h2 * (350 / l2);
            l2 = 350;
        }
        r2 = rd(r2);
        l2 = rd(l2);
        h2 = rd(h2);
    }
    document.getElementById("trianglegen").style.borderRightWidth = r +
        "px";
    document.getElementById("trianglegen").style.borderBottomWidth = h +
        "px";
    document.getElementById("trianglegen").style.borderLeftWidth = l + "px";
    document.getElementById("trianglegen2").style.borderRightWidth = r2 +
        "px";
    document.getElementById("trianglegen2").style.borderBottomWidth = h2 +
        "px";
    document.getElementById("trianglegen2").style.borderLeftWidth = l2 +
        "px";
}

function draw() {
    'use strict';
    h = (Math.sin(p)) * b;
    ra = 1.57079632679 - p;
    r = (h * (Math.sin(ra))) / (Math.sin(p));
    l = c - r;
    g = rd(rtd(g));
    t = rd(rtd(t));
    p = rd(rtd(p));
    if ((h >= r) && (h >= l)) {
        r = r * (250 / h);
        l = l * (250 / h);
        h = 250;
    } else if ((r > h) && (r > l)) {
        l = l * (350 / r);
        h = h * (350 / r);
        r = 350;
    } else {
        r = r * (350 / l);
        h = h * (350 / l);
        l = 350;
    }
    r = rd(r);
    l = rd(l);
    h = rd(h);
    if (a2 !== 0) {
        if ((Math.pow(c2, 2)) + (Math.pow(b2, 2)) < (Math.pow(a2, 2))) {
            alert(
                "Le deuxième triangle va être pivoté dans le sens antihoraire."
            );
            h2 = (Math.sin(t2)) * c2;
            ra2 = 1.57079632679 - t2;
            r2 = (h2 * (Math.sin(ra2))) / (Math.sin(t2));
            l2 = a2 - r2;
            g2 = rd(rtd(g2));
            t2 = rd(rtd(t2));
            p2 = rd(rtd(p2));
            if ((h2 >= r2) && (h2 >= l2)) {
                r2 = r2 * (250 / h2);
                l2 = l2 * (250 / h2);
                h2 = 250;
            } else if ((r2 > h2) && (r2 > l2)) {
                l2 = l2 * (350 / r2);
                h2 = h2 * (350 / r2);
                r2 = 350;
            } else {
                r2 = r2 * (350 / l2);
                h2 = h2 * (350 / l2);
                l2 = 350;
            }
            r2 = rd(r2);
            l2 = rd(l2);
            h2 = rd(h2);
        } else if ((Math.pow(c2, 2)) + (Math.pow(a2, 2)) < (Math.pow(b2, 2))) {
            alert(
                "Le deuxième triangle va être pivoté dans le sens horaire."
            );
            h2 = (Math.sin(g2)) * a2;
            ra2 = 1.57079632679 - g2;
            r2 = (h2 * (Math.sin(ra2))) / (Math.sin(g2));
            l2 = b2 - r2;
            g2 = rd(rtd(g2));
            t2 = rd(rtd(t2));
            p2 = rd(rtd(p2));
            if ((h2 >= r2) && (h2 >= l2)) {
                r2 = r2 * (250 / h2);
                l2 = l2 * (250 / h2);
                h2 = 250;
            } else if ((r2 > h2) && (r2 > l2)) {
                l2 = l2 * (350 / r2);
                h2 = h2 * (350 / r2);
                r2 = 350;
            } else {
                r2 = r2 * (350 / l2);
                h2 = h2 * (350 / l2);
                l2 = 350;
            }
            r2 = rd(r2);
            l2 = rd(l2);
            h2 = rd(h2);
        } else {
            h2 = (Math.sin(p2)) * b2;
            ra2 = 1.57079632679 - p2;
            r2 = (h2 * (Math.sin(ra2))) / (Math.sin(p2));
            l2 = c2 - r2;
            g2 = rd(rtd(g2));
            t2 = rd(rtd(t2));
            p2 = rd(rtd(p2));
            if ((h2 >= r2) && (h2 >= l2)) {
                r2 = r2 * (250 / h2);
                l2 = l2 * (250 / h2);
                h2 = 250;
            } else if ((r2 > h2) && (r2 > l2)) {
                l2 = l2 * (350 / r2);
                h2 = h2 * (350 / r2);
                r2 = 350;
            } else {
                r2 = r2 * (350 / l2);
                h2 = h2 * (350 / l2);
                l2 = 350;
            }
            r2 = rd(r2);
            l2 = rd(l2);
            h2 = rd(h2);
        }
    }
    document.getElementById("trianglegen").style.borderRightWidth = r +
        "px";
    document.getElementById("trianglegen").style.borderBottomWidth = h +
        "px";
    document.getElementById("trianglegen").style.borderLeftWidth = l + "px";
    document.getElementById("trianglegen2").style.borderRightWidth = r2 +
        "px";
    document.getElementById("trianglegen2").style.borderBottomWidth = h2 +
        "px";
    document.getElementById("trianglegen2").style.borderLeftWidth = l2 +
        "px";
}

function drawtri() {
    'use strict';
    if ((Math.pow(c, 2)) + (Math.pow(b, 2)) < (Math.pow(a, 2))) {
        alert("Le triangle va être pivoté dans le sens antihoraire.");
        drawobta();
    } else if ((Math.pow(c, 2)) + (Math.pow(a, 2)) < (Math.pow(b, 2))) {
        alert("Le triangle va être pivoté dans le sens horaire.");
        drawobtb();
    } else {
        draw();
    }
}

function resetTriangle() {
    'use strict';
    document.getElementById('ainput').value = "";
    document.getElementById('binput').value = "";
    document.getElementById('cinput').value = "";
    document.getElementById('pinput').value = "";
    document.getElementById('ginput').value = "";
    document.getElementById('tinput').value = "";
    document.getElementById('arinput').value = "";
    document.getElementById('prinput').value = "";
    document.getElementById("trianglegen").style.borderRightWidth = "0px";
    document.getElementById("trianglegen").style.borderBottomWidth = "0px";
    document.getElementById("trianglegen").style.borderLeftWidth = "0px";
    document.getElementById("trianglegen2").style.borderRightWidth = "0px";
    document.getElementById("trianglegen2").style.borderBottomWidth = "0px";
    document.getElementById("trianglegen2").style.borderLeftWidth = "0px";
    var a = 0,
        b = 0,
        c = 0,
        p = 0,
        t = 0,
        g = 0,
        s = 0,
        ar = 0,
        pr = 0,
        h = 0,
        l = 0,
        r = 0,
        h2 = 0,
        l2 = 0,
        r2 = 0,
        ra = 0,
        ra2 = 0,
        a2 = 0,
        b2 = 0,
        c2 = 0,
        p2 = 0,
        t2 = 0,
        g2 = 0,
        s2 = 0,
        ar2 = 0,
        pr2 = 0;
}

function detectNaN() {
    'use strict';
    if ((isNaN(a)) || (isNaN(b)) || (isNaN(c)) || (isNaN(p)) || (isNaN(g)) ||
        (isNaN(t)) || (isNaN(ar)) || (isNaN(pr)) || (a < 0) || (b < 0) || (
            c < 0) || (p < 0) || (t < 0) || (g < 0) || (ar < 0) || (pr < 0) ||
        (a2 < 0) || (b2 < 0) || (c2 < 0) || (p2 < 0) || (t2 < 0) || (g2 < 0) ||
        (ar2 < 0) || (pr2 < 0) || (l < 0) || (r < 0) || (h < 0) || (ra < 0) ||
        (ra2 < 0) || (s < 0) || (s2 < 0)) {
        alert(
            "Erreur: Ne peut pas calculer. Veuillez resoumettre avec de l'information valide. Si l'information est correcte, veuillez envoyer les valeurs par courriel à darenliang7@gmail.com. Merci."
        );
        resetTriangle();
        throw new Error(
            "Erreur: Ne peut pas calculer. Veuillez resoumettre avec de l'information valide. Si l'information est correcte, veuillez envoyer les valeurs par courriel à darenliang7@gmail.com. Merci."
        );
        return;
    }
}

function submitTriangle() {
    'use strict';
    a = Number(document.getElementById('ainput').value);
    b = Number(document.getElementById('binput').value);
    c = Number(document.getElementById('cinput').value);
    p = Number(document.getElementById('pinput').value);
    g = Number(document.getElementById('ginput').value);
    t = Number(document.getElementById('tinput').value);
    ar = Number(document.getElementById('arinput').value);
    pr = Number(document.getElementById('prinput').value);
    if ((isNaN(a)) || (isNaN(b)) || (isNaN(c)) || (isNaN(p)) || (isNaN(g)) ||
        (isNaN(t))) {
        alert(
            "Vous avez entré un caractère qui n'a pas de valeur. Veuillez resoumettre avec seulement des nombres."
        );
        resetTriangle();
        return;
    }
    if ((a < 0) || (b < 0) || (c < 0) || (p < 0) || (t < 0) || (g < 0) || (
        ar < 0) || (pr < 0)) {
        alert(
            "Vous avez entré un nombre négatif. Veuillez resoumettre avec seulement des nombres positifs."
        );
        resetTriangle();
        return;
    }
    if ((p < 0) || (t < 0) || (g < 0) || (p >= 180) || (t >= 180) || (g >=
        180) || (p + t >= 180) || (p + g >= 180) || (g + t >= 180) || (
        p + t + g > 180)) {
        alert(
            "Les angles que vous avez soumis ne sont pas valides. Veuillez resoumettre avec des angles valides."
        );
        resetTriangle();
        return;
    }
    if (((a !== 0) && (b !== 0) && (t !== 0) && (t >= 90) && (b <= a)) || (
            (c !== 0) && (b !== 0) && (t !== 0) && (t >= 90) && (b <= c)) ||
        ((a !== 0) && (c !== 0) && (g !== 0) && (g >= 90) && (c <= a)) || (
            (b !== 0) && (c !== 0) && (g !== 0) && (g >= 90) && (c <= b)) ||
        ((a !== 0) && (b !== 0) && (p !== 0) && (p >= 90) && (a <= b)) || (
            (a !== 0) && (c !== 0) && (p !== 0) && (p >= 90) && (a <= c))) {
        alert(
            "Les angles ou côtes que vous avez soumis ne sont pas valides. Veuillez resoumettre avec des angles ou côtes valides."
        );
        resetTriangle();
        return;
    }
    if (((a !== 0) && (b !== 0) && (c !== 0) && (p !== 0)) || ((a !== 0) &&
            (b !== 0) && (c !== 0) && (t !== 0)) || ((a !== 0) && (b !== 0) &&
            (c !== 0) && (g !== 0)) || ((a !== 0) && (b !== 0) && (p !== 0) &&
            (t !== 0)) || ((a !== 0) && (b !== 0) && (p !== 0) && (g !== 0)) ||
        ((a !== 0) && (b !== 0) && (t !== 0) && (g !== 0)) || ((a !== 0) &&
            (c !== 0) && (p !== 0) && (t !== 0)) || ((a !== 0) && (c !== 0) &&
            (p !== 0) && (g !== 0)) || ((a !== 0) && (c !== 0) && (t !== 0) &&
            (g !== 0)) || ((a !== 0) && (p !== 0) && (t !== 0) && (g !== 0)) ||
        ((b !== 0) && (c !== 0) && (p !== 0) && (t !== 0)) || ((b !== 0) &&
            (c !== 0) && (p !== 0) && (g !== 0)) || ((b !== 0) && (c !== 0) &&
            (t !== 0) && (g !== 0)) || ((b !== 0) && (p !== 0) && (t !== 0) &&
            (g !== 0)) || ((c !== 0) && (p !== 0) && (t !== 0) && (g !== 0))
    ) {
        alert(
            "Vous avez entré plus que trois valeurs. Veuillez resoumettre les valeurs."
        );
        resetTriangle();
        return;
    }
    if (((a !== 0) && (b !== 0) && (c !== 0) && (a + b <= c)) || ((c + b <=
        a) && (a !== 0) && (b !== 0) && (c !== 0)) || ((a + c <= b) &&
        (a !== 0) && (b !== 0) && (c !== 0))) {
        alert(
            "Les longueurs de côtés du triangle ne sont pas possibles. Veuillez resoumettre de l'information valide."
        );
        resetTriangle();
        return;
    }
    if ((a !== 0) && (b !== 0) && (pr !== 0)) {
        c = pr - a - b;
    } else if ((a !== 0) && (c !== 0) && (pr !== 0)) {
        b = pr - a - c;
    } else if ((b !== 0) && (c !== 0) && (pr !== 0)) {
        a = pr - b - c;
    }
    if ((a !== 0) && (b !== 0) && (c !== 0)) {
        g = Math.acos(-(Math.pow(c, 2) - Math.pow(b, 2) - Math.pow(a, 2)) /
            (2 * a * b));
        t = Math.acos(-(Math.pow(b, 2) - Math.pow(a, 2) - Math.pow(c, 2)) /
            (2 * a * c));
        p = 3.14159265359 - g - t;
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((a !== 0) && (b !== 0) && (g !== 0)) {
        g = dtr(g);
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * (Math.cos(
            g)));
        t = Math.acos(-(Math.pow(b, 2) - Math.pow(a, 2) - Math.pow(c, 2)) /
            (2 * a * c));
        p = 3.14159265359 - g - t;
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((a !== 0) && (c !== 0) && (t !== 0)) {
        t = dtr(t);
        b = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2) - 2 * a * c * (Math.cos(
            t)));
        g = Math.acos(-(Math.pow(c, 2) - Math.pow(b, 2) - Math.pow(a, 2)) /
            (2 * a * b));
        p = 3.14159265359 - g - t;
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((c !== 0) && (b !== 0) && (p !== 0)) {
        p = dtr(p);
        a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) - 2 * b * c * (Math.cos(
            p)));
        g = Math.acos(-(Math.pow(c, 2) - Math.pow(b, 2) - Math.pow(a, 2)) /
            (2 * a * b));
        t = 3.14159265359 - g - p;
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((a !== 0) && (t !== 0) && (g !== 0)) {
        p = 180 - t - g;
        t = dtr(t);
        p = dtr(p);
        b = (a * (Math.sin(t)) / (Math.sin(p)));
        g = dtr(g);
        c = (a * (Math.sin(g)) / (Math.sin(p)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((b !== 0) && (p !== 0) && (g !== 0)) {
        t = 180 - p - g;
        p = dtr(p);
        t = dtr(t);
        a = (b * (Math.sin(p)) / (Math.sin(t)));
        g = dtr(g);
        c = (a * (Math.sin(g)) / (Math.sin(p)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((c !== 0) && (t !== 0) && (p !== 0)) {
        g = 180 - t - p;
        t = dtr(t);
        g = dtr(g);
        b = (c * (Math.sin(t)) / (Math.sin(g)));
        p = dtr(p);
        a = (c * (Math.sin(p)) / (Math.sin(g)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((c !== 0) && (p !== 0) && (g !== 0)) {
        t = 180 - g - p;
        t = dtr(t);
        g = dtr(g);
        b = (c * (Math.sin(t)) / (Math.sin(g)));
        p = dtr(p);
        a = (c * (Math.sin(p)) / (Math.sin(g)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((a !== 0) && (t !== 0) && (p !== 0)) {
        g = 180 - t - p;
        t = dtr(t);
        p = dtr(p);
        b = (a * (Math.sin(t)) / (Math.sin(p)));
        g = dtr(g);
        c = (a * (Math.sin(g)) / (Math.sin(p)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((c !== 0) && (t !== 0) && (g !== 0)) {
        p = 180 - t - g;
        t = dtr(t);
        g = dtr(g);
        b = (c * (Math.sin(t)) / (Math.sin(g)));
        p = dtr(p);
        a = (c * (Math.sin(p)) / (Math.sin(g)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((b !== 0) && (t !== 0) && (g !== 0)) {
        p = 180 - t - g;
        t = dtr(t);
        g = dtr(g);
        c = (b * (Math.sin(g)) / (Math.sin(t)));
        p = dtr(p);
        a = (c * (Math.sin(p)) / (Math.sin(g)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((c !== 0) && (g !== 0) && (p !== 0)) {
        t = 180 - g - p;
        t = dtr(t);
        g = dtr(g);
        b = (c * (Math.sin(t)) / (Math.sin(g)));
        p = dtr(p);
        a = (c * (Math.sin(p)) / (Math.sin(g)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((a !== 0) && (g !== 0) && (p !== 0)) {
        t = 180 - g - p;
        t = dtr(t);
        p = dtr(p);
        b = (a * (Math.sin(t)) / (Math.sin(p)));
        g = dtr(g);
        c = (a * (Math.sin(g)) / (Math.sin(p)));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((a !== 0) && (b !== 0) && (t !== 0)) {
        if (a <= b) {
            t = dtr(t);
            p = Math.asin((a * (Math.sin(t))) / (b));
            g = 3.14159265359 - t - p;
            c = (a * (Math.sin(g)) / (Math.sin(p)));
            s = sval(a, b, c);
            ar = area(s, a, b, c);
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        } else {
            t = dtr(t);
            p = Math.asin((a * (Math.sin(t))) / (b));
            p2 = 3.14159265359 - p;
            g = 3.14159265359 - t - p;
            g2 = 3.14159265359 - p2 - t;
            c = (a * (Math.sin(g)) / (Math.sin(p)));
            c2 = (a * (Math.sin(g2)) / (Math.sin(p2)));
            a2 = a;
            b2 = b;
            t2 = t;
            s = sval(a, b, c);
            s2 = sval(a, b, c2);
            ar = area(s, a, b, c);
            ar2 = area(s2, a, b, c2);
            pr = per(a, b, c);
            pr2 = per(a, b, c2);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        }
    } else if ((a !== 0) && (b !== 0) && (p !== 0)) {
        if (a >= b) {
            p = dtr(p);
            t = Math.asin((b * (Math.sin(p))) / (a));
            g = 3.14159265359 - t - p;
            c = (a * (Math.sin(g)) / (Math.sin(p)));
            s = sval(a, b, c);
            ar = area(s, a, b, c);
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        } else {
            p = dtr(p);
            t = Math.asin((b * (Math.sin(p))) / (a));
            t2 = 3.14159265359 - t;
            g = 3.14159265359 - t - p;
            g2 = 3.14159265359 - p - t2;
            c = (a * (Math.sin(g)) / (Math.sin(p)));
            c2 = (a * (Math.sin(g2)) / (Math.sin(p)));
            a2 = a;
            b2 = b;
            p2 = p;
            s = sval(a, b, c);
            s2 = sval(a, b, c2);
            ar = area(s, a, b, c);
            ar2 = area(s2, a, b, c2);
            pr = per(a, b, c);
            pr2 = per(a, b, c2);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        }
    } else if ((a !== 0) && (c !== 0) && (p !== 0)) {
        if (a >= c) {
            p = dtr(p);
            g = Math.asin((c * (Math.sin(p))) / (a));
            t = 3.14159265359 - g - p;
            b = (a * (Math.sin(t)) / (Math.sin(p)));
            s = sval(a, b, c);
            ar = area(s, a, b, c);
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        } else {
            p = dtr(p);
            g = Math.asin((c * (Math.sin(p))) / (a));
            g2 = 3.14159265359 - g;
            t = 3.14159265359 - g - p;
            t2 = 3.14159265359 - p - g2;
            b = (a * (Math.sin(t)) / (Math.sin(p)));
            b2 = (a * (Math.sin(t2)) / (Math.sin(p)));
            a2 = a;
            c2 = c;
            p2 = p;
            s = sval(a, b, c);
            s2 = sval(a, b2, c);
            ar = area(s, a, b, c);
            ar2 = area(s2, a, b2, c);
            pr = per(a, b, c);
            pr2 = per(a, b2, c);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        }
    } else if ((a !== 0) && (c !== 0) && (g !== 0)) {
        if (a <= c) {
            g = dtr(g);
            p = Math.asin((a * (Math.sin(g))) / (c));
            t = 3.14159265359 - g - p;
            b = (a * (Math.sin(t)) / (Math.sin(p)));
            s = sval(a, b, c);
            ar = area(s, a, b, c);
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        } else {
            g = dtr(g);
            p = Math.asin((a * (Math.sin(g))) / (c));
            p2 = 3.14159265359 - p;
            t = 3.14159265359 - g - p;
            t2 = 3.14159265359 - p2 - g;
            b = (a * (Math.sin(t)) / (Math.sin(p)));
            b2 = (a * (Math.sin(t2)) / (Math.sin(p2)));
            a2 = a;
            c2 = c;
            g2 = g;
            s = sval(a, b, c);
            s2 = sval(a, b2, c);
            ar = area(s, a, b, c);
            ar2 = area(s2, a, b2, c);
            pr = per(a, b, c);
            pr2 = per(a, b2, c);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        }
    } else if ((b !== 0) && (c !== 0) && (g !== 0)) {
        if (b <= c) {
            g = dtr(g);
            t = Math.asin((b * (Math.sin(g))) / (c));
            p = 3.14159265359 - t - g;
            a = (c * (Math.sin(p)) / (Math.sin(g)));
            s = sval(a, b, c);
            ar = area(s, a, b, c);
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        } else {
            g = dtr(g);
            t = Math.asin((b * (Math.sin(g))) / (c));
            t2 = 3.14159265359 - t;
            p = 3.14159265359 - g - t;
            p2 = 3.14159265359 - g - t2;
            a = (c * (Math.sin(p)) / (Math.sin(g)));
            a2 = (c * (Math.sin(p2)) / (Math.sin(g)));
            c2 = c;
            b2 = b;
            g2 = g;
            s = sval(a, b, c);
            s2 = sval(a2, b, c);
            ar = area(s, a, b, c);
            ar2 = area(s2, a2, b, c);
            pr = per(a, b, c);
            pr2 = per(a2, b, c);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        }
    } else if ((b !== 0) && (c !== 0) && (t !== 0)) {
        if (c <= b) {
            t = dtr(t);
            g = Math.asin((c * (Math.sin(t))) / (b));
            p = 3.14159265359 - t - g;
            a = (b * (Math.sin(p)) / (Math.sin(t)));
            s = sval(a, b, c);
            ar = area(s, a, b, c);
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        } else {
            t = dtr(t);
            g = Math.asin((c * (Math.sin(t))) / (b));
            g2 = 3.14159265359 - g;
            p = 3.14159265359 - g - t;
            p2 = 3.14159265359 - g2 - t;
            a = (b * (Math.sin(p)) / (Math.sin(t)));
            a2 = (b * (Math.sin(p2)) / (Math.sin(t)));
            c2 = c;
            b2 = b;
            t2 = t;
            s = sval(a, b, c);
            s2 = sval(a2, b, c);
            ar = area(s, a, b, c);
            ar2 = area(s2, a2, b, c);
            pr = per(a, b, c);
            pr2 = per(a2, b, c);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        }
    } else if ((a !== 0) && (b !== 0) && (ar !== 0)) {
        if (0.5 * a * b !== ar) {
            g = Math.asin((2 * ar) / (a * b));
            g2 = 3.14159265359 - g;
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * (
                Math.cos(g)));
            c2 = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * (
                Math.cos(g2)));
            t = Math.acos(-(Math.pow(b, 2) - Math.pow(a, 2) - Math.pow(c, 2)) /
                (2 * a * c));
            t2 = Math.acos(-(Math.pow(b, 2) - Math.pow(a, 2) - Math.pow(c2,
                2)) / (2 * a * c2));
            p = 3.14159265359 - g - t;
            p2 = 3.14159265359 - g2 - t2;
            a2 = a;
            b2 = b;
            ar2 = ar;
            pr = per(a, b, c);
            pr2 = per(a, b, c2);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        } else {
            g = Math.asin((2 * ar) / (a * b));
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * (
                Math.cos(g)));
            t = Math.acos(-(Math.pow(b, 2) - Math.pow(a, 2) - Math.pow(c, 2)) /
                (2 * a * c));
            p = 3.14159265359 - g - t;
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        }
    } else if ((a !== 0) && (c !== 0) && (ar !== 0)) {
        if (0.5 * a * c !== ar) {
            t = Math.asin((2 * ar) / (a * c));
            t2 = 3.14159265359 - t;
            b = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2) - 2 * a * c * (
                Math.cos(t)));
            b2 = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2) - 2 * a * c * (
                Math.cos(t2)));
            g = Math.acos(-(Math.pow(c, 2) - Math.pow(b, 2) - Math.pow(a, 2)) /
                (2 * a * b));
            g2 = Math.acos(-(Math.pow(c, 2) - Math.pow(b2, 2) - Math.pow(a,
                2)) / (2 * a * b2));
            p = 3.14159265359 - g - t;
            p2 = 3.14159265359 - g2 - t2;
            a2 = a;
            c2 = c;
            ar2 = ar;
            pr = per(a, b, c);
            pr2 = per(a, b2, c);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        } else {
            t = Math.asin((2 * ar) / (a * c));
            b = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2) - 2 * a * c * (
                Math.cos(t)));
            g = Math.acos(-(Math.pow(c, 2) - Math.pow(b, 2) - Math.pow(a, 2)) /
                (2 * a * b));
            p = 3.14159265359 - g - t;
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        }
    } else if ((b !== 0) && (c !== 0) && (ar !== 0)) {
        if (0.5 * c * b !== ar) {
            p = Math.asin((2 * ar) / (b * c));
            p2 = 3.14159265359 - p;
            a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) - 2 * b * c * (
                Math.cos(p)));
            a2 = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) - 2 * b * c * (
                Math.cos(p2)));
            g = Math.acos(-(Math.pow(c, 2) - Math.pow(b, 2) - Math.pow(a, 2)) /
                (2 * a * b));
            g2 = Math.acos(-(Math.pow(c, 2) - Math.pow(b, 2) - Math.pow(a2,
                2)) / (2 * a2 * b));
            t = 3.14159265359 - g - p;
            t2 = 3.14159265359 - g2 - p2;
            b2 = b;
            c2 = c;
            ar2 = ar;
            pr = per(a, b, c);
            pr2 = per(a2, b, c);
            detectNaN();
            ssaalert();
            drawtri();
            showval2();
            return;
        } else {
            p = Math.asin((2 * ar) / (b * c));
            a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) - 2 * b * c * (
                Math.cos(p)));
            g = Math.acos(-(Math.pow(c, 2) - Math.pow(b, 2) - Math.pow(a, 2)) /
                (2 * a * b));
            t = 3.14159265359 - g - p;
            pr = per(a, b, c);
            detectNaN();
            drawtri();
            showval();
            return;
        }
    } else if ((p !== 0) && (t !== 0) && (g !== 0)) {
        alert(
            "Vous avez entré 3 angles, ce triangle aura une infinité de solutions. Veuillez resoumettre les valeurs."
        );
        resetTriangle();
        return;
    } else if ((p !== 0) && (t !== 0) && (pr !== 0)) {
        g = 180 - p - t;
        p = dtr(p);
        t = dtr(t);
        g = dtr(g);
        a = (pr * Math.sin(p)) / (Math.sin(p) + Math.sin(t) + Math.sin(g));
        b = (a * Math.sin(t)) / (Math.sin(p));
        c = (a * Math.sin(g)) / (Math.sin(p));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((t !== 0) && (g !== 0) && (pr !== 0)) {
        p = 180 - t - g;
        p = dtr(p);
        t = dtr(t);
        g = dtr(g);
        a = (pr * Math.sin(p)) / (Math.sin(p) + Math.sin(t) + Math.sin(g));
        b = (a * Math.sin(t)) / (Math.sin(p));
        c = (a * Math.sin(g)) / (Math.sin(p));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((p !== 0) && (g !== 0) && (pr !== 0)) {
        t = 180 - p - g;
        p = dtr(p);
        t = dtr(t);
        g = dtr(g);
        a = (pr * Math.sin(p)) / (Math.sin(p) + Math.sin(t) + Math.sin(g));
        b = (a * Math.sin(t)) / (Math.sin(p));
        c = (a * Math.sin(g)) / (Math.sin(p));
        s = sval(a, b, c);
        ar = area(s, a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((p !== 0) && (t !== 0) && (ar !== 0)) {
        g = 180 - p - t;
        p = dtr(p);
        t = dtr(t);
        g = dtr(g);
        a = Math.sqrt((2 * ar * Math.sin(p)) / (Math.sin(t) * (Math.sin(g))));
        b = (a * Math.sin(t)) / (Math.sin(p));
        c = (a * Math.sin(g)) / (Math.sin(p));
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((p !== 0) && (g !== 0) && (ar !== 0)) {
        t = 180 - p - g;
        p = dtr(p);
        t = dtr(t);
        g = dtr(g);
        a = Math.sqrt((2 * ar * Math.sin(p)) / (Math.sin(t) * (Math.sin(g))));
        b = (a * Math.sin(t)) / (Math.sin(p));
        c = (a * Math.sin(g)) / (Math.sin(p));
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((t !== 0) && (g !== 0) && (ar !== 0)) {
        p = 180 - t - g;
        p = dtr(p);
        t = dtr(t);
        g = dtr(g);
        a = Math.sqrt((2 * ar * Math.sin(p)) / (Math.sin(t) * (Math.sin(g))));
        b = (a * Math.sin(t)) / (Math.sin(p));
        c = (a * Math.sin(g)) / (Math.sin(p));
        pr = per(a, b, c);
        detectNaN();
        drawtri();
        showval();
        return;
    } else if ((a !== 0) && (t !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((a !== 0) && (g !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((b !== 0) && (p !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((b !== 0) && (g !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((c !== 0) && (p !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((c !== 0) && (t !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((a !== 0) && (p !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((b !== 0) && (t !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((c !== 0) && (g !== 0) && (ar !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((a !== 0) && (p !== 0) && (pr !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((b !== 0) && (t !== 0) && (pr !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else if ((c !== 0) && (g !== 0) && (pr !== 0)) {
        alert(
            "Cette configuration en triangle n'a pas encore été programmé, nous allons coder le plus tôt possible. Pour l'instant, essayez un triangle différent."
        );
        resetTriangle();
        return;
    } else {
        alert("Erreur: Veuillez resoumettre de l'information valide.");
        return;
    }
}