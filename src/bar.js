export const bar = (val) => {

    let bar = document.createElement('progress');
    bar.setAttribute('value', `${val}`);
    bar.setAttribute('max', '100');
    bar.append(`${val}%`);

    return bar;
}