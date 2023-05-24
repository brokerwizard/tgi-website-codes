let currentQRCodeName = "gs-offenburg.de"

async function downloadQRCode(qrCode) {
    const image = await fetch(qrCode);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = "[" + currentQRCodeName + "]" + ".png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

function htmlEncode(value) {
    return $('<div/>').text(value)
        .html();
}

$(function () {

    // QR-Code generation
    $('#qr-generate').click(() => {
        let targetURL = $('#content').val();
        if (targetURL.length == 0) targetURL = "https://www.gs-offenburg.de/"
        let finalURL =
            'https://chart.googleapis.com/chart?cht=qr&chl=' +
            htmlEncode(targetURL) +
            '&chs=177x177&chld=L|0'
        $('.qr-code').attr('src', finalURL);
        currentQRCodeName = targetURL.replace("https://", "").replace("http://", "")
    });

    // Qr-Code Download
    $('#qr-download').click(() => {
        downloadQRCode($('.qr-code').attr('src'));
    })

    // Qr-Code Reset
    $('#qr-reset').click(() => {
        currentQRCodeName = "gs-offenburg.de"
        $('.qr-code').attr('src', "https://chart.googleapis.com/chart?cht=qr&chl=https://www.gs-offenburg.de/&chs=177x177&chld=L|0");
        $('#content').val("");
    })
});