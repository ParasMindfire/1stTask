export const RenderFileModule=(()=>{
    const renderFile = () => {
        const $render = $(".uploadz");
        const file = $("input[type=file]")[0].files[0];
    
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                $render.attr("src", reader.result);
                openToast("Image Uploaded Successfully", "safe");
            };
            reader.readAsDataURL(file);

            $("#uploadFontAwesome").addClass("Inactive");
        }
    };

    window.renderFile=renderFile;

    return {renderFile};
})();

