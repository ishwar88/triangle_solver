var amobile = 0,
    bmobile = 0,
    cmobile = 0,
    pmobile = 0,
    tmobile = 0,
    gmobile = 0,
    smobile = 0,
    armobile = 0,
    prmobile = 0,
    hmobile = 0,
    lmobile = 0,
    rmobile = 0,
    h2mobile = 0,
    l2mobile = 0,
    r2mobile = 0,
    ramobile = 0,
    ra2mobile = 0,
    a2mobile = 0,
    b2mobile = 0,
    c2mobile = 0,
    p2mobile = 0,
    t2mobile = 0,
    g2mobile = 0,
    s2mobile = 0,
    ar2mobile = 0,
    pr2mobile = 0;

function ssalertmobile() {
    'use strict';
    alert(
        "The values you submitted has 2 answers, it will give two answers and draw two triangles"
    );
}

function rtdmobile(x) {
    'use strict';
    return x * 57.2957795;
}

function dtrmobile(x) {
    'use strict';
    return x / 57.2957795;
}

function rdmobile(x) {
    'use strict';
    return (Math.round(x * 100000)) / 100000;
}

function svalmobile(x, y, z) {
    'use strict';
    return (x + y + z) / 2;
}

function areamobile(x, y, z, q) {
    'use strict';
    return Math.sqrt(x * (x - y) * (x - z) * (x - q));
}

function permobile(x, y, z) {
    'use strict';
    return x + y + z;
}

function showvalmobile() {
    'use strict';
    amobile = rdmobile(amobile);
    bmobile = rdmobile(bmobile);
    cmobile = rdmobile(cmobile);
    pmobile = rdmobile(pmobile);
    gmobile = rdmobile(gmobile);
    tmobile = rdmobile(tmobile);
    armobile = rdmobile(armobile);
    prmobile = rdmobile(prmobile);
    document.getElementById('pinputmobile').value = pmobile;
    document.getElementById('ginputmobile').value = gmobile;
    document.getElementById('tinputmobile').value = tmobile;
    document.getElementById('arinputmobile').value = armobile;
    document.getElementById('prinputmobile').value = prmobile;
    document.getElementById('ainputmobile').value = amobile;
    document.getElementById('binputmobile').value = bmobile;
    document.getElementById('cinputmobile').value = cmobile;
}

function showval2mobile() {
    'use strict';
    amobile = rdmobile(amobile);
    bmobile = rdmobile(bmobile);
    cmobile = rdmobile(cmobile);
    pmobile = rdmobile(pmobile);
    gmobile = rdmobile(gmobile);
    tmobile = rdmobile(tmobile);
    a2mobile = rdmobile(a2mobile);
    b2mobile = rdmobile(b2mobile);
    c2mobile = rdmobile(c2mobile);
    p2mobile = rdmobile(p2mobile);
    g2mobile = rdmobile(g2mobile);
    t2mobile = rdmobile(t2mobile);
    armobile = rdmobile(armobile);
    prmobile = rdmobile(prmobile);
    pr2mobile = rdmobile(pr2mobile);
    ar2mobile = rdmobile(ar2mobile);
    amobile = amobile.toString();
    bmobile = bmobile.toString();
    cmobile = cmobile.toString();
    pmobile = pmobile.toString();
    tmobile = tmobile.toString();
    gmobile = gmobile.toString();
    armobile = armobile.toString();
    prmobile = prmobile.toString();
    a2mobile = a2mobile.toString();
    b2mobile = b2mobile.toString();
    c2mobile = c2mobile.toString();
    p2mobile = p2mobile.toString();
    t2mobile = t2mobile.toString();
    g2mobile = g2mobile.toString();
    ar2mobile = ar2mobile.toString();
    pr2mobile = pr2mobile.toString();
    document.getElementById('pinputmobile').value = pmobile + " | " +
        p2mobile;
    document.getElementById('ginputmobile').value = gmobile + " | " +
        g2mobile;
    document.getElementById('tinputmobile').value = tmobile + " | " +
        t2mobile;
    document.getElementById('arinputmobile').value = armobile + " | " +
        ar2mobile;
    document.getElementById('prinputmobile').value = prmobile + " | " +
        pr2mobile;
    document.getElementById('ainputmobile').value = amobile + " | " +
        a2mobile;
    document.getElementById('binputmobile').value = bmobile + " | " +
        b2mobile;
    document.getElementById('cinputmobile').value = cmobile + " | " +
        c2mobile;
}

