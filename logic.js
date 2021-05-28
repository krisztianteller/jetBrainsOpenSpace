function unlock() {
    const psw = document.querySelector('input[type="password"]').value
    const correctPsw = "TrustNo1";
    if (psw !== correctPsw) {
        return;
    }

    document.querySelectorAll('input[type="checkbox"]').forEach(x => x.disabled = false);
    document.querySelectorAll('input[type="range"]').forEach(x => x.disabled = false);
    document.querySelectorAll('input[type="button"]').forEach(x => x.disabled = false);
}