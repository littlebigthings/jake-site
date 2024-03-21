class PRODUCTSLIDER {
    constructor() {
        this.sliderImages = [...document.querySelectorAll("[item-img='side-images']")];
        this.lightboxImg = document.querySelector("[item-img='lightbox-img']");
        this.init();
    }

    init(){
        this.addExtraImageOnSlider();
    }

    addExtraImageOnSlider(){
        if(this.sliderImages.length<=0 && this.lightboxImg == null)return;
        const extraImageItem = this.sliderImages[0].cloneNode(true);
        const lightBoxLinkToRemove = extraImageItem.querySelector("a");
        const imageNode = extraImageItem.querySelector("img");
        if(imageNode == null && lightBoxLinkToRemove == null)return;
        imageNode.setAttribute("src", this.lightboxImg.getAttribute("src")); 
        imageNode.setAttribute("srcset", this.lightboxImg.getAttribute("srcset")); 
        extraImageItem.removeChild(lightBoxLinkToRemove);
        this.sliderImages[0].insertAdjacentElement("beforebegin",extraImageItem);
        this.sliderImages.push(extraImageItem);
        this.updateImage();
        extraImageItem.click();
    }

    updateImage() {
        if (this.sliderImages.length > 0) {
            this.sliderImages.forEach(item => {
                item.addEventListener('click', () => {
                    let ele = item.querySelector('img');
                    if (ele != null) {
                        let src = ele.getAttribute('src');
                        if (src != null || src.length > 0) {
                            this.lightboxImg.setAttribute('src', src);
                            this.lightboxImg.setAttribute('srcset', src);
                            this.activateThumbnail(src);
                        }
                    }
                })
            })
        }
    }

    activateThumbnail(imgSrc){
        this.sliderImages.forEach(img => {
            let currentSrc = img.querySelector("img")?.getAttribute("src");
            if(currentSrc == imgSrc){
                img.classList.add("active_thumb")
            }else{
                img.classList.remove("active_thumb")
            }
        })
    }
}
new PRODUCTSLIDER;