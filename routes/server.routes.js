const { Router } = require("express"),
    attach = (app) => {
        const router = new Router();

        router
            .get("/", (req, res) => {
                res.render("home");
            })
            .get("/registration", (req, res) => {
                res.render("registration");
            })
            .get("/products", (req, res) => {
                res.render("products", {
                    array: tvArray,
                });
            })
            .get("/about", (req, res) => {
                res.render("about_us");
            })
            .get("/sign_in", (req, res) => {
                res.render("sign_in");
            });

        app.use("/", router);
    };

module.exports = attach;

const tvArray = [{
    image: "//media.4rgos.it/i/Argos/3550447_R_Z001?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Alba 19' HD Ready LED TV/DVD Combi",
    price: "£74.99",
    info1: "Screen size: 19 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 HDMI socket, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/4028916_R_Z001?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Alba 19 Inch HD Ready TV",
    price: "£89.99",
    info1: "Screen size: 19 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 SCART socket, 1 USB port and 1 HDMI socket."
}, {
    image: "//media.4rgos.it/i/Argos/5415645_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Alba 19 Inch HD Ready LED TV/DVD Combi",
    price: "£119.99",
    info1: "Screen size: 19 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 HDMI socket, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/5557699_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "LG 22MT48DF 22 Inch Full HD LED TV",
    price: "£119.00",
    info1: "Viewing angle 178/178 degrees.",
    info2: "Footprint of TV 51cm.",
    info3: "1 SCART socket, 1 USB port and 1 HDMI socket."
}, {
    image: "//media.4rgos.it/i/Argos/5761856_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Philips 22PFT4031/05 22 Inch Full HD FVHD LED TV",
    price: "£119.00",
    info1: "Screen size: 22 inches.",
    info2: "Ethernet connection.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5491425_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Alba 24 Inch HD Ready LED TV",
    price: "£129.99",
    info1: "Screen size: 23 inches.",
    info2: "Headphone socket.",
    info3: "1 SCART socket, 1 USB port and 1 HDMI socket."
}, {
    image: "//media.4rgos.it/i/Argos/6259374_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Hitachi 24 Inch HD Ready Freeview Play Smart LED TV",
    price: "£129.99",
    info1: "Screen size: 24 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 SCART socket, 2 USB ports and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5768464_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "LG 24MT48DF 24 Inch HD Ready LED TV",
    price: "£139.00",
    info1: "Screen size: 23 inches.",
    info2: "Footprint of TV 56cm.",
    info3: "1 USB port and 1 HDMI socket."
}, {
    image: "//media.4rgos.it/i/Argos/5542006_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Philips 24PHT4031/05 24 Inch HD Ready FVHD TV",
    price: "£139.00",
    info1: "Screen size: 24 inches.",
    info2: "Ethernet connection.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5545175_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Alba 24 Inch HD Ready LED TV/DVD Combi",
    price: "£149.99",
    info1: "Screen size: 24 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 HDMI socket, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/5553521_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Alba 24 Inch HD Ready LED TV/DVD Combi - White",
    price: "£129.99",
    info1: "Screen size: 23 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 HDMI socket, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/5537808_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Alba 24 Inch HD Ready LED TV/DVD Combi - Pink",
    price: "£129.99",
    info1: "Screen size: 24 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 HDMI socket, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/6319544_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 24 Inch HD Ready Smart TV With DVD Player - White",
    price: "£159.99",
    info1: "Screen size: 24 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "2 HDMI sockets, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/6692979_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Hitachi 24 Inch HD Ready Freeview Play Smart TV / DVD Combi",
    price: "£149.99",
    info1: "Screen size: 24 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "2 HDMI sockets, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/6693954_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 24 Inch HD Ready Smart TV With DVD Player - Black",
    price: "£159.99",
    info1: "Screen size: 24 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "2 HDMI sockets, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/4125053_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Samsung UE24H4003AWXXU 24 Inch HD Ready TV",
    price: "£159.00",
    info1: "Screen size: 24 inches.",
    info2: undefined,
    info3: "1 SCART socket, 1 USB port and 1 HDMI socket."
}, {
    image: "//media.4rgos.it/i/Argos/5554788_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Toshiba 24D1633DB 24 Inch HD Ready LED TV/DVD Combi",
    price: "£139.00",
    info1: "Screen size: 24 inches.",
    info2: "DLNA compatibility.",
    info3: "1 SCART socket, 1 USB port and 1 HDMI socket."
}, {
    image: "//media.4rgos.it/i/Argos/5276633_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Philips 32PHT4001 32 Inch HD Ready Freeview HD TV",
    price: "£179.00",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 USB port and 3 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/7196405_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "LG 28MT49DF 28 Inch Full HD TV",
    price: "£179.00",
    info1: "Screen size: 28 inches.",
    info2: "Manufacturer's 2 year guarantee.",
    info3: "1 USB port and 1 HDMI socket."
}, {
    image: "//media.4rgos.it/i/Argos/1384828_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 32 Inch HD Ready LED TV",
    price: "£179.99",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5447589_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 32 Inch DVD Combi LED TV",
    price: "£219.99",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5805994_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Philips 24PFS5231 24 Inch Full HD Bluetooth Speaker TV",
    price: "£189.00",
    info1: "Screen size: 24 inches.",
    info2: "Manufacturer's 2 year guarantee.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/6194271_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Hitachi 32 Inch HD Ready Freeview Play Smart LED TV",
    price: "£189.99",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 SCART socket, 2 USB ports and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5742064_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Hisense H32M2600 32 Inch HD Ready FVHD Smart LED TV",
    price: "£219.00",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5287392_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "LG 32LH510U 32 Inch LED Freeview HD TV",
    price: "£219.00",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 USB port and 1 HDMI socket."
}, {
    image: "//media.4rgos.it/i/Argos/5440696_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Toshiba 32D1633DB 32 Inch HD Ready TV/DVD Combi",
    price: "£189.00",
    info1: "Screen size: 32 inches.",
    info2: "DLNA compatibility.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5654695_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 32 Inch DVD Combi LED TV",
    price: "£219.99",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5859287_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 32 Inch HD Ready Smart TV",
    price: "£189.99",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5388356_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Samsung UE32K4100 32 Inch HD Ready LED TV",
    price: "£189.00",
    info1: "Screen size: 32 inches.",
    info2: "Weight of TV with stand: 5kg.",
    info3: "1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/7031931_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 40 Inch Full HD Freeview HD TV",
    price: "£229.99",
    info1: "Screen size: 40 inches.",
    info2: "Resolution 1920 x 1080 pixels.",
    info3: "1 SCART socket, 2 USB ports and 3 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5219683_R_Z001?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Sony 32 Inch KDL32RD433BU HD Ready LED TV",
    price: "£219.00",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1920 x 1080 pixels.",
    info3: "1 SCART socket, 2 USB ports and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5323548_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "LG 32LH570U 32 Inch Smart LED TV",
    price: "£249.00",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/5715723_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 40 Inch Full HD LED TV",
    price: "£249.99",
    info1: "Screen size: 40 inches.",
    info2: "Resolution 1920 x 1080 pixels.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}, {
    image: "//media.4rgos.it/i/Argos/7035621_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Bush 40 Inch Full HD FVHD TV/DVD Combi",
    price: "£249.99",
    info1: "Screen size: 40 inches.",
    info2: "Resolution 1920 x 1080 pixels.",
    info3: "3 HDMI sockets, 1 SCART socket and 2 USB ports."
}, {
    image: "//media.4rgos.it/i/Argos/6692704_R_Z001A?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Hitachi 32 Inch Freeview Play LED Smart TV / DVD Combi",
    price: "£249.99",
    info1: "Screen size: 32 inches.",
    info2: "Resolution 1366 x 768 pixels.",
    info3: "2 HDMI sockets, 1 SCART socket and 1 USB port."
}, {
    image: "//media.4rgos.it/i/Argos/5238729_R_Z001?$Web$&w=570&h=513&$WebPDPBadge570$&topright=empty&bottomleft=empty",
    brandAndModel: "Panasonic 32 Inch DS500B HD Ready Smart LED TV",
    price: "£289.00",
    info1: "Screen size: 32 inches.",
    info2: "Headphone socket.",
    info3: "1 SCART socket, 1 USB port and 2 HDMI sockets."
}];