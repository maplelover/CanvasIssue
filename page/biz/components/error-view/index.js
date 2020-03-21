export default {
    handleErrorButtonTap(e) {
        const { dataset } = e.currentTarget;
        if (dataset.href) {
            dd.redirectTo({url: dataset.href});
        } else {
            console.warn('no href specified');
        }
    }
}