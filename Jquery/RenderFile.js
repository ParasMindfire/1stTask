export const RenderFileModule = (() => {
    const defaultImage = "/dummy-profile-pic-male1-300x300.jpg"; 

    const renderFile = () => {
        const $render = $(".uploadz");
        const fileInput = $("#file")[0];
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                $render.attr("src", reader.result); 
                openToast("Image Uploaded Successfully", "safe");
            };
            reader.readAsDataURL(file);

            $("#uploadFontAwesome").addClass("Inactive");
        } else {
            $render.attr("src", defaultImage);
            $("#uploadFontAwesome").removeClass("Inactive"); 
        }
    };
    $("#file").off("change").on("change", renderFile);

    window.renderFile = renderFile;
    return { renderFile };
})();