function drawobtamobile() {
    'use strict';
    hmobile = (Math.sin(tmobile)) * cmobile;
    ramobile = 1.57079632679 - tmobile;
    rmobile = (hmobile * (Math.sin(ramobile))) / (Math.sin(tmobile));
    lmobile = amobile - rmobile;
    gmobile = rdmobile(rtdmobile(gmobile));
    tmobile = rdmobile(rtdmobile(tmobile));
    pmobile = rdmobile(rtdmobile(pmobile));
    if ((hmobile >= rmobile) && (hmobile >= lmobile)) {
        rmobile = rmobile * (130 / hmobile);
        lmobile = lmobile * (130 / hmobile);
        hmobile = 130;
    } else if ((rmobile > hmobile) && (rmobile > lmobile)) {
        lmobile = lmobile * (170 / rmobile);
        hmobile = hmobile * (170 / rmobile);
        rmobile = 170;
    } else {
        rmobile = rmobile * (170 / lmobile);
        hmobile = hmobile * (170 / lmobile);
        lmobile = 170;
    }
    rmobile = rdmobile(rmobile);
    lmobile = rdmobile(lmobile);
    hmobile = rdmobile(hmobile);
    if (a2mobile !== 0) {
        if ((Math.pow(c2mobile, 2)) + (Math.pow(b2mobile, 2)) < (Math.pow(
            a2mobile, 2))) {
            alert(
                "The triangle will be rotated counterclockwise"
            );
            h2mobile = (Math.sin(t2mobile)) * c2mobile;
            ra2mobile = 1.57079632679 - t2mobile;
            r2mobile = (h2mobile * (Math.sin(ra2mobile))) / (Math.sin(
                t2mobile));
            l2mobile = a2mobile - r2mobile;
            g2mobile = rdmobile(rtdmobile(g2mobile));
            t2mobile = rdmobile(rtdmobile(t2mobile));
            p2mobile = rdmobile(rtdmobile(p2mobile));
            if ((h2mobile >= r2mobile) && (h2mobile >= l2mobile)) {
                r2mobile = r2mobile * (130 / h2mobile);
                l2mobile = l2mobile * (130 / h2mobile);
                h2mobile = 130;
            } else if ((r2mobile > h2mobile) && (r2mobile > l2mobile)) {
                l2mobile = l2mobile * (170 / r2mobile);
                h2mobile = h2mobile * (170 / r2mobile);
                r2mobile = 170;
            } else {
                r2mobile = r2mobile * (170 / l2mobile);
                h2mobile = h2mobile * (170 / l2mobile);
                l2mobile = 170;
            }
            r2mobile = rdmobile(r2mobile);
            l2mobile = rdmobile(l2mobile);
            h2mobile = rdmobile(h2mobile);
        } else if ((Math.pow(c2mobile, 2)) + (Math.pow(a2mobile, 2)) < (
            Math.pow(b2mobile, 2))) {
            alert(
                "The triangle will be rotated clockwise"
            );
            h2mobile = (Math.sin(g2mobile)) * a2mobile;
            ra2mobile = 1.57079632679 - g2mobile;
            r2mobile = (h2mobile * (Math.sin(ra2mobile))) / (Math.sin(
                g2mobile));
            l2mobile = b2mobile - r2mobile;
            g2mobile = rdmobile(rtdmobile(g2mobile));
            t2mobile = rdmobile(rtdmobile(t2mobile));
            p2mobile = rdmobile(rtdmobile(p2mobile));
            if ((h2mobile >= r2mobile) && (h2mobile >= l2mobile)) {
                r2mobile = r2mobile * (130 / h2mobile);
                l2mobile = l2mobile * (130 / h2mobile);
                h2mobile = 130;
            } else if ((r2mobile > h2mobile) && (r2mobile > l2mobile)) {
                l2mobile = l2mobile * (170 / r2mobile);
                h2mobile = h2mobile * (170 / r2mobile);
                r2mobile = 170;
            } else {
                r2mobile = r2mobile * (170 / l2mobile);
                h2mobile = h2mobile * (170 / l2mobile);
                l2mobile = 170;
            }
            r2mobile = rdmobile(r2mobile);
            l2mobile = rdmobile(l2mobile);
            h2mobile = rdmobile(h2mobile);
        }
    }
    document.getElementById("trianglegenmobile").style.borderRightWidth =
        rmobile + "px";
    document.getElementById("trianglegenmobile").style.borderBottomWidth =
        hmobile + "px";
    document.getElementById("trianglegenmobile").style.borderLeftWidth =
        lmobile + "px";
    document.getElementById("trianglegen2mobile").style.borderRightWidth =
        r2mobile + "px";
    document.getElementById("trianglegen2mobile").style.borderBottomWidth =
        h2mobile + "px";
    document.getElementById("trianglegen2mobile").style.borderLeftWidth =
        l2mobile + "px";
}

function drawobtbmobile() {
    'use strict';
    hmobile = (Math.sin(gmobile)) * amobile;
    ramobile = 1.57079632679 - gmobile;
    rmobile = (hmobile * (Math.sin(ramobile))) / (Math.sin(gmobile));
    lmobile = bmobile - rmobile;
    gmobile = rdmobile(rtdmobile(gmobile));
    tmobile = rdmobile(rtdmobile(tmobile));
    pmobile = rdmobile(rtdmobile(pmobile));
    if ((hmobile >= rmobile) && (hmobile >= lmobile)) {
        rmobile = rmobile * (130 / hmobile);
        lmobile = lmobile * (130 / hmobile);
        hmobile = 130;
    } else if ((rmobile > hmobile) && (rmobile > lmobile)) {
        lmobile = lmobile * (170 / rmobile);
        hmobile = hmobile * (170 / rmobile);
        rmobile = 170;
    } else {
        rmobile = rmobile * (170 / lmobile);
        hmobile = hmobile * (170 / lmobile);
        lmobile = 170;
    }
    rmobile = rdmobile(rmobile);
    lmobile = rdmobile(lmobile);
    hmobile = rdmobile(hmobile);
    if (a2mobile !== 0) {
        if ((Math.pow(c2mobile, 2)) + (Math.pow(b2mobile, 2)) < (Math.pow(
            a2mobile, 2))) {
            alert(
                "The triangle will be rotated counterclockwise"
            );
            h2mobile = (Math.sin(t2mobile)) * c2mobile;
            ra2mobile = 1.57079632679 - t2mobile;
            r2mobile = (h2mobile * (Math.sin(ra2mobile))) / (Math.sin(
                t2mobile));
            l2mobile = a2mobile - r2mobile;
            g2mobile = rdmobile(rtdmobile(g2mobile));
            t2mobile = rdmobile(rtdmobile(t2mobile));
            p2mobile = rdmobile(rtdmobile(p2mobile));
            if ((h2mobile >= r2mobile) && (h2mobile >= l2mobile)) {
                r2mobile = r2mobile * (130 / h2mobile);
                l2mobile = l2mobile * (130 / h2mobile);
                h2mobile = 130;
            } else if ((r2mobile > h2mobile) && (r2mobile > l2mobile)) {
                l2mobile = l2mobile * (170 / r2mobile);
                h2mobile = h2mobile * (170 / r2mobile);
                r2mobile = 170;
            } else {
                r2mobile = r2mobile * (170 / l2mobile);
                h2mobile = h2mobile * (170 / l2mobile);
                l2mobile = 170;
            }
        }
        r2mobile = rdmobile(r2mobile);
        l2mobile = rdmobile(l2mobile);
        h2mobile = rdmobile(h2mobile);
    } else if ((Math.pow(c2mobile, 2)) + (Math.pow(a2mobile, 2)) < (Math.pow(
        b2mobile, 2))) {
        alert(
            "The triangle will be rotated clockwise"
        );
        h2mobile = (Math.sin(g2mobile)) * a2mobile;
        ra2mobile = 1.57079632679 - g2mobile;
        r2mobile = (h2mobile * (Math.sin(ra2mobile))) / (Math.sin(g2mobile));
        l2mobile = b2mobile - r2mobile;
        g2mobile = rdmobile(rtdmobile(g2mobile));
        t2mobile = rdmobile(rtdmobile(t2mobile));
        p2mobile = rdmobile(rtdmobile(p2mobile));
        if ((h2mobile >= r2mobile) && (h2mobile >= l2mobile)) {
            r2mobile = r2mobile * (130 / h2mobile);
            l2mobile = l2mobile * (130 / h2mobile);
            h2mobile = 130;
        } else if ((r2mobile > hmobile) && (r2mobile > l2mobile)) {
            l2mobile = l2mobile * (170 / r2mobile);
            h2mobile = h2mobile * (170 / r2mobile);
            r2mobile = 170;
        } else {
            r2mobile = r2mobile * (170 / l2mobile);
            h2mobile = h2mobile * (170 / l2mobile);
            l2mobile = 170;
        }
        r2mobile = rdmobile(r2mobile);
        l2mobile = rdmobile(l2mobile);
        h2mobile = rdmobile(h2mobile);
    }
    document.getElementById("trianglegenmobile").style.borderRightWidth =
        rmobile + "px";
    document.getElementById("trianglegenmobile").style.borderBottomWidth =
        hmobile + "px";
    document.getElementById("trianglegenmobile").style.borderLeftWidth =
        lmobile + "px";
    document.getElementById("trianglegen2mobile").style.borderRightWidth =
        r2mobile + "px";
    document.getElementById("trianglegen2mobile").style.borderBottomWidth =
        h2mobile + "px";
    document.getElementById("trianglegen2mobile").style.borderLeftWidth =
        l2mobile + "px";
}

