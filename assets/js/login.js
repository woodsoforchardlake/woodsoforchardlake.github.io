$(document).ready(function() {

    const button = $("#submit");
    const pw = $('#inputPassword')
    const origText = button.text();
    let failcount = 0;

    button.click(function(e){
        if (!$('.form-signin')[0].checkValidity()) {
            return;
        }
        button.text("Loading...");
        button.prop("disabled", true);
        const ans = sjcl.codec.hex.toBits('84816ff383c826e9c11e26fdbd8d66e4edd7cf1ec1a4b23f8d10d84aa56e0d8f') // resident
        const sha = new sjcl.hash.sha256();
        sha.update(pw.val());
        let delay = Math.floor(Math.random() * (1500 - 500 + 1) + 500)
        if (sjcl.bitArray.equal(ans, sha.finalize())) {
            setTimeout(window.location.replace("residents.html"), delay)
        } else {
            e.preventDefault()
            setTimeout(fail, delay)
        }
    });

    function fail() {
        $('#toast').append(`
            <div id="toast${failcount}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
                <div class="toast-header">
                    <strong class="mr-auto">Login failed</strong>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    Please try again.
                </div>
            </div>
        `);
        $(`#toast${failcount++}`).toast('show')
        pw.val('')
        button.text(origText);
        button.prop("disabled", false);
    }
});