$(document).ready(function(){ 
    $('.accordion__content').hide();
    $('.accordion__content--active').show();
    
    $('.accordion__trigger').click(function () {
        const $this = $(this);
        const $nextPanel = $this.next('.accordion__content');
    
        if ($this.hasClass('accordion__trigger--active')) {
            $this.removeClass('accordion__trigger--active');
            $nextPanel.slideUp().removeClass('accordion__content--active');
            $this.parent().removeClass('accordion__item--active');
        } else {
            $this.addClass('accordion__trigger--active');
            $nextPanel.slideDown().addClass('accordion__content--active');
            $this.parent().addClass('accordion__item--active');
        }
    
        return false;
    });
    
    
 });

 document.addEventListener('DOMContentLoaded', function () {
    const inventoryEl = document.querySelector('#variant-inventory');
    const atcButtonSpan = document.querySelector('#ProductSubmitButton-template--24862856708381__main span');
  
    if (!inventoryEl || !atcButtonSpan) return;
  
    const updateInventoryStatus = () => {
      const buttonText = atcButtonSpan.textContent.trim().toLowerCase();
      const isSoldOut = buttonText.includes('sold out');
  
      if (isSoldOut) {
        inventoryEl.textContent = inventoryEl.dataset.outOfStockText || 'Out of Stock';
        inventoryEl.classList.remove('inventory--stock');
        inventoryEl.classList.add('inventory--out');
      } else {
        inventoryEl.textContent = inventoryEl.dataset.inStockText || 'In Stock';
        inventoryEl.classList.add('inventory--stock');
        inventoryEl.classList.remove('inventory--out');
      }
    };
  
    // Use polling or observe variant change
    const variantSelector = document.querySelector('variant-selects');
    if (variantSelector) {
      variantSelector.addEventListener('variant:change', function () {
        setTimeout(updateInventoryStatus, 550); // Wait for UI to settle
      });
    }
  
    // Initial load
    updateInventoryStatus();
  });
  
  
  
  
 