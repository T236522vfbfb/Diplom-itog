new AirDatepicker('#search-date-from');
new AirDatepicker('#search-date-to');

document.addEventListener('DOMContentLoaded', function() {

    const switchArea = document.querySelector('.filter__switch');

    switchArea.querySelectorAll('.switch__component').forEach(switchComponent => {
        const switchButton = switchComponent.querySelector('.switch-button');
        const checkbox = switchComponent.querySelector('.switch-input');
        const checkedSpan = switchComponent.querySelector('.ant-switch-inner-checked');
        const uncheckedSpan = switchComponent.querySelector('.ant-switch-inner-unchecked');

        switchButton.addEventListener('click', function() {
            // Toggle the checkbox state
            checkbox.checked = !checkbox.checked;

            // Update visibility based on checkbox state
            if (checkbox.checked) {
                checkedSpan.style.display = 'block';
                uncheckedSpan.style.display = 'none';
            } else {
                checkedSpan.style.display = 'none';
                uncheckedSpan.style.display = 'block';
            }
            
            console.log("Switch toggled:", checkbox.checked);
        });
    });

});