function drawmobile() {
    'use strict';
    hmobile = (Math.sin(pmobile)) * bmobile;
    ramobile = 1.57079632679 - pmobile;
    rmobile = (hmobile * (Math.sin(ramobile))) / (Math.sin(pmobile));
    lmobile = cmobile - rmobile;
    gmobile = rdmobile(rtdmobile(gmobile));
    tmobile = rdmobile(rtdmobile(tmobile));
    pmobile = rdmobile(rtdmobile(pmobile));
    if ((hmobile >= rmobile) && (hmobile >= lmobile)) {
        rmobile = rmobile * (130 / hmobile);
        lmobile = lmobile * (130 / hmobile);
        hmobile = 130;
    } else if ((rmobile > hmobile) && (rmobile > lmobile)) {
        lmobile = lmobile * (170 / rmobile);
        hmobile = hmobile * (170 / rmobile);
        rmobile = 170;
    } else {
        rmobile = rmobile * (170 / lmobile);
        hmobile = hmobile * (170 / lmobile);
        lmobile = 170;
    }
    rmobile = rdmobile(rmobile);
    lmobile = rdmobile(lmobile);
    hmobile = rdmobile(hmobile);
    if (a2mobile !== 0) {
        if ((Math.pow(c2mobile, 2)) + (Math.pow(b2mobile, 2)) < (Math.pow(
            a2mobile, 2))) {
            alert(
                "The triangle will be rotated counterclockwise"
            );
            h2mobile = (Math.sin(t2mobile)) * c2mobile;
            ra2mobile = 1.57079632679 - t2mobile;
            r2mobile = (h2mobile * (Math.sin(ra2mobile))) / (Math.sin(
                t2mobile));
            l2mobile = a2mobile - r2mobile;
            g2mobile = rdmobile(rtdmobile(g2mobile));
            t2mobile = rdmobile(rtdmobile(t2mobile));
            p2mobile = rdmobile(rtdmobile(p2mobile));
            if ((h2mobile >= r2mobile) && (h2mobile >= l2mobile)) {
                r2mobile = r2mobile * (130 / h2mobile);
                l2mobile = l2mobile * (130 / h2mobile);
                h2mobile = 130;
            } else if ((r2mobile > h2mobile) && (r2mobile > l2mobile)) {
                l2mobile = l2mobile * (170 / r2mobile);
                h2mobile = h2mobile * (170 / r2mobile);
                r2mobile = 170;
            } else {
                r2mobile = r2mobile * (170 / l2mobile);
                h2mobile = h2mobile * (170 / l2mobile);
                l2mobile = 170;
            }
            r2mobile = rdmobile(r2mobile);
            l2mobile = rdmobile(l2mobile);
            h2mobile = rdmobile(h2mobile);
        } else if ((Math.pow(c2mobile, 2)) + (Math.pow(a2mobile, 2)) < (
            Math.pow(b2mobile, 2))) {
            alert(
                "The triangle will be rotated clockwise"
            );
            h2mobile = (Math.sin(g2mobile)) * a2mobile;
            ra2mobile = 1.57079632679 - g2mobile;
            r2mobile = (h2mobile * (Math.sin(ra2mobile))) / (Math.sin(
                g2mobile));
            l2mobile = b2mobile - r2mobile;
            g2mobile = rdmobile(rtdmobile(g2mobile));
            t2mobile = rdmobile(rtdmobile(t2mobile));
            p2mobile = rdmobile(rtdmobile(p2mobile));
            if ((h2mobile >= r2mobile) && (h2mobile >= l2mobile)) {
                r2mobile = r2mobile * (130 / h2mobile);
                l2mobile = l2mobile * (130 / h2mobile);
                h2mobile = 130;
            } else if ((r2mobile > h2mobile) && (r2mobile > l2mobile)) {
                l2mobile = l2mobile * (170 / r2mobile);
                h2mobile = h2mobile * (170 / r2mobile);
                r2mobile = 170;
            } else {
                r2mobile = r2mobile * (170 / l2mobile);
                h2mobile = h2mobile * (170 / l2mobile);
                l2mobile = 170;
            }
            r2mobile = rdmobile(r2mobile);
            l2mobile = rdmobile(l2mobile);
            h2mobile = rdmobile(h2mobile);
        } else {
            h2mobile = (Math.sin(p2mobile)) * b2mobile;
            ra2mobile = 1.57079632679 - p2mobile;
            r2mobile = (h2mobile * (Math.sin(ra2mobile))) / (Math.sin(
                p2mobile));
            l2mobile = c2mobile - r2mobile;
            g2mobile = rdmobile(rtdmobile(g2mobile));
            t2mobile = rdmobile(rtdmobile(t2mobile));
            p2mobile = rdmobile(rtdmobile(p2mobile));
            if ((h2mobile >= r2mobile) && (h2mobile >= l2mobile)) {
                r2mobile = r2mobile * (130 / h2mobile);
                l2mobile = l2mobile * (130 / h2mobile);
                h2mobile = 130;
            } else if ((r2mobile > h2mobile) && (r2mobile > l2mobile)) {
                l2mobile = l2mobile * (170 / r2mobile);
                h2mobile = h2mobile * (170 / r2mobile);
                r2mobile = 170;
            } else {
                r2mobile = r2mobile * (170 / l2mobile);
                h2mobile = h2mobile * (170 / l2mobile);
                l2mobile = 170;
            }
            r2mobile = rdmobile(r2mobile);
            l2mobile = rdmobile(l2mobile);
            h2mobile = rdmobile(h2mobile);
        }
    }
    document.getElementById("trianglegenmobile").style.borderRightWidth =
        rmobile + "px";
    document.getElementById("trianglegenmobile").style.borderBottomWidth =
        hmobile + "px";
    document.getElementById("trianglegenmobile").style.borderLeftWidth =
        lmobile + "px";
    document.getElementById("trianglegen2mobile").style.borderRightWidth =
        r2mobile + "px";
    document.getElementById("trianglegen2mobile").style.borderBottomWidth =
        h2mobile + "px";
    document.getElementById("trianglegen2mobile").style.borderLeftWidth =
        l2mobile + "px";
}

