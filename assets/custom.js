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
  
  // Update on variant change
$(document).on('change', 'variant-selects input[type="radio"]', function () {
  setTimeout(function () {
    const updatedPrice = $('.price-item--regular').first().text().trim();
    $('.product-sticky-bar__price').text(updatedPrice);
  }, 800); // Allow Shopify to fully update price (300ms is safe)
});

// Also run once on page load to sync price initially
$(document).ready(function () {
  const initialPrice = $('.price-item--regular').first().text().trim();
  $('.product-sticky-bar__price').text(initialPrice);
});

  
$(document).on('click', '.product-sticky-bar__button', function (e) {
  e.preventDefault(); // prevent default anchor or button behavior
  $('.product-form__submit').trigger('click');
});


$(document).scroll(function () {
  var w = $(window);
var offset = $(".custom-product-btn").offset();
  var btnheight = parseFloat(offset.top-w.scrollTop());
  console.log('btnheight-----', btnheight);
  if (btnheight >= 900){  
     if (window.matchMedia('(max-width: 991px)').matches)
   {
    $('.product_add_btn_fixed').fadeIn();
         $('.product_add_btn_fixed').addClass('active');
    }
  }
  else
  {
    $('.product_add_btn_fixed').fadeOut();
    $('.product_add_btn_fixed').removeClass('active');
  }
});


  
 