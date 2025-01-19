
    import {ToastModule} from "./Jquery/Toast.js";
    import { RenderFileModule } from "./Jquery/RenderFile.js";
    import {AddressModule} from "./Jquery/Address.js"
    import { ValidationModule } from "./Jquery/Validation.js";
    import { TableModule } from "./Jquery/Table.js";
    import { StepperModule } from "./Jquery/Stepper.js";

    const App=(()=>{
        const init=()=>{
            StepperModule.stepper();
            RenderFileModule.renderFile();
        }

        return {init};
    })();


    $(document).ready(()=>{App.init()});