function drawtrimobile() {
    'use strict';
    if ((Math.pow(cmobile, 2)) + (Math.pow(bmobile, 2)) < (Math.pow(amobile,
        2))) {
        alert(
            "The triangle will be rotated counterclockwise"
        );
        drawobtamobile();
    } else if ((Math.pow(cmobile, 2)) + (Math.pow(amobile, 2)) < (Math.pow(
        bmobile, 2))) {
        alert(
            "The triangle will be rotated clockwise"
        );
        drawobtbmobile();
    } else {
        drawmobile();
    }
}

function resetTrianglemobile() {
    'use strict';
    document.getElementById('ainputmobile').value = "";
    document.getElementById('binputmobile').value = "";
    document.getElementById('cinputmobile').value = "";
    document.getElementById('pinputmobile').value = "";
    document.getElementById('ginputmobile').value = "";
    document.getElementById('tinputmobile').value = "";
    document.getElementById('arinputmobile').value = "";
    document.getElementById('prinputmobile').value = "";
    document.getElementById("trianglegenmobile").style.borderRightWidth =
        "0px";
    document.getElementById("trianglegenmobile").style.borderBottomWidth =
        "0px";
    document.getElementById("trianglegenmobile").style.borderLeftWidth =
        "0px";
    document.getElementById("trianglegen2mobile").style.borderRightWidth =
        "0px";
    document.getElementById("trianglegen2mobile").style.borderBottomWidth =
        "0px";
    document.getElementById("trianglegen2mobile").style.borderLeftWidth =
        "0px";
    var amobile = 0,
        bmobile = 0,
        cmobile = 0,
        pmobile = 0,
        tmobile = 0,
        gmobile = 0,
        smobile = 0,
        armobile = 0,
        prmobile = 0,
        hmobile = 0,
        lmobile = 0,
        rmobile = 0,
        h2mobile = 0,
        l2mobile = 0,
        r2mobile = 0,
        ramobile = 0,
        ra2mobile = 0,
        a2mobile = 0,
        b2mobile = 0,
        c2mobile = 0,
        p2mobile = 0,
        t2mobile = 0,
        g2mobile = 0,
        s2mobile = 0,
        ar2mobile = 0,
        pr2mobile = 0;
}

function detectNaNmobile() {
    'use strict';
    if ((isNaN(amobile)) || (isNaN(bmobile)) || (isNaN(cmobile)) || (isNaN(
        pmobile)) || (isNaN(gmobile)) || (isNaN(tmobile)) || (isNaN(
        armobile)) || (isNaN(prmobile)) || (amobile < 0) || (bmobile < 0) || (cmobile < 0) || (pmobile < 0) || (tmobile < 0) || (gmobile < 0) || (armobile < 0) || (prmobile < 0) || (a2mobile < 0) || (b2mobile < 0) || (c2mobile < 0) || (p2mobile < 0) || (t2mobile < 0) || (g2mobile < 0) || (ar2mobile < 0) || (pr2mobile < 0) || (lmobile < 0) || (rmobile < 0) || (hmobile < 0) || (ramobile < 0) || (smobile < 0) || (s2mobile < 0)) {
        alert(
            "Error: Cannot calculate, please resubmit with valid information. If the information is correct, please send the values via Email at darenliang7@gmail.com. Thank-you."
        );
        resetTrianglemobile();
        throw new Error(
            "Error: Cannot calculate, please resubmit with valid information. If the information is correct, please send the values via Email at darenliang7@gmail.com. Thank-you."
        );
        return;
    }
}

