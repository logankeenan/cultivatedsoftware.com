(function () {


    let bannerContainer = document.createElement('div');
    // bannerContainer.className = "old-site-banner";

    bannerContainer.style.textAlign = "center";
    bannerContainer.style.margin = "20px auto 0";
    bannerContainer.style.background = "#808080";
    bannerContainer.style.color = "#fff";
    bannerContainer.style.padding = "15px 10px";
    bannerContainer.style.borderRadius = "5px";
    bannerContainer.style.letterSpacing = "1px";


    let logankeenansoftware = document.createElement("span");
    logankeenansoftware.style.fontWeight = "bold";
    logankeenansoftware.innerText = "Logan Keenan Software";

    let isNow = document.createElement("span");
    isNow.innerText = " is now ";

    let cultivatedSoftware = document.createElement("span");
    cultivatedSoftware.style.fontWeight = "bold";
    cultivatedSoftware.innerText = "Cultivated Software";

    bannerContainer.appendChild(logankeenansoftware);
    bannerContainer.appendChild(isNow);
    bannerContainer.appendChild(cultivatedSoftware);

    let nav = document.getElementsByTagName('header')[0];

    document.body.insertBefore(bannerContainer, nav)


}());