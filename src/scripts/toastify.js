export class Toast {
    static create(text, color) {
        Toastify({
            text: text,
            duration: 2000,
            close: true,
            gravity: "center",
            position: "center",
            stopOnFocus: true,
            style: {
              background: color,
            },
          }).showToast();
    }
}