function submitTrianglemobile() {
    'use strict';
    amobile = Number(document.getElementById('ainputmobile').value);
    bmobile = Number(document.getElementById('binputmobile').value);
    cmobile = Number(document.getElementById('cinputmobile').value);
    pmobile = Number(document.getElementById('pinputmobile').value);
    gmobile = Number(document.getElementById('ginputmobile').value);
    tmobile = Number(document.getElementById('tinputmobile').value);
    armobile = Number(document.getElementById('arinputmobile').value);
    prmobile = Number(document.getElementById('prinputmobile').value);
    if ((isNaN(amobile)) || (isNaN(bmobile)) || (isNaN(cmobile)) || (isNaN(
        pmobile)) || (isNaN(gmobile)) || (isNaN(tmobile))) {
        alert(
            "You have entered a character that has no value, please resubmit with only numbers"
        );
        resetTrianglemobile();
        return;
    }
    if ((amobile < 0) || (bmobile < 0) || (cmobile < 0) || (pmobile < 0) || (tmobile < 0) || (gmobile < 0) || (armobile < 0) || (prmobile < 0)){
        alert(
            "You have entered a negative number, please resubmit with only positive numbers"
        );
        resetTrianglemobile();
        return;
    }
    if ((pmobile < 0) || (tmobile < 0) || (gmobile < 0) || (pmobile >= 180) ||
        (tmobile >= 180) || (gmobile >= 180) || (pmobile + tmobile >= 180) ||
        (pmobile + gmobile >= 180) || (gmobile + tmobile >= 180) || (
            pmobile + tmobile + gmobile > 180)) {
        alert(
            "The angles that you submitted are not valid, please resubmit with valid angles"
        );
        resetTrianglemobile();
        return;
    }
    if (((amobile !== 0) && (bmobile !== 0) && (tmobile !== 0) && (tmobile >=
        90) && (bmobile <= amobile)) || (
        (cmobile !== 0) && (bmobile !== 0) && (tmobile !== 0) && (
            tmobile >= 90) && (bmobile <= cmobile)) || ((amobile !== 0) &&
        (cmobile !== 0) && (gmobile !== 0) && (gmobile >= 90) && (
            cmobile <= amobile)) || (
        (bmobile !== 0) && (cmobile !== 0) && (gmobile !== 0) && (
            gmobile >= 90) && (cmobile <= bmobile)) || ((amobile !== 0) &&
        (bmobile !== 0) && (pmobile !== 0) && (pmobile >= 90) && (
            amobile <= bmobile)) || (
        (amobile !== 0) && (cmobile !== 0) && (pmobile !== 0) && (
            pmobile >= 90) && (amobile <= cmobile))) {
        alert(
            "The angles or sides that you submitted are not valid, please resumbit with valid angles or sides"
        );
        resetTrianglemobile();
        return;
    }
    if (((amobile !== 0) && (bmobile !== 0) && (cmobile !== 0) && (pmobile !==
        0)) || ((amobile !== 0) && (bmobile !== 0) && (cmobile !== 0) &&
        (tmobile !== 0)) || ((amobile !== 0) && (bmobile !== 0) && (
        cmobile !== 0) && (gmobile !== 0)) || ((amobile !== 0) && (
        bmobile !== 0) && (pmobile !== 0) && (tmobile !== 0)) || ((
        amobile !== 0) && (bmobile !== 0) && (pmobile !== 0) && (
        gmobile !== 0)) || ((amobile !== 0) && (bmobile !== 0) && (
        tmobile !== 0) && (gmobile !== 0)) || ((amobile !== 0) && (
        cmobile !== 0) && (pmobile !== 0) && (tmobile !== 0)) || ((
        amobile !== 0) && (cmobile !== 0) && (pmobile !== 0) && (
        gmobile !== 0)) || ((amobile !== 0) && (cmobile !== 0) && (
        tmobile !== 0) && (gmobile !== 0)) || ((amobile !== 0) && (
        pmobile !== 0) && (tmobile !== 0) && (gmobile !== 0)) || ((
        bmobile !== 0) && (cmobile !== 0) && (pmobile !== 0) && (
        tmobile !== 0)) || ((bmobile !== 0) && (cmobile !== 0) && (
        pmobile !== 0) && (gmobile !== 0)) || ((bmobile !== 0) && (
        cmobile !== 0) && (tmobile !== 0) && (gmobile !== 0)) || ((
        bmobile !== 0) && (pmobile !== 0) && (tmobile !== 0) && (
        gmobile !== 0)) || ((cmobile !== 0) && (pmobile !== 0) && (
        tmobile !== 0) && (gmobile !== 0))) {
        alert("You entered more than three values. Please resubmit values");
        resetTrianglemobile();
        return;
    }
    if (((amobile !== 0) && (bmobile !== 0) && (cmobile !== 0) && (amobile +
        bmobile <= cmobile)) || ((cmobile + bmobile <= amobile) && (
        amobile !== 0) && (bmobile !== 0) && (cmobile !== 0)) || ((
        amobile + cmobile <= bmobile) && (amobile !== 0) && (
        bmobile !== 0) && (cmobile !== 0))) {
        alert(
            "The side lengths of the triangle are not possible, please resubmit valid information"
        );
        resetTrianglemobile();
        return;
    }
    if ((amobile !== 0) && (bmobile !== 0) && (prmobile !== 0)) {
        cmobile = prmobile - amobile - bmobile;
    } else if ((amobile !== 0) && (cmobile !== 0) && (prmobile !== 0)) {
        bmobile = prmobile - amobile - cmobile;
    } else if ((bmobile !== 0) && (cmobile !== 0) && (prmobile !== 0)) {
        amobile = prmobile - bmobile - cmobile;
    }
    if ((amobile !== 0) && (bmobile !== 0) && (cmobile !== 0)) {
        gmobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(bmobile, 2) -
            Math.pow(amobile, 2)) / (2 * amobile * bmobile));
        tmobile = Math.acos(-(Math.pow(bmobile, 2) - Math.pow(amobile, 2) -
            Math.pow(cmobile, 2)) / (2 * amobile * cmobile));
        pmobile = 3.14159265359 - gmobile - tmobile;
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((amobile !== 0) && (bmobile !== 0) && (gmobile !== 0)) {
        gmobile = dtrmobile(gmobile);
        cmobile = Math.sqrt(Math.pow(amobile, 2) + Math.pow(bmobile, 2) - 2 *
            amobile * bmobile * (Math.cos(gmobile)));
        tmobile = Math.acos(-(Math.pow(bmobile, 2) - Math.pow(amobile, 2) -
            Math.pow(cmobile, 2)) / (2 * amobile * cmobile));
        pmobile = 3.14159265359 - gmobile - tmobile;
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((amobile !== 0) && (cmobile !== 0) && (tmobile !== 0)) {
        tmobile = dtrmobile(tmobile);
        bmobile = Math.sqrt(Math.pow(amobile, 2) + Math.pow(cmobile, 2) - 2 *
            amobile * cmobile * (Math.cos(tmobile)));
        gmobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(bmobile, 2) -
            Math.pow(amobile, 2)) / (2 * amobile * bmobile));
        pmobile = 3.14159265359 - gmobile - tmobile;
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((cmobile !== 0) && (bmobile !== 0) && (pmobile !== 0)) {
        pmobile = dtrmobile(pmobile);
        amobile = Math.sqrt(Math.pow(bmobile, 2) + Math.pow(cmobile, 2) - 2 *
            bmobile * cmobile * (Math.cos(pmobile)));
        gmobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(bmobile, 2) -
            Math.pow(amobile, 2)) / (2 * amobile * bmobile));
        tmobile = 3.14159265359 - gmobile - pmobile;
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((amobile !== 0) && (tmobile !== 0) && (gmobile !== 0)) {
        pmobile = 180 - tmobile - gmobile;
        tmobile = dtrmobile(tmobile);
        pmobile = dtrmobile(pmobile);
        bmobile = (amobile * (Math.sin(tmobile)) / (Math.sin(pmobile)));
        gmobile = dtrmobile(gmobile);
        cmobile = (amobile * (Math.sin(gmobile)) / (Math.sin(pmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((bmobile !== 0) && (pmobile !== 0) && (gmobile !== 0)) {
        tmobile = 180 - pmobile - gmobile;
        pmobile = dtrmobile(pmobile);
        tmobile = dtrmobile(tmobile);
        amobile = (bmobile * (Math.sin(pmobile)) / (Math.sin(tmobile)));
        gmobile = dtrmobile(gmobile);
        cmobile = (amobile * (Math.sin(gmobile)) / (Math.sin(pmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((cmobile !== 0) && (tmobile !== 0) && (pmobile !== 0)) {
        gmobile = 180 - tmobile - pmobile;
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        bmobile = (cmobile * (Math.sin(tmobile)) / (Math.sin(gmobile)));
        pmobile = dtrmobile(pmobile);
        amobile = (cmobile * (Math.sin(pmobile)) / (Math.sin(gmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((cmobile !== 0) && (pmobile !== 0) && (gmobile !== 0)) {
        tmobile = 180 - gmobile - pmobile;
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        bmobile = (cmobile * (Math.sin(tmobile)) / (Math.sin(gmobile)));
        pmobile = dtrmobile(pmobile);
        amobile = (cmobile * (Math.sin(pmobile)) / (Math.sin(gmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((amobile !== 0) && (tmobile !== 0) && (pmobile !== 0)) {
        gmobile = 180 - tmobile - pmobile;
        tmobile = dtrmobile(tmobile);
        pmobile = dtrmobile(pmobile);
        bmobile = (amobile * (Math.sin(tmobile)) / (Math.sin(pmobile)));
        gmobile = dtrmobile(gmobile);
        cmobile = (amobile * (Math.sin(gmobile)) / (Math.sin(pmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((cmobile !== 0) && (tmobile !== 0) && (gmobile !== 0)) {
        pmobile = 180 - tmobile - gmobile;
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        bmobile = (cmobile * (Math.sin(tmobile)) / (Math.sin(gmobile)));
        pmobile = dtrmobile(pmobile);
        amobile = (cmobile * (Math.sin(pmobile)) / (Math.sin(gmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((bmobile !== 0) && (tmobile !== 0) && (gmobile !== 0)) {
        pmobile = 180 - tmobile - gmobile;
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        cmobile = (bmobile * (Math.sin(gmobile)) / (Math.sin(tmobile)));
        pmobile = dtrmobile(pmobile);
        amobile = (cmobile * (Math.sin(pmobile)) / (Math.sin(gmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((cmobile !== 0) && (gmobile !== 0) && (pmobile !== 0)) {
        tmobile = 180 - gmobile - pmobile;
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        bmobile = (cmobile * (Math.sin(tmobile)) / (Math.sin(gmobile)));
        pmobile = dtrmobile(pmobile);
        amobile = (cmobile * (Math.sin(pmobile)) / (Math.sin(gmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((amobile !== 0) && (gmobile !== 0) && (pmobile !== 0)) {
        tmobile = 180 - gmobile - pmobile;
        tmobile = dtrmobile(tmobile);
        pmobile = dtrmobile(pmobile);
        bmobile = (amobile * (Math.sin(tmobile)) / (Math.sin(pmobile)));
        gmobile = dtrmobile(gmobile);
        cmobile = (amobile * (Math.sin(gmobile)) / (Math.sin(pmobile)));
        smobile = svalmobile(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((amobile !== 0) && (bmobile !== 0) && (tmobile !== 0)) {
        if (amobile <= bmobile) {
            tmobile = dtrmobile(tmobile);
            pmobile = Math.asin((amobile * (Math.sin(tmobile))) / (bmobile));
            gmobile = 3.14159265359 - tmobile - pmobile;
            cmobile = (amobile * (Math.sin(gmobile)) / (Math.sin(pmobile)));
            smobile = svalmobile(amobile, bmobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        } else {
            tmobile = dtrmobile(tmobile);
            pmobile = Math.asin((amobile * (Math.sin(tmobile))) / (bmobile));
            p2mobile = 3.14159265359 - pmobile;
            gmobile = 3.14159265359 - tmobile - pmobile;
            g2mobile = 3.14159265359 - p2mobile - tmobile;
            cmobile = (amobile * (Math.sin(gmobile)) / (Math.sin(pmobile)));
            c2mobile = (amobile * (Math.sin(g2mobile)) / (Math.sin(p2mobile)));
            a2mobile = amobile;
            b2mobile = bmobile;
            t2mobile = tmobile;
            smobile = svalmobile(amobile, bmobile, cmobile);
            s2mobile = svalmobile(amobile, bmobile, c2mobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            ar2mobile = areamobile(s2mobile, amobile, bmobile, c2mobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(amobile, bmobile, c2mobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        }
    } else if ((amobile !== 0) && (bmobile !== 0) && (pmobile !== 0)) {
        if (amobile >= bmobile) {
            pmobile = dtrmobile(pmobile);
            tmobile = Math.asin((bmobile * (Math.sin(pmobile))) / (amobile));
            gmobile = 3.14159265359 - tmobile - pmobile;
            cmobile = (amobile * (Math.sin(gmobile)) / (Math.sin(pmobile)));
            smobile = svalmobile(amobile, bmobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        } else {
            pmobile = dtrmobile(pmobile);
            tmobile = Math.asin((bmobile * (Math.sin(pmobile))) / (amobile));
            t2mobile = 3.14159265359 - tmobile;
            gmobile = 3.14159265359 - tmobile - pmobile;
            g2mobile = 3.14159265359 - pmobile - t2mobile;
            cmobile = (amobile * (Math.sin(gmobile)) / (Math.sin(pmobile)));
            c2mobile = (amobile * (Math.sin(g2mobile)) / (Math.sin(pmobile)));
            a2mobile = amobile;
            b2mobile = bmobile;
            p2mobile = pmobile;
            smobile = svalmobile(amobile, bmobile, cmobile);
            s2mobile = svalmobile(amobile, bmobile, c2mobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            ar2mobile = areamobile(s2mobile, amobile, bmobile, c2mobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(amobile, bmobile, c2mobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        }
    } else if ((amobile !== 0) && (cmobile !== 0) && (pmobile !== 0)) {
        if (amobile >= cmobile) {
            pmobile = dtrmobile(pmobile);
            gmobile = Math.asin((cmobile * (Math.sin(pmobile))) / (amobile));
            tmobile = 3.14159265359 - gmobile - pmobile;
            bmobile = (amobile * (Math.sin(tmobile)) / (Math.sin(pmobile)));
            smobile = svalmobile(amobile, bmobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        } else {
            pmobile = dtrmobile(pmobile);
            gmobile = Math.asin((cmobile * (Math.sin(pmobile))) / (amobile));
            g2mobile = 3.14159265359 - gmobile;
            tmobile = 3.14159265359 - gmobile - pmobile;
            t2mobile = 3.14159265359 - pmobile - g2mobile;
            bmobile = (amobile * (Math.sin(tmobile)) / (Math.sin(pmobile)));
            b2mobile = (amobile * (Math.sin(t2mobile)) / (Math.sin(pmobile)));
            a2mobile = amobile;
            c2mobile = cmobile;
            p2mobile = pmobile;
            smobile = svalmobile(amobile, bmobile, cmobile);
            s2mobile = svalmobile(amobile, b2mobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            ar2mobile = areamobile(s2mobile, amobile, b2mobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(amobile, b2mobile, cmobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        }
    } else if ((amobile !== 0) && (cmobile !== 0) && (gmobile !== 0)) {
        if (amobile <= cmobile) {
            gmobile = dtrmobile(gmobile);
            pmobile = Math.asin((amobile * (Math.sin(gmobile))) / (cmobile));
            tmobile = 3.14159265359 - gmobile - pmobile;
            bmobile = (amobile * (Math.sin(tmobile)) / (Math.sin(pmobile)));
            smobile = svalmobile(amobile, bmobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        } else {
            gmobile = dtrmobile(gmobile);
            pmobile = Math.asin((amobile * (Math.sin(gmobile))) / (cmobile));
            p2mobile = 3.14159265359 - pmobile;
            tmobile = 3.14159265359 - gmobile - pmobile;
            t2mobile = 3.14159265359 - p2mobile - gmobile;
            bmobile = (amobile * (Math.sin(tmobile)) / (Math.sin(pmobile)));
            b2mobile = (amobile * (Math.sin(t2mobile)) / (Math.sin(p2mobile)));
            a2mobile = amobile;
            c2mobile = cmobile;
            g2mobile = gmobile;
            smobile = svalmobile(amobile, bmobile, cmobile);
            s2mobile = svalmobile(amobile, b2mobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            ar2mobile = areamobile(s2mobile, amobile, b2mobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(amobile, b2mobile, cmobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        }
    } else if ((bmobile !== 0) && (cmobile !== 0) && (gmobile !== 0)) {
        if (bmobile <= cmobile) {
            gmobile = dtrmobile(gmobile);
            tmobile = Math.asin((bmobile * (Math.sin(gmobile))) / (cmobile));
            pmobile = 3.14159265359 - tmobile - gmobile;
            amobile = (cmobile * (Math.sin(pmobile)) / (Math.sin(gmobile)));
            smobile = svalmobile(amobile, bmobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        } else {
            gmobile = dtrmobile(gmobile);
            tmobile = Math.asin((bmobile * (Math.sin(gmobile))) / (cmobile));
            t2mobile = 3.14159265359 - tmobile;
            pmobile = 3.14159265359 - gmobile - tmobile;
            p2mobile = 3.14159265359 - gmobile - t2mobile;
            amobile = (cmobile * (Math.sin(pmobile)) / (Math.sin(gmobile)));
            a2mobile = (cmobile * (Math.sin(p2mobile)) / (Math.sin(gmobile)));
            c2mobile = cmobile;
            b2mobile = bmobile;
            g2mobile = gmobile;
            smobile = svalmobile(amobile, bmobile, cmobile);
            s2mobile = svalmobile(a2mobile, bmobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            ar2mobile = areamobile(s2mobile, a2mobile, bmobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(a2mobile, bmobile, cmobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        }
    } else if ((bmobile !== 0) && (cmobile !== 0) && (tmobile !== 0)) {
        if (cmobile <= bmobile) {
            tmobile = dtrmobile(tmobile);
            gmobile = Math.asin((cmobile * (Math.sin(tmobile))) / (bmobile));
            pmobile = 3.14159265359 - tmobile - gmobile;
            amobile = (bmobile * (Math.sin(pmobile)) / (Math.sin(tmobile)));
            smobile = svalmobile(amobile, bmobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        } else {
            tmobile = dtrmobile(tmobile);
            gmobile = Math.asin((cmobile * (Math.sin(tmobile))) / (bmobile));
            g2mobile = 3.14159265359 - gmobile;
            pmobile = 3.14159265359 - gmobile - tmobile;
            p2mobile = 3.14159265359 - g2mobile - tmobile;
            amobile = (bmobile * (Math.sin(pmobile)) / (Math.sin(tmobile)));
            a2mobile = (bmobile * (Math.sin(p2mobile)) / (Math.sin(tmobile)));
            c2mobile = cmobile;
            b2mobile = bmobile;
            t2mobile = tmobile;
            smobile = svalmobile(amobile, bmobile, cmobile);
            s2mobile = svalmobile(a2mobile, bmobile, cmobile);
            armobile = areamobile(smobile, amobile, bmobile, cmobile);
            ar2mobile = areamobile(s2mobile, a2mobile, bmobile, cmobile);
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(a2mobile, bmobile, cmobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        }
    } else if ((amobile !== 0) && (bmobile !== 0) && (armobile !== 0)) {
        if (0.5 * amobile * bmobile !== armobile) {
            gmobile = Math.asin((2 * armobile) / (amobile * bmobile));
            g2mobile = 3.14159265359 - gmobile;
            cmobile = Math.sqrt(Math.pow(amobile, 2) + Math.pow(bmobile, 2) -
                2 * amobile * bmobile * (Math.cos(gmobile)));
            c2mobile = Math.sqrt(Math.pow(amobile, 2) + Math.pow(bmobile, 2) -
                2 * amobile * bmobile * (Math.cos(g2mobile)));
            tmobile = Math.acos(-(Math.pow(bmobile, 2) - Math.pow(amobile,
                2) - Math.pow(cmobile, 2)) / (2 * amobile * cmobile));
            t2mobile = Math.acos(-(Math.pow(bmobile, 2) - Math.pow(amobile,
                2) - Math.pow(c2mobile, 2)) / (2 * amobile *
                c2mobile));
            pmobile = 3.14159265359 - gmobile - tmobile;
            p2mobile = 3.14159265359 - g2mobile - t2mobile;
            a2mobile = amobile;
            b2mobile = bmobile;
            ar2mobile = armobile;
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(amobile, bmobile, c2mobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        } else {
            gmobile = Math.asin((2 * armobile) / (amobile * bmobile));
            cmobile = Math.sqrt(Math.pow(amobile, 2) + Math.pow(bmobile, 2) -
                2 * amobile * bmobile * (Math.cos(gmobile)));
            tmobile = Math.acos(-(Math.pow(bmobile, 2) - Math.pow(amobile,
                2) - Math.pow(cmobile, 2)) / (2 * amobile * cmobile));
            pmobile = 3.14159265359 - gmobile - tmobile;
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        }
    } else if ((amobile !== 0) && (cmobile !== 0) && (armobile !== 0)) {
        if (0.5 * amobile * cmobile !== armobile) {
            tmobile = Math.asin((2 * armobile) / (amobile * cmobile));
            t2mobile = 3.14159265359 - tmobile;
            bmobile = Math.sqrt(Math.pow(amobile, 2) + Math.pow(cmobile, 2) -
                2 * amobile * cmobile * (Math.cos(tmobile)));
            b2mobile = Math.sqrt(Math.pow(amobile, 2) + Math.pow(cmobile, 2) -
                2 * amobile * cmobile * (Math.cos(t2mobile)));
            gmobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(bmobile,
                2) - Math.pow(amobile, 2)) / (2 * amobile * bmobile));
            g2mobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(b2mobile,
                2) - Math.pow(amobile, 2)) / (2 * amobile *
                b2mobile));
            pmobile = 3.14159265359 - gmobile - tmobile;
            p2mobile = 3.14159265359 - g2mobile - t2mobile;
            a2mobile = amobile;
            c2mobile = cmobile;
            ar2mobile = armobile;
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(amobile, b2mobile, cmobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        } else {
            tmobile = Math.asin((2 * armobile) / (amobile * cmobile));
            bmobile = Math.sqrt(Math.pow(amobile, 2) + Math.pow(cmobile, 2) -
                2 * amobile * cmobile * (Math.cos(tmobile)));
            gmobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(bmobile,
                2) - Math.pow(amobile, 2)) / (2 * amobile * bmobile));
            pmobile = 3.14159265359 - gmobile - tmobile;
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        }
    } else if ((bmobile !== 0) && (cmobile !== 0) && (armobile !== 0)) {
        if (0.5 * cmobile * bmobile !== armobile) {
            pmobile = Math.asin((2 * armobile) / (bmobile * cmobile));
            p2mobile = 3.14159265359 - pmobile;
            amobile = Math.sqrt(Math.pow(bmobile, 2) + Math.pow(cmobile, 2) -
                2 * bmobile * cmobile * (Math.cos(pmobile)));
            a2mobile = Math.sqrt(Math.pow(bmobile, 2) + Math.pow(cmobile, 2) -
                2 * bmobile * cmobile * (Math.cos(p2mobile)));
            gmobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(bmobile,
                2) - Math.pow(amobile, 2)) / (2 * amobile * bmobile));
            g2mobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(bmobile,
                2) - Math.pow(a2mobile, 2)) / (2 * a2mobile *
                bmobile));
            tmobile = 3.14159265359 - gmobile - pmobile;
            t2mobile = 3.14159265359 - g2mobile - p2mobile;
            b2mobile = bmobile;
            c2mobile = cmobile;
            ar2mobile = armobile;
            prmobile = permobile(amobile, bmobile, cmobile);
            pr2mobile = permobile(a2mobile, bmobile, cmobile);
            detectNaNmobile();
            ssalertmobile();
            drawtrimobile();
            showval2mobile();
            return;
        } else {
            pmobile = Math.asin((2 * armobile) / (bmobile * cmobile));
            amobile = Math.sqrt(Math.pow(bmobile, 2) + Math.pow(cmobile, 2) -
                2 * bmobile * cmobile * (Math.cos(pmobile)));
            gmobile = Math.acos(-(Math.pow(cmobile, 2) - Math.pow(bmobile,
                2) - Math.pow(amobile, 2)) / (2 * amobile * bmobile));
            tmobile = 3.14159265359 - gmobile - pmobile;
            prmobile = permobile(amobile, bmobile, cmobile);
            detectNaNmobile();
            drawtrimobile();
            showvalmobile();
            return;
        }
    } else if ((pmobile !== 0) && (tmobile !== 0) && (gmobile !== 0)) {
        alert(
            "You entered 3 angles, this triangle will have infinite solutions. Please resumbit values."
        );
        resetTrianglemobile();
        return;
    } else if ((pmobile !== 0) && (tmobile !== 0) && (prmobile !== 0)) {
        gmobile = 180 - pmobile - tmobile;
		pmobile = dtrmobile(pmobile);
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        amobile = (prmobile * Math.sin(pmobile)) / (Math.sin(pmobile) + Math.sin(tmobile) + Math.sin(gmobile));
        bmobile = (amobile * Math.sin(tmobile)) / (Math.sin(pmobile));
        cmobile = (amobile * Math.sin(gmobile)) / (Math.sin(pmobile));
        smobile = sval(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((tmobile !== 0) && (gmobile !== 0) && (prmobile !== 0)) {
        pmobile = 180 - tmobile - gmobile;
		pmobile = dtrmobile(pmobile);
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        amobile = (prmobile * Math.sin(pmobile)) / (Math.sin(pmobile) + Math.sin(tmobile) + Math.sin(gmobile));
        bmobile = (amobile * Math.sin(tmobile)) / (Math.sin(pmobile));
        cmobile = (amobile * Math.sin(gmobile)) / (Math.sin(pmobile));
        smobile = sval(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((pmobile !== 0) && (gmobile !== 0) && (prmobile !== 0)) {
        tmobile = 180 - pmobile - gmobile;
		pmobile = dtrmobile(pmobile);
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        amobile = (prmobile * Math.sin(pmobile)) / (Math.sin(pmobile) + Math.sin(tmobile) + Math.sin(gmobile));
        bmobile = (amobile * Math.sin(tmobile)) / (Math.sin(pmobile));
        cmobile = (amobile * Math.sin(gmobile)) / (Math.sin(pmobile));
        smobile = sval(amobile, bmobile, cmobile);
        armobile = areamobile(smobile, amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((pmobile !== 0) && (tmobile !== 0) && (armobile !== 0)) {
        gmobile = 180 - pmobile - tmobile;
        pmobile = dtrmobile(pmobile);
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        amobile = Math.sqrt((2 * armobile * Math.sin(pmobile)) / (Math.sin(tmobile) * (Math.sin(gmobile))));
        bmobile = (amobile * Math.sin(tmobile)) / (Math.sin(pmobile));
        cmobile = (amobile * Math.sin(gmobile)) / (Math.sin(pmobile));
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((pmobile !== 0) && (gmobile !== 0) && (armobile !== 0)) {
        tmobile = 180 - pmobile - gmobile;
        pmobile = dtrmobile(pmobile);
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        amobile = Math.sqrt((2 * armobile * Math.sin(pmobile)) / (Math.sin(tmobile) * (Math.sin(gmobile))));
        bmobile = (amobile * Math.sin(tmobile)) / (Math.sin(pmobile));
        cmobile = (amobile * Math.sin(gmobile)) / (Math.sin(pmobile));
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((tmobile !== 0) && (gmobile !== 0) && (armobile !== 0)) {
        pmobile = 180 - tmobile - gmobile;
        pmobile = dtrmobile(pmobile);
        tmobile = dtrmobile(tmobile);
        gmobile = dtrmobile(gmobile);
        amobile = Math.sqrt((2 * armobile * Math.sin(pmobile)) / (Math.sin(tmobile) * (Math.sin(gmobile))));
        bmobile = (amobile * Math.sin(tmobile)) / (Math.sin(pmobile));
        cmobile = (amobile * Math.sin(gmobile)) / (Math.sin(pmobile));
        prmobile = permobile(amobile, bmobile, cmobile);
        detectNaNmobile();
        drawtrimobile();
        showvalmobile();
        return;
    } else if ((amobile !== 0) && (tmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((amobile !== 0) && (gmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((bmobile !== 0) && (pmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((bmobile !== 0) && (gmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((cmobile !== 0) && (pmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((cmobile !== 0) && (tmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((amobile !== 0) && (pmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((bmobile !== 0) && (tmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((cmobile !== 0) && (gmobile !== 0) && (armobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((amobile !== 0) && (pmobile !== 0) && (prmobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((bmobile !== 0) && (tmobile !== 0) && (prmobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else if ((cmobile !== 0) && (gmobile !== 0) && (prmobile !== 0)) {
        alert(
            "This triangle configuration has not been coded yet, we will code it as soon as possible. For now, try a different triangle."
        );
        resetTrianglemobile();
        return;
    } else {
        alert("Error: Plese provide more valid information");
        return;
    }
}