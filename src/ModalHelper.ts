type TAnimation = 'fade' | 'top' | 'bottom' | 'left' | 'right' | 'zoom' | false
class ModalHelper {
    private mhBlock: HTMLElement | null;
    constructor(
        _mhBlock:           HTMLElement | null
    ) {
        this.mhBlock = _mhBlock
    }

    public show(typeAnimation: TAnimation = false, isBackground: boolean = true) {
        if(!typeAnimation) this.showWithoutAnimation()
        else if(typeAnimation === 'fade') this.showFade()
        else if(typeAnimation === 'top') this.showTop()
        else if(typeAnimation === 'bottom') this.showBottom()
        else if(typeAnimation === 'left') this.showLeft()
        else if(typeAnimation === 'right') this.showRight()
        else if(typeAnimation === 'zoom') this.showZoom()
        
        if(isBackground)
            this.mhBlock!.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        else
            this.mhBlock!.style.backgroundColor = "transparent";
    }
    public hide(typeAnimation: TAnimation = false) {
        if(!typeAnimation) this.hideWithoutAnimation()
        else if(typeAnimation === 'fade')  this.hideFade()
        else if(typeAnimation === 'top') this.hideTop()
        else if(typeAnimation === 'left') this.hideLeft()
        else if(typeAnimation === 'right') this.hideRight()
        else if(typeAnimation === 'bottom') this.hideBottom()
        else if(typeAnimation === 'zoom') this.hideZoom()

        this.mhBlock!.style.backgroundColor = "transparent";
    }

    private showWithoutAnimation() {
        this.mhBlock!.style.opacity = "1";
        this.mhBlock!.style.display = "block";
    }
    private showFade() {
        this.mhBlock!.style.display = "block";
        setTimeout(() => {
            this.mhBlock!.style.opacity = "1";
        })
    }
    private showTop() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.display = "block";
        content!.style.transform = "translate(-50%, calc(-50% - 50px))";
        setTimeout(() => {
            this.mhBlock!.style.opacity = "1";
            content!.style.transform = "translate(-50%, -50%)";
        })
    }
    private showBottom() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.display = "block";
        content!.style.transform = "translate(-50%, calc(-50% + 50px))";
        setTimeout(() => {
            this.mhBlock!.style.opacity = "1";
            content!.style.transform = "translate(-50%, -50%)";
        })
    }
    private showLeft() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.display = "block";
        content!.style.transform = "translate(calc(-50% - 50px), -50%)";
        setTimeout(() => {
            this.mhBlock!.style.opacity = "1";
            content!.style.transform = "translate(-50%, -50%)";
        })
    }
    private showRight() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.display = "block";
        content!.style.transform = "translate(calc(-50% + 50px), -50%)";
        setTimeout(() => {
            this.mhBlock!.style.opacity = "1";
            content!.style.transform = "translate(-50%, -50%)";
        })
    }
    private showZoom() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.display = "block";
        content!.style.transform = "translate(-50%, -50%) scale(0.7)";
        setTimeout(() => {
            this.mhBlock!.style.opacity = "1";
            content!.style.transform = "translate(-50%, -50%) scale(1)";
        })
    }

    
    private hideWithoutAnimation() {
        this.mhBlock!.style.opacity = "0";
        this.mhBlock!.style.display = "none";
    }
    private hideFade() {
        this.mhBlock!.style.opacity = "0";
        setTimeout(() => {
            this.mhBlock!.style.display = "none";
        }, 200)
    }
    private hideTop() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.opacity = "0";
        content!.style.transform = "translate(-50%, calc(-50% - 50px))";
        setTimeout(() => {
            this.mhBlock!.style.display = "none";
            content!.style.transform = "translate(-50%, -50%)";
        }, 200)
    }
    private hideBottom() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.opacity = "0";
        content!.style.transform = "translate(-50%, calc(-50% + 50px))";
        setTimeout(() => {
            this.mhBlock!.style.display = "none";
            content!.style.transform = "translate(-50%, -50%)";
        }, 200)
    }
    private hideLeft() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.opacity = "0";
        content!.style.transform = "translate(calc(-50% - 50px), -50%)";
        setTimeout(() => {
            this.mhBlock!.style.display = "none";
            content!.style.transform = "translate(-50%, -50%)";
        }, 200)
    }
    private hideRight() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.opacity = "0";
        content!.style.transform = "translate(calc(-50% + 50px), -50%)";
        setTimeout(() => {
            this.mhBlock!.style.display = "none";
            content!.style.transform = "translate(-50%, -50%)";
        }, 200)
    }
    private hideZoom() {
        const content: HTMLElement | null = this.mhBlock!.querySelector(".modal-helper-content-block")
        this.mhBlock!.style.opacity = "0";
        content!.style.transform = "translate(-50%, -50%) scale(0.7)";
        setTimeout(() => {
            this.mhBlock!.style.display = "none";
            content!.style.transform = "translate(-50%, -50%) scale(1)";
        }, 200)
    }

}
export default ModalHelper;