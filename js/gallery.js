// Gallery functionality
class Gallery {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.modal = this.createModal();
        this.init();
    }
    
    init() {
        this.galleryItems.forEach(item => {
            item.addEventListener('click', () => this.openModal(item));
        });
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }
    
    createModal() {
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img class="modal-image" src="" alt="">
                <div class="modal-caption"></div>
                <button class="modal-nav modal-prev">‹</button>
                <button class="modal-nav modal-next">›</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Event listeners for modal
        modal.querySelector('.close-modal').addEventListener('click', () => this.closeModal());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });
        
        return modal;
    }
    
    openModal(item) {
        const imgSrc = item.querySelector('img').src;
        const caption = item.querySelector('.gallery-caption').textContent;
        
        this.modal.querySelector('.modal-image').src = imgSrc;
        this.modal.querySelector('.modal-caption').textContent = caption;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});
