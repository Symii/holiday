setTimeout(deleteContactForm, 50);
setTimeout(deleteContactForm, 200);
setTimeout(deleteContactForm, 1000);
setTimeout(deleteContactForm, 3000);

function deleteContactForm() {
    try {
        let form_div = document.querySelector('.content-form-hld');
        form_div.remove();
      } catch (e) {
        console.log(e); // Logs the error
      }
}