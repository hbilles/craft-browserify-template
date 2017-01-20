export default ((window, document) => {
    const iframes = document.querySelectorAll('.video iframe');

    Array.prototype.map.call(iframes, (iframe) => {
        const ratio = ((iframe.offsetHeight / iframe.offsetWidth) * 100).toPrecision(4);
        const parent = iframe.parentNode;
        const container = document.createElement('div');

        container.classList.add('video__container');
        container.style = `padding-top: ${ratio}%`;
        parent.insertBefore(container, iframe);
        container.appendChild(iframe);
    });
})(window, window.document);
