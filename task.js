const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

document.querySelectorAll('.has-tooltip').forEach(el => el.addEventListener('click', onClickHasTooltip));
window.addEventListener('scroll', replaceTooltip);
window.addEventListener('resize', replaceTooltip);

function onClickHasTooltip(e) {
    e.preventDefault();

    if (this === tooltip.parentElement)
        tooltip.classList.toggle('tooltip_active');
    else {
        tooltip.classList.add('tooltip_active');
        this.insertBefore(tooltip, null);
        tooltip.innerText = this.getAttribute('title');
        replaceTooltip(e);
    }
}

function replaceTooltip(e) {
    if (tooltip.classList.contains('tooltip_active')) {
        const {top} = tooltip.parentElement.getBoundingClientRect();
        tooltip.style.top = top + tooltip.parentElement.offsetHeight + 2 + 'px';
        tooltip.style.left = tooltip.parentElement.offsetLeft + 'px';
    }
}
